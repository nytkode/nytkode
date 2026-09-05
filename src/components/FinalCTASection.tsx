"use client";

import React from "react";
import { ArrowRightIcon } from "./Icons";

interface FinalCTASectionProps {
  onTalkToUs?: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onTalkToUs }) => {
  return (
    <section id="contact" data-theme="light" className="bg-white text-black py-32 sm:py-48 border-b border-neutral-200 relative overflow-hidden">
      {/* Ambient Studio Depth Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.035),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-black" />
          <span>START A DIRECT CONVERSATION</span>
        </div>

        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-950 leading-[0.98] mb-8">
          Have a problem worth solving?
        </h2>

        <p className="text-xl sm:text-2xl text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto mb-12">
          Tell us what is slowing your business down.
        </p>

        <div className="flex items-center justify-center">
          <a
            href="https://calendly.com/nytkode/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 text-base font-semibold text-white bg-black hover:bg-neutral-800 active:scale-[0.98] rounded-xl transition-all cursor-pointer shadow-xl shadow-black/10"
          >
            <span>Book a call</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
