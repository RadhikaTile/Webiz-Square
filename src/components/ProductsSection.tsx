"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Users, 
  ShieldCheck, 
  FileText, 
  BarChart3, 
  Zap 
} from "lucide-react";
import { PRODUCTS, ProductItem } from "@/data/site-data";

interface ProductsSectionProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export default function ProductsSection({ onOpenQuoteModal }: ProductsSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<string>(PRODUCTS[0].id);

  const activeProduct = PRODUCTS.find((p) => p.id === selectedProduct) || PRODUCTS[0];

  return (
    <section id="products" className="py-24 bg-[#07070b] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-pink/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-accent-purple/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-pink/30 mb-4">
            <Cpu className="w-3.5 h-3.5 text-brand-pink" />
            <span className="text-xs uppercase font-bold tracking-wider text-slate-200">
              Proprietary SaaS Ecosystem
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Battle-Tested Software Products <br className="hidden sm:inline" />
            <span className="gradient-text">Built for Indian & Global Scale</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Engineered in-house by Webiz Square to streamline enterprise operations and community finance.
          </p>
        </div>

        {/* Product Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full glass-panel border border-white/[0.1] max-w-md w-full">
            {PRODUCTS.map((prod) => (
              <button
                key={prod.id}
                onClick={() => setSelectedProduct(prod.id)}
                className={`flex-1 py-3 px-4 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  selectedProduct === prod.id
                    ? "bg-brand-pink text-white shadow-brand-glow"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {prod.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Showcase Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/[0.12] shadow-2xl relative overflow-hidden bg-gradient-to-br from-[#0e0e18]/90 via-[#141424]/90 to-[#0a0a10]/95">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-pink/15 text-brand-pink border border-brand-pink/30 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeProduct.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white leading-tight">
                {activeProduct.name}
              </h3>

              <p className="text-base sm:text-lg text-brand-pink-light font-medium">
                {activeProduct.tagline}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {activeProduct.description}
              </p>

              {/* Feature Bullets */}
              <div className="space-y-3 pt-2">
                {activeProduct.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-pink flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onOpenQuoteModal(`Live Demo for ${activeProduct.name}`)}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-brand-pink to-[#ff3d73] hover:shadow-brand-glow transition-all duration-300 flex items-center justify-center group"
                >
                  <span>Schedule Guided Demo</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <a
                  href={`https://wa.me/919172944434?text=Hi%20Webiz%20Square%2C%20I%20am%20interested%20in%20a%20demo%20of%20${encodeURIComponent(activeProduct.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-slate-300 hover:text-white glass-pill border border-white/10 hover:bg-white/[0.08] transition-all text-center flex items-center justify-center"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Stats & Highlight Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              {/* Product Visual Box */}
              <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] relative overflow-hidden">
                <div className="text-center mb-6">
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-2">
                    Live Operational Metrics
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    Empowering Real-World Organizations
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {activeProduct.stats.map((stat, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/[0.06]"
                    >
                      <span className="text-xs sm:text-sm text-slate-300 font-medium">
                        {stat.label}
                      </span>
                      <span className="text-lg sm:text-xl font-extrabold text-brand-pink font-display">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Trust Guarantee */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center space-x-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Data Privacy & Dedicated Database Schema</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
