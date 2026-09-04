"use client";

import React from "react";
import { TELEMETRY_STATS } from "../data/content";
import { ShieldCheckIcon, CpuIcon, LayersIcon } from "./Icons";

export const TrustStrap: React.FC = () => {
  return (
    <section id="about" className="py-14 border-y border-white/[0.07] bg-[#0c0e12]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Statement Box */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[11px] font-mono text-zinc-400 tracking-wider uppercase">
                POSITIONING PRINCIPLE
              </span>
            </div>

            <blockquote className="text-xl sm:text-2xl md:text-2xl font-medium tracking-tight text-white leading-snug mb-3">
              &ldquo;Not an agency. Not a single-product SaaS. We&apos;re an operations infrastructure company — we build for one business first, then productize what repeats.&rdquo;
            </blockquote>

            <p className="text-sm font-normal text-zinc-400 flex items-center gap-2">
              <span className="inline-block w-1 h-1 rounded-full bg-zinc-600" />
              Currently deployed across healthcare, aesthetics, and marketing services.
            </p>
          </div>

          {/* Quick Metrics / Signals */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3">
            {TELEMETRY_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex flex-col justify-center"
              >
                <div className="text-lg sm:text-xl font-bold tracking-tight text-white font-mono">
                  {stat.value}
                </div>
                <div className="text-[11px] text-zinc-400 font-sans mt-0.5 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
