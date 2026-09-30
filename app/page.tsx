"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import CostCalculator from "@/components/CostCalculator";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import LegalModal, { LegalType } from "@/components/LegalModal";

export default function HomePage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);
  const [activeLegalType, setActiveLegalType] = useState<LegalType>(null);

  const handleOpenQuoteModal = (serviceName?: string) => {
    setPrefilledService(serviceName);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setPrefilledService(undefined);
  };

  return (
    <main className="min-h-screen bg-[#07070b] text-slate-100 flex flex-col selection:bg-brand-pink selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Hero Section */}
      <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Infinite Client Logo Ticker */}
      <ClientMarquee />

      {/* Services Matrix & Capabilities */}
      <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Featured Case Studies & Visual Portfolio */}
      <PortfolioSection onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Proprietary SaaS & Product Spotlights (Webiz Square One & Bachat Gat Online) */}
      <ProductsSection onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Engineering Excellence & Comparative Matrix */}
      <WhyChooseUs />

      {/* 5-Step Agile Engineering Lifecycle */}
      <ProcessSection />

      {/* Interactive Project Investment & Timeline Estimator */}
      <CostCalculator onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Verified Client Testimonials & Social Proof (Automatic 3-Cards Slider) */}
      <TestimonialsSection />

      {/* Schema-Optimized Technical FAQ Accordion */}
      <FaqSection />

      {/* High-Impact Global CTA Banner */}
      <CtaBanner onOpenQuoteModal={() => handleOpenQuoteModal("Discovery Consultation")} />

      {/* Mega Footer with Clickable Legal Links */}
      <Footer onOpenLegal={(type) => setActiveLegalType(type)} />

      {/* Global Interactive Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        prefilledService={prefilledService}
      />

      {/* Global Legal Compliance Modal */}
      <LegalModal
        type={activeLegalType}
        onClose={() => setActiveLegalType(null)}
      />

      {/* Floating Interactive WhatsApp Direct Widget */}
      <WhatsAppWidget />
    </main>
  );
}
