"use client";

import React, { useEffect } from "react";
import { XIcon, CheckIcon, ArrowRightIcon } from "./Icons";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTalkToUs: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  isOpen,
  onClose,
  onTalkToUs,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 text-white rounded-xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
          aria-label="Close modal"
        >
          <XIcon className="w-5 h-5" />
        </button>

        <div className="pr-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-400 uppercase tracking-widest mb-3">
            <span>PRODUCTION ENGINEERING CASE STUDY</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            Multi-Doctor Healthcare Operations System
          </h3>
          <p className="text-sm font-mono text-neutral-400 mb-6">
            Production Automation &amp; Scheduling Infrastructure
          </p>

          <div className="space-y-6 text-sm text-neutral-300 leading-relaxed">
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                The Operational Problem
              </h4>
              <p className="text-neutral-300">
                A high-volume healthcare facility required an automated system to coordinate appointments across multiple specialized doctors, diverse physical clinic locations, and shifting time slots without front-desk manual communication overhead or double-booking errors.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                The Engineered System
              </h4>
              <p className="text-neutral-300">
                We designed and deployed a unified event-driven appointment and notifications infrastructure. It dynamically tracks doctor availability across multiple physical branches, automates slot confirmation messages, handles automated rescheduling, and synchronizes real-time status across patient and staff interfaces.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                Key Production Milestones
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded bg-white/[0.03] border border-white/[0.06] text-center">
                  <div className="text-2xl font-bold font-mono text-white">
                    66+
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    Appointments Processed
                  </div>
                </div>
                <div className="p-3.5 rounded bg-white/[0.03] border border-white/[0.06] text-center">
                  <div className="text-2xl font-bold font-mono text-white">
                    Multi-Doctor
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    Individual Workflows
                  </div>
                </div>
                <div className="p-3.5 rounded bg-white/[0.03] border border-white/[0.06] text-center">
                  <div className="text-2xl font-bold font-mono text-white">
                    Multi-Branch
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    Synchronized Locations
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-400">
              Need similar infrastructure for your business?
            </span>
            <a
              href="https://calendly.com/nytkode/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-colors"
            >
              <span>Book a call</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
