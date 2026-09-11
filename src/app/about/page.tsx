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

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://nytkode.com/about#webpage",
      "url": "https://nytkode.com/about",
      "name": "About NytKode — Engineering Operational Software",
      "description":
        "Learn about NytKode's origin, philosophy, and mission to engineer operational software systems that eliminate daily business friction.",
      "mainEntity": {
        "@type": "Person",
        "@id": "https://nytkode.com/#founder",
        "name": "Vishesh Sachan",
        "jobTitle": "Founder & Software Engineer",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://nytkode.com/#organization",
          "name": "NytKode",
        },
        "url": "https://www.linkedin.com/in/vishesh-sachan",
        "sameAs": [
          "https://github.com/vishesh-sachan",
          "https://www.linkedin.com/in/vishesh-sachan",
          "https://x.com/visheshsachan21",
          "https://www.instagram.com/visheshsachan21/",
        ],
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
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
