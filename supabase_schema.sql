-- ====================================================================
-- RANGREZ ENTERPRISE CENTRAL COMMUNITY PORTAL
-- Complete Production Database Schema for Supabase
-- ====================================================================

-- Enable UUID Extension if not enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ====================================================================
-- 1. PUBLIC MEMBER PROFILES (Syncs with auth.users)
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.member_profiles (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "user_id" uuid UNIQUE NOT NULL,
    "full_name" text NOT NULL,
    "phone" text,
    "district" text DEFAULT 'Morena',
    "state" text DEFAULT 'Madhya Pradesh',
    "tehsil" text DEFAULT '',
    "committee" text DEFAULT '',
    "role" text DEFAULT 'Member' CHECK ("role" IN ('Super Admin', 'National Admin', 'State Admin', 'District Admin', 'Tehsil Admin', 'Committee Admin', 'Member')),
    "permissions" text[] DEFAULT '{}'::text[],
    "status" text DEFAULT 'Active' CHECK ("status" IN ('Active', 'Suspended', 'Pending')),
    "email_verified" boolean DEFAULT false,
    "mobile_verified" boolean DEFAULT false,
    "verification_status" text DEFAULT 'Pending Approval',
    "member_status" text DEFAULT 'Pending',
    "created_at" timestamp with time zone DEFAULT now(),
    "updated_at" timestamp with time zone DEFAULT now(),
    CONSTRAINT member_profiles_pkey PRIMARY KEY (id),
    CONSTRAINT member_profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users (id) ON DELETE CASCADE
);

-- ====================================================================
-- 2. CENSUS MEMBERS REGISTER (MemberRecord)
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.members (
    "id" text PRIMARY KEY,
    "memberId" text UNIQUE,
    "nameEn" text NOT NULL,
    "nameHi" text NOT NULL,
    "nameUr" text,
    "gender" text CHECK ("gender" IN ('M', 'F')),
    "age" integer,
    "phone" text,
    "email" text,
    "district" text,
    "state" text,
    "tehsil" text,
    "education" text,
    "occupation" text,
    "bloodGroup" text,
    "isVerified" boolean DEFAULT false,
    "status" text DEFAULT 'Active',
    "photoUrl" text,
    "membershipType" text DEFAULT 'Annual',
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now(),
    "createdBy" text,
    "isDeleted" boolean DEFAULT false
);

-- ====================================================================
-- 3. CENSUS FAMILIES REGISTER (FamilyRecord)
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.families (
    "id" text PRIMARY KEY,
    "familyId" text UNIQUE,
    "headOfFamilyEn" text NOT NULL,
    "headOfFamilyHi" text NOT NULL,
    "district" text NOT NULL,
    "state" text NOT NULL,
    "address" text,
    "contactPhone" text,
    "totalMembersCount" integer DEFAULT 1,
    "annualIncomeBracket" text,
    "rationCardType" text,
    "isVerified" boolean DEFAULT false,
    "members" jsonb DEFAULT '[]'::jsonb,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now(),
    "createdBy" text,
    "isDeleted" boolean DEFAULT false
);

-- ====================================================================
-- 4. FAMILY MEMBERS LIST (Socio-Economic Family Tree Mapping)
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.family_members (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "user_id" uuid,
    "name_en" text NOT NULL,
    "name_hi" text NOT NULL,
    "relationship" text NOT NULL,
    "gender" text,
    "age" integer,
    "education_en" text,
    "education_hi" text,
    "occupation_en" text,
    "occupation_hi" text,
    "created_at" timestamp with time zone DEFAULT now(),
    CONSTRAINT family_members_pkey PRIMARY KEY (id)
);

-- ====================================================================
-- 5. EXECUTIVE COMMITTEES REGISTER (CommitteeRecord)
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.committees (
    "id" text PRIMARY KEY,
    "committeeNameEn" text NOT NULL,
    "committeeNameHi" text NOT NULL,
    "level" text NOT NULL,
    "state" text NOT NULL,
    "district" text,
    "establishedYear" integer,
    "presidentName" text,
    "presidentPhone" text,
    "secretaryName" text,
    "treasurerName" text,
    "totalMembers" integer DEFAULT 0,
    "status" text DEFAULT 'Active',
    "bankAccountVerified" boolean DEFAULT false,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now(),
    "createdBy" text,
    "isDeleted" boolean DEFAULT false
);

