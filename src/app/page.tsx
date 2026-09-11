import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TechMarquee } from "@/components/TechMarquee";
import { ProofSection } from "@/components/ProofSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { WhatWeBuildSection } from "@/components/WhatWeBuildSection";
import { MegaProductShowcase } from "@/components/MegaProductShowcase";
import { CommunitySection } from "@/components/CommunitySection";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { FAQSection } from "@/components/FAQSection";
import { FooterSection } from "@/components/FooterSection";
import { HOME_FAQS, generateFaqSchema } from "@/data/faqs";

export const metadata: Metadata = {
  title: "NytKode — Systems that generate more revenue in less time",
  description:
    "We build custom systems that help businesses win more customers, eliminate manual operational friction, and scale revenue.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NytKode — Systems that generate more revenue in less time.",
    description:
      "We build systems that help businesses win more customers, save time, and get more done.",
    url: "https://nytkode.com",
  },
};

const homeFaqSchema = generateFaqSchema(HOME_FAQS, "https://nytkode.com");

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />

      {/* 1. Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero — WHITE */}
        <HeroSection />

        {/* Technical Velocity Marquee — BLACK */}
        <TechMarquee />

        {/* 3. Proof — BLACK */}
        <ProofSection />

        {/* 4. Philosophy — WHITE */}
        <PhilosophySection />

        {/* 5. What We Build — BLACK */}
        <WhatWeBuildSection />

        {/* 6. Commercial Products (MEGA Flagship + Agency Platform) — WHITE */}
        <MegaProductShowcase />

        {/* 7. Community (ACN + Project Installer) — BLACK */}
        <CommunitySection />

        {/* 8. How We Work — WHITE */}
        <HowWeWorkSection />

        {/* 9. Frequently Asked Questions — WHITE */}
        <FAQSection
          items={HOME_FAQS}
          theme="light"
          title="Frequently Asked Questions"
          subtitle="Direct answers to how we operate, who we build for, and how our systems scale revenue."
          className="border-t border-neutral-100"
        />
      </main>

      {/* 10. Footer with Final CTA — BLACK */}
      <FooterSection theme="dark" />
    </div>
  );
}
