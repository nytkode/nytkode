"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { FAQSection } from "@/components/FAQSection";
import { AGENCY_OPS_FAQS } from "@/data/faqs";
import { useCalendly } from "@/context/CalendlyContext";
import {
  ArrowRightIcon,
  ChevronRightIcon,
  CheckIcon,
  WorkflowIcon,
  ShieldCheckIcon,
  LayersIcon,
} from "@/components/Icons";

export const AgencyOperationsDetailPage: React.FC = () => {
  const { openCalendly } = useCalendly();

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <Navbar initialTheme="light" />

      <main className="flex-1 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-8 sm:mb-12">
            <Link href="/products" className="hover:text-black transition-colors">
              Products
            </Link>
            <ChevronRightIcon className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-neutral-900 font-medium truncate">Agency Operations Platform</span>
          </div>

          {/* Hero Section */}
          <div className="max-w-4xl mb-16 sm:mb-20">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="flex items-center gap-2.5">
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

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.06] mb-6">
              Operations built for high-velocity marketing agencies.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 font-normal leading-relaxed max-w-3xl mb-8">
              A purpose-built operational system for small and medium creative agencies to organize client deliverables, raw assets, frame-by-frame approval pipelines, and day-to-day operations in one unified workspace.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => openCalendly()}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-semibold text-white bg-black hover:bg-neutral-800 transition-colors cursor-pointer shadow-sm"
              >
                <span>Discuss Agency Operations</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* The 3 Core Bottlenecks Solved */}
          <div className="mb-20">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-2">
                THE PROBLEM SPACE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
                Where agency operations break down.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200/90 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-neutral-400 mb-3">01 // ASSET SCATTER</div>
                  <h3 className="text-lg font-bold text-neutral-950 mb-2">
                    Scattered Google Drive &amp; Slack links
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Creative teams waste 40% of their day hunting for raw footage, master PSDs, and final export files across disorganized cloud storage folders.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200 text-xs font-mono text-emerald-700 font-semibold">
                  &rarr; Centralized Ingestion Engine
                </div>
              </div>

              <div className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200/90 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-neutral-400 mb-3">02 // CLIENT APPROVAL CHAOS</div>
                  <h3 className="text-lg font-bold text-neutral-950 mb-2">
                    Lost feedback in message threads
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Clients send conflicting revisions across WhatsApp, email, and Loom, causing editors to produce redundant cut versions and miss deadlines.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200 text-xs font-mono text-emerald-700 font-semibold">
                  &rarr; Frame-by-Frame Client Portals
                </div>
              </div>

              <div className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200/90 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-neutral-400 mb-3">03 // PIPELINE BLIND SPOTS</div>
                  <h3 className="text-lg font-bold text-neutral-950 mb-2">
                    Zero visibility into delivery status
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Account managers become human routers, manually checking who is working on what asset, leading to missed client retainers and burnout.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200 text-xs font-mono text-emerald-700 font-semibold">
                  &rarr; Automated Milestone Gates
                </div>
              </div>
            </div>
          </div>

          {/* Platform Architecture Highlights */}
          <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-neutral-950 text-white border border-neutral-800">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-2">
                SYSTEM MODULES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
                Engineered for clarity and delivery velocity.
              </h2>
              <p className="text-sm sm:text-base text-neutral-400">
                A single source of truth across all active agency client accounts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Asset Centralization",
                  desc: "Automatic tagging, resolution indexing, and direct cloud storage sync with zero manual re-uploading.",
                },
                {
                  title: "Client Review Portals",
                  desc: "White-label feedback rooms where clients can approve creative cuts with one click and leave time-stamped feedback.",
                },
                {
                  title: "Delivery Status Gates",
                  desc: "Deterministic status progression: Raw Ingest &rarr; Editing &rarr; Client Review &rarr; Approved &rarr; Auto-Published.",
                },
                {
                  title: "Role-Based Access",
                  desc: "Isolated access boundaries for clients, contract editors, full-time creators, and account directors.",
                },
              ].map((mod, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-2">{mod.title}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">{mod.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                    <CheckIcon className="w-3.5 h-3.5" />
                    <span>Included Module</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Agency Platform FAQ Section */}
          <FAQSection
            items={AGENCY_OPS_FAQS}
            theme="light"
            title="Frequently Asked Questions"
            subtitle="Details on asset pipelines, client approval rooms, version control, and multi-tenant isolation."
            className="mb-20 pt-12 border-t border-neutral-200"
          />

          {/* Bottom Consultation CTA */}
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-100 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 mb-2">
                Scale your agency operations with software.
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Whether you manage 10 or 100 client retainers, we design custom systems that eliminate operational drag.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => openCalendly()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-semibold text-white bg-black hover:bg-neutral-800 transition-colors cursor-pointer shadow-sm"
              >
                <span>Book an Operations Call</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <FooterSection theme="dark" />
    </div>
  );
};