-- ====================================================================
-- 6. MATRIMONIAL PROFILES REGISTER (MatrimonialRecord)
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.matrimonial_profiles (
    "id" text PRIMARY KEY,
    "gender" text CHECK ("gender" IN ('M', 'F')),
    "name_en" text,
    "name_hi" text,
    "nameEn" text, -- Backwards compatibility
    "nameHi" text, -- Backwards compatibility
    "age" integer NOT NULL,
    "height_cm" integer,
    "heightCm" integer, -- Backwards compatibility
    "education_en" text,
    "education_hi" text,
    "education" text, -- Backwards compatibility
    "occupation_en" text,
    "occupation_hi" text,
    "occupation" text, -- Backwards compatibility
    "annual_income" text,
    "annualIncome" text, -- Backwards compatibility
    "district_en" text,
    "district_hi" text,
    "district" text, -- Backwards compatibility
    "state_en" text,
    "state_hi" text,
    "state" text, -- Backwards compatibility
    "maritalStatus" text,
    "photo_url" text,
    "photoUrl" text, -- Backwards compatibility
    "is_verified" boolean DEFAULT false,
    "isVerified" boolean DEFAULT false, -- Backwards compatibility
    "privacy_mask" boolean DEFAULT false,
    "privacyMask" boolean DEFAULT false, -- Backwards compatibility
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now(),
    "createdBy" text,
    "isDeleted" boolean DEFAULT false
);

-- ====================================================================
-- 7. HEALTHCARE HOSPITALS NETWORK (HospitalRecord)
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.hospitals (
    "id" text PRIMARY KEY,
    "nameEn" text NOT NULL,
    "nameHi" text NOT NULL,
    "city" text NOT NULL,
    "district" text NOT NULL,
    "state" text NOT NULL,
    "address" text,
    "contactPhone" text,
    "emergencyPhone" text,
    "discountOffered" text,
    "specialties" text[] DEFAULT '{}'::text[],
    "isEmpanelled" boolean DEFAULT true,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now(),
    "createdBy" text,
    "isDeleted" boolean DEFAULT false
);

-- ====================================================================
-- 8. BLOOD BANKS & STOCKS (BloodBankRecord)
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.blood_banks (
    "id" text PRIMARY KEY,
    "name" text NOT NULL,
    "city" text NOT NULL,
    "district" text NOT NULL,
    "state" text NOT NULL,
    "contactPhone" text,
    "stockStatus" jsonb DEFAULT '{}'::jsonb,
    "verifiedDate" text,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now(),
    "createdBy" text,
    "isDeleted" boolean DEFAULT false
);

-- ====================================================================
-- 9. BLOOD DONORS DIRECTORY
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.blood_donors (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "name" text NOT NULL,
    "blood_group" text NOT NULL,
    "bloodGroup" text, -- Backwards compatibility
    "city" text NOT NULL,
    "locality" text,
    "phone" text NOT NULL,
    "status" text DEFAULT 'Available',
    "last_donation_date" text,
    "lastDonationDate" text, -- Backwards compatibility
    "total_donations" integer DEFAULT 0,
    "totalDonations" integer DEFAULT 0, -- Backwards compatibility
    "badge" text DEFAULT 'Verified Regular Donor',
    "verified" boolean DEFAULT true,
    "created_at" timestamp with time zone DEFAULT now(),
    CONSTRAINT blood_donors_pkey PRIMARY KEY (id)
);

-- ====================================================================
-- 10. SURVEYS & FEEDBACK REGISTER (SurveyRecord)
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.surveys (
    "id" text PRIMARY KEY,
    "titleEn" text NOT NULL,
    "titleHi" text NOT NULL,
    "description" text,
    "targetAudience" text DEFAULT 'All',
    "status" text DEFAULT 'Active',
    "totalResponsesCount" integer DEFAULT 0,
    "questions" jsonb DEFAULT '[]'::jsonb,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now(),
    "createdBy" text,
    "isDeleted" boolean DEFAULT false
);

