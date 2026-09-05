"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { ContactModal } from "@/components/ContactModal";
import {
  ArrowRightIcon,
  ChevronRightIcon,
  HospitalIcon,
  BadgeCheckIcon,
  ReplyIcon,
  ListBulletIcon,
} from "@/components/Icons";

export default function HealthcareCaseStudyPage() {
  const [contactOpen, setContactOpen] = useState(false);
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
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      {/* 1. Navigation */}
      <Navbar onTalkToUs={() => handleOpenContact()} initialTheme="dark" />

      <main className="flex-1 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-8 sm:mb-12">
            <Link href="/work" className="hover:text-white transition-colors">
              Our Work
            </Link>
            <ChevronRightIcon className="w-3.5 h-3.5 text-neutral-600" />
            <span className="text-neutral-200 truncate">
              Healthcare Appointment Automation
            </span>
          </div>

          {/* Title & Metadata */}
          <div className="space-y-6 mb-14 sm:mb-16 border-b border-neutral-800 pb-12 sm:pb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 uppercase tracking-widest">
              <span>CASE STUDY &bull; PRODUCTION ENGINEERING</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.06]">
              Multi-Doctor Healthcare Operations System
            </h1>

            <p className="text-xl sm:text-2xl text-neutral-300 font-normal leading-relaxed">
              An automated WhatsApp appointment workflow built for a multi-specialty healthcare facility, coordinating multiple doctors, clinical branches, and real-time scheduling.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 sm:mb-20">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-5xl sm:text-6xl font-extrabold font-mono text-white leading-none mb-2">
                66+
              </div>
              <div className="text-sm font-semibold text-neutral-200">
                Appointments Handled
              </div>
              <div className="text-xs text-neutral-500 font-mono mt-1">
                In a single operating month
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white leading-tight mb-2">
                Multi-Doctor
              </div>
              <div className="text-sm font-semibold text-neutral-200">
                Specialist Routing
              </div>
              <div className="text-xs text-neutral-500 font-mono mt-1">
                Distinct shift &amp; slot models
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white leading-tight mb-2">
                Multi-Branch
              </div>
              <div className="text-sm font-semibold text-neutral-200">
                Location Sync
              </div>
              <div className="text-xs text-neutral-500 font-mono mt-1">
                Zero double-booking errors
              </div>
            </div>
          </div>

          {/* Detailed Narrative Breakdown */}
          <div className="space-y-12 text-base sm:text-lg text-neutral-300 leading-relaxed">
            {/* The Operational Challenge */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
                01 // The Operational Challenge
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                High patient volume with fragmented front-desk coordination.
              </h3>
              <p className="text-neutral-400">
                The healthcare operation was receiving dozens of daily appointment inquiries across calls and messages. Staff were manually answering repetitive availability questions, checking doctor schedules across physical locations, and typing manual reminders—leading to front-desk fatigue, response delays, and dropped consultations.
              </p>
            </div>

            {/* The Engineered Solution */}
            <div className="space-y-4 border-t border-neutral-850 pt-10">
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
                02 // The Engineered System
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Deterministic event-driven WhatsApp scheduling pipeline.
              </h3>
              <p className="text-neutral-400">
                We designed and deployed an automated WhatsApp business flow that guides patients through doctor selection, branch location picking, live calendar slot reservation, and instant confirmation cards.
              </p>

              <div className="space-y-3 pt-2 font-mono text-sm text-neutral-300">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Interactive doctor &amp; branch selection menus</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Real-time dynamic slot availability locking</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Automated calendar sync and 24h reminder sequence</span>
                </div>
              </div>
            </div>

            {/* The Impact */}
            <div className="space-y-4 border-t border-neutral-850 pt-10">
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
                03 // Results &amp; Impact
              </h2>
              <p className="text-neutral-400">
                Over 66 patient appointments were scheduled and processed in the first month with zero manual data entry required by front-desk personnel, saving hours of staff time while boosting patient consultation conversions.
              </p>
            </div>
          </div>

          {/* Bottom Action Card */}
          <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-2xl font-bold text-white tracking-tight mb-2">
                Need similar infrastructure for your business?
              </h4>
              <p className="text-sm text-neutral-400">
                Tell us what is slowing your operations down.
              </p>
            </div>

            <a
              href="https://calendly.com/nytkode/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-semibold text-black bg-white hover:bg-neutral-200 transition-colors cursor-pointer shrink-0 shadow-md"
            >
              <span>Book a call</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterSection onTalkToUs={() => handleOpenContact()} theme="dark" />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={handleCloseContact}
        defaultSubject={contactSubject}
      />
    </div>
  );
}
