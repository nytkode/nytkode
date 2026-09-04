"use client";

import React, { useState } from "react";
import { METHOD_STEPS } from "../data/content";
import { CheckIcon, ArrowRightIcon, CpuIcon, LayersIcon } from "./Icons";

export const OurMethod: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="method" className="py-24 bg-[#0c0e12] border-y border-white/[0.08] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 mb-4">
            <span>THE INFRASTRUCTURE LIFECYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            How We Work
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Every product we sell started as one business&apos;s problem.
          </p>
        </div>

        {/* 4-Step Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {METHOD_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`relative p-6 rounded-xl cursor-pointer transition-all duration-200 border flex flex-col justify-between ${
                  isActive
                    ? "bg-[#161922] border-white/25 shadow-2xl scale-[1.02]"
                    : "bg-[#101216]/80 border-white/[0.07] hover:bg-[#13161c] hover:border-white/[0.14]"
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold font-mono text-white/40">
                      {step.number}
                    </span>
                    <span
                      className={`text-[10px] font-mono tracking-wider px-2 py-0.5 rounded ${
                        isActive
                          ? "bg-white/10 text-white border border-white/20"
                          : "bg-white/[0.03] text-zinc-500 border border-white/[0.05]"
                      }`}
                    >
                      {step.statusTag}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs font-medium text-zinc-300 mb-3">
                    {step.shortDesc}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {step.longDesc}
                  </p>
                </div>

                {/* Deliverable Box */}
                <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-zinc-400">
                  <div className="text-zinc-500 text-[10px] uppercase mb-1">
                    Deliverable:
                  </div>
                  <div className="text-zinc-200 font-medium">
                    {step.deliverable}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Architecture Simulation Canvas */}
        <div className="bg-[#101216] border border-white/[0.09] rounded-xl p-6 max-w-4xl mx-auto shadow-xl">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06] text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>LIFECYCLE VERIFICATION PIPELINE</span>
            </div>
            <div className="text-zinc-500 text-[11px]">
              STEP [{METHOD_STEPS[activeStep].number} of 04]
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-3.5 rounded bg-black/40 border border-white/[0.06]">
              <div className="text-zinc-500 text-[10px] uppercase mb-1">
                Trigger
              </div>
              <div className="text-zinc-200">
                {activeStep === 0 && "Operational Bottleneck Detected"}
                {activeStep === 1 && "Targeted Architecture Scaffolded"}
                {activeStep === 2 && "Production Deployment Under Load"}
                {activeStep === 3 && "Multi-Tenant Standardized Core"}
              </div>
            </div>

            <div className="p-3.5 rounded bg-black/40 border border-white/[0.06]">
              <div className="text-zinc-500 text-[10px] uppercase mb-1">
                Validation Criteria
              </div>
              <div className="text-zinc-200">
                {activeStep === 0 && "Quantifiable Cost & Manual Hours Lost"}
                {activeStep === 1 && "Zero Speculative Scope / Direct Fix"}
                {activeStep === 2 && "Live Staff Usage & Stress Testing"}
                {activeStep === 3 && "Proven Cross-Business Repeatability"}
              </div>
            </div>

            <div className="p-3.5 rounded bg-black/40 border border-white/[0.06]">
              <div className="text-zinc-500 text-[10px] uppercase mb-1">
                Outcome State
              </div>
              <div className="text-emerald-400">
                {activeStep === 0 && "Root Cause Documented"}
                {activeStep === 1 && "Custom Engine Operating"}
                {activeStep === 2 && "Production Verified"}
                {activeStep === 3 && "Commercial Product Line"}
              </div>
            </div>
          </div>
        </div>

        {/* Closing Philosophy Line */}
        <div className="mt-12 text-center">
          <p className="text-sm sm:text-base italic text-zinc-300 font-sans tracking-wide">
            &ldquo;This is why our products work — they were never theoretical.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};