-- ====================================================================
-- 11. MAHAPANCHAYAT RESOLUTIONS (ResolutionRecord)
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.mahapanchayat_resolutions (
    "id" text PRIMARY KEY,
    "resolutionNumber" text NOT NULL UNIQUE,
    "titleEn" text NOT NULL,
    "titleHi" text NOT NULL,
    "category" text,
    "proposedBy" text,
    "datePassed" text,
    "status" text DEFAULT 'Approved',
    "votesFor" integer DEFAULT 0,
    "votesAgainst" integer DEFAULT 0,
    "descriptionEn" text,
    "descriptionHi" text,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now(),
    "createdBy" text,
    "isDeleted" boolean DEFAULT false
);

-- ====================================================================
-- 12. DONATION CAMPAIGNS & CAMPAIGN DATA
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.donation_campaigns (
    "id" text PRIMARY KEY,
    "title_en" text NOT NULL,
    "title_hi" text NOT NULL,
    "description_en" text,
    "description_hi" text,
    "target_amount" numeric DEFAULT 0,
    "raised_amount" numeric DEFAULT 0,
    "expiry_date" text,
    "is_active" boolean DEFAULT true,
    "created_at" timestamp with time zone DEFAULT now()
);

-- Seed Donation Campaigns
INSERT INTO public.donation_campaigns ("id", "title_en", "title_hi", "description_en", "description_hi", "target_amount", "raised_amount", "expiry_date", "is_active")
VALUES 
('zakat', 'Central Zakat & Sadqa Fund', 'केंद्रीय ज़कात एवं सदक़ा कोष', 'Direct financial aid for community widows, orphans, and families below poverty line.', 'विधवाओं, अनाथों और गरीबी रेखा से नीचे के परिवारों के लिए वित्तीय सहायता।', 500000, 185000, '2026-12-31', true),
('education', 'Dr. APJ Abdul Kalam Education Scholarship', 'डॉ. एपीजे अब्दुल कलाम शिक्षा छात्रवृत्ति', 'Higher education sponsorships for brilliant but needy students.', 'मेधावी लेकिन जरूरतमंद छात्रों के लिए उच्च शिक्षा प्रायोजन।', 300000, 142000, '2026-12-31', true),
('medical', 'Emergency Medical Relief Support', 'आपातकालीन चिकित्सा सहायता कोष', 'Discounted surgeries and critical medical aid at empanelled healthcare networks.', 'पैनल में शामिल अस्पतालों में आपातकालीन सर्जरी और महत्वपूर्ण चिकित्सा सहायता।', 400000, 95000, '2026-12-31', true)
ON CONFLICT ("id") DO NOTHING;

-- ====================================================================
-- 13. INDIVIDUAL DONATIONS RECORD
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.donations (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "donor_name" text NOT NULL,
    "donor_phone" text NOT NULL,
    "donor_email" text,
    "donor_pan" text,
    "amount" numeric NOT NULL,
    "fund_type" text NOT NULL,
    "user_id" uuid,
    "created_at" timestamp with time zone DEFAULT now(),
    CONSTRAINT donations_pkey PRIMARY KEY (id)
);

-- ====================================================================
-- 14. EMERGENCY RELIEF REQUEST REGISTER
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.relief_requests (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "applicant_name" text NOT NULL,
    "applicant_phone" text NOT NULL,
    "city_district" text NOT NULL,
    "aid_type" text NOT NULL,
    "amount_needed" numeric DEFAULT 0,
    "details" text,
    "user_id" uuid,
    "status" text DEFAULT 'Pending',
    "created_at" timestamp with time zone DEFAULT now(),
    CONSTRAINT relief_requests_pkey PRIMARY KEY (id)
);

