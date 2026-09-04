"use client";

import React, { useState } from "react";
import { ArrowRightIcon, CheckIcon } from "./Icons";

export const WhatWeBuildSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const capabilities = [
    {
      num: "01",
      tag: "CAPTURE",
      headline: "Turn conversations, inquiries, comments, leads and customer interactions into opportunities.",
      description:
        "Every missed message is lost revenue. We build high-throughput communication gateways that instantly ingest customer intent across multiple channels.",
      examples: [
        "WhatsApp Business API",
        "Instagram DMs & Comments",
        "Facebook Messenger",
        "Instant Lead Qualification",
        "Centralized Customer Streams",
      ],
      deliverable: "Unified Ingestion Influx",
    },
    {
      num: "02",
      tag: "AUTOMATE",
      headline: "Remove repetitive manual work from everyday operations.",
      description:
        "Human memory shouldn't be the single point of failure in daily business operations. We build deterministic rules, instant triggers, and automated follow-ups.",
      examples: [
        "Automated Keyword Responses",
        "Two-Way Reminder Cadences",
        "Multi-Step Workflow Routing",
        "Real-Time Webhook Notifications",
        "Bi-Directional API Integrations",
      ],
      deliverable: "Event-Driven Automation Engine",
    },
    {
      num: "03",
      tag: "OPERATE",
      headline: "Give businesses the software and infrastructure to manage the work that remains.",
      description:
        "When automation handles the repetitive 80%, we provide custom workspaces, dashboards, and databases for your team to orchestrate high-value decisions.",
      examples: [
        "Custom Internal Workspaces",
        "Agency & Team Workflow Software",
        "Multi-Location Live Dashboards",
        "Relational Data Synchronization",
        "High-Availability Infrastructure",
      ],
      deliverable: "Operational Software & Dashboards",
    },
  ];

  return (
    <section id="approach" data-theme="dark" className="bg-black text-white py-28 sm:py-36 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>CORE CAPABILITIES &amp; INFRASTRUCTURE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            We build systems around the work that matters.
          </h2>

          <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
            <span className="text-white font-semibold">THE SYSTEM FLOW:</span>
            <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-neutral-300">
              CAPTURE
            </span>
            <span>→</span>
            <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-neutral-300">
              AUTOMATE
            </span>
            <span>→</span>
            <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-neutral-300">
              OPERATE
            </span>
          </div>
        </div>

        {/* Asymmetric Editorial Stack */}
        <div className="space-y-12">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.tag}
              className="border-t border-neutral-800 pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-neutral-700 transition-colors group"
            >
              {/* Left Column: Oversized Index & Tag */}
              <div className="lg:col-span-3">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl sm:text-5xl font-mono font-bold text-neutral-600 group-hover:text-white transition-colors">
                    {cap.num}
                  </span>
                  <span className="text-xs font-mono font-semibold tracking-widest uppercase text-white bg-white/10 px-2.5 py-1 rounded">
                    {cap.tag}
                  </span>
                </div>
                <div className="text-xs font-mono text-neutral-500 mt-2">
                  {cap.deliverable}
                </div>
              </div>

              {/* Middle Column: Large Headline & Description */}
              <div className="lg:col-span-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug mb-4">
                  {cap.headline}
                </h3>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                  {cap.description}
                </p>
              </div>

              {/* Right Column: Concrete Examples & Capabilities */}
              <div className="lg:col-span-3 bg-neutral-950 p-5 rounded-xl border border-neutral-800/80">
                <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-3">
                  Scope &amp; Tooling
                </div>
                <ul className="space-y-2">
                  {cap.examples.map((ex, i) => (
                    <li
                      key={i}
                      className="text-xs text-neutral-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
