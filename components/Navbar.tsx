"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Phone, 
  Sparkles, 
  Globe, 
  Cpu, 
  ShoppingBag, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  MessageSquare, 
  ShieldCheck 
} from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/data/site-data";

interface NavbarProps {
  onOpenQuoteModal: (service?: string) => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-5 h-5 text-brand-pink" />,
  Cpu: <Cpu className="w-5 h-5 text-brand-pink" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-brand-pink" />,
  Smartphone: <Smartphone className="w-5 h-5 text-brand-pink" />,
  Palette: <Palette className="w-5 h-5 text-brand-pink" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-brand-pink" />,
  MessageSquare: <MessageSquare className="w-5 h-5 text-brand-pink" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-brand-pink" />,
};

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="w-full bg-gradient-to-r from-[#0d0d16] via-[#1c1224] to-[#0d0d16] border-b border-white/[0.06] py-2 px-4 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
            </span>
            <span className="font-medium text-white">Q4 Enterprise Software & Web Development Booking Open</span>
            <span className="hidden sm:inline-block text-slate-400">• Free Architecture Consultation</span>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-slate-400">
            <a 
              href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`} 
              className="flex items-center hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-brand-pink" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%20Webiz%20Square%2C%20I%20would%20like%20to%20discuss%20a%20project`}
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 inline-block"></span>
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "glass-panel py-3 shadow-2xl border-b border-white/[0.08]"
            : "bg-[#07070b]/80 backdrop-blur-md py-4 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-40 sm:w-48 h-10 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo/webiz-white-logo.png"
                  alt="Webiz Square Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                href="#hero"
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-full transition-all duration-200"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  className="flex items-center px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-full transition-all duration-200 group"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 ml-1.5 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-brand-pink" : "text-slate-400"}`} />
                </button>

                {/* Mega Menu Popup */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full -left-20 w-[640px] pt-3 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="glass-panel p-5 rounded-2xl shadow-2xl border border-white/[0.12] bg-[#0c0c14]/95 backdrop-blur-2xl">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
                        <span className="text-xs font-semibold uppercase tracking-wider text-brand-pink flex items-center">
                          <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                          Enterprise Solutions & Capabilities
                        </span>
                        <Link 
                          href="#services" 
                          onClick={() => setServicesDropdownOpen(false)}
                          className="text-xs text-slate-400 hover:text-white flex items-center"
                        >
                          View all 8 services <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.id}
                            href="#services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="flex items-start p-3 rounded-xl hover:bg-white/[0.05] border border-transparent hover:border-white/[0.08] transition-all duration-200 group/item"
                          >
                            <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] group-hover/item:border-brand-pink/50 group-hover/item:bg-brand-pink/10 transition-colors mr-3 mt-0.5">
                              {serviceIcons[s.iconName] || <Globe className="w-4 h-4 text-brand-pink" />}
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-white group-hover/item:text-brand-pink transition-colors">
                                {s.title}
                              </h4>
                              <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                                {s.shortDesc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Mega Menu Footer Banner */}
                      <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between bg-white/[0.02] -mx-5 -mb-5 p-4 rounded-b-2xl">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-slate-300">Need a bespoke architecture plan?</span>
                        </div>
                        <button
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            onOpenQuoteModal();
                          }}
                          className="text-xs font-semibold text-brand-pink hover:text-brand-pink-light flex items-center"
                        >
                          Get Free Estimate <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="#portfolio"
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-full transition-all duration-200"
              >
                Portfolio
              </Link>

              <Link
                href="#products"
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-full transition-all duration-200 flex items-center"
              >
                <span>Products</span>
                <span className="ml-1.5 text-[10px] uppercase font-bold bg-brand-pink/20 text-brand-pink px-1.5 py-0.5 rounded-full border border-brand-pink/30">
                  ERP
                </span>
              </Link>

              <Link
                href="#why-us"
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-full transition-all duration-200"
              >
                Why Us
              </Link>

              <Link
                href="#process"
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-full transition-all duration-200"
              >
                Process
              </Link>

              <Link
                href="#calculator"
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-full transition-all duration-200"
              >
                Pricing
              </Link>

              <Link
                href="#faq"
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-full transition-all duration-200"
              >
                FAQ
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={() => onOpenQuoteModal()}
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 rounded-full group overflow-hidden bg-gradient-to-r from-brand-pink to-[#ff3d73] hover:shadow-brand-glow"
              >
                <span className="relative flex items-center">
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-brand-pink rounded-full"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-brand-pink" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-panel border-b border-white/[0.1] bg-[#090910]/98 px-4 pt-4 pb-6 space-y-3 mt-3 animate-in slide-in-from-top-4 duration-300">
            <div className="grid grid-cols-1 gap-1">
              <Link
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/[0.06]"
              >
                Home
              </Link>
              <Link
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/[0.06]"
              >
                Services
              </Link>
              <Link
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/[0.06]"
              >
                Portfolio
              </Link>
              <Link
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/[0.06]"
              >
                Proprietary Products (Webiz Square One)
              </Link>
              <Link
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/[0.06]"
              >
                Why Choose Us
              </Link>
              <Link
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/[0.06]"
              >
                Process
              </Link>
              <Link
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/[0.06]"
              >
                Cost Calculator
              </Link>
              <Link
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/[0.06]"
              >
                FAQ
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/[0.06]"
              >
                Contact Us
              </Link>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-brand-pink to-[#ff3d73] rounded-xl shadow-brand-glow"
              >
                Request Free Estimate
              </button>

              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`}
                className="w-full py-2.5 text-center text-xs text-slate-300 bg-white/[0.04] border border-white/[0.08] rounded-xl flex items-center justify-center"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-brand-pink" />
                <span>Call {SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
