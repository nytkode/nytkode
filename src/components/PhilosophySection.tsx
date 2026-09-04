"use client";

import React from "react";

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" data-theme="light" className="bg-white text-black py-28 sm:py-40 border-b border-neutral-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-black" />
          <span>OUR OPERATIONAL DIRECTIVE</span>
        </div>

        {/* Large Editorial Statement */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-950 leading-[1.05] max-w-5xl mb-12">
          &ldquo;We don&apos;t build software for the sake of software.&rdquo;
        </h2>

        {/* Supporting Text */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-neutral-200 items-start">
          <div className="md:col-span-4">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
              THE NYTKODE STANDARD
            </span>
            <span className="text-sm font-semibold text-neutral-900 font-sans">
              From reality to code.
            </span>
          </div>

          <div className="md:col-span-8">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-800 leading-snug">
              We find operational problems worth solving, build the systems to solve them, and turn the solutions that work into products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
