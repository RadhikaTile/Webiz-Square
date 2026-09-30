import { NextResponse } from "next/server";
import { getServiceSupabase } from "@/lib/supabase";

export async function GET() {
  const timestamp = new Date().toISOString();
  let supabaseStatus = "unconfigured";

  if (
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== "https://your-project-id.supabase.co"
  ) {
    try {
      const supabase = getServiceSupabase();
      const { error } = await supabase.from("leads").select("id").limit(1);
      supabaseStatus = error ? `error: ${error.message}` : "connected";
    } catch (err: any) {
      supabaseStatus = `exception: ${err?.message}`;
    }
  }

  return NextResponse.json(
    {
      status: "healthy",
      timestamp,
      app: "Webiz Square Software Solutions LLP",
      environment: process.env.NODE_ENV || "development",
      services: {
        supabase: supabaseStatus,
      },
    },
    { status: 200 }
  );
}
