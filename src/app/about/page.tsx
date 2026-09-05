import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { OriginDirectiveSection } from "@/components/OriginDirectiveSection";
import { FooterSection } from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "About Us — Engineering Operational Software",
  description:
    "Learn about NytKode's origin, philosophy, and mission to engineer deterministic operational systems that eliminate daily business friction.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About NytKode — Engineering Operational Software for Real Business Work",
    description:
      "We build software for the work businesses actually do. Learn about NytKode's founder, mission, and engineering principles.",
    url: "https://nytkode.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      {/* 1. Navigation */}
      <Navbar initialTheme="dark" />

      <main className="flex-1">
        {/* 2. Origin & Directive Section (Founder, Mission, Directives) */}
        <OriginDirectiveSection />
      </main>

      {/* 3. Footer (Black Background with Final CTA) */}
      <FooterSection theme="dark" />
    </div>
  );
}
