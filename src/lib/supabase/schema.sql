-- NEERZY DATABASE SCHEMA
-- This file documents the required tables for Google Business Profile automation and SaaS billing.

-- 1. PROFILES (User settings and Google keys)
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  full_name text,
  business_name text,
  business_city text,
  business_trade text,
  
  -- Google Integration
  google_refresh_token text,
  gmb_account_id text,
  gmb_location_id text,
  gmb_connected boolean default false,
  
  -- App State
  onboarding_complete boolean default false,
  selected_plan text check (selected_plan in ('Starter', 'Pro', 'Growth', 'Agency')),
  
  updated_at timestamp with time zone default timezone('utc'::text, now()),
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 2. ACTIVE POSTS (History of GMB updates and drafts)
create table active_posts (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  content text not null,
  media_url text,
  
  -- GMB Metadata
  status text check (status in ('draft', 'scheduled', 'published', 'failed')) default 'draft',
  gmb_post_id text, -- The ID returned by Google after publishing
  error_log text,
  
  scheduled_for timestamp with time zone,
  published_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 3. SUBSCRIPTION LOGS (Stripe integration tracking)
create table subscription_logs (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  
  -- Stripe Data
  stripe_customer_id text,
  stripe_subscription_id text,
  plan_id text,
  status text check (status in ('active', 'trialing', 'canceled', 'past_due', 'incomplete')),
  
  current_period_start timestamp with time zone,
  current_period_end timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- RLS (Row Level Security) - Basic Setup
alter table profiles enable row level security;
alter table active_posts enable row level security;
alter table subscription_logs enable row level security;

-- Policies
create policy "Users can view own profile" on profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);

create policy "Users can view own posts" on active_posts for select using (auth.uid() = user_id);
create policy "Users can create own posts" on active_posts for insert with check (auth.uid() = user_id);

create policy "Users can view own subscriptions" on subscription_logs for select using (auth.uid() = user_id);
