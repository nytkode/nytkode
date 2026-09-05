"use client";

import React from "react";
import { ArrowRightIcon } from "./Icons";
import { useCalendly } from "@/context/CalendlyContext";

interface FinalCTASectionProps {
  onTalkToUs?: (subject?: string) => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onTalkToUs }) => {
  const { openCalendly } = useCalendly();

  const handleAction = () => {
    if (onTalkToUs) {
      onTalkToUs("Final CTA Inquiry — Let's build something better");
    } else {
      openCalendly();
    }
  };

  return (
    <section
      id="contact"
      data-theme="dark"
      className="bg-black text-white pt-24 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 relative overflow-hidden"
    >
      {/* Subtle Studio Ambient Depth */}
      <div className="absolute top-0 left-0 w-full h-[550px] bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.035),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl flex flex-col items-start text-left">
          {/* Dominant Poster Headline with deliberate line breaks */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.98] mb-8 sm:mb-10">
            <span className="block text-white">More revenue.</span>
            <span className="block text-white">Less busywork.</span>
            <span className="block text-neutral-400">Let’s build for it.</span>
          </h2>

          {/* Supporting Text with comfortable narrow max-width */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-normal leading-relaxed max-w-xl mb-10 sm:mb-12">
            Tell us what’s slowing your business down. If there’s a better way to do it, we’ll find it.
          </p>

          {/* High-Contrast Single White Button */}
          <div>
            <button
              onClick={() => openCalendly()}
              className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4.5 sm:py-5 text-base sm:text-lg font-semibold text-black bg-white hover:bg-neutral-200 active:scale-[0.98] rounded-xl transition-all cursor-pointer shadow-xl shadow-white/5"
            >
              <span>Book a Call</span>
              <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


