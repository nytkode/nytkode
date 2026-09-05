"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "./Icons";

export const CommunitySection: React.FC = () => {
  return (
    <section id="community" data-theme="dark" className="bg-black text-white py-28 sm:py-36 lg:py-44 border-b border-neutral-800 relative overflow-hidden">
      {/* Ambient Depth Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Editorial Intro */}
        <div className="max-w-4xl mb-20 sm:mb-28">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-white leading-[1.04] mb-5">
            Not everything we build needs to be sold.
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl text-neutral-400 font-normal leading-relaxed mb-6">
            Some tools are simply worth making available.
          </p>

          <p className="text-sm sm:text-base font-mono text-neutral-500">
            For businesses. For builders. For anyone who finds it useful.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* PROJECT 01 — ACN                                                          */}
        {/* ========================================================================= */}
        <div className="pb-24 sm:pb-32 border-b border-neutral-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Project 01 Details (Left on Desktop) */}
            <div className="lg:col-span-7 space-y-7">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-bold font-mono text-neutral-700 tracking-tighter leading-none">
                01
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                    ACN
                  </h3>
                  <span className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 px-3.5 py-1.5 rounded-lg shadow-xs">
                    FREE FOREVER
                  </span>
                </div>
                <div className="text-base sm:text-lg md:text-xl font-mono text-neutral-400">
                  After Call Notify
                </div>
              </div>

              <p className="text-lg sm:text-xl md:text-2xl text-neutral-200 font-normal leading-relaxed max-w-2xl">
                A lightweight Android utility for triggering useful actions after phone calls.
              </p>

              {/* Limited Supporting Points */}
              <div className="space-y-3 pt-2 font-mono text-sm sm:text-base text-neutral-300">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <span>Zero ads. Free forever.</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <span>Privacy-first offline processing.</span>
                </div>
              </div>

              {/* CTA & URL */}
              <div className="pt-4 flex flex-wrap items-center gap-5">
                <a
                  href="https://acn.nytkode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-black bg-white hover:bg-neutral-200 transition-colors shadow-md cursor-pointer"
                >
                  <span>Visit ACN</span>
                  <ArrowUpRightIcon className="w-4 h-4" />
                </a>

                <span className="text-sm font-mono text-neutral-400">
                  acn.nytkode.com
                </span>
              </div>
            </div>

            {/* Project 01 Visual: ACN Real Android App Screenshot (Right on Desktop) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[300px] sm:max-w-[330px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
                <Image
                  src="/acn.png"
                  alt="ACN — After Call Notify Android App Interface"
                  width={400}
                  height={800}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PROJECT 02 — PROJECT IGNITER                                              */}
        {/* ========================================================================= */}
        <div className="pt-24 sm:pt-32 pb-24 sm:pb-32 border-b border-neutral-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Project 02 Details (Left on Desktop) */}
            <div className="lg:col-span-6 space-y-7">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-bold font-mono text-neutral-700 tracking-tighter leading-none">
                02
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                    PROJECT IGNITER
                  </h3>
                  <span className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase bg-white/10 text-white border border-white/20 px-3.5 py-1.5 rounded-lg">
                    OPEN SOURCE
                  </span>
                </div>
              </div>

              <p className="text-lg sm:text-xl md:text-2xl text-neutral-200 font-normal leading-relaxed max-w-2xl">
                A visual workspace to compose workflows, and generate zero-dependency setup scripts.
              </p>

              {/* <p className="text-sm sm:text-base font-mono text-neutral-400">
                Built by NytKode. Released openly for the community.
              </p> */}

              {/* CTA & Metadata */}
              <div className="pt-4 flex flex-wrap items-center gap-5">
                <a
                  href="https://github.com/vishesh-sachan/Project_Igniter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-black bg-white hover:bg-neutral-200 transition-colors shadow-md cursor-pointer"
                >
                  <span>View project</span>
                  <ArrowUpRightIcon className="w-4 h-4" />
                </a>

                <span className="text-sm font-mono text-neutral-400">
                  MIT License
                </span>
              </div>
            </div>

            {/* Project 02 Visual: Project Igniter App Screenshot (Right on Desktop) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/project-igniter.png"
                  alt="Project Igniter — Visual Workflow & Setup Engine"
                  width={1200}
                  height={750}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CLOSING STATEMENT                                                         */}
        {/* ========================================================================= */}
        <div className="pt-20 sm:pt-28 text-center">
          <p className="text-base sm:text-lg font-mono text-neutral-500 tracking-wider">
            Built openly. Shared freely.
          </p>
        </div>
      </div>
    </section>
  );
};
