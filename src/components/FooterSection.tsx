"use client";

import React, { useState, useEffect, useRef } from "react";
import { NytKodeLogo } from "./NytKodeLogo";
import { ArrowUpRightIcon, GithubIcon, TwitterIcon, LinkedinIcon } from "./Icons";

interface FooterSectionProps {
  onTalkToUs: () => void;
  theme?: "light" | "dark";
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onTalkToUs,
  theme = "dark",
}) => {
  const [isWordmarkInView, setIsWordmarkInView] = useState<boolean>(false);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const isLight = theme === "light";

  useEffect(() => {
    const el = wordmarkRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsWordmarkInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsWordmarkInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <footer
      id="footer"
      data-theme={theme}
      className={`${
        isLight
          ? "bg-white text-neutral-600 border-t border-neutral-200"
          : "bg-black text-neutral-400 border-t border-neutral-800"
      } pt-20 sm:pt-28 pb-12 text-xs font-sans relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 pb-16 sm:pb-24">
          {/* Column 1: Brand Emblem & Social Media (Left 3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-8">
            {/* Transparent Large Logo */}
            <div>
              <a
                href="/"
                aria-label="NytKode Home"
                className="inline-block hover:opacity-90 transition-opacity"
              >
                <NytKodeLogo size={180} variant={isLight ? "dark" : "light"} />
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3.5 pt-1 sm:pt-2 ml-7">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  isLight
                    ? "bg-black/5 border border-black/10 hover:border-black/30 hover:bg-black/10 text-neutral-700 hover:text-black"
                    : "bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-neutral-300 hover:text-white"
                }`}
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  isLight
                    ? "bg-black/5 border border-black/10 hover:border-black/30 hover:bg-black/10 text-neutral-700 hover:text-black"
                    : "bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-neutral-300 hover:text-white"
                }`}
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/vishesh-sachan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  isLight
                    ? "bg-black/5 border border-black/10 hover:border-black/30 hover:bg-black/10 text-neutral-700 hover:text-black"
                    : "bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-neutral-300 hover:text-white"
                }`}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: PRODUCTS (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4
              className={`font-mono text-xs font-bold uppercase tracking-widest ${
                isLight ? "text-neutral-900" : "text-white"
              }`}
            >
              Products
            </h4>
            <ul
              className={`space-y-3.5 text-xs font-mono uppercase tracking-wider ${
                isLight ? "text-neutral-600" : "text-neutral-400"
              }`}
            >
              <li>
                <a
                  href="/products#mega"
                  className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors block`}
                >
                  MEGA
                </a>
              </li>
              <li>
                <a
                  href="/products#agency-operations-platform"
                  className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors block`}
                >
                  Agency Operations Platform
                </a>
              </li>
              <li>
                <a
                  href="/products#acn"
                  className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors block`}
                >
                  ACN - After Call Notify
                </a>
              </li>
              <li>
                <a
                  href="/products#project-igniter"
                  className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors block`}
                >
                  Project Igniter
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: QUICK LINKS (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4
              className={`font-mono text-xs font-bold uppercase tracking-widest ${
                isLight ? "text-neutral-900" : "text-white"
              }`}
            >
              Quick Links
            </h4>
            <ul
              className={`space-y-3.5 text-xs font-mono uppercase tracking-wider ${
                isLight ? "text-neutral-600" : "text-neutral-400"
              }`}
            >
              <li>
                <a
                  href="/about"
                  className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors block`}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors block`}
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/work"
                  className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors block`}
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="/#community"
                  className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors block`}
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors block`}
                >
                  Blog
                </a>
              </li>
              <li>
                <button
                  onClick={onTalkToUs}
                  className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors text-left uppercase cursor-pointer`}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT & INFO (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4
              className={`font-mono text-xs font-bold uppercase tracking-widest ${
                isLight ? "text-neutral-900" : "text-white"
              }`}
            >
              Contact &amp; Info
            </h4>
            <div
              className={`space-y-3.5 text-xs ${
                isLight ? "text-neutral-600" : "text-neutral-400"
              } leading-relaxed font-mono`}
            >
              <p>
                Inquiries:{" "}
                <a
                  href="mailto:vishesh@nytkode.com"
                  className={`${
                    isLight
                      ? "text-neutral-900 hover:text-black"
                      : "text-neutral-200 hover:text-white"
                  } underline underline-offset-2 transition-colors`}
                >
                  vishesh@nytkode.com
                </a>
              </p>
              <p className={`${isLight ? "text-neutral-600" : "text-neutral-400"} leading-normal`}>
                Building systems that help businesses win more customers, save time, and get more done.
              </p>
              <p className={`${isLight ? "text-neutral-400" : "text-neutral-500"} pt-1`}>
                India &bull; Global Operations
              </p>
            </div>
          </div>
        </div>

        {/* Massive Typographic Brand Wordmark in Jaro Font (Border removed, animate on scroll from bottom) */}
        <div
          ref={wordmarkRef}
          className="pt-6 sm:pt-10 pb-8 sm:pb-12 text-center select-none"
        >
          <h2
            className={`font-jaro text-[21vw] sm:text-[21.5vw] leading-[0.88] tracking-tight ${
              isLight ? "text-neutral-900" : "text-neutral-100"
            } font-normal m-0 p-0 text-center pb-2 scale-y-[1.02] transform transition-all duration-1000 ease-out will-change-transform ${
              isWordmarkInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16 sm:translate-y-24"
            }`}
          >
            NytKode
          </h2>
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
            isLight ? "text-neutral-500" : "text-neutral-500"
          } uppercase tracking-wider`}
        >
          <div>
            &copy; 2026 NYTKODE. ALL RIGHTS RESERVED.
          </div>
          <div
            className={`flex items-center gap-6 ${
              isLight ? "text-neutral-600" : "text-neutral-400"
            } text-xs`}
          >
            <a
              href="/privacy-policy"
              className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors`}
            >
              PRIVACY POLICY
            </a>
            <a
              href="/terms-and-conditions"
              className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors`}
            >
              TERMS &amp; CONDITIONS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
