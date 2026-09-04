"use client";

import React, { useState } from "react";
import { PROBLEM_CATEGORIES } from "../data/content";
import { ArrowRightIcon, ChevronRightIcon, CheckIcon, WorkflowIcon } from "./Icons";

interface ProblemSpaceProps {
  onOpenBooking: (category?: string) => void;
}

export const ProblemSpace: React.FC<ProblemSpaceProps> = ({ onOpenBooking }) => {
  const [selectedId, setSelectedId] = useState<string>(PROBLEM_CATEGORIES[0].id);
  const activeProblem =
    PROBLEM_CATEGORIES.find((p) => p.id === selectedId) || PROBLEM_CATEGORIES[0];

  return (
    <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-2xl mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-sm bg-zinc-400" />
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
            PROBLEM-FIRST TARGETING
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Where the Problems Are
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
          We go where operations are broken — regardless of industry.
        </p>
      </div>

      {/* Interactive Tabs / Vertical Selectors */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: 4 Problem Cards */}
        <div className="lg:col-span-5 space-y-2.5">
          {PROBLEM_CATEGORIES.map((cat, idx) => {
            const isSelected = cat.id === selectedId;
            return (
              <div
                key={cat.id}
                onClick={() => setSelectedId(cat.id)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-200 border text-left ${
                  isSelected
                    ? "bg-[#14171e] border-white/20 shadow-lg"
                    : "bg-[#101216]/60 border-white/[0.06] hover:bg-white/[0.03] hover:border-white/[0.12]"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono text-zinc-500">
                    [0{idx + 1}] {cat.industry}
                  </span>
                  {isSelected && (
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/10 text-white">
                      INSPECTING
                    </span>
                  )}
                </div>
                <h3
                  className={`text-base font-semibold tracking-tight mb-1 ${
                    isSelected ? "text-white" : "text-zinc-300"
                  }`}
                >
                  {cat.name}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-2">
                  {cat.shortPain}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column: Deep-Dive Operational Breakdown */}
        <div className="lg:col-span-7">
          <div className="h-full bg-[#101216] border border-white/[0.1] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono text-zinc-400 block mb-1">
                    TARGET DOMAIN: {activeProblem.industry.toUpperCase()}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {activeProblem.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono text-emerald-400 px-2.5 py-1 rounded bg-emerald-950/40 border border-emerald-800/40 font-medium">
                    {activeProblem.metricsImpact}
                  </span>
                </div>
              </div>

              {/* The Core Bottleneck */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
                  <span>The Operational Bottleneck</span>
                </h4>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed bg-white/[0.02] p-3.5 rounded-lg border border-white/[0.05]">
                  {activeProblem.detailedPain}
                </p>
              </div>

              {/* Symptoms Checklist */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                  <span>Recurring Failure Modes</span>
                </h4>
                <ul className="space-y-2">
                  {activeProblem.symptoms.map((symptom, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-1.5 shrink-0" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* The Engineered Solution */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                  <span>NytKode Infrastructure Solution</span>
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {activeProblem.solutionOutcome}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {activeProblem.solutionTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-zinc-400">
                Experiencing this operational friction?
              </span>
              <button
                onClick={() => onOpenBooking(activeProblem.name)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-md transition-colors cursor-pointer"
              >
                <span>Diagnose This Bottleneck</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Note under grid */}
      <div className="mt-8 p-4 rounded-lg bg-white/[0.02] border border-white/[0.07] text-center max-w-3xl mx-auto">
        <p className="text-xs sm:text-sm text-zinc-400">
          <strong className="text-zinc-200">The Problem Space:</strong> If your
          business runs on manual messages, spreadsheets, and &ldquo;someone
          remembers to do it&rdquo; — that&apos;s our problem space.
        </p>
      </div>
    </section>
  );
};
