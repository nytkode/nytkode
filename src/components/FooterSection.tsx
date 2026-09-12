"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { NytKodeLogo } from "./NytKodeLogo";
import { ArrowUpRightIcon, GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from "./Icons";
import { useCalendly } from "@/context/CalendlyContext";
import { FinalCTASection } from "./FinalCTASection";

interface FooterSectionProps {
  onTalkToUs?: (subject?: string) => void;
  theme?: "light" | "dark";
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onTalkToUs,
  theme = "dark",
}) => {
  const { openCalendly } = useCalendly();
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
          ? "bg-white text-neutral-600"
          : "bg-black text-neutral-400"
      } pb-12 text-xs font-sans relative overflow-hidden`}
    >
      {/* 1. Final CTA Section at top of footer */}
      <FinalCTASection onTalkToUs={onTalkToUs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 pb-16 sm:pb-24">
          {/* Column 1: Brand Emblem & Social Media (Left 3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-start space-y-6">
            {/* Standard Canonical Logo */}
            <div>
              <Link
                href="/"
                aria-label="NytKode Home"
                className="inline-block hover:opacity-90 transition-opacity"
              >
                <NytKodeLogo size={84} variant={isLight ? "dark" : "light"} />
              </Link>
            </div>

            {/* Social Icons Row */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="https://www.linkedin.com/company/nytkode"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NytKode on LinkedIn"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  isLight
                    ? "bg-black/5 border border-black/10 hover:border-black/30 hover:bg-black/10 text-neutral-700 hover:text-black"
                    : "bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-neutral-300 hover:text-white"
                }`}
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://x.com/nytkode"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NytKode on X (Twitter)"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  isLight
                    ? "bg-black/5 border border-black/10 hover:border-black/30 hover:bg-black/10 text-neutral-700 hover:text-black"
                    : "bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-neutral-300 hover:text-white"
                }`}
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/nytkode/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NytKode on Instagram"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  isLight
                    ? "bg-black/5 border border-black/10 hover:border-black/30 hover:bg-black/10 text-neutral-700 hover:text-black"
                    : "bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-neutral-300 hover:text-white"
                }`}
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61594102536305"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NytKode on Facebook"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  isLight
                    ? "bg-black/5 border border-black/10 hover:border-black/30 hover:bg-black/10 text-neutral-700 hover:text-black"
                    : "bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-neutral-300 hover:text-white"
                }`}
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/nytkode"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NytKode on GitHub"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  isLight
                    ? "bg-black/5 border border-black/10 hover:border-black/30 hover:bg-black/10 text-neutral-700 hover:text-black"
                    : "bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-neutral-300 hover:text-white"
                }`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Founder Attribution & Mission Byline */}
            <div className="pt-2">
              <Link
                href="/about"
                className={`group inline-flex flex-col text-[11px] font-mono leading-relaxed transition-colors ${
                  isLight
                    ? "text-neutral-500 hover:text-neutral-900"
                    : "text-neutral-500 hover:text-neutral-200"
                }`}
              >
                <span>
                  Founded by{" "}
                  <span
                    className={
                      isLight
                        ? "text-neutral-900 font-medium group-hover:underline"
                        : "text-neutral-300 font-medium group-hover:underline"
                    }
                  >
                    Vishesh Sachan
                  </span>
                </span>
                <span className="text-[10px] text-neutral-500">
                  Engineering Operational Software
                </span>
              </Link>
            </div>
          </div>

          {/* Column 2: PRODUCTS (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
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
                <Link
                  href="/products/mega"
                  className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors block`}
                >
                  MEGA
                </Link>
              </li>
              <li>
                <Link
                  href="/products/agency-operations-platform"
                  className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors block`}
                >
                  Agency Operations Platform
                </Link>
              </li>
              <li>
                <Link
                  href="/products/acn"
                  className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors block`}
                >
                  ACN - After Call Notify
                </Link>
              </li>
              <li>
                <Link
                  href="/products#project-igniter"
                  className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors block`}
                >
                  Project Igniter
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: QUICK LINKS (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
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
                <Link
                  href="/about"
                  className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors block`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors block`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors block`}
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/#community"
                  className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors block`}
                >
                  Community
                </Link>
              </li>
              <li>
                <button
                  onClick={() => openCalendly()}
                  className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors inline-flex items-center gap-1.5 uppercase cursor-pointer`}
                >
                  <span>Book a Call</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT & INFO (5 cols for plenty of horizontal space) */}
          <div className="lg:col-span-5 space-y-4">
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
                <span className={`font-semibold ${isLight ? "text-neutral-900" : "text-neutral-200"}`}>
                  Head Office:{" "}
                </span>
                Kanpur Nagar, Uttar Pradesh
              </p>

              <p>
                <span className={`font-semibold ${isLight ? "text-neutral-900" : "text-neutral-200"}`}>
                  Registered Office:{" "}
                </span>
                178, Makhauli, Ghatampur, Kanpur Nagar, Uttar Pradesh 209206, India
              </p>

              <p>
                <span className={`font-semibold ${isLight ? "text-neutral-900" : "text-neutral-200"}`}>
                  Udyam Registration No:{" "}
                </span>
                <span className="whitespace-nowrap">UDYAM-UP-43-0204143</span>
              </p>

              <p className="pt-0.5">
                <span className={`font-semibold ${isLight ? "text-neutral-900" : "text-neutral-200"}`}>
                  Inquiries:{" "}
                </span>
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
            <Link
              href="/privacy-policy"
              className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors`}
            >
              PRIVACY POLICY
            </Link>
            <Link
              href="/terms-and-conditions"
              className={`${isLight ? "hover:text-black" : "hover:text-white"} transition-colors`}
            >
              TERMS &amp; CONDITIONS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
