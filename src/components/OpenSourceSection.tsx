"use client";

import React, { useState } from "react";
import { TerminalIcon, CopyIcon, CheckIcon, GithubIcon, ArrowUpRightIcon } from "./Icons";

export const OpenSourceSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const command = "npx @nytkode/project-installer init";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="open-source" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Context & Philosophy */}
        <div className="lg:col-span-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-sm bg-zinc-400" />
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              ENGINEERING INTEGRITY &amp; CREDIBILITY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Open-Source Developer Tooling
          </h2>

          <p className="text-base text-zinc-300 italic font-serif mb-4 pb-2">
            &ldquo;Good infrastructure should also make other builders faster.&rdquo;
          </p>

          <p className="text-sm text-zinc-400 leading-relaxed mb-6">
            We don&apos;t just build internal systems behind closed doors. We actively engineer and maintain public CLI utilities and developer scaffolding tools for the global engineering community.
          </p>

          {/* Feature Bullets */}
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded bg-white/[0.05] flex items-center justify-center text-zinc-300 shrink-0 mt-0.5">
                <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div>
                <strong className="text-sm text-white font-medium block">
                  Project Installer CLI
                </strong>
                <p className="text-xs text-zinc-400">
                  Standardized environment scaffolding, operational webhook templates, and battle-tested TypeScript blueprints.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded bg-white/[0.05] flex items-center justify-center text-zinc-300 shrink-0 mt-0.5">
                <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div>
                <strong className="text-sm text-white font-medium block">
                  Non-Commercial Public Commons
                </strong>
                <p className="text-xs text-zinc-400">
                  100% free under permissive MIT licensing with open issues and active developer pull requests.
                </p>
              </div>
            </div>
          </div>

          {/* GitHub CTA */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore on GitHub</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5 text-zinc-400" />
            </a>

            <span className="text-xs font-mono text-zinc-500">
              MIT LICENSE // v1.4.2
            </span>
          </div>
        </div>

        {/* Right Column: Interactive Terminal Preview */}
        <div className="lg:col-span-6">
          <div className="bg-[#0b0d11] border border-white/[0.12] rounded-xl overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-[#12151c] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="text-[11px] font-mono text-zinc-400 ml-2">
                  bash - @nytkode/project-installer
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 hover:text-white px-2 py-1 rounded bg-white/[0.04] border border-white/[0.08] cursor-pointer"
              >
                {copied ? (
                  <>
                    <CheckIcon className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs text-zinc-300 space-y-2.5 leading-relaxed bg-[#0b0d11]">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="text-emerald-400">vishesh@workstation</span>
                <span className="text-zinc-600">:</span>
                <span className="text-zinc-400">~/ops</span>
                <span className="text-zinc-600">$</span>
                <span className="text-white">{command}</span>
              </div>

              <div className="text-zinc-500 pt-1">
                [info] Initializing NytKode Architecture Scaffolder v1.4.2...
              </div>
              <div className="text-zinc-400">
                ✔ Detecting node runtime: v20.12.0
              </div>
              <div className="text-zinc-400">
                ✔ Fetching verified infrastructure templates...
              </div>
              <div className="text-zinc-400">
                ✔ Configuring Webhook Ingestion Engine
              </div>
              <div className="text-zinc-400">
                ✔ Generating event-bus handlers &amp; database migrations
              </div>

              <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.06] text-zinc-300 my-2 text-[11px]">
                <div className="text-emerald-400 font-semibold mb-0.5">
                  ✨ Project initialized successfully in 1.84s!
                </div>
                <div className="text-zinc-400">
                  Ready to deploy: <span className="text-white">npm run dev</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-zinc-500 text-[11px] pt-1">
                <span>Waiting for daemon status...</span>
                <span className="inline-block w-2 h-4 bg-zinc-400 animate-cursor-blink" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
