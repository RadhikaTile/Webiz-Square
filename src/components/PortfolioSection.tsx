"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  ExternalLink, 
  Layers, 
  Eye, 
  ArrowRight, 
  X, 
  CheckCircle2 
} from "lucide-react";
import { PORTFOLIO_ITEMS, PortfolioItem } from "@/data/site-data";

interface PortfolioSectionProps {
  onOpenQuoteModal: (projectName?: string) => void;
}

type PortfolioFilter = "all" | "web" | "erp" | "branding" | "packaging";

export default function PortfolioSection({ onOpenQuoteModal }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>("all");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filteredItems = activeFilter === "all"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#090910] relative overflow-hidden border-t border-white/[0.06]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-pink/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-pink/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-pink" />
            <span className="text-xs uppercase font-bold tracking-wider text-slate-200">
              Proven Track Record
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Featured Case Studies & <br className="hidden sm:inline" />
            <span className="gradient-text">Engineered Digital Products</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Explore a curated selection of our high-conversion websites, enterprise platforms, brand identities, and packaging systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Work" },
            { id: "web", label: "Web & E-Commerce" },
            { id: "branding", label: "Branding & Creative" },
            { id: "packaging", label: "Packaging & Print" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as PortfolioFilter)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeFilter === tab.id
                  ? "bg-brand-pink text-white shadow-brand-glow"
                  : "glass-pill text-slate-300 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedProject(item)}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-white/[0.08] cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-black/40 border-b border-white/[0.06]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090910] via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-slate-200 border border-white/10">
                      {item.categoryLabel}
                    </span>
                    <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-brand-pink/90 backdrop-blur-md text-white shadow-brand-glow">
                      {item.metrics}
                    </span>
                  </div>

                  {/* Hover Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <span className="p-3 rounded-full bg-brand-pink text-white shadow-brand-glow flex items-center space-x-1.5 text-xs font-bold">
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-medium text-slate-400 block mb-1">
                    {item.client}
                  </span>
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-brand-pink transition-colors mb-2 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Tech Stack */}
              <div className="px-6 pb-6 pt-0 flex flex-wrap gap-1.5 border-t border-white/[0.04] mt-2 pt-3">
                {item.tech.slice(0, 3).map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]"
                  >
                    {t}
                  </span>
                ))}
                {item.tech.length > 3 && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-pink/10 text-brand-pink border border-brand-pink/20 font-bold">
                    +{item.tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Project Prompt Banner */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400 mb-4">
            Have a project in mind similar to one of our showcases?
          </p>
          <button
            onClick={() => onOpenQuoteModal("Custom Project Based on Portfolio")}
            className="inline-flex items-center px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-brand-pink to-[#ff3d73] hover:shadow-brand-glow transition-all duration-300"
          >
            <span>Request a Tailored Case Study & Estimate</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl border border-white/20 bg-[#0c0c16] p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden mb-6 bg-black/60 border border-white/10">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Badges */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-brand-pink/20 text-brand-pink border border-brand-pink/30">
                {selectedProject.categoryLabel}
              </span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                {selectedProject.metrics}
              </span>
            </div>

            <h3 className="text-2xl font-display font-bold text-white mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Client: <span className="text-white font-medium">{selectedProject.client}</span>
            </p>

            <p className="text-sm text-slate-200 leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            {/* Tech Stack in Modal */}
            <div className="mb-6">
              <span className="text-xs font-semibold text-slate-400 block mb-2">
                Technologies & Tools Applied:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/[0.06] text-slate-300 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  const title = selectedProject.title;
                  setSelectedProject(null);
                  onOpenQuoteModal(`Inquiry for ${title}`);
                }}
                className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-pink hover:bg-brand-pink-hover shadow-brand-glow transition-all text-center"
              >
                Discuss Similar Architecture
              </button>
              <button
                onClick={() => setSelectedProject(null)}
                className="py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.06] border border-white/10 text-center"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