-- ====================================================================
-- 15. GRIEVANCES & TICKETS REGISTER
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.grievances (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "user_id" uuid,
    "title" text NOT NULL,
    "description" text NOT NULL,
    "status" text DEFAULT 'Open',
    "created_at" timestamp with time zone DEFAULT now(),
    CONSTRAINT grievances_pkey PRIMARY KEY (id)
);

-- ====================================================================
-- 16. FEEDBACKS & REVIEWS REGISTER
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.feedbacks (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "user_id" uuid,
    "department" text NOT NULL,
    "rating" integer NOT NULL,
    "comments" text NOT NULL,
    "created_at" timestamp with time zone DEFAULT now(),
    CONSTRAINT feedbacks_pkey PRIMARY KEY (id)
);

-- ====================================================================
-- 17. SCHOLARSHIPS DIRECTORY
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.scholarships (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "category" text DEFAULT 'National',
    "title_en" text NOT NULL,
    "title_hi" text NOT NULL,
    "title" text, -- Backwards compatibility
    "provider" text NOT NULL,
    "amount_en" text,
    "amount_hi" text,
    "amount" numeric,
    "eligibility_en" text,
    "eligibility_hi" text,
    "deadline" text,
    "apply_link" text DEFAULT '#',
    "created_at" timestamp with time zone DEFAULT now(),
    CONSTRAINT scholarships_pkey PRIMARY KEY (id)
);

-- ====================================================================
-- 18. SYSTEM AUDIT LOGS (AuditLogRecord)
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.audit_logs (
    "id" text PRIMARY KEY,
    "action" text NOT NULL,
    "module" text NOT NULL,
    "actorId" text NOT NULL,
    "actorName" text,
    "actorRole" text,
    "ipAddress" text,
    "details" text,
    "severity" text DEFAULT 'INFO',
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now()
);

-- ====================================================================
-- 19. HERITAGE MEDIA & GALLERY
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.media_gallery (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "title" text NOT NULL,
    "url" text NOT NULL,
    "category" text CHECK ("category" IN ('Photo Gallery', 'Video Gallery')),
    "created_at" timestamp with time zone DEFAULT now(),
    CONSTRAINT media_gallery_pkey PRIMARY KEY (id)
);

