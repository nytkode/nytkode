"use client";

import React from "react";
import { ArrowRightIcon } from "./Icons";
import { useCalendly } from "@/context/CalendlyContext";

interface BookCallButtonProps {
  className?: string;
  label?: string;
  showIcon?: boolean;
}

export const BookCallButton: React.FC<BookCallButtonProps> = ({
  className = "inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-semibold text-black bg-white hover:bg-neutral-200 transition-colors cursor-pointer shrink-0 shadow-md",
  label = "Book a call",
  showIcon = true,
}) => {
  const { openCalendly } = useCalendly();

  return (
    <button onClick={() => openCalendly()} className={className}>
      <span>{label}</span>
      {showIcon && <ArrowRightIcon className="w-4 h-4" />}
    </button>
  );
};
