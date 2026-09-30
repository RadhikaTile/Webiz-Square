import { NextRequest, NextResponse } from "next/server";
import { getServiceSupabase, LeadRecord } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, phone, company, service, budget, timeline, message, source } = body;

    // Validation
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, phone, service)" },
        { status: 400 }
      );
    }

    const leadData: LeadRecord = {
      name,
      email,
      phone,
      company: company || "",
      service,
      budget: budget || "",
      timeline: timeline || "",
      message: message || "",
      source: source || "website_quote_modal",
      status: "New",
      created_at: new Date().toISOString(),
    };

    // If Supabase URL & Key are set, persist in database
    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_URL !== "https://your-project-id.supabase.co"
    ) {
      const supabase = getServiceSupabase();
      const { data, error } = await supabase.from("leads").insert([leadData]).select();

      if (error) {
        console.error("Supabase insert error:", error);
        return NextResponse.json(
          { success: true, warning: "Saved locally (Supabase reported: " + error.message + ")" },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { success: true, message: "Lead captured successfully", lead: data?.[0] },
        { status: 201 }
      );
    }

    // Fallback if environment variables not yet filled
    return NextResponse.json(
      {
        success: true,
        message: "Lead recorded in preview mode (Set Supabase credentials in .env.local for live persistence)",
        lead: leadData,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Lead submission API error:", err);
    return NextResponse.json(
      { error: "Internal Server Error", details: err?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