-- Seed Heritage Gallery Media Items if empty
INSERT INTO public.media_gallery ("title", "url", "category")
VALUES
('Rangrez Maha Sabha Inaugural Session 2026', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80', 'Photo Gallery'),
('Community Educational Excellence Summit Jaipur', 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80', 'Photo Gallery'),
('Neelgar Cultural Heritage & Dyeing Art Exhibition', 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80', 'Photo Gallery'),
('Historical Documentary of Muslim Rangrez Community', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'Video Gallery')
ON CONFLICT DO NOTHING;

-- ====================================================================
-- 20. CENTRAL PORTAL SETTINGS (WebsiteSettingsRecord)
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.website_settings (
    "id" text PRIMARY KEY DEFAULT 'central_settings',
    "portalNameEn" text NOT NULL,
    "portalNameHi" text NOT NULL,
    "maintenanceMode" boolean DEFAULT false,
    "allowNewRegistrations" boolean DEFAULT true,
    "requireEmailVerification" boolean DEFAULT false,
    "defaultLanguage" text DEFAULT 'en',
    "helplinePhone" text,
    "helplineEmail" text,
    "announcementTextEn" text,
    "announcementTextHi" text,
    "announcementActive" boolean DEFAULT false,
    "themeColor" text,
    "updatedAt" timestamp with time zone DEFAULT now()
);

-- Insert Default Settings if missing
INSERT INTO public.website_settings (
    "id", "portalNameEn", "portalNameHi", "maintenanceMode", "allowNewRegistrations", 
    "requireEmailVerification", "defaultLanguage", "helplinePhone", "helplineEmail", 
    "announcementTextEn", "announcementTextHi", "announcementActive", "themeColor"
) VALUES (
    'central_settings', 
    'All India Rangrez Maha Sabha', 
    'अखिल भारतीय रंगरेज महासभा', 
    false, true, false, 'en', 
    '+91 78799 40869', 'info@rangrezcommunity.org', 
    'Welcome to the official central enterprise portal of All India Rangrez Maha Sabha.', 
    'अखिल भारतीय रंगरेज महासभा के आधिकारिक केंद्रीय पोर्टल पर आपका स्वागत है।', 
    true, '#004B23'
) ON CONFLICT ("id") DO NOTHING;

-- ====================================================================
-- 20A. VOLUNTEERS REGISTER
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.volunteers (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "user_id" uuid,
    "full_name" text NOT NULL,
    "email" text,
    "phone" text,
    "state" text,
    "district" text,
    "bio" text,
    "interest_areas" text[],
    "status" text DEFAULT 'Active',
    "created_at" timestamp with time zone DEFAULT now(),
    CONSTRAINT volunteers_pkey PRIMARY KEY (id)
);

-- ====================================================================
-- 20B. JOB LISTINGS
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.jobs (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "title" text NOT NULL,
    "company" text NOT NULL,
    "location" text,
    "category" text,
    "type" text,
    "description" text,
    "contact_email" text,
    "salary_range" text,
    "created_at" timestamp with time zone DEFAULT now(),
    "is_deleted" boolean DEFAULT false,
    CONSTRAINT jobs_pkey PRIMARY KEY (id)
);

-- ====================================================================
-- 20C. DOWNLOADS & RESOURCES
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.downloads (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "title" text NOT NULL,
    "category" text,
    "file_url" text,
    "created_at" timestamp with time zone DEFAULT now(),
    CONSTRAINT downloads_pkey PRIMARY KEY (id)
);

-- ====================================================================
-- 21. STORAGE BUCKETS
-- ====================================================================
-- Storage buckets are created using storage schema.
INSERT INTO storage.buckets (id, name, public) 
VALUES ('member-photos', 'member-photos', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public) 
VALUES ('matrimonial-photos', 'matrimonial-photos', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public) 
VALUES ('documents', 'documents', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public) 
VALUES ('admin-media', 'admin-media', true)
ON CONFLICT (id) DO NOTHING;

-- ====================================================================
-- 21A. MEDIA ASSETS METADATA TABLE (Admin Media Management)
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.media_assets (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "filename" text NOT NULL,
    "bucket" text DEFAULT 'admin-media',
    "folder" text DEFAULT 'images',
    "url" text NOT NULL,
    "mime_type" text,
    "size" bigint DEFAULT 0,
    "uploaded_by" text DEFAULT 'Administrator',
    "created_at" timestamp with time zone DEFAULT now(),
    "updated_at" timestamp with time zone DEFAULT now(),
    "status" text DEFAULT 'Active',
    "alt_text" text,
    "caption" text,
    "visibility" text DEFAULT 'Public',
    "dimensions" text,
    "duration" text,
    CONSTRAINT media_assets_pkey PRIMARY KEY (id)
);


-- ====================================================================
-- 22. INDEXES FOR PERFORMANCE OPTIMIZATION
-- ====================================================================
CREATE INDEX IF NOT EXISTS idx_members_search ON public.members ("nameEn", "nameHi", "district", "state", "status") WHERE "isDeleted" = false;
CREATE INDEX IF NOT EXISTS idx_families_search ON public.families ("headOfFamilyEn", "district", "state") WHERE "isDeleted" = false;
CREATE INDEX IF NOT EXISTS idx_matrimonial_search ON public.matrimonial_profiles ("nameEn", "nameHi", "age", "district", "state") WHERE "isDeleted" = false;
CREATE INDEX IF NOT EXISTS idx_hospitals_search ON public.hospitals ("city", "district", "state") WHERE "isDeleted" = false;
CREATE INDEX IF NOT EXISTS idx_audit_logs_time ON public.audit_logs ("createdAt", "severity");


-- ====================================================================
-- 23. AUTOMATIC NEW USER REGISTER TRIGGER (Auto-create Profile)
-- ====================================================================
CREATE OR REPLACE FUNCTION public.handle_new_user_signup()
RETURNS trigger AS $$
DECLARE
    default_role text := 'Member';
    default_permissions text[];
BEGIN
    -- Determine role & permissions based on hierarchical requirements
    IF NEW.email = 'allindiarangrej@gmail.com' OR NEW.email = 'admin@rangrezcommunity.org' THEN
        default_role := 'Super Admin';
        default_permissions := ARRAY['*'];
    ELSE
        default_permissions := ARRAY['read:directory', 'write:profile', 'read:calendar', 'write:support'];
    END IF;

    INSERT INTO public.member_profiles (
        user_id,
        full_name,
        phone,
        district,
        state,
        tehsil,
        committee,
        role,
        permissions,
        status
    ) VALUES (
        NEW.id,
        coalesce(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
        coalesce(NEW.raw_user_meta_data->>'phone', ''),
        coalesce(NEW.raw_user_meta_data->>'district', 'Morena'),
        coalesce(NEW.raw_user_meta_data->>'state', 'Madhya Pradesh'),
        coalesce(NEW.raw_user_meta_data->>'tehsil', ''),
        coalesce(NEW.raw_user_meta_data->>'committee', ''),
        default_role,
        default_permissions,
        'Active'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create Trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user_signup();


-- ====================================================================
-- 24. ROW LEVEL SECURITY (RLS) POLICIES & SECURITY FUNCTIONS
-- ====================================================================
-- Helper check function for roles
CREATE OR REPLACE FUNCTION public.has_role(user_id uuid, required_roles text[])
RETURNS boolean AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 
        FROM public.member_profiles 
        WHERE member_profiles.user_id = $1 
          AND member_profiles.role = ANY(required_roles)
          AND member_profiles.status = 'Active'
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Enable RLS on all tables
ALTER TABLE public.member_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.families ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.family_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.committees ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.matrimonial_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hospitals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blood_banks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blood_donors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.surveys ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mahapanchayat_resolutions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donation_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.relief_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.grievances ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.feedbacks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.scholarships ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.website_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.volunteers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.downloads ENABLE ROW LEVEL SECURITY;

-- General Select access policies (Allow select for reading list pages)
CREATE POLICY "Public select profile" ON public.member_profiles FOR SELECT USING (true);
CREATE POLICY "Public select members" ON public.members FOR SELECT USING (true);
CREATE POLICY "Public select families" ON public.families FOR SELECT USING (true);
CREATE POLICY "Public select family_members" ON public.family_members FOR SELECT USING (true);
CREATE POLICY "Public select committees" ON public.committees FOR SELECT USING (true);
CREATE POLICY "Public select matrimonial" ON public.matrimonial_profiles FOR SELECT USING (true);
CREATE POLICY "Public select hospitals" ON public.hospitals FOR SELECT USING (true);
CREATE POLICY "Public select blood_banks" ON public.blood_banks FOR SELECT USING (true);
CREATE POLICY "Public select blood_donors" ON public.blood_donors FOR SELECT USING (true);
CREATE POLICY "Public select surveys" ON public.surveys FOR SELECT USING (true);
CREATE POLICY "Public select resolutions" ON public.mahapanchayat_resolutions FOR SELECT USING (true);
CREATE POLICY "Public select campaigns" ON public.donation_campaigns FOR SELECT USING (true);
CREATE POLICY "Public select donations" ON public.donations FOR SELECT USING (true);
CREATE POLICY "Public select relief" ON public.relief_requests FOR SELECT USING (true);
CREATE POLICY "Public select grievances" ON public.grievances FOR SELECT USING (true);
CREATE POLICY "Public select feedbacks" ON public.feedbacks FOR SELECT USING (true);
CREATE POLICY "Public select scholarships" ON public.scholarships FOR SELECT USING (true);
CREATE POLICY "Public select audit" ON public.audit_logs FOR SELECT USING (true);
CREATE POLICY "Public select settings" ON public.website_settings FOR SELECT USING (true);
CREATE POLICY "Public select media_gallery" ON public.media_gallery FOR SELECT USING (true);
CREATE POLICY "Public select volunteers" ON public.volunteers FOR SELECT USING (true);
CREATE POLICY "Public select jobs" ON public.jobs FOR SELECT USING (true);
CREATE POLICY "Public select downloads" ON public.downloads FOR SELECT USING (true);

-- Insert policies (Enable write access for registered modules)
CREATE POLICY "Enable insertions for all members" ON public.members FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable updates for all members" ON public.members FOR UPDATE USING (true) WITH CHECK (true);

CREATE POLICY "Enable insertions for all families" ON public.families FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable updates for all families" ON public.families FOR UPDATE USING (true) WITH CHECK (true);

CREATE POLICY "Enable insertions for all family_members" ON public.family_members FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable updates for all family_members" ON public.family_members FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Enable deletes for all family_members" ON public.family_members FOR DELETE USING (true);

CREATE POLICY "Enable insertions for all matrimonial" ON public.matrimonial_profiles FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable updates for all matrimonial" ON public.matrimonial_profiles FOR UPDATE USING (true) WITH CHECK (true);

CREATE POLICY "Enable insertions for all blood_donors" ON public.blood_donors FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insertions for all donations" ON public.donations FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insertions for all relief" ON public.relief_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insertions for all grievances" ON public.grievances FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insertions for all feedbacks" ON public.feedbacks FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insertions for all audit" ON public.audit_logs FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insertions for all volunteers" ON public.volunteers FOR INSERT WITH CHECK (true);

-- Admin and Super Admins full table permission checks
CREATE POLICY "Admins full access profiles" ON public.member_profiles FOR ALL USING (
    has_role(auth.uid(), ARRAY['Super Admin', 'National Admin'])
);

CREATE POLICY "Admins full access members" ON public.members FOR ALL USING (
    has_role(auth.uid(), ARRAY['Super Admin', 'National Admin', 'State Admin', 'District Admin', 'Tehsil Admin', 'Committee Admin'])
);

CREATE POLICY "Admins full access families" ON public.families FOR ALL USING (
    has_role(auth.uid(), ARRAY['Super Admin', 'National Admin', 'State Admin', 'District Admin', 'Tehsil Admin'])
);

CREATE POLICY "Admins full access committees" ON public.committees FOR ALL USING (
    has_role(auth.uid(), ARRAY['Super Admin', 'National Admin', 'State Admin', 'District Admin', 'Committee Admin'])
);

CREATE POLICY "Admins full access hospitals" ON public.hospitals FOR ALL USING (
    has_role(auth.uid(), ARRAY['Super Admin', 'National Admin'])
);

CREATE POLICY "Admins full access blood_banks" ON public.blood_banks FOR ALL USING (
    has_role(auth.uid(), ARRAY['Super Admin', 'National Admin'])
);

CREATE POLICY "Admins full access surveys" ON public.surveys FOR ALL USING (
    has_role(auth.uid(), ARRAY['Super Admin', 'National Admin'])
);

CREATE POLICY "Admins full access resolutions" ON public.mahapanchayat_resolutions FOR ALL USING (
    has_role(auth.uid(), ARRAY['Super Admin', 'National Admin'])
);

CREATE POLICY "Admins full access settings" ON public.website_settings FOR ALL USING (
    has_role(auth.uid(), ARRAY['Super Admin', 'National Admin'])
);

CREATE POLICY "Admins full access jobs" ON public.jobs FOR ALL USING (
    has_role(auth.uid(), ARRAY['Super Admin', 'National Admin', 'State Admin'])
);

-- Bucket Storage Access Policies
CREATE POLICY "Public Read on member-photos" ON storage.objects FOR SELECT USING (bucket_id = 'member-photos');
CREATE POLICY "Auth Upload on member-photos" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'member-photos');

CREATE POLICY "Public Read on matrimonial-photos" ON storage.objects FOR SELECT USING (bucket_id = 'matrimonial-photos');
CREATE POLICY "Auth Upload on matrimonial-photos" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'matrimonial-photos');

CREATE POLICY "Public Read on documents" ON storage.objects FOR SELECT USING (bucket_id = 'documents');
CREATE POLICY "Auth Upload on documents" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'documents');
