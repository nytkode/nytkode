"use client";

import React, { useState } from "react";
import { CASE_STUDIES } from "../data/content";
import { ArrowRightIcon, ArrowUpRightIcon, CheckIcon, XIcon, MessageSquareIcon, LayersIcon } from "./Icons";

interface CaseStudiesProps {
  onOpenBooking: (topic?: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenBooking }) => {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const activeModalData = CASE_STUDIES.find((c) => c.id === selectedCase);

  return (
    <section id="work" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-sm bg-zinc-400" />
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              DEPLOYED CASE STUDIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            From the Field
          </h2>
          <p className="text-base text-zinc-400 max-w-xl">
            Real operational bottlenecks transformed into reliable production software.
          </p>
        </div>

        <button
          onClick={() => setSelectedCase(CASE_STUDIES[0].id)}
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-white pb-1 border-b border-zinc-700 hover:border-white transition-colors cursor-pointer w-fit"
        >
          <span>View All Work &amp; Architecture</span>
          <ArrowRightIcon className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Case Study Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {CASE_STUDIES.map((study) => (
          <div
            key={study.id}
            className="bg-[#101216] border border-white/[0.09] rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/[0.18] transition-all group"
          >
            <div>
              {/* Top metadata */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  {study.industry}
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                  PRODUCTION DEPLOYED
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-zinc-100">
                {study.title}
              </h3>
              <p className="text-xs font-mono text-zinc-400 mb-6">
                {study.subtitle}
              </p>

              {/* Quote / Problem & Solution */}
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-lg bg-black/40 border border-white/[0.05]">
                  <div className="text-[11px] font-mono text-red-400/90 uppercase tracking-wider mb-1">
                    The Problem:
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1">
                    The Solution:
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {study.solution}
                  </p>
                </div>
              </div>

              {/* Architecture Data Flow */}
              <div className="p-3.5 rounded-lg bg-[#0a0c0e] border border-white/[0.07] mb-6 text-xs font-mono space-y-1.5">
                <div className="text-zinc-500 text-[10px] uppercase">
                  Data Flow Pipeline:
                </div>
                <div className="text-zinc-400 text-[11px] flex items-center gap-1.5 flex-wrap">
                  <span className="text-zinc-300">{study.architectureSnippet.input}</span>
                  <span className="text-zinc-600">→</span>
                  <span className="text-zinc-300">{study.architectureSnippet.processing}</span>
                  <span className="text-zinc-600">→</span>
                  <span className="text-emerald-400">{study.architectureSnippet.output}</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {study.results.map((res, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04] text-center"
                  >
                    <div className="text-base sm:text-lg font-bold font-mono text-white">
                      {res.value}
                    </div>
                    <div className="text-[10px] text-zinc-400 leading-tight mt-0.5">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tags & Button */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                <button
                  onClick={() => setSelectedCase(study.id)}
                  className="text-xs font-mono text-zinc-300 hover:text-white inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Inspect Architecture Spec</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenBooking(study.title)}
                  className="text-xs font-semibold px-3 py-1.5 rounded bg-white/[0.06] hover:bg-white text-zinc-200 hover:text-zinc-900 transition-colors cursor-pointer"
                >
                  Deploy Similar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Deep-Dive Modal */}
      {activeModalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-3xl bg-[#101216] border border-white/20 rounded-xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white bg-white/[0.04] border border-white/[0.08]"
            >
              <XIcon className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="pr-8">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                {activeModalData.industry}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                {activeModalData.title}
              </h3>
              <p className="text-sm font-mono text-zinc-400 mb-6">
                {activeModalData.subtitle}
              </p>

              <div className="space-y-6 text-sm text-zinc-300 leading-relaxed">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Operational Context &amp; Root Problem
                  </h4>
                  <p className="p-4 rounded-lg bg-black/40 border border-white/[0.06]">
                    {activeModalData.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Engineered System Architecture
                  </h4>
                  <p className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    {activeModalData.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Live Operational Metrics
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {activeModalData.results.map((res, i) => (
                      <div
                        key={i}
                        className="p-3 rounded bg-white/[0.03] border border-white/[0.06] text-center"
                      >
                        <div className="text-xl font-bold font-mono text-emerald-400">
                          {res.value}
                        </div>
                        <div className="text-xs text-zinc-400 mt-1">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-zinc-400">
                  Ready to deploy this infrastructure pattern in your operations?
                </span>
                <button
                  onClick={() => {
                    const topic = activeModalData.title;
                    setSelectedCase(null);
                    onOpenBooking(topic);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-colors"
                >
                  Schedule Solution Architecture Call
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
