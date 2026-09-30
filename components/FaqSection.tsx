"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";
import { FAQS } from "@/data/site-data";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#090910] relative overflow-hidden border-t border-white/[0.06]">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-pink/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-pink/30 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-brand-pink" />
            <span className="text-xs uppercase font-bold tracking-wider text-slate-200">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Clear Answers on Architecture, <br className="hidden sm:inline" />
            <span className="gradient-text">Timelines & Engineering</span>
          </h2>

          <p className="mt-4 text-base text-slate-400">
            Have questions before initiating your project? Here are the most common inquiries we address.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "border-brand-pink/40 bg-white/[0.05]" 
                    : "border-white/[0.08] hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white/[0.04] transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? "rotate-180 text-brand-pink bg-brand-pink/20" : "text-slate-400"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/[0.04] animate-in fade-in duration-200 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Prompt */}
        <div className="mt-12 text-center text-xs sm:text-sm text-slate-400">
          <span>Still have questions? </span>
          <a
            href="https://wa.me/919172944434?text=Hi%20Webiz%20Square%2C%20I%20have%20a%20question%20regarding%20my%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-pink font-semibold hover:underline"
          >
            Chat directly with our tech team on WhatsApp →
          </a>
        </div>

      </div>
    </section>
  );
}
