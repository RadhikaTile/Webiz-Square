"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Zap, 
  ShieldCheck, 
  Layers, 
  TrendingUp,
  Award
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 pb-20 bg-[#07070b]">
      {/* Background Ambient Glows and Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      {/* Radial Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[500px] bg-gradient-radial from-brand-pink/20 via-accent-purple/10 to-transparent blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-brand-pink/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-accent-purple/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-pill border border-brand-pink/30 shadow-[0_0_20px_rgba(255,89,135,0.2)] mb-8 animate-in fade-in duration-700">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
              Transforming Ideas Into Scalable Digital Engines
            </span>
            <Sparkles className="w-4 h-4 text-brand-pink ml-1" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Innovating Code. <br className="hidden sm:inline" />
            <span className="gradient-text">Engineering Global Digital Growth.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            We engineer high-performance web applications, bespoke enterprise ERPs, cross-platform mobile apps, and high-ROI digital marketing engines built for speed and global scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white rounded-full bg-gradient-to-r from-brand-pink via-[#ff3d73] to-brand-pink bg-size-200 hover:shadow-brand-glow transition-all duration-300 group cursor-pointer"
            >
              <span>Get Free Project Estimate</span>
              <ArrowRight className="w-5 h-5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <Link
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-slate-200 rounded-full glass-pill hover:bg-white/[0.08] hover:text-white border border-white/[0.12] transition-all duration-300 group"
            >
              <span>Explore Our Services</span>
              <Zap className="w-4 h-4 ml-2 text-brand-pink group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Key Feature Highlight Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-400 mb-12">
            <div className="flex items-center space-x-1.5 glass-panel px-3.5 py-1.5 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Custom Code (No Bloat)</span>
            </div>
            <div className="flex items-center space-x-1.5 glass-panel px-3.5 py-1.5 rounded-full">
              <Zap className="w-4 h-4 text-brand-pink" />
              <span>Sub-Second Lighthouse 95+ Speed</span>
            </div>
            <div className="flex items-center space-x-1.5 glass-panel px-3.5 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Enterprise-Grade Security</span>
            </div>
          </div>

          {/* Interactive Live Metrics Bar */}
          <div className="w-full max-w-4xl glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.1] shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-pink/5 via-transparent to-accent-purple/5 pointer-events-none" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
              {SITE_CONFIG.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight flex items-center">
                    <span className="gradient-text-pink">{stat.value}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
