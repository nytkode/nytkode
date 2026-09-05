"use client";

import React from "react";
import { GithubIcon, LinkedinIcon, TwitterIcon, ArrowUpRightIcon } from "./Icons";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#07080a] text-zinc-400 text-xs font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-white/[0.06] border border-white/[0.15] flex items-center justify-center font-mono font-bold text-xs text-white">
                N/K
              </div>
              <span className="font-semibold text-base text-white tracking-tight">
                NytKode
              </span>
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                INFRA
              </span>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              An operations infrastructure company. We solve real operational problems for one business first, then productize what repeats.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.1] hover:text-white flex items-center justify-center transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/nytkode"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.1] hover:text-white flex items-center justify-center transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.1] hover:text-white flex items-center justify-center transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: What We Build */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs text-white uppercase tracking-wider">
              What We Build
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#what-we-build"
                  className="hover:text-white transition-colors"
                >
                  Business Communication &amp; Automation
                </a>
              </li>
              <li>
                <a
                  href="#what-we-build"
                  className="hover:text-white transition-colors"
                >
                  Workflow &amp; Content Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="#what-we-build"
                  className="hover:text-white transition-colors"
                >
                  Custom Operational Systems
                </a>
              </li>
              <li>
                <a
                  href="#open-source"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Open-Source Tooling</span>
                  <ArrowUpRightIcon className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About &amp; Positioning
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Case Studies &amp; Work
                </a>
              </li>
              <li>
                <a href="#method" className="hover:text-white transition-colors">
                  Our Method
                </a>
              </li>
              <li>
                <a href="#open-source" className="hover:text-white transition-colors">
                  Open Source
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Operational Telemetry */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs text-white uppercase tracking-wider">
              Company
            </h4>
            <div className="space-y-2 text-zinc-400 text-xs">
              <p>NytKode Engineering Inc.</p>
              <p>Global Remote Operations</p>
              <div className="pt-2">
                <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>SYSTEMS: 100% OPERATIONAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px] font-mono">
          <div>
            &copy; 2026 NytKode. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Security Disclosures
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
