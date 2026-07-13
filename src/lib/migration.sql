-- Consolidated SQL migration for Rangrez Community Bharat Portal

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

-- RLS for family_members
ALTER TABLE family_members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage their own family members" ON family_members
  FOR ALL USING (auth.uid() = user_id);

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

-- RLS for blood_donors
ALTER TABLE blood_donors ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view blood donors" ON blood_donors FOR SELECT USING (true);
CREATE POLICY "Donors can manage their own profile" ON blood_donors FOR ALL USING (auth.uid()::text = id);

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

-- RLS for matrimonial_profiles
ALTER TABLE matrimonial_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view verified matrimonial profiles" ON matrimonial_profiles FOR SELECT USING (is_verified = true);
CREATE POLICY "Users can manage their own matrimonial profile" ON matrimonial_profiles FOR ALL USING (auth.uid() = user_id);

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

-- RLS for donation tables
ALTER TABLE donation_campaigns ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view donation campaigns" ON donation_campaigns FOR SELECT USING (true);
CREATE POLICY "Admins can manage donation campaigns" ON donation_campaigns FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own donations" ON donations FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own donations" ON donations FOR INSERT WITH CHECK (auth.uid() = user_id);

ALTER TABLE relief_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own relief requests" ON relief_requests FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own relief requests" ON relief_requests FOR INSERT WITH CHECK (auth.uid() = user_id);

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

-- RLS for scholarships
ALTER TABLE scholarships ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view scholarships" ON scholarships FOR SELECT USING (true);
CREATE POLICY "Admins can manage scholarships" ON scholarships FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- 6. Committee Table
CREATE TABLE IF NOT EXISTS committees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name_en TEXT NOT NULL,
  district TEXT,
  state TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- RLS for committees
ALTER TABLE committees ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view committees" ON committees FOR SELECT USING (true);
CREATE POLICY "Admins can manage committees" ON committees FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- 7. Events Table
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  event_date TIMESTAMP WITH TIME ZONE,
  location TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- RLS for events
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view events" ON events FOR SELECT USING (true);
CREATE POLICY "Admins can manage events" ON events FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

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

-- RLS for volunteers
ALTER TABLE volunteers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view volunteers" ON volunteers FOR SELECT USING (true);
CREATE POLICY "Admins can manage volunteers" ON volunteers FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Users can manage their own volunteer profile" ON volunteers FOR ALL USING (auth.uid() = user_id);

-- 9. Surveys Table
CREATE TABLE IF NOT EXISTS surveys (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- RLS for surveys
ALTER TABLE surveys ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view surveys" ON surveys FOR SELECT USING (true);
CREATE POLICY "Admins can manage surveys" ON surveys FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- 10. Jobs Table
CREATE TABLE IF NOT EXISTS jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  company TEXT,
  description TEXT,
  location TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- RLS for jobs
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view jobs" ON jobs FOR SELECT USING (true);
CREATE POLICY "Admins can manage jobs" ON jobs FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

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

-- In case table already exists, run these migration statements to add columns:
-- ALTER TABLE member_profiles ADD COLUMN IF NOT EXISTS state TEXT DEFAULT 'Madhya Pradesh';
-- ALTER TABLE member_profiles ADD COLUMN IF NOT EXISTS tehsil TEXT;
-- ALTER TABLE member_profiles ADD COLUMN IF NOT EXISTS committee TEXT;
-- ALTER TABLE member_profiles ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'Member';
-- ALTER TABLE member_profiles ADD COLUMN IF NOT EXISTS permissions TEXT[] DEFAULT '{}';
-- ALTER TABLE member_profiles ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'Active';

-- RLS for member_profiles
ALTER TABLE member_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view member profiles" ON member_profiles FOR SELECT USING (true);
CREATE POLICY "Users can manage their own profile" ON member_profiles FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Super Admins can manage all profiles" ON member_profiles FOR ALL USING (
  EXISTS (
    SELECT 1 FROM member_profiles 
    WHERE user_id = auth.uid() AND role = 'Super Administrator'
  )
);

-- 16. Grievances Table
CREATE TABLE IF NOT EXISTS grievances (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'Open',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- RLS for grievances
ALTER TABLE grievances ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own grievances" ON grievances FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own grievances" ON grievances FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 17. Feedback Table
CREATE TABLE IF NOT EXISTS feedbacks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  department TEXT,
  rating INTEGER,
  comments TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- RLS for feedbacks
ALTER TABLE feedbacks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own feedbacks" ON feedbacks FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own feedbacks" ON feedbacks FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 14. Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- RLS for contact_messages
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can insert contact messages" ON contact_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can view contact messages" ON contact_messages FOR SELECT USING (auth.jwt() ->> 'role' = 'admin');

-- 15. Media Gallery Table
CREATE TABLE IF NOT EXISTS media_gallery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- RLS for media_gallery
ALTER TABLE media_gallery ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view media gallery" ON media_gallery FOR SELECT USING (true);
CREATE POLICY "Admins can manage media gallery" ON media_gallery FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
[diff_block_end]
[diff_block_end]
