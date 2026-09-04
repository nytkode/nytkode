"use client";

import React from "react";
import Image from "next/image";
import { NytKodeLogo } from "./NytKodeLogo";

export const OriginDirectiveSection: React.FC = () => {
  return (
    <section id="about" data-theme="dark" className="bg-black text-white py-28 sm:py-40 border-b border-neutral-800 relative overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>ORIGIN STORY &amp; FOUNDATION</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Where NytKode comes from.
          </h2>
        </div>

        {/* Editorial Composition: Story & Founder Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Story Narrative (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-100 tracking-tight leading-snug">
              NytKode was born from building software around real operational problems.
            </h3>

            <div className="space-y-4 text-base sm:text-lg text-neutral-400 leading-relaxed font-normal">
              <p>
                Too many companies are held together by fragile spreadsheet formulas, missed WhatsApp messages, and disconnected SaaS subscriptions that don&apos;t talk to each other.
              </p>
              <p>
                Businesses don&apos;t need more generic tools or speculative features. They lose thousands of hours and substantial revenue every month simply because their daily operations rely on human memory and repetitive manual coordination.
              </p>
              <p className="text-neutral-300">
                We started NytKode to fix that — engineering durable software systems that plug directly into real workflows, run autonomously, and eliminate friction at the root.
              </p>
            </div>
          </div>

          {/* Founder Editorial Visual Card (Right 5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              {/* Founder Image Container (Easily replaceable asset) */}
              <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 mb-6 flex items-center justify-center group">
                {/* Fallback Graphic Frame with Logo Mark */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-white/5 border border-white/15 flex items-center justify-center mb-4">
                    <NytKodeLogo size={52} variant="light" />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                    ENGINEERING &bull; INFRASTRUCTURE &bull; SYSTEMS
                  </div>
                </div>

                {/* Optional Replaceable Image */}
                <Image
                  src="/founder.jpg"
                  alt="Vishesh Sachan"
                  fill
                  className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  onError={(e) => {
                    // Hide if image doesn't exist
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>

              {/* Founder Metadata */}
              <div className="flex items-center justify-between border-t border-neutral-800 pt-4">
                <div>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    Vishesh Sachan
                  </h4>
                  <p className="text-xs font-mono text-neutral-400">
                    Founder, NytKode
                  </p>
                </div>

                <span className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-neutral-400">
                  EST. 2026
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Directive Banner */}
        <div className="border-t border-neutral-800 pt-16">
          <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-6">
            THE COMPANY DIRECTIVE
          </div>
          <blockquote className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] max-w-5xl">
            &ldquo;Build systems that give businesses back their time — and help them capture more revenue.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
};
