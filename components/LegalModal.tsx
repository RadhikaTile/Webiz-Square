"use client";

import React, { useEffect } from "react";
import { X, ShieldCheck, FileText, Lock } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export type LegalType = "privacy" | "terms" | "security" | null;

interface LegalModalProps {
  type: LegalType;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && type) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-panel rounded-3xl border border-white/20 bg-[#0c0c16] p-6 sm:p-10 shadow-2xl text-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Close Legal Window"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content based on type */}
        {type === "privacy" && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-3 rounded-2xl bg-brand-pink/15 text-brand-pink border border-brand-pink/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-brand-pink">
                  Legal Compliance
                </span>
                <h3 className="text-2xl font-display font-bold text-white">
                  Privacy Policy
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              Last Updated: September 2026 • Compliant with DPDP Act (India) & Global Privacy Guidelines
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              <div>
                <h4 className="font-bold text-white mb-1">1. Information We Collect</h4>
                <p>
                  When you request a quote, submit an inquiry, or interact with {SITE_CONFIG.name}, we may collect your name, email address, phone/WhatsApp number, company name, and project specifications. We do not collect sensitive payment data directly on our marketing pages.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1">2. Purpose of Data Processing</h4>
                <p>
                  Your information is utilized solely to evaluate project requirements, prepare technical architecture proposals, coordinate development sprints, and provide ongoing technical support. We never sell, lease, or distribute your contact details to third-party advertisers.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1">3. Data Security & Storage</h4>
                <p>
                  All lead communications and data transmissions are encrypted using 256-bit SSL/TLS protocols. Access to client databases and architecture documents is strictly restricted to authorized engineering personnel under strict Non-Disclosure Agreements (NDAs).
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1">4. Your Rights</h4>
                <p>
                  Under applicable data protection laws, you retain the right to access, rectify, or request the permanent deletion of your contact records by emailing us at <a href={`mailto:${SITE_CONFIG.email}`} className="text-brand-pink underline">{SITE_CONFIG.email}</a>.
                </p>
              </div>
            </div>
          </div>
        )}

        {type === "terms" && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-3 rounded-2xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-cyan-400">
                  Client Agreement
                </span>
                <h3 className="text-2xl font-display font-bold text-white">
                  Terms & Conditions
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              Governing Software Engineering Services by {SITE_CONFIG.name}
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              <div>
                <h4 className="font-bold text-white mb-1">1. Service Scope & Milestones</h4>
                <p>
                  All software development, custom ERP implementations, and web projects are governed by formal sprint milestone agreements. Scope modifications or feature additions outside agreed sprint deliverables are documented via change requests.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1">2. 100% Intellectual Property Ownership</h4>
                <p>
                  Upon final milestone settlement, the client holds 100% full legal intellectual property (IP) rights, source code ownership, and repository assets. {SITE_CONFIG.name} retains no proprietary lock-in on custom-built client code.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1">3. Warranty & Defect Rectification</h4>
                <p>
                  Every completed software build includes a complimentary 30-day post-launch warranty period during which any technical bugs or deviations from the approved technical spec are rectified at zero additional charge.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1">4. Payment & Cancellation</h4>
                <p>
                  Invoicing follows structured milestone schedules (e.g., Discovery &rarr; Prototype &rarr; Beta &rarr; Production). Dedicated server hosting and third-party API costs (e.g., WhatsApp Cloud API, cloud domains) remain the client&apos;s direct subscription assets.
                </p>
              </div>
            </div>
          </div>
        )}

        {type === "security" && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-3 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                  Infrastructure & Hardening
                </span>
                <h3 className="text-2xl font-display font-bold text-white">
                  Security Policy
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              Enterprise Data Protection & Vulnerability Mitigation Standards
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              <div>
                <h4 className="font-bold text-white mb-1">1. Architecture Hardening</h4>
                <p>
                  We eliminate traditional vulnerability vectors by avoiding vulnerable CMS plugins. Our applications run on pre-rendered Next.js edge environments with parameterized queries and strict Content Security Policies (CSP).
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1">2. Database Schema Isolation</h4>
                <p>
                  All database models in PostgreSQL / Supabase are isolated with strict Row Level Security (RLS) policies and encrypted at rest using AES-256 standards.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1">3. Automated Backups & Disaster Recovery</h4>
                <p>
                  Enterprise plans include automated daily encrypted off-site database backups and automated health-check monitoring pings every 3 minutes.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1">4. Responsible Disclosure</h4>
                <p>
                  If you identify any security anomaly or potential vulnerability, please report it immediately to our security response team at <a href={`mailto:${SITE_CONFIG.email}`} className="text-brand-pink underline">{SITE_CONFIG.email}</a>.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="pt-6 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-brand-pink hover:bg-brand-pink-hover shadow-brand-glow transition-all cursor-pointer"
          >
            I Understand & Close
          </button>
        </div>

      </div>
    </div>
  );
}
