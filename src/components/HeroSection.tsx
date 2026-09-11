"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRightIcon } from "./Icons";
import { useCalendly } from "@/context/CalendlyContext";

interface HeroSectionProps {
  onTalkToUs?: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const HeroSection: React.FC<HeroSectionProps> = ({ onTalkToUs }) => {
  const { openCalendly } = useCalendly();
  return (
    <section
      id="hero"
      data-theme="light"
      className="relative bg-white text-black min-h-[100dvh] flex flex-col justify-center border-b border-neutral-200 overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-20"
    >
      {/* Ambient Studio Depth Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.04),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Dominant Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-[2.5rem] leading-[1.08] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] sm:leading-[0.98] font-bold tracking-tight text-neutral-950 mb-5 sm:mb-8 md:mb-10 text-balance"
          >
            Systems that generate more revenue in less time.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-[1.4rem] text-neutral-600 font-normal leading-relaxed max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-14 px-1 sm:px-0 text-balance"
          >
            We build systems that help businesses win more customers, save time, and get more done.
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <a
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white bg-black hover:bg-neutral-800 active:scale-[0.97] rounded-xl sm:rounded-lg transition-all cursor-pointer shadow-lg shadow-black/10"
            >
              <span>Explore our products</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>

            <button
              onClick={() => openCalendly()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-xl sm:rounded-lg transition-all cursor-pointer active:scale-[0.97]"
            >
              <span>Book a call</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
