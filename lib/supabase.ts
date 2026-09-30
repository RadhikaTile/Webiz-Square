import { createClient } from "@supabase/supabase-js";

// Client-side Supabase client (using public anon key)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project-id.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "your-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side Supabase client with Service Role (bypasses RLS for secure server actions & API routes)
export const getServiceSupabase = () => {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseAnonKey;
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
};

export interface LeadRecord {
  id?: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  budget?: string;
  timeline?: string;
  message?: string;
  source?: string;
  status?: "New" | "Contacted" | "Qualified" | "Proposal Sent" | "Won" | "Lost" | "Spam";
  created_at?: string;
}
