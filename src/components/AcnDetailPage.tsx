"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { FAQSection } from "@/components/FAQSection";
import { ACN_FAQS } from "@/data/faqs";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ChevronRightIcon,
  CheckIcon,
  ShieldCheckIcon,
  WorkflowIcon,
} from "@/components/Icons";

export const AcnDetailPage: React.FC = () => {
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
            <span className="text-neutral-900 font-medium truncate">ACN — After Call Notify</span>
          </div>

          {/* Hero Section with Visual Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 sm:mb-24">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold tracking-widest uppercase bg-black text-white px-3 py-1 rounded">
                    ACN
                  </span>
                  <span className="text-xs font-mono text-neutral-500">
                    After Call Notify
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-md">
                  Free Forever
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.06]">
                Lightweight Android call action triggers.
              </h1>

              <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl">
                A privacy-first Android utility that automatically triggers customizable post-call workflows, message templates, and quick actions right when a phone call ends.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://acn.nytkode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-xs font-semibold text-white bg-black hover:bg-neutral-800 transition-colors cursor-pointer shadow-sm"
                >
                  <span>Visit acn.nytkode.com</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Visual Phone Shell (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[320px] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 bg-neutral-950 p-2">
                <Image
                  src="/acn.png"
                  alt="ACN Android Application Interface"
                  width={400}
                  height={800}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Core Philosophy & Privacy Standards */}
          <div className="mb-20">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-2">
                ENGINEERING PRINCIPLES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
                Built with zero bloat and absolute privacy.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200/90 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 mb-4 shadow-2xs">
                    <ShieldCheckIcon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950 mb-2">
                    100% Offline-First
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    All call event detection and notification triggers happen strictly on your local device. No data is sent to external servers or telemetry endpoints.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center gap-1.5 text-xs font-mono text-emerald-700 font-semibold">
                  <CheckIcon className="w-3.5 h-3.5" />
                  <span>Zero Cloud Syncing</span>
                </div>
              </div>

              <div className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200/90 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 mb-4 shadow-2xs">
                    <WorkflowIcon className="w-5 h-5 text-neutral-900" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950 mb-2">
                    Custom Quick Actions
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Configure one-tap WhatsApp messages, SMS templates, or follow-up note reminders that display right after finishing a business or personal call.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center gap-1.5 text-xs font-mono text-emerald-700 font-semibold">
                  <CheckIcon className="w-3.5 h-3.5" />
                  <span>Instant Follow-ups</span>
                </div>
              </div>

              <div className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200/90 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 mb-4 shadow-2xs">
                    <span className="text-xs font-mono font-bold text-neutral-900">0%</span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950 mb-2">
                    Zero Ads &amp; Free Forever
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    ACN is a community contribution from NytKode. No ads, no popups, no premium tiers, and no background battery drain.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center gap-1.5 text-xs font-mono text-emerald-700 font-semibold">
                  <CheckIcon className="w-3.5 h-3.5" />
                  <span>Community Utility</span>
                </div>
              </div>
            </div>
          </div>

          {/* ACN FAQ Section */}
          <FAQSection
            items={ACN_FAQS}
            theme="light"
            title="Frequently Asked Questions"
            subtitle="Direct answers regarding privacy, Android permissions, offline architecture, and custom triggers."
            className="mb-20 pt-12 border-t border-neutral-200"
          />

          {/* Bottom Portal Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950 text-white border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Download ACN for Android.
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Visit the standalone portal to get the latest APK release, view installation guides, and read full documentation.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3 w-full sm:w-auto">
              <a
                href="https://acn.nytkode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-colors cursor-pointer shadow-sm"
              >
                <span>Visit acn.nytkode.com</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <FooterSection theme="dark" />
    </div>
  );
};
