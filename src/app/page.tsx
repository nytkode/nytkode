import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProofSection } from "@/components/ProofSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { WhatWeBuildSection } from "@/components/WhatWeBuildSection";
import { MegaProductShowcase } from "@/components/MegaProductShowcase";
import { CommunitySection } from "@/components/CommunitySection";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { FooterSection } from "@/components/FooterSection";

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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      {/* 1. Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero — WHITE */}
        <HeroSection />

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
      </main>

      {/* 9. Footer with Final CTA — BLACK */}
      <FooterSection theme="dark" />
    </div>
  );
}
