"use client";

import React from "react";
import { ArrowRightIcon, CheckIcon, ShieldCheckIcon } from "./Icons";

interface ProofSectionProps {
  onOpenCaseStudy: () => void;
}

export const ProofSection: React.FC<ProofSectionProps> = ({ onOpenCaseStudy }) => {
  return (
    <section
      id="proof"
      data-theme="dark"
      className="bg-black text-white py-24 sm:py-32 border-b border-neutral-800 relative overflow-hidden"
    >
      {/* Subtle Dark Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>PROVEN PRODUCTION SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Built for real business operations.
            </h2>
          </div>

          <div>
            <button
              onClick={onOpenCaseStudy}
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white pb-1 border-b border-neutral-700 hover:border-white transition-colors cursor-pointer"
            >
              <span>View case study</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Asymmetric Proof Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Dominant Primary Metric (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-2xl p-8 sm:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8">
              <span>LIVE APPOINTMENT ENGINE TELEMETRY</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-emerald-400">
                VERIFIED IN PRODUCTION
              </span>
            </div>

            <div className="my-auto">
              <div className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter text-white font-mono leading-none mb-4">
                66+
              </div>
              <p className="text-xl sm:text-2xl font-medium text-neutral-300 tracking-tight">
                appointments handled
              </p>
              <p className="text-sm text-neutral-500 mt-2 max-w-md leading-relaxed">
                End-to-end automated scheduling, reminders, dynamic doctor calendar allocation, and real-time patient status coordination.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Error Rate: 0.00%</span>
              <span className="text-white">Multi-Department Integration</span>
            </div>
          </div>

          {/* Secondary Proof Panels (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Panel 1: Multi-Doctor Workflows */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 flex-1 flex flex-col justify-between shadow-lg">
              <div>
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3">
                  WORKFLOW COMPLEXITY
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                  Multi-doctor workflows
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Multiple doctors with individual workflows and locations. Dynamic assignment rules based on specialty, shifts, and doctor availability.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-neutral-800 flex items-center gap-2 text-xs font-mono text-neutral-400">
                <CheckIcon className="w-4 h-4 text-emerald-400" />
                <span>Zero calendar conflicts</span>
              </div>
            </div>

            {/* Panel 2: Multi-Location Setup */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 flex-1 flex flex-col justify-between shadow-lg">
              <div>
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3">
                  DISTRIBUTED INFRASTRUCTURE
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                  Multi-location setup
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Built to handle operations across multiple locations. Synchronized database state across physical branches without manual double-entry.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-neutral-800 flex items-center gap-2 text-xs font-mono text-neutral-400">
                <CheckIcon className="w-4 h-4 text-emerald-400" />
                <span>Centralized operational command</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
