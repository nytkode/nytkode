"use client";

import React from "react";
import { NytKodeLogo } from "./NytKodeLogo";
import { ArrowUpRightIcon, GithubIcon, TwitterIcon, LinkedinIcon } from "./Icons";

interface FooterSectionProps {
  onTalkToUs: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onTalkToUs }) => {
  return (
    <footer data-theme="dark" className="bg-black text-neutral-400 py-20 text-xs font-sans border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-neutral-800">
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-4">
            <NytKodeLogo size={44} variant="light" />
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              We build software, automation, and infrastructure that help businesses generate more revenue in less time.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white flex items-center justify-center transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white flex items-center justify-center transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white flex items-center justify-center transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-white transition-colors">
                  Approach
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <button
                  onClick={onTalkToUs}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Products & Commercial */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs text-white uppercase tracking-wider">
              Technology
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  MEGA (Meta Platform)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Agency Operations Platform
                </a>
              </li>
              <li>
                <a
                  href="https://acn.nytkode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>ACN (Android)</span>
                  <ArrowUpRightIcon className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Open Source Tooling</span>
                  <ArrowUpRightIcon className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Status */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs text-white uppercase tracking-wider">
              Legal &amp; Security
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li className="pt-2">
                <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>ALL SYSTEMS ONLINE</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <div>
            &copy; 2026 NytKode. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Pronunciation: Night Code</span>
            <span>Zero Outsourcing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
