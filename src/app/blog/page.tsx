import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Journal & Engineering Insights",
  description:
    "Architectural blueprints, operational strategies, and engineering lessons on building high-reliability software that drives business revenue.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "NytKode Journal — Systems, Operations & Software Architecture",
    description:
      "Architectural blueprints, operational strategies, and engineering lessons on building software that drives real revenue.",
    url: "https://nytkode.com/blog",
  },
};

interface Article {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  internalLinkText: string;
  internalHref: string;
}

export default function BlogPage() {
  const articles: Article[] = [
    {
      slug: "healthcare-whatsapp-automation",
      category: "Case Study & Architecture",
      date: "February 2026",
      readTime: "5 min read",
      title: "Engineering High-Reliability WhatsApp Workflows for Multi-Doctor Healthcare Operations",
      subtitle: "How deterministic state machines processed 66+ booked consultations in 30 days without front-desk manual overhead.",
      excerpt:
        "When multi-specialty healthcare practices scale, front-desk communication bottlenecks cause missed appointments and lost revenue. Here is how we engineered an automated WhatsApp booking engine across multiple doctors and clinic branches.",
      internalLinkText: "Read production case study",
      internalHref: "/work/healthcare-appointment-automation",
    },
    {
      slug: "operational-software-vs-generic-saas",
      category: "Operational Philosophy",
      date: "January 2026",
      readTime: "4 min read",
      title: "Why Operational Software Generates More Revenue Than Generic SaaS",
      subtitle: "Off-the-shelf software forces businesses to adapt to rigid templates. Purpose-built systems adapt to how revenue is actually generated.",
      excerpt:
        "Most businesses don't need another generic CRM subscription. They need connected rails between inbound channels, customer conversations, and internal fulfillment that make missed opportunities mathematically impossible.",
      internalLinkText: "Explore our commercial products",
      internalHref: "/products",
    },
    {
      slug: "meta-automation-architecture",
      category: "Systems Engineering",
      date: "January 2026",
      readTime: "6 min read",
      title: "Building Instant-Response Engines for WhatsApp, Instagram & Facebook Inbound",
      subtitle: "The architecture behind MEGA: Sub-150ms trigger detection, dynamic slot querying, and non-blocking human takeover thresholds.",
      excerpt:
        "Customers expect replies within 60 seconds. Learn how MEGA ingests inbound comments, DMs, and WhatsApp inquiries to qualify intent and capture customer commitments in real-time.",
      internalLinkText: "Learn more about MEGA",
      internalHref: "/products#mega",
    },
    {
      slug: "open-source-developer-tooling",
      category: "Open Source",
      date: "December 2025",
      readTime: "3 min read",
      title: "Why We Build Open Source: ACN and Project Igniter",
      subtitle: "Not everything we engineer needs to be commercialized. Releasing lightweight utilities freely for the developer and business community.",
      excerpt:
        "From offline Android after-call utilities to visual workflow composes, explore why NytKode contributes open-source software with zero tracking and permissive licenses.",
      internalLinkText: "Explore community projects",
      internalHref: "/#community",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      {/* 1. Navigation */}
      <Navbar initialTheme="light" />

      <main className="flex-1 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Heading */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-100 border border-neutral-200 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-800 mb-4">
              NytKode Journal
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.06] mb-5">
              Engineering insights &amp; operational blueprints.
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed">
              How we think about operational friction, automated systems, and high-reliability software architecture.
            </p>
          </div>

          {/* Articles Feed */}
          <div className="space-y-10 sm:space-y-12">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group block bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 transition-all shadow-xs hover:shadow-md"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  {/* Metadata (3 cols) */}
                  <div className="lg:col-span-3 space-y-2 font-mono text-xs text-neutral-500">
                    <div className="inline-block px-2.5 py-1 rounded bg-neutral-200/70 text-neutral-800 font-semibold uppercase tracking-wider text-[11px]">
                      {article.category}
                    </div>
                    <div className="pt-2">{article.date}</div>
                    <div>{article.readTime}</div>
                  </div>

                  {/* Content (9 cols) */}
                  <div className="lg:col-span-9 space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight leading-snug group-hover:text-black transition-colors">
                      {article.title}
                    </h2>

                    <p className="text-base sm:text-lg text-neutral-700 font-medium leading-relaxed">
                      {article.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="pt-3">
                      <Link
                        href={article.internalHref}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-neutral-700 transition-colors"
                      >
                        <span className="border-b border-black group-hover:border-neutral-700 pb-0.5">
                          {article.internalLinkText}
                        </span>
                        <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Footer with Final CTA */}
      <FooterSection theme="dark" />
    </div>
  );
}
