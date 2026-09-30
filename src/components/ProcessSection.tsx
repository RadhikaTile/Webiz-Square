"use client";

import React from "react";
import { 
  Sparkles, 
  Search, 
  Layers, 
  Code2, 
  CheckCircle2, 
  Rocket, 
  Clock, 
  FileCheck,
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  duration: string;
  icon: React.ReactNode;
  description: string;
  activities: string[];
  deliverable: string;
}

const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Blueprint",
    subtitle: "Strategy & Architecture",
    duration: "Week 1",
    icon: <Search className="w-5 h-5 text-brand-pink" />,
    description: "Deep dive into your business model, target audience, conversion goals, and technical requirements to create an airtight execution roadmap.",
    activities: [
      "Requirements gathering & tech scoping",
      "Database schema & API modeling",
      "Competitor gap & keyword analysis",
      "Milestone breakdown & SLA alignment"
    ],
    deliverable: "Architecture Blueprint & Technical Spec"
  },
  {
    step: "02",
    title: "UI/UX & Prototyping",
    subtitle: "Design & User Experience",
    duration: "Week 1 - 2",
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
    description: "Crafting human-centered, interactive Figma wireframes and high-fidelity prototypes following modern glassmorphic aesthetics.",
    activities: [
      "User journey & wireframe mapping",
      "High-fidelity clickable Figma prototype",
      "Custom design system & design tokens",
      "Stakeholder feedback & design sign-off"
    ],
    deliverable: "Clickable Figma Prototype & Design System"
  },
  {
    step: "03",
    title: "Agile Development",
    subtitle: "Full-Stack Engineering",
    duration: "Week 2 - 4",
    icon: <Code2 className="w-5 h-5 text-emerald-400" />,
    description: "Writing clean, type-safe Next.js 15 App Router code with PostgreSQL, Supabase, and custom business logic in rapid bi-weekly sprints.",
    activities: [
      "Next.js Server Components & client UI",
      "PostgreSQL database & API integration",
      "Payment gateways & WhatsApp pipelines",
      "Bi-weekly client staging demo links"
    ],
    deliverable: "Functional Staging Build & API Suite"
  },
  {
    step: "04",
    title: "QA & Optimization",
    subtitle: "Security & Speed Audit",
    duration: "Week 4 - 5",
    icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
    description: "Rigorous cross-browser testing, mobile responsiveness audits, OWASP vulnerability scanning, and Lighthouse 95+ optimization.",
    activities: [
      "Cross-browser & mobile device testing",
      "Lighthouse 95+ Core Web Vitals audit",
      "OWASP security & CSP headers verification",
      "JSON-LD schema & SEO canonical check"
    ],
    deliverable: "QA Certification & CWV Scorecard (95+)"
  },
  {
    step: "05",
    title: "Launch & Scale",
    subtitle: "Deployment & Growth",
    duration: "Week 5+",
    icon: <Rocket className="w-5 h-5 text-amber-400" />,
    description: "Zero-downtime deployment to global Vercel edge CDN, search engine indexation submission, and 24/7 post-launch warranty support.",
    activities: [
      "Zero-downtime DNS & Vercel edge rollout",
      "Search Console & Instant IndexNow pings",
      "GA4, GTM & Clarity heatmaps tracking",
      "30-day post-launch warranty & backups"
    ],
    deliverable: "Live Production Site & SLA Warranty"
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-[#07070b] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-brand-pink/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-pink/30 mb-4">
            <Zap className="w-3.5 h-3.5 text-brand-pink" />
            <span className="text-xs uppercase font-bold tracking-wider text-slate-200">
              Agile Engineering Lifecycle
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Our 5-Step Process to Build <br className="hidden sm:inline" />
            <span className="gradient-text">High-Impact Software</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400">
            A disciplined, milestone-driven development process engineered to deliver high performance, zero downtime, and complete transparency.
          </p>
        </div>

        {/* Process Flow Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {steps.map((step, idx) => (
            <div
              key={step.step}
              className={`glass-panel glass-panel-hover rounded-3xl p-7 sm:p-8 border border-white/[0.08] relative group flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Card Top: Step Number & Duration */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-brand-pink/10 border border-brand-pink/30 flex items-center justify-center font-display font-extrabold text-brand-pink text-lg shadow-inner group-hover:scale-105 transition-transform">
                      {step.step}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                        Phase {step.step}
                      </span>
                      <span className="text-xs font-semibold text-brand-pink-light">
                        {step.subtitle}
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.08] flex items-center">
                    <Clock className="w-3 h-3 mr-1 text-brand-pink" />
                    {step.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-brand-pink transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>

                {/* Activities Checklist */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/[0.06]">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-2">
                    Key Activities:
                  </span>
                  {step.activities.map((act, aIdx) => (
                    <div key={aIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-pink flex-shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Deliverable Box */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                    Key Deliverable
                  </span>
                  <span className="text-xs font-bold text-emerald-400 flex items-center">
                    <FileCheck className="w-4 h-4 mr-1.5 flex-shrink-0" />
                    <span className="truncate">{step.deliverable}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Process Summary Banner */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/[0.1] bg-gradient-to-r from-brand-pink/10 via-[#10101c] to-accent-purple/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-pink/20 border border-brand-pink/40 flex items-center justify-center text-brand-pink flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Every Phase Tracked Transparently in Agile Sprints
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                You get staging preview links, bi-weekly progress demos, and direct access to your lead engineer throughout.
              </p>
            </div>
          </div>

          <a
            href="#calculator"
            className="flex-shrink-0 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-brand-pink hover:bg-brand-pink-hover shadow-brand-glow transition-all flex items-center"
          >
            <span>Estimate Your Sprint Timeline</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

      </div>
    </section>
  );
}
