"use client";

import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  Code2, 
  Headphones, 
  Sparkles, 
  Check, 
  X as CloseIcon, 
  Flame,
  Database,
  Layers,
  Award
} from "lucide-react";

interface WhyFeature {
  id: string;
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  stats: string;
  statLabel: string;
}

const features: WhyFeature[] = [
  {
    id: "speed",
    icon: <Zap className="w-6 h-6 text-brand-pink" />,
    tag: "Sub-Second Speed",
    title: "Lighthouse 95+ Mobile Speed",
    description: "Pre-rendered Next.js 15 server components deliver sub-second LCP (< 1.2s) and near-zero layout shifts across all devices and networks.",
    stats: "< 1.2s",
    statLabel: "Average LCP Speed"
  },
  {
    id: "ownership",
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    tag: "Zero Vendor Lock-in",
    title: "100% Source Code Ownership",
    description: "You own every single line of code, database architecture, and digital assets. No proprietary builder fees or licensing traps.",
    stats: "100%",
    statLabel: "Full IP Rights"
  },
  {
    id: "security",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    tag: "Bank-Grade Security",
    title: "Isolated Database & API Security",
    description: "Dedicated PostgreSQL schemas, CSRF/XSS mitigation, Redis rate-limiting, and zero vulnerable WordPress plugin vectors.",
    stats: "0",
    statLabel: "Plugin Bloat"
  },
  {
    id: "access",
    icon: <Headphones className="w-6 h-6 text-purple-400" />,
    tag: "Direct Comms",
    title: "Direct Founder & Tech Lead Access",
    description: "Work directly with senior software architects and lead full-stack engineers without bureaucratic account manager middlemen.",
    stats: "24/7",
    statLabel: "SLA Support"
  },
  {
    id: "architecture",
    icon: <Database className="w-6 h-6 text-amber-400" />,
    tag: "Enterprise Scale",
    title: "Serverless Edge & PostgreSQL",
    description: "Effortlessly handle traffic spikes of 100k+ concurrent users with global Vercel edge caching and Supabase connection pooling.",
    stats: "99.9%",
    statLabel: "Guaranteed Uptime"
  },
  {
    id: "roi",
    icon: <Flame className="w-6 h-6 text-rose-400" />,
    tag: "High Conversion",
    title: "High-ROI Growth Engineering",
    description: "Every UI interaction, CTA placement, and layout block is engineered to maximize conversion rates, inbound leads, and organic rankings.",
    stats: "3.4x",
    statLabel: "Avg. Conversion Lift"
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-[#090910] relative overflow-hidden border-t border-white/[0.06]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-pink/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-pink/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-pink" />
            <span className="text-xs uppercase font-bold tracking-wider text-slate-200">
              The Webiz Square Advantage
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Engineered for Extreme Speed, <br className="hidden sm:inline" />
            <span className="gradient-text">Zero Bloat & Maximum ROI</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400">
            We don’t use slow, bloated templates or fragile plugin ecosystems. We engineer enterprise-grade code that outranks and outperforms your competitors.
          </p>
        </div>

        {/* 6-Card High-Impact Grid (No Slider) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((f) => (
            <div
              key={f.id}
              className="glass-panel glass-panel-hover rounded-3xl p-8 border border-white/[0.08] relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] group-hover:border-brand-pink/50 group-hover:bg-brand-pink/10 transition-colors shadow-inner">
                    {f.icon}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-pink/15 text-brand-pink border border-brand-pink/30">
                    {f.tag}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-brand-pink transition-colors">
                  {f.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {f.description}
                </p>
              </div>

              {/* Bottom Stat Chip */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">
                  {f.statLabel}
                </span>
                <span className="text-lg font-display font-extrabold text-brand-pink">
                  {f.stats}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Comparison Table */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/[0.1] relative overflow-hidden bg-gradient-to-b from-[#0e0e18]/80 to-[#07070b]/90 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              Why Custom Webiz Architecture Beats Traditional Platforms
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              A transparent comparison between our modern stack and traditional WordPress / builder agencies.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-4 sm:px-6">Performance & Engineering Metric</th>
                  <th className="py-4 px-4 sm:px-6 text-brand-pink bg-brand-pink/10 rounded-t-xl">
                    Webiz Square Custom Architecture
                  </th>
                  <th className="py-4 px-4 sm:px-6 text-slate-400">
                    Traditional WordPress / Wix Agency
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-slate-200">
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-medium">Mobile Loading Speed (LCP)</td>
                  <td className="py-4 px-4 sm:px-6 bg-brand-pink/5 font-bold text-emerald-400 flex items-center">
                    <Check className="w-4 h-4 mr-1.5 text-emerald-400" />
                    Sub-second (&lt; 1.2s)
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-rose-400 flex items-center">
                    <CloseIcon className="w-4 h-4 mr-1.5 text-rose-400" />
                    3.5s – 6.8s (Laggy)
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 sm:px-6 font-medium">Google Lighthouse Score</td>
                  <td className="py-4 px-4 sm:px-6 bg-brand-pink/5 font-bold text-emerald-400 flex items-center">
                    <Check className="w-4 h-4 mr-1.5 text-emerald-400" />
                    95+ out of 100
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-rose-400 flex items-center">
                    <CloseIcon className="w-4 h-4 mr-1.5 text-rose-400" />
                    40 – 65 out of 100
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 sm:px-6 font-medium">Security & Vulnerability Exposure</td>
                  <td className="py-4 px-4 sm:px-6 bg-brand-pink/5 font-bold text-emerald-400 flex items-center">
                    <Check className="w-4 h-4 mr-1.5 text-emerald-400" />
                    Bank-Grade, No Third-Party Plugins
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-rose-400 flex items-center">
                    <CloseIcon className="w-4 h-4 mr-1.5 text-rose-400" />
                    Constant Plugin Exploits & Hacks
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 sm:px-6 font-medium">Scalability & Database Efficiency</td>
                  <td className="py-4 px-4 sm:px-6 bg-brand-pink/5 font-bold text-emerald-400 flex items-center">
                    <Check className="w-4 h-4 mr-1.5 text-emerald-400" />
                    Serverless Edge & PostgreSQL
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-rose-400 flex items-center">
                    <CloseIcon className="w-4 h-4 mr-1.5 text-rose-400" />
                    Crashes on High Traffic Spikes
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 sm:px-6 font-medium">Custom Business Logic & ERP</td>
                  <td className="py-4 px-4 sm:px-6 bg-brand-pink/5 font-bold text-emerald-400 flex items-center">
                    <Check className="w-4 h-4 mr-1.5 text-emerald-400" />
                    100% Tailored Workflows
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-rose-400 flex items-center">
                    <CloseIcon className="w-4 h-4 mr-1.5 text-rose-400" />
                    Rigid Generic Templates
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
