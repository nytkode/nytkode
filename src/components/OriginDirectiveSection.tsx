"use client";

import React from "react";
import Image from "next/image";
import { LinkedinIcon, TwitterIcon, InstagramIcon } from "./Icons";

export const OriginDirectiveSection: React.FC = () => {
  return (
    <section id="about" data-theme="dark" className="bg-black text-white py-36 sm:py-48 lg:py-56 relative overflow-hidden">
      {/* Ambient Depth Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[750px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Origin Narrative */}
        <div className="mb-24 sm:mb-28">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-14 sm:mb-16">
            Where NytKode comes from.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Subheading / Core Premise (5 Cols) */}
            <div className="lg:col-span-5">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-100 tracking-tight leading-snug">
                We build software for the work businesses actually do.
              </h3>
            </div>

            {/* Narrative Paragraphs (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-neutral-400 leading-relaxed font-normal">
              <p>
                NytKode started with a simple thought: if something is being done the same way every day, there&apos;s probably a better way to do it.
              </p>
              <p className="text-neutral-200 font-medium">
                We believe software should fit the way a business actually works, not force the business to change how it works.
              </p>
              <p>
                So we build systems around real operational problems that helps businesses make the most of every opportunity, and ultimately generate more revenue in less time.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Quote & Portrait Showcase */}
        <div className="border-t border-neutral-800 pt-16 sm:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Founder Portrait & Details (4 Cols, Vertical Editorial Image) */}
            <div className="lg:col-span-4 max-w-sm">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl">
                <Image
                  src="/founder.png"
                  alt="Vishesh Sachan — Founder, NytKode"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 360px"
                  priority
                />
              </div>

              <div className="pt-4 px-1">
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Vishesh Sachan
                </h4>
                <p className="text-xs font-mono text-neutral-400 mt-0.5">
                  Founder, NytKode
                </p>
              </div>
            </div>

            {/* Founder Quote (8 Cols) */}
            <div className="lg:col-span-8 space-y-6">
              <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.18]">
                &ldquo;NytKode is my way of turning everyday business problems into software that actually makes a difference.&rdquo;
              </blockquote>
              <div className="text-sm font-mono text-neutral-400">
                — Vishesh Sachan
              </div>

              {/* Founder Direct Socials */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/vishesh-sachan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vishesh Sachan on LinkedIn"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-white/40 hover:bg-white/10 text-neutral-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/visheshsachan21"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vishesh Sachan on X (Twitter)"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-white/40 hover:bg-white/10 text-neutral-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/visheshsachan01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vishesh Sachan on Instagram"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-white/40 hover:bg-white/10 text-neutral-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
