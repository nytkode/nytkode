import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Work & Production Case Studies",
  description:
    "Real systems engineered for operational reliability and business results. Explore our production case studies and operational workflows.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Our Work & Case Studies — NytKode Engineering in Production",
    description:
      "Real systems engineered for operational reliability and business results. Explore our production case studies.",
    url: "https://nytkode.com/work",
  },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      {/* 1. Navigation */}
      <Navbar initialTheme="light" />

      <main className="flex-1 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Heading */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.06] mb-5">
              Our work.
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed">
              Real systems engineered for operational reliability and business results.
            </p>
          </div>

          {/* ========================================================================= */}
          {/* CASE STUDY LISTING (Direct, unbloated card based on Proof section)        */}
          {/* ========================================================================= */}
          <div className="space-y-10">
            <Link
              href="/work/healthcare-appointment-automation"
              className="group block bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 transition-all shadow-sm hover:shadow-md"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Metric & Tag (Left 4 cols) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-200/80 text-[11px] font-mono text-neutral-800 font-semibold uppercase tracking-wider">
                    Healthcare Operations
                  </div>

                  <div>
                    <div className="text-6xl sm:text-7xl md:text-8xl font-black font-mono tracking-tighter text-neutral-950 leading-none">
                      66+
                    </div>
                    <div className="text-base sm:text-lg font-semibold text-neutral-800 mt-2">
                      Appointments in one month
                    </div>
                  </div>
                </div>

                {/* Narrative & Headline (Right 8 cols) */}
                <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight leading-snug group-hover:text-black transition-colors">
                      Multi-Doctor Healthcare Operations &amp; Appointment System
                    </h2>

                    <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
                      An automated WhatsApp appointment workflow built for a multi-specialty healthcare operation, supporting multiple doctors and clinic locations.
                    </p>

                    <p className="text-sm font-mono text-neutral-500 pt-1">
                      Multiple doctors &bull; Multiple locations &bull; One automated workflow
                    </p>
                  </div>

                  {/* Link CTA */}
                  <div className="pt-2 flex items-center gap-2 text-sm sm:text-base font-semibold text-black group-hover:text-neutral-700 transition-colors">
                    <span className="border-b border-black group-hover:border-neutral-700 pb-0.5">
                      Read full case study
                    </span>
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterSection theme="dark" />
    </div>
  );
}
