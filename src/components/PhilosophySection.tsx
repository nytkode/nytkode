"use client";

import React from "react";

export const PhilosophySection: React.FC = () => {
  return (
    <section
      id="philosophy"
      data-theme="light"
      className="bg-white text-black py-36 sm:py-52 lg:py-64 border-b border-neutral-200 relative overflow-hidden flex flex-col justify-center"
    >
      {/* Ambient Studio Depth Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[750px] bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.035),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Large Editorial Statement */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] font-bold tracking-tight text-neutral-950 leading-[1.02] max-w-6xl mb-16 sm:mb-20">
          &ldquo;We don&apos;t build software for the sake of software.&rdquo;
        </h2>

        {/* Supporting Narrative */}
        <div className="pt-12 sm:pt-16 border-t border-neutral-200/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-9">
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-neutral-800 leading-snug tracking-tight">
              We find operational problems worth solving, build the systems to solve them, and turn the solutions that work into products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

