"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Show prompt after 4 seconds if not interacted
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleOpenWhatsApp = () => {
    setHasInteracted(true);
    setShowTooltip(false);
    window.open(
      `https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%20Webiz%20Square%2C%20I%20am%20interested%20in%20discussing%20a%20software%20%2F%20web%20development%20project.`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="mb-3 max-w-xs glass-panel p-4 rounded-2xl border border-white/20 bg-[#0d0d18]/95 shadow-2xl animate-in slide-in-from-bottom-3 duration-300 relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
              setHasInteracted(true);
            }}
            className="absolute top-2.5 right-2.5 p-1 rounded-full text-slate-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 font-bold text-xs">
              WS
            </div>
            <div>
              <p className="text-xs font-bold text-white mb-0.5">
                Webiz Square Tech Desk
              </p>
              <p className="text-[11px] text-slate-300 leading-relaxed mb-2.5">
                Have a project idea? Chat directly with our technical lead on WhatsApp for instant guidance.
              </p>
              <button
                onClick={handleOpenWhatsApp}
                className="inline-flex items-center px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold transition-colors"
              >
                <span>Start Direct Chat</span>
                <Send className="w-3 h-3 ml-1.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleOpenWhatsApp}
        className="relative group p-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg hover:shadow-emerald-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Chat with Webiz Square on WhatsApp"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"></span>
        <MessageSquare className="w-6 h-6 relative z-10" />
      </button>
    </div>
  );
}
