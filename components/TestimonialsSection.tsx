"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Star, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import { TESTIMONIALS, TestimonialItem } from "@/data/site-data";

const allFeedback: TestimonialItem[] = [
  ...TESTIMONIALS,
  {
    id: "5",
    name: "Suresh Patil",
    role: "President",
    company: "Maharashtra Gramin Bachat Mahasangh",
    rating: 5,
    content: "Bachat Gat Online solved our biggest accounting headache. The SMS alerts and audit-ready passbook generators brought complete transparency to over 120 self-help groups in our network.",
    location: "Ahmednagar, Maharashtra",
    service: "Community Finance SaaS"
  },
  {
    id: "6",
    name: "Rohan Kulkarni",
    role: "Co-Founder & CTO",
    company: "EasyVendor Global Solutions",
    rating: 5,
    content: "Their Next.js multi-vendor marketplace architecture easily handled our high-volume RFQ bidding cycles without a glitch. The code quality, modularity, and database indexes are top-notch.",
    location: "Pune, India",
    service: "B2B E-Commerce Platform"
  }
];

const AUTO_SLIDE_INTERVAL = 3500; // 3.5 seconds

export default function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [mounted, setMounted] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const totalItems = allFeedback.length; // 6 items

  useEffect(() => {
    setMounted(true);
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  // Auto-play sliding
  useEffect(() => {
    if (isPaused || !mounted) return;
    const interval = setInterval(() => {
      handleNext();
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused, mounted, startIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
    touchStartX.current = null;
  };

  // Infinite display array by duplicating items
  const duplicatedFeedback = [...allFeedback, ...allFeedback, ...allFeedback];

  // Safe translation value that defaults to 33.333% on SSR
  const translationPercentage = mounted 
    ? startIndex * (100 / itemsPerPage)
    : startIndex * 33.333;

  return (
    <section id="feedback" className="py-24 bg-[#07070b] relative overflow-hidden" suppressHydrationWarning>
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-pink/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent-purple/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-pink/30 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-pink" />
              <span className="text-xs uppercase font-bold tracking-wider text-slate-200">
                Verified Client Feedback
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Trusted by Founders, MDs & <br className="hidden sm:inline" />
              <span className="gradient-text">Enterprise Engineering Leaders</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Real feedback from organizations that scaled their digital footprint, speed, and conversion rates with Webiz Square.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <span className="text-xs text-slate-400 hidden sm:inline-flex items-center mr-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-2"></span>
              {isPaused ? "Paused" : "Auto-sliding"}
            </span>

            <button
              onClick={handlePrev}
              className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/[0.1] hover:bg-brand-pink hover:border-brand-pink text-slate-300 hover:text-white transition-all shadow-sm cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/[0.1] hover:bg-brand-pink hover:border-brand-pink text-slate-300 hover:text-white transition-all shadow-sm cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container (3 Cards on Screen for Desktop) */}
        <div 
          className="relative overflow-hidden w-full -mx-4 px-4 sm:mx-0 sm:px-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-700 ease-out gap-6"
            style={{
              transform: `translateX(-${translationPercentage}%)`
            }}
          >
            {duplicatedFeedback.map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 glass-panel glass-panel-hover rounded-3xl p-8 border border-white/[0.08] flex flex-col justify-between min-h-[340px] relative group"
              >
                {/* Background Quote Watermark */}
                <Quote className="absolute right-6 top-6 w-20 h-20 text-white/[0.02] pointer-events-none" />

                <div>
                  {/* Rating & Service Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex space-x-1 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-pink/15 text-brand-pink border border-brand-pink/30">
                      {review.service}
                    </span>
                  </div>

                  {/* Quote Text */}
                  <p className="text-sm text-slate-200 leading-relaxed italic mb-6 font-normal">
                    "{review.content}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-between pt-5 border-t border-white/[0.06] mt-auto">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center">
                      <span>{review.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 ml-1.5 text-emerald-400" />
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {review.role}, <span className="text-slate-300 font-medium">{review.company}</span>
                    </p>
                  </div>

                  <span className="text-xs text-slate-400 font-medium flex items-center">
                    <MapPin className="w-3 h-3 mr-1 text-brand-pink flex-shrink-0" />
                    <span>{review.location.split(",")[0]}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Indicator Dots */}
        <div className="flex items-center justify-center space-x-2 mt-10">
          {allFeedback.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setStartIndex(dotIdx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                startIndex % totalItems === dotIdx
                  ? "w-8 bg-brand-pink shadow-brand-glow"
                  : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
