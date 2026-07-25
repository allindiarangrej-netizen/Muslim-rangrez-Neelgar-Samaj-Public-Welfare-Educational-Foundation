-- Consolidated and Fully Idempotent SQL migration for Rangrez Community Bharat Portal

-- 0. Ensure Storage Buckets Exist
INSERT INTO storage.buckets (id, name, public) 
VALUES ('member-photos', 'member-photos', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public) 
VALUES ('admin-media', 'admin-media', true)
ON CONFLICT (id) DO NOTHING;

-- Storage Policies (Idempotent)
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
      AND tablename = 'objects' 
      AND policyname = 'Public Read on member-photos'
  ) THEN
    CREATE POLICY "Public Read on member-photos" ON storage.objects 
      FOR SELECT USING (bucket_id = 'member-photos');
  END IF;
END $$;

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
      AND tablename = 'objects' 
      AND policyname = 'Authenticated Upload on member-photos'
  ) THEN
    CREATE POLICY "Authenticated Upload on member-photos" ON storage.objects 
      FOR INSERT WITH CHECK (auth.role() = 'authenticated');
  END IF;
END $$;

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
      AND tablename = 'objects' 
      AND policyname = 'Public Read on admin-media'
  ) THEN
    CREATE POLICY "Public Read on admin-media" ON storage.objects 
      FOR SELECT USING (bucket_id = 'admin-media');
  END IF;
END $$;

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
      AND tablename = 'objects' 
      AND policyname = 'Authenticated Upload on admin-media'
  ) THEN
    CREATE POLICY "Authenticated Upload on admin-media" ON storage.objects 
      FOR INSERT WITH CHECK (auth.role() = 'authenticated');
  END IF;
END $$;


-- 1. Family Members Table
CREATE TABLE IF NOT EXISTS family_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name_en TEXT NOT NULL,
  name_hi TEXT,
  relationship TEXT NOT NULL,
  gender TEXT NOT NULL,
  age INTEGER NOT NULL,
  education_en TEXT,
  education_hi TEXT,
  occupation_en TEXT,
  occupation_hi TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

ALTER TABLE family_members ENABLE ROW LEVEL SECURITY;
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
      AND tablename = 'family_members' 
      AND policyname = 'Users can manage their own family members'
  ) THEN
    CREATE POLICY "Users can manage their own family members" ON family_members
      FOR ALL USING (auth.uid() = user_id);
  END IF;
END $$;


-- 2. Blood Donors Table
CREATE TABLE IF NOT EXISTS blood_donors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name_en TEXT NOT NULL,
  name_hi TEXT,
  blood_group TEXT NOT NULL,
  district_en TEXT,
  district_hi TEXT,
  phone TEXT NOT NULL,
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

ALTER TABLE blood_donors ENABLE ROW LEVEL SECURITY;
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'blood_donors' AND policyname = 'Public can view blood donors'
  ) THEN
    CREATE POLICY "Public can view blood donors" ON blood_donors FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'blood_donors' AND policyname = 'Donors can manage their own profile'
  ) THEN
    CREATE POLICY "Donors can manage their own profile" ON blood_donors FOR ALL USING (auth.uid()::text = id::text);
  END IF;
END $$;


-- 3. Matrimonial Profiles Table
CREATE TABLE IF NOT EXISTS matrimonial_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  gender TEXT NOT NULL,
  name_en TEXT NOT NULL,
  name_hi TEXT,
  age INTEGER NOT NULL,
  height_cm INTEGER,
  education_en TEXT,
  education_hi TEXT,
  occupation_en TEXT,
  occupation_hi TEXT,
  district_en TEXT,
  district_hi TEXT,
  state_en TEXT,
  state_hi TEXT,
  photo_url TEXT,
  is_verified BOOLEAN DEFAULT false,
  privacy_mask BOOLEAN DEFAULT true,
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

ALTER TABLE matrimonial_profiles ENABLE ROW LEVEL SECURITY;
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'matrimonial_profiles' AND policyname = 'Public can view verified matrimonial profiles'
  ) THEN
    CREATE POLICY "Public can view verified matrimonial profiles" ON matrimonial_profiles FOR SELECT USING (is_verified = true);
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'matrimonial_profiles' AND policyname = 'Users can manage their own matrimonial profile'
  ) THEN
    CREATE POLICY "Users can manage their own matrimonial profile" ON matrimonial_profiles FOR ALL USING (auth.uid() = user_id);
  END IF;
END $$;


