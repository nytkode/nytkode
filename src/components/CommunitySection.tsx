"use client";

import React, { useState } from "react";
import { ArrowUpRightIcon, CheckIcon, TerminalIcon, PhoneIcon, CopyIcon } from "./Icons";

export const CommunitySection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const command = "npx @nytkode/project-installer init";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="community" data-theme="dark" className="bg-black text-white py-28 sm:py-36 border-b border-neutral-800 relative overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>NON-COMMERCIAL &amp; OPEN SOURCE COMMONS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-4">
            Built for the community.
          </h2>

          <p className="text-lg sm:text-xl text-neutral-400 font-normal leading-relaxed">
            Not everything we build needs to be paid software.
          </p>
        </div>

        {/* 2 Featured Community Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project 1: ACN */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl hover:border-neutral-700 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold tracking-widest uppercase bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 px-2.5 py-1 rounded">
                  Free forever
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  ANDROID UTILITY
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
                ACN
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                After Call Notify — a lightweight Android utility for triggering useful actions after phone calls.
              </p>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 mb-8 space-y-2 text-xs text-neutral-400 font-mono">
                <div className="flex items-center gap-2 text-neutral-300">
                  <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero ads &bull; 100% free forever</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant post-call notes, alerts, and webhook triggers</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Privacy-first offline processing</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800/80 flex items-center justify-between">
              <a
                href="https://acn.nytkode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-colors"
              >
                <span>Visit ACN</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>

              <span className="text-xs font-mono text-neutral-500">
                acn.nytkode.com
              </span>
            </div>
          </div>

          {/* Project 2: Project Installer */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl hover:border-neutral-700 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold tracking-widest uppercase bg-white/10 text-white border border-white/20 px-2.5 py-1 rounded">
                  Open source
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  DEVELOPER CLI
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
                Project Installer
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                A developer-focused tool built by NytKode and released openly for the community.
              </p>

              {/* Terminal Snippet */}
              <div className="p-4 rounded-xl bg-black border border-neutral-800 mb-8 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-800 text-neutral-500 text-[11px]">
                  <span>bash terminal</span>
                  <button
                    onClick={handleCopy}
                    className="text-neutral-400 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    {copied ? (
                      <span className="text-emerald-400">Copied!</span>
                    ) : (
                      <>
                        <CopyIcon className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="text-neutral-300">
                  <span className="text-emerald-400">$ </span>
                  {command}
                </div>
                <div className="text-neutral-500 text-[10px] mt-2">
                  // Scaffolds battle-tested TypeScript environments &amp; webhook boilers in seconds.
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800/80 flex items-center justify-between">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-colors"
              >
                <span>View project</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>

              <span className="text-xs font-mono text-neutral-500">
                MIT License // Public Repo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
