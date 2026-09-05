"use client";

import React from "react";

export const HowWeWorkSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "FIND THE FRICTION",
      summary: "Identify where businesses lose time, opportunities, or efficiency.",
      detail:
        "We audit daily operational bottlenecks — where employees are copy-pasting data, manual messages are dropping leads, or fragmented tools are causing delays.",
    },
    {
      num: "02",
      title: "DESIGN THE SYSTEM",
      summary: "Map the workflow and determine what should be automated, connected, or rebuilt.",
      detail:
        "We create a deterministic architectural blueprint. We define the state machine, webhook events, database schema, and staff handoff thresholds.",
    },
    {
      num: "03",
      title: "BUILD & DEPLOY",
      summary: "Build the software and infrastructure and put it into real operation.",
      detail:
        "We engineer high-reliability production software and deploy directly into the live business environment, stress-testing against real customer interactions.",
    },
    {
      num: "04",
      title: "MAKE IT REPEATABLE",
      summary: "When a solution proves useful beyond one business, turn it into a product.",
      detail:
        "When a problem is structural across an industry, we standardize the verified engine into a turn-key product line for the wider market.",
    },
  ];

  return (
    <section id="method" data-theme="light" className="bg-white text-black py-28 sm:py-36 border-b border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 leading-tight">
            How we turn problems into systems.
          </h2>
        </div>

        {/* Editorial 3-Column Sequence with Oversized Numbers */}
        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="border-t border-neutral-200 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
            >
              {/* Column 1: Oversized Number (Left 3 cols) */}
              <div className="md:col-span-3">
                <div className="text-6xl sm:text-7xl md:text-8xl font-mono font-extrabold text-neutral-300 tracking-tighter leading-none">
                  {step.num}
                </div>
              </div>

              {/* Column 2: Title & Summary (Middle 5 cols) */}
              <div className="md:col-span-5 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg font-medium text-neutral-800 leading-snug">
                  {step.summary}
                </p>
              </div>

              {/* Column 3: Detail Narrative (Right 4 cols) */}
              <div className="md:col-span-4">
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