-- 4. Donation Systems Tables
CREATE TABLE IF NOT EXISTS donation_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title_en TEXT NOT NULL,
  title_hi TEXT,
  description_en TEXT,
  description_hi TEXT,
  target_amount DECIMAL,
  raised_amount DECIMAL DEFAULT 0,
  category TEXT,
  donors_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS donations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_name TEXT NOT NULL,
  donor_phone TEXT NOT NULL,
  donor_email TEXT,
  donor_pan TEXT,
  amount DECIMAL NOT NULL,
  fund_type TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS relief_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  applicant_name TEXT NOT NULL,
  applicant_phone TEXT NOT NULL,
  city TEXT NOT NULL,
  aid_type TEXT NOT NULL,
  amount_needed DECIMAL,
  details TEXT,
  status TEXT DEFAULT 'Pending',
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

ALTER TABLE donation_campaigns ENABLE ROW LEVEL SECURITY;
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'donation_campaigns' AND policyname = 'Public can view donation campaigns') THEN
    CREATE POLICY "Public can view donation campaigns" ON donation_campaigns FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'donation_campaigns' AND policyname = 'Admins can manage donation campaigns') THEN
    CREATE POLICY "Admins can manage donation campaigns" ON donation_campaigns FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
  END IF;
END $$;

ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'donations' AND policyname = 'Users can view their own donations') THEN
    CREATE POLICY "Users can view their own donations" ON donations FOR SELECT USING (auth.uid() = user_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'donations' AND policyname = 'Users can insert their own donations') THEN
    CREATE POLICY "Users can insert their own donations" ON donations FOR INSERT WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;

ALTER TABLE relief_requests ENABLE ROW LEVEL SECURITY;
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'relief_requests' AND policyname = 'Users can view their own relief requests') THEN
    CREATE POLICY "Users can view their own relief requests" ON relief_requests FOR SELECT USING (auth.uid() = user_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'relief_requests' AND policyname = 'Users can insert their own relief requests') THEN
    CREATE POLICY "Users can insert their own relief requests" ON relief_requests FOR INSERT WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;


-- 5. Scholarships Table
CREATE TABLE IF NOT EXISTS scholarships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name_en TEXT NOT NULL,
  name_hi TEXT,
  name_ur TEXT,
  category TEXT,
  provider TEXT,
  amount TEXT,
  eligibility_en TEXT,
  deadline DATE,
  status TEXT,
  website TEXT,
  docs JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

ALTER TABLE scholarships ENABLE ROW LEVEL SECURITY;
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'scholarships' AND policyname = 'Public can view scholarships') THEN
    CREATE POLICY "Public can view scholarships" ON scholarships FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'scholarships' AND policyname = 'Admins can manage scholarships') THEN
    CREATE POLICY "Admins can manage scholarships" ON scholarships FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
  END IF;
END $$;


-- 6. Committee Table
CREATE TABLE IF NOT EXISTS committees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name_en TEXT NOT NULL,
  district TEXT,
  state TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

ALTER TABLE committees ENABLE ROW LEVEL SECURITY;
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'committees' AND policyname = 'Public can view committees') THEN
    CREATE POLICY "Public can view committees" ON committees FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'committees' AND policyname = 'Admins can manage committees') THEN
    CREATE POLICY "Admins can manage committees" ON committees FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
  END IF;
END $$;


-- 7. Events Table
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  event_date TIMESTAMP WITH TIME ZONE,
  location TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'events' AND policyname = 'Public can view events') THEN
    CREATE POLICY "Public can view events" ON events FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'events' AND policyname = 'Admins can manage events') THEN
    CREATE POLICY "Admins can manage events" ON events FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
  END IF;
END $$;


-- 8. Volunteers Table
CREATE TABLE IF NOT EXISTS volunteers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  skills TEXT[],
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

ALTER TABLE volunteers ENABLE ROW LEVEL SECURITY;
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'volunteers' AND policyname = 'Public can view volunteers') THEN
    CREATE POLICY "Public can view volunteers" ON volunteers FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'volunteers' AND policyname = 'Admins can manage volunteers') THEN
    CREATE POLICY "Admins can manage volunteers" ON volunteers FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'volunteers' AND policyname = 'Users can manage their own volunteer profile') THEN
    CREATE POLICY "Users can manage their own volunteer profile" ON volunteers FOR ALL USING (auth.uid() = user_id);
  END IF;
END $$;


-- 9. Surveys Table
CREATE TABLE IF NOT EXISTS surveys (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

ALTER TABLE surveys ENABLE ROW LEVEL SECURITY;
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'surveys' AND policyname = 'Public can view surveys') THEN
    CREATE POLICY "Public can view surveys" ON surveys FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'surveys' AND policyname = 'Admins can manage surveys') THEN
    CREATE POLICY "Admins can manage surveys" ON surveys FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
  END IF;
END $$;


