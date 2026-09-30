"use client";

import React from "react";
import Image from "next/image";
import { CLIENT_LOGOS } from "@/data/site-data";

export default function ClientMarquee() {
  // Duplicate logos for smooth infinite loop
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-14 border-y border-white/[0.06] bg-[#090910] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center relative z-10">
        <p className="text-xs uppercase font-bold tracking-widest text-slate-400">
          Trusted by High-Growth Companies & Enterprises Across India & Globally
        </p>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-[#090910] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-[#090910] to-transparent pointer-events-none" />

        <div className="flex w-max animate-marquee space-x-8 sm:space-x-12 items-center py-2">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 w-32 sm:h-20 sm:w-40 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-pink/40 hover:bg-white/[0.07] transition-all duration-300 group shadow-sm flex-shrink-0"
            >
              <div className="relative h-10 w-28 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 filter grayscale group-hover:grayscale-0">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
