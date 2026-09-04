"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "../data/content";
import { ChevronDownIcon, ArrowRightIcon } from "./Icons";

interface FAQSectionProps {
  onOpenBooking: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenBooking }) => {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_ITEMS[0].id, FAQ_ITEMS[1].id]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleFAQ = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFAQs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 mb-3">
          <span>CLARIFYING OUR POSITIONING</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-base text-zinc-400 max-w-xl mx-auto">
          Direct answers to pre-empt how we operate, who we partner with, and why we build this way.
        </p>
      </div>

      {/* Search Filter */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Filter questions (e.g. agency, SaaS, clinics, open source)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-[#101216] border border-white/[0.08] text-sm text-zinc-200 placeholder-zinc-500 focus:border-white/30 focus:outline-none transition-colors"
        />
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFAQs.map((faq) => {
          const isOpen = openIds.includes(faq.id);
          return (
            <div
              key={faq.id}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-[#101216] border-white/20 shadow-lg"
                  : "bg-[#0d0f13] border-white/[0.06] hover:border-white/[0.12]"
              }`}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-zinc-500">Q:</span>
                  <span className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`p-1 rounded bg-white/[0.04] text-zinc-400 transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 text-white" : ""
                  }`}
                >
                  <ChevronDownIcon className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.05] text-sm sm:text-base text-zinc-300 leading-relaxed font-normal animate-in fade-in duration-150">
                  <div className="pl-6 border-l-2 border-zinc-700">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredFAQs.length === 0 && (
          <div className="text-center py-10 text-zinc-500 text-sm">
            No questions matched your search query.
          </div>
        )}
      </div>

      {/* Bottom helper */}
      <div className="mt-10 text-center">
        <p className="text-xs text-zinc-400">
          Have a question not covered here?{" "}
          <button
            onClick={onOpenBooking}
            className="text-white font-medium hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            Ask us on a 30-min call <ArrowRightIcon className="w-3 h-3 inline" />
          </button>
        </p>
      </div>
    </section>
  );
};
