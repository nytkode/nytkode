"use client";

import React, { useState, useEffect } from "react";
import { XIcon, CheckIcon, ArrowRightIcon } from "./Icons";
import { NytKodeLogo } from "./NytKodeLogo";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultSubject = "",
}) => {
  const [subject, setSubject] = useState(defaultSubject || "General Inquiry");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultSubject) setSubject(defaultSubject);
  }, [defaultSubject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-white border border-neutral-200 text-neutral-900 rounded-xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-md text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
          aria-label="Close modal"
        >
          <XIcon className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
              <CheckIcon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-neutral-900">
              Message received.
            </h3>
            <p className="text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-neutral-900">{name || "there"}</span>. We&apos;ll review what&apos;s slowing your business down and get back to <span className="font-semibold text-neutral-900">{email}</span> directly.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-black hover:bg-neutral-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="mb-4">
                <NytKodeLogo size={42} variant="dark" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-neutral-900">
                Talk to NytKode
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Tell us about your operational bottlenecks or the systems you need built.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
                  Interest / Focus Area
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-50 border border-neutral-300 text-neutral-900 focus:border-black focus:outline-none transition-colors"
                >
                  <option value="MEGA — Meta Engagement & Growth Automation">
                    MEGA — Meta Engagement &amp; Growth Automation
                  </option>
                  <option value="Agency Operations Platform">
                    Agency Operations Platform
                  </option>
                  <option value="Custom Operational Software & Infrastructure">
                    Custom Operational Software &amp; Infrastructure
                  </option>
                  <option value="Workflow & Communication Automation">
                    Workflow &amp; Communication Automation
                  </option>
                  <option value="General Technical Inquiry">
                    General Technical Inquiry
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
                  What is slowing your business down?
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Managing bookings manually across WhatsApp and Instagram, losing track of leads..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-50 border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-black focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-50 border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-black focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-50 border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-black focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-200 flex items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-neutral-400">
                  Direct engineer response
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-black hover:bg-neutral-800 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Send Message</span>
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
