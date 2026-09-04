"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProofSection } from "@/components/ProofSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { WhatWeBuildSection } from "@/components/WhatWeBuildSection";
import { MegaProductShowcase } from "@/components/MegaProductShowcase";
import { CommunitySection } from "@/components/CommunitySection";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { OriginDirectiveSection } from "@/components/OriginDirectiveSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { FooterSection } from "@/components/FooterSection";
import { ContactModal } from "@/components/ContactModal";
import { CaseStudyModal } from "@/components/CaseStudyModal";

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState<string | undefined>(undefined);

  const handleOpenContact = (subject?: string) => {
    setContactSubject(subject);
    setContactOpen(true);
  };

  const handleCloseContact = () => {
    setContactOpen(false);
    setContactSubject(undefined);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-black selection:text-white">
      {/* 1. Navigation */}
      <Navbar onTalkToUs={() => handleOpenContact()} />

      <main className="flex-1">
        {/* 2. Hero — WHITE */}
        <HeroSection onTalkToUs={() => handleOpenContact()} />

        {/* 3. Proof — BLACK */}
        <ProofSection onOpenCaseStudy={() => setCaseStudyOpen(true)} />

        {/* 4. Philosophy — WHITE */}
        <PhilosophySection />

        {/* 5. What We Build — BLACK */}
        <WhatWeBuildSection />

        {/* 6. Commercial Products (MEGA Flagship + Agency Platform) — WHITE */}
        <MegaProductShowcase onTalkToUs={handleOpenContact} />

        {/* 7. Community (ACN + Project Installer) — BLACK */}
        <CommunitySection />

        {/* 8. How We Work — WHITE */}
        <HowWeWorkSection />

        {/* 9. Origin / Directive (Founder & Company Purpose) — BLACK */}
        <OriginDirectiveSection />

        {/* 10. Final CTA — WHITE / HIGH CONTRAST */}
        <FinalCTASection onTalkToUs={() => handleOpenContact()} />
      </main>

      {/* 11. Footer — BLACK */}
      <FooterSection onTalkToUs={() => handleOpenContact()} />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactOpen}
        onClose={handleCloseContact}
        defaultSubject={contactSubject}
      />

      <CaseStudyModal
        isOpen={caseStudyOpen}
        onClose={() => setCaseStudyOpen(false)}
        onTalkToUs={() => handleOpenContact("Healthcare Case Study Inquiry")}
      />
    </div>
  );
}
