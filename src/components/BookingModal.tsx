"use client";

import React, { useState, useEffect } from "react";
import { XIcon, CheckIcon, CalendarIcon, ClockIcon, ArrowRightIcon } from "./Icons";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialCategory = "",
}) => {
  const [category, setCategory] = useState<string>("WhatsApp / Booking Automation");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [bottleneckDesc, setBottleneckDesc] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("Tomorrow at 10:00 AM (EST)");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setCategory(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categories = [
    "WhatsApp & Meta API Automation",
    "Agency Workflow & Drive CMS",
    "Spreadsheet Replacement & DB Sync",
    "Custom Internal System / Integration",
    "Other Operational Bottleneck",
  ];

  const timeSlots = [
    "Tomorrow at 10:00 AM (EST)",
    "Tomorrow at 2:30 PM (EST)",
    "Thursday at 11:00 AM (EST)",
    "Thursday at 4:00 PM (EST)",
    "Friday at 1:00 PM (EST)",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-xl bg-[#101216] border border-white/20 rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white bg-white/[0.04] border border-white/[0.08] cursor-pointer"
        >
          <XIcon className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-600/50 flex items-center justify-center mx-auto text-emerald-400">
              <CheckIcon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Operational Call Requested
            </h3>
            <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-medium">{name || "there"}</span>. An engineering lead will review your operational bottleneck note and confirm the call for:
            </p>
            <div className="p-3 rounded-lg bg-white/[0.04] border border-white/[0.08] inline-block text-xs font-mono text-emerald-400 font-semibold">
              {selectedSlot}
            </div>
            <p className="text-xs text-zinc-500 pt-2">
              A calendar invite and direct Google Meet link have been queued for{" "}
              <span className="text-zinc-300">{email || "your email"}</span>.
            </p>
            <div className="pt-6">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-lg text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                  DIRECT 30-MIN DIAGNOSTIC
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Book an Operational Diagnostic Call
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                No pitch, no sales reps. A direct engineering review of what&apos;s broken in your operations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* Category Picker */}
              <div>
                <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                  1. Operational Problem Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0c0e] border border-white/[0.1] text-zinc-200 text-xs sm:text-sm focus:border-white/40 focus:outline-none"
                >
                  {categories.map((c) => (
                    <option key={c} value={c} className="bg-[#101216] text-zinc-200">
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Problem description */}
              <div>
                <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                  2. What&apos;s manually breaking or slowing you down?
                </label>
                <textarea
                  required
                  rows={3}
                  value={bottleneckDesc}
                  onChange={(e) => setBottleneckDesc(e.target.value)}
                  placeholder="e.g. Clinic front desk is overwhelmed typing WhatsApp reminders manually, resulting in 20% no-shows and lost revenue..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0c0e] border border-white/[0.1] text-zinc-200 placeholder-zinc-500 text-xs sm:text-sm focus:border-white/40 focus:outline-none resize-none"
                />
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Vance"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0c0e] border border-white/[0.1] text-zinc-200 placeholder-zinc-500 text-xs sm:text-sm focus:border-white/40 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0c0e] border border-white/[0.1] text-zinc-200 placeholder-zinc-500 text-xs sm:text-sm focus:border-white/40 focus:outline-none"
                  />
                </div>
              </div>

              {/* Company & Time slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                    Company / Clinic Name
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Apex Aesthetics / Hyperion Agency"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0c0e] border border-white/[0.1] text-zinc-200 placeholder-zinc-500 text-xs sm:text-sm focus:border-white/40 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0c0e] border border-white/[0.1] text-zinc-200 text-xs sm:text-sm focus:border-white/40 focus:outline-none"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="bg-[#101216] text-zinc-200">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                <span className="text-[11px] text-zinc-500 font-mono">
                  100% confidential // Direct NDA protection
                </span>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Confirm 30-Min Call</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
