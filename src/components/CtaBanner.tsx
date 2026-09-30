"use client";

import React from "react";
import { ArrowRight, Sparkles, Phone, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

interface CtaBannerProps {
  onOpenQuoteModal: () => void;
}

export default function CtaBanner({ onOpenQuoteModal }: CtaBannerProps) {
  return (
    <section className="py-20 bg-[#07070b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden border border-brand-pink/40 shadow-[0_0_60px_rgba(255,89,135,0.25)] bg-gradient-to-r from-[#170a1e] via-[#100c1c] to-[#120817]">
          
          {/* Radial ambient glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-pink/30 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-purple/30 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-pink/20 text-brand-pink border border-brand-pink/40 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready to Scale Your Digital Presence?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Let’s Build Something <br />
              <span className="gradient-text">Extraordinary Together</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mb-10 max-w-xl mx-auto font-normal">
              Get an airtight technical roadmap, clear milestone deliverables, and guaranteed sprint delivery for your next project.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-brand-pink to-[#ff3d73] hover:shadow-brand-glow transition-all duration-300 flex items-center justify-center group"
              >
                <span>Request Free Discovery Call</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%20Webiz%20Square%2C%20I%20would%20like%20to%20discuss%20a%20new%20project`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-full text-base font-semibold text-slate-200 glass-panel hover:bg-white/[0.1] border border-white/20 transition-all flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>Instant WhatsApp Chat</span>
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-6 text-xs text-slate-400 font-medium">
              <span>✓ Free 30-Min Architecture Consultation</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ Fixed Price & Milestones</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ 100% IP Ownership</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
