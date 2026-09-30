"use client";

import React, { useState } from "react";
import { 
  Globe, 
  Cpu, 
  ShoppingBag, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  MessageSquare, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle, 
  Sparkles,
  Layers
} from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/site-data";

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6 text-brand-pink" />,
  Cpu: <Cpu className="w-6 h-6 text-brand-pink" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-brand-pink" />,
  Smartphone: <Smartphone className="w-6 h-6 text-brand-pink" />,
  Palette: <Palette className="w-6 h-6 text-brand-pink" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-brand-pink" />,
  MessageSquare: <MessageSquare className="w-6 h-6 text-brand-pink" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-brand-pink" />,
};

type CategoryFilter = "all" | "development" | "enterprise" | "marketing" | "design" | "cloud";

export default function ServicesSection({ onOpenQuoteModal }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filteredServices = activeCategory === "all" 
    ? SERVICES 
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-[#07070b] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-brand-pink/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-pink/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-pink" />
            <span className="text-xs uppercase font-bold tracking-wider text-slate-200">
              End-to-End Capabilities
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            High-Performance Tech Built to <br className="hidden sm:inline" />
            <span className="gradient-text">Scale Your Enterprise</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400">
            From lightning-fast web applications to mission-critical custom ERP software, we engineer complete digital solutions tailored to your growth goals.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Services" },
            { id: "development", label: "Web & Apps" },
            { id: "enterprise", label: "Enterprise ERP" },
            { id: "marketing", label: "SEO & Growth" },
            { id: "design", label: "UI/UX & Branding" },
            { id: "cloud", label: "Cloud & Security" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as CategoryFilter)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-brand-pink text-white shadow-brand-glow"
                  : "glass-pill text-slate-300 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between relative group border border-white/[0.08]"
            >
              <div>
                {/* Card Top Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-brand-pink/50 group-hover:bg-brand-pink/10 transition-colors shadow-inner">
                    {serviceIcons[service.iconName] || <Globe className="w-6 h-6 text-brand-pink" />}
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-pink/15 text-brand-pink-light border border-brand-pink/25">
                    {service.highlight}
                  </span>
                </div>

                {/* Card Title & Description */}
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-brand-pink transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/[0.06]">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-pink flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tech Stack Chips & CTA */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-white/[0.04] border border-white/[0.1] hover:bg-brand-pink hover:border-brand-pink transition-all duration-300 flex items-center justify-center group/btn shadow-sm"
                >
                  <span>Request Custom Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-14 glass-panel rounded-2xl p-6 sm:p-8 border border-brand-pink/30 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-brand-pink/10 via-transparent to-accent-purple/10">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white flex items-center">
              <Layers className="w-5 h-5 mr-2 text-brand-pink" />
              Need a bespoke combination of Web + ERP + Digital Growth?
            </h4>
            <p className="text-sm text-slate-400 mt-1">
              We engineer custom enterprise packages with dedicated sprint teams and guaranteed SLAs.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal("Full Digital Transformation")}
            className="flex-shrink-0 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-brand-pink hover:bg-brand-pink-hover shadow-brand-glow transition-all duration-300 flex items-center"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

      </div>
    </section>
  );
}
