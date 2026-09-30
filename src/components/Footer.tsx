"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Send, 
  Check, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github,
  ShieldCheck,
  FileText,
  Lock
} from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/data/site-data";

interface FooterProps {
  onOpenLegal?: (type: "privacy" | "terms" | "security") => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#050508] border-t border-white/[0.08] text-slate-400 text-xs sm:text-sm relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-pink/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block relative w-44 h-10 mb-2">
              <Image
                src="/logo/webiz-white-logo.png"
                alt="Webiz Square Logo"
                fill
                className="object-contain"
              />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Webiz Square Software Solutions LLP is an industry-leading software engineering and digital transformation agency headquartered in Nashik, Maharashtra. We engineer bespoke, lightning-fast digital solutions for clients worldwide.
            </p>

            {/* NAP Info */}
            <div className="space-y-2.5 pt-2 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-pink flex-shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-pink flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-brand-pink flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-brand-pink flex-shrink-0" />
                <span>{SITE_CONFIG.workingHours}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-3">
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-brand-pink hover:text-white text-slate-300 transition-all border border-white/[0.06]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-brand-pink hover:text-white text-slate-300 transition-all border border-white/[0.06]"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-brand-pink hover:text-white text-slate-300 transition-all border border-white/[0.06]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-brand-pink hover:text-white text-slate-300 transition-all border border-white/[0.06]"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href="#services"
                    className="hover:text-brand-pink transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-pink/40 group-hover:bg-brand-pink mr-2 transition-colors"></span>
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products & Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              Products & Hub
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#products" className="hover:text-brand-pink transition-colors">
                  Webiz Square One ERP
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-brand-pink transition-colors">
                  Bachat Gat Online
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-brand-pink transition-colors">
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-brand-pink transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-brand-pink transition-colors">
                  Agile Process
                </Link>
              </li>
              <li>
                <Link href="#calculator" className="hover:text-brand-pink transition-colors">
                  Cost Estimator
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-brand-pink transition-colors">
                  FAQ Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Direct Inquiry (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              Tech Insights Newsletter
            </h4>
            <p className="text-xs text-slate-400">
              Subscribe to our monthly engineering bulletin covering Next.js, enterprise ERP architecture, and SEO strategies.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center space-x-2">
                <Check className="w-4 h-4 flex-shrink-0" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-pink"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-brand-pink hover:bg-brand-pink-hover text-white text-xs font-bold transition-colors flex items-center"
                  >
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </form>
            )}

            {/* Direct WhatsApp Callout */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] mt-4">
              <span className="text-[11px] font-semibold text-slate-300 block mb-1">
                Instant Developer Support
              </span>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%20Webiz%20Square%2C%20I%20have%20an%20urgent%20project%20query`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand-pink hover:underline font-bold flex items-center"
              >
                Chat on WhatsApp (+91 91729 44434) →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Interactive Legal Links */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div suppressHydrationWarning>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={() => onOpenLegal && onOpenLegal("privacy")}
              className="hover:text-brand-pink transition-colors cursor-pointer flex items-center space-x-1"
            >
              <span>Privacy Policy</span>
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => onOpenLegal && onOpenLegal("terms")}
              className="hover:text-brand-pink transition-colors cursor-pointer flex items-center space-x-1"
            >
              <span>Terms & Conditions</span>
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => onOpenLegal && onOpenLegal("security")}
              className="hover:text-brand-pink transition-colors cursor-pointer flex items-center space-x-1"
            >
              <span>Security Policy</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
