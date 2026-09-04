"use client";

import React from "react";
import { PRODUCT_LINES } from "../data/content";
import { ArrowRightIcon, ArrowUpRightIcon, CheckIcon, MessageSquareIcon, WorkflowIcon, CpuIcon, TerminalIcon } from "./Icons";

interface WhatWeBuildProps {
  onOpenBooking: (productTitle?: string) => void;
}

export const WhatWeBuild: React.FC<WhatWeBuildProps> = ({ onOpenBooking }) => {
  const getProductIcon = (id: string) => {
    switch (id) {
      case "communication":
        return <MessageSquareIcon className="w-5 h-5 text-zinc-300" />;
      case "workflow":
        return <WorkflowIcon className="w-5 h-5 text-zinc-300" />;
      case "custom-systems":
        return <CpuIcon className="w-5 h-5 text-zinc-300" />;
      case "open-source":
        return <TerminalIcon className="w-5 h-5 text-zinc-300" />;
      default:
        return <CpuIcon className="w-5 h-5 text-zinc-300" />;
    }
  };

  return (
    <section id="what-we-build" className="py-24 bg-[#0a0c0f] border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-sm bg-zinc-400" />
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              INFRASTRUCTURE PRODUCT LINES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            What We Build
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Engineered systems categorized by core operational problems — not billable service hours.
          </p>
        </div>

        {/* 4 Product Lines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCT_LINES.map((product) => (
            <div
              key={product.id}
              className="bg-[#101216] border border-white/[0.08] rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/[0.18] transition-all"
            >
              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                    {getProductIcon(product.id)}
                  </div>
                  {product.badge && (
                    <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Product Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                  {product.title}
                </h3>

                {/* Punchy Quote */}
                <p className="text-sm italic text-zinc-300 font-serif mb-4 pb-3 border-b border-white/[0.06]">
                  &ldquo;{product.quote}&rdquo;
                </p>

                {/* Product Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8">
                  {product.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5"
                    >
                      <CheckIcon className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/[0.06]">
                {product.isExternal ? (
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                  >
                    <span>{product.ctaText}</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={() => onOpenBooking(product.title)}
                    className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Learn More &amp; Deploy</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
