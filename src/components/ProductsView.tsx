"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { FAQSection } from "@/components/FAQSection";
import { PRODUCTS_CATALOG_FAQS } from "@/data/faqs";
import { useCalendly } from "@/context/CalendlyContext";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  MessageSquareIcon,
  WorkflowIcon,
  ShieldCheckIcon,
  LayersIcon,
} from "@/components/Icons";

export const ProductsView: React.FC = () => {
  const { openCalendly } = useCalendly();

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      {/* 1. Navigation */}
      <Navbar initialTheme="light" />

      <main className="flex-1 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Heading */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-600 uppercase tracking-widest mb-4">
              <span>PRODUCTS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.06] mb-5">
              Software built by NytKode.
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed">
              Production systems, agency operations, and open utilities designed around the way businesses actually work.
            </p>
          </div>

          {/* ========================================================================= */}
          {/* 01. MEGA — FLAGSHIP SYSTEM                                                */}
          {/* ========================================================================= */}
          <div id="mega" className="group relative bg-neutral-50 border border-neutral-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg mb-12 sm:mb-16 scroll-mt-28 overflow-hidden transition-all duration-500 hover:border-emerald-500/40 hover:shadow-[0_20px_50px_rgba(16,185,129,0.08)]">
            {/* Top Emerald Hover Accent Beam */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Details & Capabilities (8 Cols) */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase bg-black text-white px-3 py-1 rounded">
                      MEGA
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      Multi-Channel Engagement &amp; Growth Automation
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 leading-tight">
                  One system for your customer messaging channels.
                </h2>

                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
                  Automate customer conversations, capture leads from ad comments, qualify intent, and synchronize calendar bookings across WhatsApp, Instagram, Facebook, and Threads without latency or context loss.
                </p>

                {/* Key Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "WhatsApp Cloud API & Direct Appointment Booking",
                    "Instagram DM Ingestion & Comment-to-DM Triggers",
                    "Deterministic Workflow Execution & Lead Routing",
                    "Zero-Latency Human Staff Takeover Thresholds",
                  ].map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700 font-medium">
                      <CheckIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Actions & Quick Facts (4 Cols) */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full bg-white p-6 sm:p-7 rounded-2xl border border-neutral-200/80 shadow-xs space-y-6">
                <div>
                  <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">
                    DEPLOYMENT SUMMARY
                  </div>
                  <div className="space-y-2 text-xs font-mono text-neutral-800">
                    <div className="flex justify-between py-1 border-b border-neutral-100">
                      <span className="text-neutral-500">Channels</span>
                      <span className="font-semibold">WhatsApp &bull; IG &bull; FB &bull; Threads</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-neutral-100">
                      <span className="text-neutral-500">Trigger Latency</span>
                      <span className="text-emerald-700 font-semibold">&lt; 150ms</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-neutral-500">Architecture</span>
                      <span className="font-semibold">Official Cloud APIs</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    href="/products/mega"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-black hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer"
                  >
                    <span>Explore MEGA Details</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => openCalendly()}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 transition-colors cursor-pointer"
                  >
                    <span>Book a Discovery Call</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 02. AGENCY OPERATIONS PLATFORM                                            */}
          {/* ========================================================================= */}
          <div id="agency-operations-platform" className="group relative bg-neutral-50 border border-neutral-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg mb-12 sm:mb-16 scroll-mt-28 overflow-hidden transition-all duration-500 hover:border-emerald-500/40 hover:shadow-[0_20px_50px_rgba(16,185,129,0.08)]">
            {/* Top Emerald Hover Accent Beam */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Details & Capabilities (8 Cols) */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase bg-black text-white px-3 py-1 rounded">
                      AOP
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      Agency Operations Platform
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-[11px] font-mono text-amber-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    <span>In Active Development</span>
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 leading-tight">
                  Operations built for marketing agencies.
                </h2>

                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
                  A purpose-built operational system for small and medium-sized creative agencies to organize clients, raw assets, frame-by-frame approval pipelines, and day-to-day operations in one unified workspace.
                </p>

                {/* Key Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Centralized Asset Ingestion & Cloud Drive Sync",
                    "Frame-by-Frame Client Approval & Review Rooms",
                    "Deterministic Milestone Status Gates",
                    "Zero Lost Revisions & Multi-Account Isolation",
                  ].map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700 font-medium">
                      <CheckIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Actions & Quick Facts (4 Cols) */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full bg-white p-6 sm:p-7 rounded-2xl border border-neutral-200/80 shadow-xs space-y-6">
                <div>
                  <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">
                    PLATFORM SUMMARY
                  </div>
                  <div className="space-y-2 text-xs font-mono text-neutral-800">
                    <div className="flex justify-between py-1 border-b border-neutral-100">
                      <span className="text-neutral-500">Focus</span>
                      <span className="font-semibold">Creative &amp; Growth Agencies</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-neutral-100">
                      <span className="text-neutral-500">Core Impact</span>
                      <span className="text-emerald-700 font-semibold">Zero File Duplication</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-neutral-500">Stage</span>
                      <span className="font-semibold">In Development</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    href="/products/agency-operations-platform"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-black hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer"
                  >
                    <span>View Platform Details</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => openCalendly()}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 transition-colors cursor-pointer"
                  >
                    <span>Discuss Agency Ops</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 03 & 04. FREE & PUBLIC UTILITIES (ACN & Project Igniter)                   */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ACN */}
            <div id="acn" className="group relative bg-neutral-950 text-white border border-neutral-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl flex flex-col justify-between scroll-mt-28 overflow-hidden transition-all duration-500 hover:border-emerald-500/50 hover:shadow-[0_10px_40px_rgba(16,185,129,0.12)]">
              {/* Top Emerald Hover Accent Beam */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase bg-white/10 text-white border border-white/20 px-3 py-1 rounded">
                      ACN
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      After Call Notify
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-widest uppercase bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 px-2.5 py-1 rounded-md">
                    Free Forever
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                  Lightweight Android call action triggers.
                </h3>

                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-6">
                  A privacy-first Android utility that automatically triggers helpful follow-up workflows and notifications right after phone calls.
                </p>

                <div className="space-y-2.5 font-mono text-xs text-neutral-300 mb-8">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Zero ads. 100% free utility.</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Offline-first local device processing.</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/products/acn"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-colors shadow-sm cursor-pointer"
                >
                  <span>Explore ACN Details</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://acn.nytkode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-colors shadow-sm cursor-pointer"
                >
                  <span>acn.nytkode.com</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Project Igniter */}
            <div id="project-igniter" className="group relative bg-neutral-950 text-white border border-neutral-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl flex flex-col justify-between scroll-mt-28 overflow-hidden transition-all duration-500 hover:border-neutral-600 hover:shadow-[0_10px_40px_rgba(255,255,255,0.06)]">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase bg-white/10 text-white border border-white/20 px-3 py-1 rounded">
                      IGNITER
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      Project Igniter
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-widest uppercase bg-white/10 text-white border border-white/20 px-2.5 py-1 rounded-md">
                    Open Source
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                  Visual workflow composer &amp; script generator.
                </h3>

                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-6">
                  A visual development workspace to construct multi-step operational workflows and generate zero-dependency configuration scripts.
                </p>

                <div className="space-y-2.5 font-mono text-xs text-neutral-300 mb-8">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                    <span>Open-source developer tooling.</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                    <span>Public repository available on GitHub.</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="https://github.com/vishesh-sachan/Project_Igniter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-colors shadow-sm cursor-pointer"
                >
                  <span>View on GitHub</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Product Suite FAQ Section */}
          <FAQSection
            items={PRODUCTS_CATALOG_FAQS}
            theme="light"
            title="Frequently Asked Questions"
            subtitle="Answers regarding our software suite, customization capabilities, and deployment architecture."
            className="pt-20 sm:pt-24 border-t border-neutral-200/80 mt-20"
          />
        </div>
      </main>

      {/* Footer */}
      <FooterSection theme="dark" />
    </div>
  );
};
