"use client";

import React, { useState, useMemo } from "react";
import { 
  Calculator, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  DollarSign, 
  Send 
} from "lucide-react";

interface CostCalculatorProps {
  onOpenQuoteModal: (details?: string) => void;
}

export default function CostCalculator({ onOpenQuoteModal }: CostCalculatorProps) {
  const [serviceType, setServiceType] = useState<string>("web");
  const [scale, setScale] = useState<string>("growth");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["seo", "cms"]);
  const [timeline, setTimeline] = useState<string>("standard");
  const [clientName, setClientName] = useState("");
  const [clientContact, setClientContact] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Dynamic pricing calculation logic
  const calculatedEstimate = useMemo(() => {
    let baseInr = 25000;
    let weeks = 2;

    // Service base
    if (serviceType === "web") {
      baseInr = 25000;
      weeks = 2;
    } else if (serviceType === "ecommerce") {
      baseInr = 45000;
      weeks = 3;
    } else if (serviceType === "erp") {
      baseInr = 85000;
      weeks = 5;
    } else if (serviceType === "mobile") {
      baseInr = 65000;
      weeks = 4;
    } else if (serviceType === "uiux") {
      baseInr = 20000;
      weeks = 2;
    } else if (serviceType === "seo") {
      baseInr = 18000;
      weeks = 2;
    }

    // Scale multiplier
    if (scale === "starter") {
      baseInr *= 1.0;
    } else if (scale === "growth") {
      baseInr *= 1.6;
      weeks += 1;
    } else if (scale === "enterprise") {
      baseInr *= 2.8;
      weeks += 3;
    }

    // Features addition
    const featureCost = selectedFeatures.length * 8000;
    const totalInr = Math.round(baseInr + featureCost);

    // Urgent speed up surcharge
    const finalInr = timeline === "urgent" ? Math.round(totalInr * 1.2) : totalInr;
    const finalWeeks = timeline === "urgent" ? Math.max(1, Math.round(weeks * 0.7)) : weeks;

    return {
      inr: finalInr.toLocaleString("en-IN"),
      usd: Math.round(finalInr / 86).toLocaleString("en-US"),
      weeks: finalWeeks
    };
  }, [serviceType, scale, selectedFeatures, timeline]);

  const toggleFeature = (fId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(fId) ? prev.filter((id) => id !== fId) : [...prev, fId]
    );
  };

  const handleInstantSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientContact) return;
    setSubmitted(true);
  };

  return (
    <section id="calculator" className="py-24 bg-[#090910] relative overflow-hidden border-t border-white/[0.06]">
      {/* Background Accent Glows */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-brand-pink/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-pink/30 mb-4">
            <Calculator className="w-3.5 h-3.5 text-brand-pink" />
            <span className="text-xs uppercase font-bold tracking-wider text-slate-200">
              Interactive Estimator
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Calculate Your Project <br className="hidden sm:inline" />
            <span className="gradient-text">Timeline & Investment</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Select your requirements below for an instant ballpark architecture timeline and investment estimate.
          </p>
        </div>

        {/* Calculator Card Container */}
        <div className="max-w-5xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-white/[0.12] bg-[#0c0c16]/95 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Options Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Select Service */}
              <div>
                <label className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-3">
                  1. Select Core Service Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: "web", label: "Web Application" },
                    { id: "ecommerce", label: "E-Commerce Store" },
                    { id: "erp", label: "Custom ERP / CRM" },
                    { id: "mobile", label: "Mobile App (iOS/And)" },
                    { id: "uiux", label: "UI/UX & Branding" },
                    { id: "seo", label: "SEO & Growth Engine" },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setServiceType(s.id)}
                      className={`p-3 rounded-xl text-xs font-bold text-center border transition-all ${
                        serviceType === s.id
                          ? "bg-brand-pink text-white border-brand-pink shadow-brand-glow"
                          : "bg-white/[0.03] text-slate-300 border-white/[0.08] hover:bg-white/[0.06]"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Project Scale */}
              <div>
                <label className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-3">
                  2. Project Scope & Architecture
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: "starter", label: "Starter MVP", desc: "Core essentials" },
                    { id: "growth", label: "Growth Scale", desc: "Advanced features" },
                    { id: "enterprise", label: "Enterprise", desc: "Full custom logic" },
                  ].map((sc) => (
                    <button
                      key={sc.id}
                      type="button"
                      onClick={() => setScale(sc.id)}
                      className={`p-3 rounded-xl text-center border transition-all ${
                        scale === sc.id
                          ? "bg-brand-pink/15 border-brand-pink text-white"
                          : "bg-white/[0.03] text-slate-300 border-white/[0.08] hover:bg-white/[0.06]"
                      }`}
                    >
                      <span className="block text-xs font-bold">{sc.label}</span>
                      <span className="block text-[10px] text-slate-400 mt-0.5">{sc.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Add-on Capabilities */}
              <div>
                <label className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-3">
                  3. Key Add-on Features
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "cms", label: "Headless CMS Admin" },
                    { id: "seo", label: "Advanced SEO & Schema" },
                    { id: "payment", label: "Payment Gateway API" },
                    { id: "whatsapp", label: "WhatsApp Chatbot & Alerts" },
                    { id: "multilingual", label: "Multi-Language Support" },
                    { id: "sla", label: "24/7 SLA Cloud Support" },
                  ].map((feat) => (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-2.5 rounded-xl text-xs font-medium flex items-center justify-between border transition-all ${
                        selectedFeatures.includes(feat.id)
                          ? "bg-white/[0.08] border-brand-pink/60 text-white"
                          : "bg-white/[0.02] border-white/[0.06] text-slate-400 hover:bg-white/[0.04]"
                      }`}
                    >
                      <span>{feat.label}</span>
                      <span className={`w-4 h-4 rounded-md flex items-center justify-center border text-[10px] ${
                        selectedFeatures.includes(feat.id)
                          ? "bg-brand-pink border-brand-pink text-white"
                          : "border-white/20 text-transparent"
                      }`}>
                        ✓
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Target Delivery Timeline */}
              <div>
                <label className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-3">
                  4. Desired Delivery Timeline
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: "standard", label: "Standard Agile Sprints" },
                    { id: "urgent", label: "Priority Fast-Track (+20%)" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTimeline(t.id)}
                      className={`p-3 rounded-xl text-xs font-bold text-center border transition-all ${
                        timeline === t.id
                          ? "bg-white/[0.1] border-brand-pink text-white"
                          : "bg-white/[0.03] text-slate-400 border-white/[0.08]"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Summary & Lead Capture (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.1] bg-gradient-to-b from-[#141424] to-[#0c0c16]">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-brand-pink block mb-2">
                  Estimated Investment
                </span>

                <div className="mb-6">
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                    ₹{calculatedEstimate.inr}{" "}
                    <span className="text-xs font-normal text-slate-400 block sm:inline">
                      (approx. ${calculatedEstimate.usd} USD)
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-emerald-400 mt-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Estimated Sprint Duration: {calculatedEstimate.weeks} Weeks</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] mb-6 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Code Architecture:</span>
                    <span className="font-semibold text-white">100% Custom Next.js / TypeScript</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Code Ownership:</span>
                    <span className="font-semibold text-emerald-400">100% Full IP Rights</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Warranty Support:</span>
                    <span className="font-semibold text-white">30 Days Included</span>
                  </div>
                </div>

                {/* Instant Lead Capture Form */}
                {submitted ? (
                  <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center animate-in fade-in">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-2">
                      <Check className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      Estimate Locked In!
                    </h4>
                    <p className="text-xs text-slate-300">
                      Our lead technical architect will contact you within 2 hours to confirm specifications.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInstantSubmit} className="space-y-3">
                    <p className="text-xs font-semibold text-slate-200">
                      Lock in this estimate & get detailed architecture breakdown:
                    </p>
                    <input
                      type="text"
                      placeholder="Your Name / Company"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-pink"
                    />
                    <input
                      type="text"
                      placeholder="Email or WhatsApp Number"
                      required
                      value={clientContact}
                      onChange={(e) => setClientContact(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-pink"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-pink to-[#ff3d73] hover:shadow-brand-glow transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Lock In Estimate & Request Blueprint</span>
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] text-center">
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(`Custom scope from Calculator: approx ₹${calculatedEstimate.inr}`)}
                  className="text-xs text-brand-pink-light hover:underline font-semibold"
                >
                  Prefer a custom discovery call instead? Click here
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
