"use client";

import React, { useState } from "react";
import { ArrowRightIcon, ChevronRightIcon, SparklesIcon, CheckIcon } from "./Icons";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const flowSteps = [
    {
      id: "problem",
      tag: "STAGE 01",
      name: "Problem",
      badge: "Real Bottleneck",
      short: "Identify expensive friction inside live operations",
      detail:
        "We audit where manual tasks break: unorganized WhatsApp chats, spreadsheet chaos, or missed follow-ups.",
      example: "Clinic losing 25% bookings to manual WhatsApp delays",
    },
    {
      id: "build",
      tag: "STAGE 02",
      name: "Build",
      badge: "Custom Engine",
      short: "Rapidly engineer bespoke infrastructure for one business",
      detail:
        "We build direct integrations, webhook pipelines, and robust backend logic tailored to their exact workflow.",
      example: "Built automated Meta API booking & reminder engine",
    },
    {
      id: "deploy",
      tag: "STAGE 03",
      name: "Deploy",
      badge: "Live Testing",
      short: "Launch in production and stress-test under real conditions",
      detail:
        "The system runs with live customers and staff. We optimize response times, error handling, and usability.",
      example: "Deployed across 12 clinic branches; no-shows drop 85%",
    },
    {
      id: "product",
      tag: "STAGE 04",
      name: "Product",
      badge: "Scale Solution",
      short: "Abstract and turn what works into a repeatable product",
      detail:
        "Once verified under pressure, the core architecture is standardized into an industry-ready product line.",
      example: "Turnkey Meta Automation Tool & Drive CMS",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Ambient Radial Highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-zinc-800/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline Badge */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>OPERATIONS INFRASTRUCTURE &amp; SOFTWARE</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            We Build the Infrastructure Businesses Run On.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            NytKode is a B2B software company that finds real operational
            problems inside businesses — communication, workflows, automation,
            internal systems — solves them, and turns what works into products.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 active:scale-[0.98] rounded-lg transition-all cursor-pointer shadow-lg shadow-white/5"
            >
              <span>Book a Call</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>

            <a
              href="#method"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded-lg transition-all"
            >
              <span>See Our Method</span>
              <ChevronRightIcon className="w-4 h-4 text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Horizontal Diagram Strip: Problem → Build → Deploy → Product */}
        <div className="relative mt-8 max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              <span>THE NYTKODE OPERATIONAL LIFECYCLE</span>
            </div>
          </div>

          {/* Diagram Container */}
          <div className="bg-[#101216] border border-white/[0.09] rounded-xl p-4 sm:p-6 shadow-2xl">
            {/* Desktop / Tablet 4-Step Horizontal Bar */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
              {flowSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    onMouseEnter={() => setActiveStep(idx)}
                    className={`relative p-4 rounded-lg cursor-pointer transition-all duration-200 border ${
                      isActive
                        ? "bg-[#161920] border-white/20 shadow-md"
                        : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.1]"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono tracking-wider text-zinc-500">
                        {step.tag}
                      </span>
                      {isActive && (
                        <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-white/10 text-white">
                          ACTIVE
                        </span>
                      )}
                    </div>

                    {/* Step Title */}
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3
                        className={`text-base font-semibold tracking-tight transition-colors ${
                          isActive ? "text-white" : "text-zinc-300"
                        }`}
                      >
                        {step.name}
                      </h3>
                      {idx < flowSteps.length - 1 && (
                        <span className="hidden md:inline-block text-zinc-600 text-xs font-mono">
                          →
                        </span>
                      )}
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-zinc-400 leading-snug line-clamp-2">
                      {step.short}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Interactive Live Inspection Pane */}
            <div className="mt-4 pt-4 border-t border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs bg-black/30 rounded-lg p-3 px-4">
              <div className="flex items-start md:items-center gap-3">
                <div className="px-2 py-1 rounded bg-white/[0.08] text-white font-mono text-[11px] uppercase tracking-wide shrink-0">
                  {flowSteps[activeStep].badge}
                </div>
                <p className="text-zinc-300 font-normal">
                  <strong className="text-white font-medium">
                    {flowSteps[activeStep].name}:
                  </strong>{" "}
                  {flowSteps[activeStep].detail}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 text-zinc-400 font-mono text-[11px] bg-white/[0.03] px-3 py-1.5 rounded border border-white/[0.06]">
                <span className="text-zinc-500">REAL CASE:</span>
                <span className="text-zinc-200">
                  {flowSteps[activeStep].example}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
