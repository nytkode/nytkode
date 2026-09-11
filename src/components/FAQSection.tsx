"use client";

import React, { useState } from "react";
import { FAQItem, HOME_FAQS } from "@/data/faqs";
import { ChevronDownIcon, ArrowRightIcon } from "@/components/Icons";
import { useCalendly } from "@/context/CalendlyContext";

export interface FAQSectionProps {
  items?: FAQItem[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  theme?: "light" | "dark";
  showFilter?: boolean;
  onOpenBooking?: () => void;
  className?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  items = HOME_FAQS,
  eyebrow,
  title = "Frequently Asked Questions",
  subtitle = "Direct answers to how our systems operate, who we build for, and how our software creates business leverage.",
  theme = "light",
  showFilter = false,
  onOpenBooking,
  className = "",
}) => {
  const { openCalendly } = useCalendly();
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || ""]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleBooking = onOpenBooking || openCalendly;

  const toggleFAQ = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFAQs = items.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isLight = theme === "light";

  return (
    <section
      id="faq"
      data-theme={theme}
      className={`py-20 sm:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        {eyebrow && (
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono uppercase tracking-widest mb-4 ${
              isLight
                ? "bg-neutral-100 border border-neutral-200 text-neutral-600"
                : "bg-white/[0.04] border border-white/[0.08] text-zinc-300"
            }`}
          >
            <span>{eyebrow}</span>
          </div>
        )}
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 ${
            isLight ? "text-neutral-950" : "text-white"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
              isLight ? "text-neutral-600" : "text-zinc-400"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Optional Search Filter */}
      {showFilter && items.length > 5 && (
        <div className="mb-8 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Filter questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full px-4 py-3 rounded-xl text-xs font-mono transition-colors focus:outline-none ${
              isLight
                ? "bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-neutral-900"
                : "bg-[#101216] border border-white/[0.08] text-zinc-200 placeholder-zinc-500 focus:border-white/30"
            }`}
          />
        </div>
      )}

      {/* Accordion List */}
      <div className="space-y-3.5">
        {filteredFAQs.map((faq) => {
          const isOpen = openIds.includes(faq.id);
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isLight
                  ? isOpen
                    ? "bg-neutral-50/80 border-neutral-300 shadow-sm"
                    : "bg-white border-neutral-200 hover:border-neutral-300"
                  : isOpen
                  ? "bg-[#101216] border-white/20 shadow-lg"
                  : "bg-[#0d0f13] border-white/[0.06] hover:border-white/[0.12]"
              }`}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-start sm:items-center gap-3.5">
                  <span
                    className={`text-xs font-mono font-bold mt-0.5 sm:mt-0 ${
                      isLight ? "text-neutral-400" : "text-zinc-500"
                    }`}
                  >
                    Q:
                  </span>
                  <span
                    className={`text-base sm:text-lg font-semibold tracking-tight ${
                      isLight ? "text-neutral-950" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`p-1.5 rounded-lg transition-transform duration-200 shrink-0 ${
                    isLight
                      ? "bg-neutral-100 text-neutral-600"
                      : "bg-white/[0.04] text-zinc-400"
                  } ${isOpen ? "rotate-180" : ""}`}
                >
                  <ChevronDownIcon className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div
                  className={`px-5 sm:px-6 pb-6 pt-1 border-t text-sm sm:text-base leading-relaxed font-normal animate-in fade-in duration-150 ${
                    isLight
                      ? "border-neutral-200/80 text-neutral-700"
                      : "border-white/[0.05] text-zinc-300"
                  }`}
                >
                  <div
                    className={`pl-5 border-l-2 ${
                      isLight ? "border-neutral-300" : "border-zinc-700"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredFAQs.length === 0 && (
          <div
            className={`text-center py-10 text-sm font-mono ${
              isLight ? "text-neutral-500" : "text-zinc-500"
            }`}
          >
            No questions matched your search query.
          </div>
        )}
      </div>

      {/* Bottom helper */}
      <div className="mt-12 text-center">
        <p
          className={`text-xs font-mono ${
            isLight ? "text-neutral-500" : "text-zinc-400"
          }`}
        >
          Have a question not covered here?{" "}
          <button
            onClick={() => handleBooking()}
            className={`font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer ${
              isLight ? "text-neutral-950" : "text-white"
            }`}
          >
            <span>Ask us on a 30-min call</span>
            <ArrowRightIcon className="w-3 h-3 inline" />
          </button>
        </p>
      </div>
    </section>
  );
};