-- 10. Jobs Table
CREATE TABLE IF NOT EXISTS jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  company TEXT,
  description TEXT,
  location TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'jobs' AND policyname = 'Public can view jobs') THEN
    CREATE POLICY "Public can view jobs" ON jobs FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'jobs' AND policyname = 'Admins can manage jobs') THEN
    CREATE POLICY "Admins can manage jobs" ON jobs FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
  END IF;
END $$;


-- 12. Member Profiles Table
CREATE TABLE IF NOT EXISTS member_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  full_name TEXT NOT NULL,
  phone TEXT,
  district TEXT,
  state TEXT DEFAULT 'Madhya Pradesh',
  tehsil TEXT,
  committee TEXT,
  role TEXT DEFAULT 'Member',
  permissions TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'Active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

ALTER TABLE member_profiles ENABLE ROW LEVEL SECURITY;
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'member_profiles' AND policyname = 'Users can view member profiles') THEN
    CREATE POLICY "Users can view member profiles" ON member_profiles FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'member_profiles' AND policyname = 'Users can manage their own profile') THEN
    CREATE POLICY "Users can manage their own profile" ON member_profiles FOR ALL USING (auth.uid() = user_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'member_profiles' AND policyname = 'Super Admins can manage all profiles') THEN
    CREATE POLICY "Super Admins can manage all profiles" ON member_profiles FOR ALL USING (
      EXISTS (
        SELECT 1 FROM member_profiles 
        WHERE user_id = auth.uid() AND role = 'Super Administrator'
      )
    );
  END IF;
END $$;


-- 16. Grievances Table
CREATE TABLE IF NOT EXISTS grievances (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'Open',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

ALTER TABLE grievances ENABLE ROW LEVEL SECURITY;
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'grievances' AND policyname = 'Users can view their own grievances') THEN
    CREATE POLICY "Users can view their own grievances" ON grievances FOR SELECT USING (auth.uid() = user_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'grievances' AND policyname = 'Users can insert their own grievances') THEN
    CREATE POLICY "Users can insert their own grievances" ON grievances FOR INSERT WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;


-- 17. Feedback Table
CREATE TABLE IF NOT EXISTS feedbacks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  department TEXT,
  rating INTEGER,
  comments TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

ALTER TABLE feedbacks ENABLE ROW LEVEL SECURITY;
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'feedbacks' AND policyname = 'Users can view their own feedbacks') THEN
    CREATE POLICY "Users can view their own feedbacks" ON feedbacks FOR SELECT USING (auth.uid() = user_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'feedbacks' AND policyname = 'Users can insert their own feedbacks') THEN
    CREATE POLICY "Users can insert their own feedbacks" ON feedbacks FOR INSERT WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;


-- 14. Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'contact_messages' AND policyname = 'Public can insert contact messages') THEN
    CREATE POLICY "Public can insert contact messages" ON contact_messages FOR INSERT WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'contact_messages' AND policyname = 'Admins can view contact messages') THEN
    CREATE POLICY "Admins can view contact messages" ON contact_messages FOR SELECT USING (auth.jwt() ->> 'role' = 'admin');
  END IF;
END $$;


-- 15. Media Gallery Table
CREATE TABLE IF NOT EXISTS media_gallery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

ALTER TABLE media_gallery ENABLE ROW LEVEL SECURITY;
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'media_gallery' AND policyname = 'Public can view media gallery') THEN
    CREATE POLICY "Public can view media gallery" ON media_gallery FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'media_gallery' AND policyname = 'Admins can manage media gallery') THEN
    CREATE POLICY "Admins can manage media gallery" ON media_gallery FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
  END IF;
END $$;


-- 15A. Media Assets Table (Admin Media Management)
CREATE TABLE IF NOT EXISTS media_assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  filename TEXT NOT NULL,
  bucket TEXT DEFAULT 'admin-media',
  folder TEXT DEFAULT 'images',
  url TEXT NOT NULL,
  mime_type TEXT,
  size BIGINT DEFAULT 0,
  uploaded_by TEXT DEFAULT 'Administrator',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  status TEXT DEFAULT 'Active',
  alt_text TEXT,
  caption TEXT,
  visibility TEXT DEFAULT 'Public',
  dimensions TEXT,
  duration TEXT
);

ALTER TABLE media_assets ENABLE ROW LEVEL SECURITY;
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'media_assets' AND policyname = 'Public can view media_assets') THEN
    CREATE POLICY "Public can view media_assets" ON media_assets FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'media_assets' AND policyname = 'Admins can manage media_assets') THEN
    CREATE POLICY "Admins can manage media_assets" ON media_assets FOR ALL USING (true);
  END IF;
END $$;
