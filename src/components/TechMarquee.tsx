"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";

const TECH_ITEMS = [
  "Capture Every Lead",
  "Eliminate Operational Friction",
  "Automate Conversations Into Revenue",
  "Zero-Loss Execution",
  "Systems Over Headcount",
  "Deterministic Workflows",
  "Real-Time Business Sync",
  "High-Reliability Engineering",
  "From Friction To Scalable Code",
  "Repeatable Revenue Architecture",
];

interface MarqueeRowProps {
  items: string[];
  baseVelocity: number;
}

function MarqueeRow({ items, baseVelocity }: MarqueeRowProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 800], [0, 1.2], {
    clamp: true,
  });

  useAnimationFrame((_, delta) => {
    let moveBy = baseVelocity * (delta / 1000);
    moveBy += moveBy * Math.abs(velocityFactor.get());
    let newX = baseX.get() + moveBy;
    if (newX <= -50) {
      newX = 0;
    } else if (newX > 0) {
      newX = -50;
    }
    baseX.set(newX);
  });

  const repeatedItems = [...items, ...items, ...items, ...items];
  const x = useTransform(baseX, (v) => `${v}%`);

  return (
    <div className="overflow-hidden whitespace-nowrap select-none py-3.5 sm:py-4">
      <motion.div
        className="flex items-center gap-6 sm:gap-10 w-max"
        style={{ x, willChange: "transform" }}
      >
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 sm:gap-10">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-neutral-400 font-medium transition-colors hover:text-white">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export const TechMarquee: React.FC = () => {
  return (
    <div className="w-full bg-[#080808] border-y border-neutral-800/80 overflow-hidden relative z-20">
      {/* Side gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#080808] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#080808] to-transparent z-10" />

      <MarqueeRow items={TECH_ITEMS} baseVelocity={-1.2} />
    </div>
  );
};
