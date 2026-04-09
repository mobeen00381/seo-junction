-- CLEAN START (Deletes existing tables to prevent errors)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user;
DROP TABLE IF EXISTS public.domains;
DROP TABLE IF EXISTS public.posts;
DROP TABLE IF EXISTS public.profiles;

-- 1. PROFILES TABLE
-- Stores business-specific information for each user.
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  business_name TEXT,
  business_email TEXT,
  phone_number TEXT,
  plan TEXT DEFAULT 'free_trial',
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  gmb_connected BOOLEAN DEFAULT FALSE,
  gmb_location_id TEXT,
  website_url TEXT,
  gmb_account_id TEXT,
  gmb_location_name TEXT,
  google_refresh_token TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- 2. POSTS TABLE
-- Stores updates sent from the phone (images, voice, AI drafts).
CREATE TABLE public.posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE DEFAULT auth.uid(),
  content_type TEXT CHECK (content_type IN ('image', 'voice', 'text')),
  media_url TEXT,
  voice_transcript TEXT,
  ai_draft TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'published')),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Posts Policies
CREATE POLICY "Users can view their own posts" ON public.posts
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own posts" ON public.posts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own posts" ON public.posts
  FOR UPDATE USING (auth.uid() = user_id);

-- 3. DOMAINS TABLE
-- Stores domain names and their statuses.
CREATE TABLE public.domains (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE DEFAULT auth.uid(),
  domain_name TEXT UNIQUE NOT NULL,
  is_primary BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'error')),
  dns_records JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.domains ENABLE ROW LEVEL SECURITY;

-- Domains Policies
CREATE POLICY "Users can view their own domains" ON public.domains
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own domains" ON public.domains
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 4. TRIGGER FOR NEW USERS
-- Automatically create a profile when a new user signs up.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, business_email)
  VALUES (new.id, new.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
