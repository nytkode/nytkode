"use client";

import React from "react";
import { ArrowRightIcon, CalendarIcon, ShieldCheckIcon } from "./Icons";

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#101216] border border-white/[0.12] rounded-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
        {/* Subtle Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-zinc-800/20 blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>DIRECT OPERATIONAL DIAGNOSIS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Have an Operational Problem Worth Solving?
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            Book a free 30-minute call. No pitch — just a look at what&apos;s actually broken and whether we&apos;re the right fit to fix it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 active:scale-[0.98] rounded-lg transition-all cursor-pointer shadow-xl shadow-white/5"
            >
              <CalendarIcon className="w-4 h-4 text-zinc-900" />
              <span>Book a Call</span>
              <ArrowRightIcon className="w-4 h-4 text-zinc-900" />
            </button>
          </div>

          {/* Guarantee / expectations pills */}
          <div className="mt-8 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
              <span>30-min technical diagnostic</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
              <span>Zero sales pressure or slide decks</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
              <span>Direct engineer evaluation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
