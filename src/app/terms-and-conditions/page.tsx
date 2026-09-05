import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { ArrowLeftIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms of service, operational agreements, and acceptable use policies for NytKode software and engineering services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions — NytKode",
    description:
      "Terms of service and operational agreements for NytKode products and engineering engagements.",
    url: "https://nytkode.com/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      {/* 1. Navigation */}
      <Navbar initialTheme="dark" />

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
              Terms &amp; Conditions
            </h1>

            <p className="text-sm font-mono text-neutral-400">
              Last updated: September 2026
            </p>
          </div>

          {/* Legal Content */}
          <div className="space-y-12 text-base text-neutral-300 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the website, platforms, software, and services provided by NytKode (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), you agree to be bound by these Terms &amp; Conditions. If you do not agree to these terms, please do not access or use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight">
                2. Software Engineering &amp; Commercial Services
              </h2>
              <p>
                NytKode designs, builds, and deploys custom software systems, automation pipelines, and operational platforms (including MEGA). Specific deliverables, service level commitments, and payment milestones for client contracts are governed by individual Master Services Agreements (MSAs) or Statements of Work (SOWs) executed directly between NytKode and the client entity.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight">
                3. Third-Party Platforms &amp; API Policies
              </h2>
              <p>
                Certain NytKode products interact with third-party platforms (such as Meta Platforms, Inc., WhatsApp Business API, Instagram Graph API, Google Cloud, and Android OS). Clients and users must comply with all third-party terms of service, acceptable use policies, and developer guidelines. NytKode is not responsible for policy changes, rate limits, or service disruptions originating from external third-party infrastructure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight">
                4. Intellectual Property
              </h2>
              <p>
                All proprietary algorithms, brand emblems, wordmarks, UI designs, codebases, and website content belonging to NytKode remain the exclusive intellectual property of NytKode unless explicitly assigned under custom client contract. Open-source utilities (such as Project Igniter) are distributed under their respective open-source licenses (MIT License).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight">
                5. Limitation of Liability &amp; Disclaimers
              </h2>
              <p>
                Our services and website are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express or implied. To the maximum extent permitted by applicable law, NytKode shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our systems.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight">
                6. Contact Information
              </h2>
              <p>
                For questions regarding these Terms &amp; Conditions, please reach out to:
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
      <FooterSection theme="dark" />
    </div>
  );
}
