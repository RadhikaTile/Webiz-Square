"use client";

import React, { useState, useEffect } from "react";
import { 
  X, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MessageSquare, 
  ArrowRight 
} from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/data/site-data";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export default function QuoteModal({ isOpen, onClose, prefilledService }: QuoteModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(prefilledService || "Custom Website Development");
  const [budget, setBudget] = useState("₹50k – ₹1.5 Lakhs");
  const [timeline, setTimeline] = useState("2 – 4 Weeks");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setService(prefilledService);
    }
  }, [prefilledService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulated quick submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto glass-panel rounded-3xl border border-white/20 bg-[#0c0c16] p-6 sm:p-10 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Submission Success State */
          <div className="py-8 text-center space-y-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center shadow-lg border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-display font-extrabold text-white">
                Quote Request Received!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-white">{name || "there"}</span>. Our lead software architect will review your requirements and reach out within 2 hours with an initial blueprint.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] max-w-md mx-auto text-left text-xs space-y-2 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Selected Service:</span>
                <span className="font-bold text-white">{service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Target Budget:</span>
                <span className="font-bold text-brand-pink">{budget}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Timeline:</span>
                <span className="font-bold text-white">{timeline}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%20Webiz%20Square%2C%20I%20just%20submitted%20a%20quote%20request%20for%20${encodeURIComponent(service)}.%20My%20name%20is%20${encodeURIComponent(name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Follow Up Instantly on WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.06] border border-white/10"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form State */
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-pink/15 text-brand-pink border border-brand-pink/30 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant Consultation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Request a Detailed Proposal
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Tell us about your project. Receive an architecture roadmap, sprint schedule, and exact quote within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-pink"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-pink"
                  />
                </div>
              </div>

              {/* Email & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-pink"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Service of Interest *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#131320] border border-white/[0.1] text-xs sm:text-sm text-white focus:outline-none focus:border-brand-pink"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Webiz Square One ERP">Webiz Square One (Custom ERP)</option>
                    <option value="Bachat Gat Online">Bachat Gat Online (SHG SaaS)</option>
                    <option value="Full Digital Transformation">Complete Digital Transformation</option>
                  </select>
                </div>
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Target Budget Range
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#131320] border border-white/[0.1] text-xs sm:text-sm text-white focus:outline-none focus:border-brand-pink"
                  >
                    <option value="₹25k – ₹50k">₹25,000 – ₹50,000 (MVP / Landing)</option>
                    <option value="₹50k – ₹1.5 Lakhs">₹50,000 – ₹1.5 Lakhs (Growth Store / Web App)</option>
                    <option value="₹1.5 Lakhs – ₹3.5 Lakhs">₹1.5 Lakhs – ₹3.5 Lakhs (Custom Software / App)</option>
                    <option value="₹3.5 Lakhs+">₹3.5 Lakhs+ (Enterprise ERP / Ecosystem)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Target Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#131320] border border-white/[0.1] text-xs sm:text-sm text-white focus:outline-none focus:border-brand-pink"
                  >
                    <option value="1 – 2 Weeks (Urgent)">1 – 2 Weeks (Fast Track)</option>
                    <option value="2 – 4 Weeks">2 – 4 Weeks (Standard)</option>
                    <option value="1 – 2 Months">1 – 2 Months (Enterprise)</option>
                    <option value="Flexible">Flexible / Discovery Phase</option>
                  </select>
                </div>
              </div>

              {/* Message / Brief */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Brief Project Requirements & Goals (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share any specific features, reference links, or challenges you wish to solve..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-pink"
                ></textarea>
              </div>

              {/* Security & Submission */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-pink to-[#ff3d73] hover:shadow-brand-glow transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting Blueprint Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit & Request Architecture Blueprint</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Strict NDA & 100% Privacy Protection Guaranteed</span>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
