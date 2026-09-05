"use client";

import React from "react";
import { ArrowRightIcon } from "./Icons";
import { useCalendly } from "@/context/CalendlyContext";

interface HeroSectionProps {
  onTalkToUs?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onTalkToUs }) => {
  const { openCalendly } = useCalendly();
  return (
    <section
      id="hero"
      data-theme="light"
      className="relative bg-white text-black min-h-screen min-h-[100dvh] flex flex-col justify-center border-b border-neutral-200 overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      {/* Ambient Studio Depth Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.04),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Dominant Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] font-bold tracking-tight text-neutral-950 leading-[0.98] mb-8 sm:mb-10 text-balance">
            Systems that generate more revenue in less time.
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[1.5rem] text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto mb-12 sm:mb-14">
            We build systems that help businesses win more customers, save time, and get more done.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-semibold text-white bg-black hover:bg-neutral-800 active:scale-[0.98] rounded-lg transition-all cursor-pointer shadow-lg shadow-black/10"
            >
              <span>Explore our products</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>

            <button
              onClick={() => openCalendly()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-lg transition-all cursor-pointer active:scale-[0.98]"
            >
              <span>Book a call</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
