-- ==============================================================================
-- Webiz Square Software Solutions LLP - Supabase Database Schema
-- Architecture: PostgreSQL + Row Level Security (RLS) + Automated Timestamps
-- ==============================================================================

-- 1. Create Enums for Lead Lifecycle
DO $$ BEGIN
    CREATE TYPE lead_status_enum AS ENUM ('New', 'Contacted', 'Qualified', 'Proposal Sent', 'Won', 'Lost', 'Spam');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 2. LEADS TABLE (Contact form, Quote modal, Cost calculator inquiries)
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    company TEXT,
    service TEXT NOT NULL,
    budget TEXT,
    timeline TEXT,
    message TEXT,
    source TEXT DEFAULT 'website_quote_modal',
    ip_address TEXT,
    user_agent TEXT,
    status lead_status_enum DEFAULT 'New',
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 3. NEWSLETTER / SUBSCRIBERS TABLE
CREATE TABLE IF NOT EXISTS public.subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    source TEXT DEFAULT 'footer_newsletter',
    is_active BOOLEAN DEFAULT true,
    subscribed_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 4. ANALYTICS / WHATSAPP CLICK LOGS (Conversion Tracking)
CREATE TABLE IF NOT EXISTS public.conversion_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_type TEXT NOT NULL, -- 'whatsapp_click', 'call_click', 'calculator_calc', 'brochure_download'
    source_component TEXT,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 5. Enable Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.conversion_events ENABLE ROW LEVEL SECURITY;

-- 6. RLS Policies
-- Allow anonymous / public website visitors to insert leads
CREATE POLICY "Allow public insert for leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Allow anonymous / public website visitors to subscribe
CREATE POLICY "Allow public insert for subscribers" 
ON public.subscribers 
FOR INSERT 
WITH CHECK (true);

-- Allow anonymous / public website visitors to log conversion events
CREATE POLICY "Allow public insert for conversion events" 
ON public.conversion_events 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated staff / service role can view and manage leads
CREATE POLICY "Allow service role full access to leads" 
ON public.leads 
FOR ALL 
USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');

CREATE POLICY "Allow service role full access to subscribers" 
ON public.subscribers 
FOR ALL 
USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');

-- 7. Automated updated_at Trigger
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS on_leads_updated ON public.leads;
CREATE TRIGGER on_leads_updated
    BEFORE UPDATE ON public.leads
    FOR EACH ROW
    EXECUTE PROCEDURE public.handle_updated_at();

-- 8. High Performance Indexes
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads(email);
CREATE INDEX IF NOT EXISTS idx_conversion_events_created_at ON public.conversion_events(created_at DESC);
