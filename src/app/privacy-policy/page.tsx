"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { ContactModal } from "@/components/ContactModal";
import { ArrowLeftIcon } from "@/components/Icons";

export default function PrivacyPolicyPage() {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="space-y-4 mb-14 sm:mb-16 border-b border-neutral-800 pb-10">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors group cursor-pointer"
              >
                <ArrowLeftIcon className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                <span>Back to Home</span>
              </Link>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Privacy Policy
            </h1>

            <p className="text-sm font-mono text-neutral-400">
              Last updated: September 2026
            </p>
          </div>

          {/* Legal Content */}
          <div className="space-y-12 text-base text-neutral-300 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight">
                1. Overview &amp; Commitment
              </h2>
              <p>
                At NytKode (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we respect your privacy and are committed to protecting personal data. This Privacy Policy explains how we collect, process, and safeguard information when you use our website (<Link href="/" className="text-white underline underline-offset-4">nytkode.com</Link>), contact our team, or utilize our software products and automated platforms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight">
                2. Information We Collect
              </h2>
              <p>
                We only collect data necessary to provide and operate our systems:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-400 pl-2">
                <li>
                  <strong className="text-neutral-200">Contact &amp; Business Inquiries:</strong> When you reach out via our contact modal, email, or scheduling workflows, we collect your name, business email address, phone number, and project details.
                </li>
                <li>
                  <strong className="text-neutral-200">System &amp; API Integration Data:</strong> For commercial clients deploying our platforms (e.g. MEGA), operational data necessary to route webhook events, conversational messages, and schedule confirmations is processed in strict compliance with official platform APIs (Meta Graph API, WhatsApp Business API).
                </li>
                <li>
                  <strong className="text-neutral-200">Technical Device Data:</strong> Standard server logs, IP addresses, browser types, and operational metrics collected automatically to maintain system security and uptime.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight">
                3. Standalone &amp; Open Utilities (ACN &amp; Project Igniter)
              </h2>
              <p>
                Our free utilities such as <strong className="text-white">ACN (After Call Notify)</strong> operate strictly with an offline-first privacy doctrine. ACN processes call state actions locally on your Android device with zero external ad tracking and zero unauthorized data harvesting. Open source tooling like <strong className="text-white">Project Igniter</strong> does not transmit proprietary codebases or workflow parameters to central servers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight">
                4. How We Use Information
              </h2>
              <p>
                We use the collected information solely for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-400 pl-2">
                <li>Providing, deploying, and maintaining tailored business software systems.</li>
                <li>Communicating with you regarding technical proposals, support, and updates.</li>
                <li>Preventing malicious activity, fraud, and system misuse.</li>
                <li>Complying with applicable legal obligations.</li>
              </ul>
              <p className="text-neutral-400">
                <strong className="text-neutral-200">Zero Data Monetization:</strong> We do not sell, rent, or trade your personal or business data to third-party advertisers or data brokers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight">
                5. Data Security &amp; Retention
              </h2>
              <p>
                We implement industry-standard administrative, physical, and technical safeguards (including TLS encryption, scoped API tokens, and access-restricted servers) to protect information. Data is retained only as long as necessary to fulfill operational agreements or legal requirements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight">
                6. Contact &amp; Inquiries
              </h2>
              <p>
                For questions regarding this Privacy Policy or data requests, contact us directly at:
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 font-mono text-sm space-y-1 text-neutral-300">
                <div>NytKode Legal &amp; Operations</div>
                <div>Email: <a href="mailto:vishesh@nytkode.com" className="text-white underline">vishesh@nytkode.com</a></div>
                <div>Location: India &bull; Global Operations</div>
              </div>
            </section>
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
