"use client";

import React from "react";
import { motion } from "framer-motion";

const STATEMENT_WORDS = [
  "“We",
  "don’t",
  "build",
  "software",
  "for",
  "the",
  "sake",
  "of",
  "software.”",
];

export const PhilosophySection: React.FC = () => {
  return (
    <section
      id="philosophy"
      data-theme="light"
      className="bg-white text-black py-28 sm:py-36 border-b border-neutral-200 relative overflow-hidden flex flex-col justify-center"
    >
      {/* Ambient Studio Depth Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.035),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Large Editorial Statement with Staggered Kinetic Word Reveal */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-950 leading-[1.05] max-w-5xl mb-12 sm:mb-16 flex flex-wrap gap-x-[0.28em] gap-y-[0.05em]">
          {STATEMENT_WORDS.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.55,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Supporting Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8 sm:pt-12 border-t border-neutral-200/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          <div className="lg:col-span-9">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-800 leading-snug tracking-tight">
              We find operational problems worth solving, build the systems to solve them, and turn the solutions that work into products.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

