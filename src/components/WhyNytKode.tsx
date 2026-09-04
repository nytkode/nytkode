"use client";

import React from "react";
import { ArrowRightIcon, CheckIcon, XIcon, ShieldCheckIcon } from "./Icons";

interface WhyNytKodeProps {
  onOpenBooking: () => void;
}

export const WhyNytKode: React.FC<WhyNytKodeProps> = ({ onOpenBooking }) => {
  const comparisonRows = [
    {
      factor: "Starting Point",
      saas: "Speculative idea & hypothetical user persona",
      agency: "Client brief for temporary hours & decks",
      nytkode: "Real, expensive bottleneck inside one live business",
    },
    {
      factor: "Validation Method",
      saas: "Surveys, landing page waitlists, guesswork",
      agency: "Deliverable sign-off (regardless of system survival)",
      nytkode: "Actual staff using the code in daily production",
    },
    {
      factor: "Product Evolution",
      saas: "Feature bloat to justify monthly retention",
      agency: "None — custom work abandoned after handoff",
      nytkode: "Productize only proven, high-repeat architectures",
    },
    {
      factor: "Durability",
      saas: "Generic interface needing endless plugins",
      agency: "Zero ongoing operational infrastructure",
      nytkode: "Reliable automated systems that run independently",
    },
  ];

  return (
    <section className="py-24 bg-[#0a0c0f] border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-sm bg-zinc-400" />
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              OUR CORE PHILOSOPHY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Why We Build This Way
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            <p>
              We don&apos;t start with a product and go find customers for it. We start with a business that has a real, expensive problem — and we solve that first.
            </p>
            <p className="text-zinc-400">
              That means what we build is never speculative. It&apos;s tested against a real business before it&apos;s ever offered as a product. When we productize something, it&apos;s because we&apos;ve already proven it works — not because it seemed like a good idea.
            </p>
            <p className="text-zinc-400">
              This is slower than building a generic SaaS tool and hoping the market wants it. It&apos;s also why what we ship actually gets used.
            </p>
          </div>
        </div>

        {/* Comparison Matrix */}
        <div className="bg-[#101216] border border-white/[0.1] rounded-xl overflow-hidden shadow-2xl mb-12">
          <div className="p-4 sm:p-6 bg-[#13161d] border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                STRUCTURAL DIFFERENTIATION
              </span>
              <h3 className="text-lg font-bold text-white">
                How NytKode Compares to Standard Industry Models
              </h3>
            </div>
            <div className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded w-fit">
              ZERO SPECULATION
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] bg-black/30 font-mono text-[11px] text-zinc-400">
                  <th className="py-3 px-4 sm:px-6">DIMENSION</th>
                  <th className="py-3 px-4 text-zinc-500">SPECULATIVE SAAS</th>
                  <th className="py-3 px-4 text-zinc-500">TRADITIONAL AGENCY</th>
                  <th className="py-3 px-4 sm:px-6 text-emerald-400 bg-white/[0.02]">
                    NYTKODE INFRASTRUCTURE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-zinc-300">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-medium text-white">
                      {row.factor}
                    </td>
                    <td className="py-4 px-4 text-zinc-400">{row.saas}</td>
                    <td className="py-4 px-4 text-zinc-400">{row.agency}</td>
                    <td className="py-4 px-4 sm:px-6 font-medium text-zinc-100 bg-white/[0.02]">
                      <div className="flex items-center gap-2">
                        <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{row.nytkode}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div>
            <h4 className="text-base font-semibold text-white">
              Have a structural bottleneck you want to solve once and for all?
            </h4>
            <p className="text-xs text-zinc-400 mt-0.5">
              Let&apos;s evaluate whether your operational challenge is fit for our infrastructure pipeline.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-md transition-colors cursor-pointer shrink-0"
          >
            <span>Start a Conversation</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
