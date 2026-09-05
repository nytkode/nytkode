"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NytKodeLogo } from "./NytKodeLogo";
import { MenuIcon, XIcon, ArrowRightIcon, WhatsAppIcon } from "./Icons";
import { useCalendly } from "@/context/CalendlyContext";

interface NavbarProps {
  onTalkToUs?: () => void;
  initialTheme?: "light" | "dark";
}

export const Navbar: React.FC<NavbarProps> = ({ onTalkToUs, initialTheme = "light" }) => {
  const { openCalendly } = useCalendly();
  const [isScrolled, setIsScrolled] = useState(false);
  const [navTheme, setNavTheme] = useState<"light" | "dark">(initialTheme);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 15);

      // Detect the section directly under the navbar (center of screen, 42px from top)
      const navbarY = 42;
      const elements = document.elementsFromPoint(window.innerWidth / 2, navbarY);
      let foundTheme: "light" | "dark" | null = null;

      for (const el of elements) {
        const closestThemed = el.closest("[data-theme]");
        if (closestThemed) {
          const detected = closestThemed.getAttribute("data-theme");
          if (detected === "dark" || detected === "light") {
            foundTheme = detected;
            break;
          }
        }
      }

      if (foundTheme) {
        setNavTheme(foundTheme);
      } else if (initialTheme) {
        setNavTheme(initialTheme);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    // Run immediately and after paint to capture initial position
    handleScroll();
    const rafId = requestAnimationFrame(handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [initialTheme]);

  const navLinks = [
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Our Work", href: "/work" },
    { label: "Community", href: "/#community" },
    // { label: "Blog", href: "/blog" },
  ];

  const isDark = navTheme === "dark";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? "bg-black/90 backdrop-blur-md py-2 sm:py-2.5"
            : "bg-white/90 backdrop-blur-md py-2 sm:py-2.5"
          : isDark
          ? "bg-transparent py-3.5 sm:py-4.5"
          : "bg-transparent py-3.5 sm:py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo (Exact size 84 preserved) */}
        <div className="flex-1 flex items-center justify-start">
          <Link href="/" aria-label="NytKode Home" className="flex items-center group focus:outline-none transition-transform active:scale-95">
            <NytKodeLogo
              size={84}
              variant={isDark ? "light" : "dark"}
              className="transition-opacity duration-200"
            />
          </Link>
        </div>

        {/* Center: Navigation Links (True Horizontal Center) */}
        <nav className="hidden md:flex items-center justify-center gap-1 lg:gap-2 shrink-0">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm lg:text-[15px] font-medium px-3.5 py-1.5 rounded-lg transition-all ${
                isDark
                  ? "text-neutral-300 hover:text-white hover:bg-white/[0.08]"
                  : "text-neutral-700 hover:text-black hover:bg-black/[0.04]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Action Buttons */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-3">
          <a
            href="https://wa.me/918127471282"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 transition-all flex items-center justify-center text-white shadow-md hover:shadow-[#25D366]/20 shrink-0"
          >
            <WhatsAppIcon className="w-5.5 h-5.5 text-white" />
          </a>

          <button
            onClick={() => openCalendly()}
            className={`inline-flex items-center justify-center gap-2.5 h-10 px-5.5 text-sm font-semibold rounded-xl transition-all cursor-pointer active:scale-[0.98] shadow-sm shrink-0 ${
              isDark
                ? "text-black bg-white hover:bg-neutral-200"
                : "text-white bg-black hover:bg-neutral-800"
            }`}
          >
            <span>Book a call</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2.5">
          <a
            href="https://wa.me/918127471282"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-8.5 h-8.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 transition-all flex items-center justify-center text-white shadow-sm shrink-0"
          >
            <WhatsAppIcon className="w-4.5 h-4.5 text-white" />
          </a>

          <button
            onClick={() => openCalendly()}
            className={`h-8.5 px-3.5 text-xs font-semibold rounded-lg active:scale-95 transition-colors cursor-pointer inline-flex items-center justify-center ${
              isDark ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            Book a call
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className={`p-1.5 rounded-lg transition-colors border ${
              isDark
                ? "text-neutral-300 hover:text-white bg-white/5 border-white/10"
                : "text-neutral-700 hover:text-black bg-black/[0.04] border-black/[0.06]"
            }`}
          >
            {mobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-5 pt-4 pb-7 space-y-4 shadow-xl animate-in slide-in-from-top duration-200 ${
            isDark
              ? "bg-neutral-950 border-white/[0.08] text-white"
              : "bg-white border-black/[0.08] text-black"
          }`}
        >
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium px-4 py-3 rounded-lg transition-colors ${
                  isDark
                    ? "text-neutral-200 hover:text-white hover:bg-white/[0.06]"
                    : "text-neutral-800 hover:text-black hover:bg-black/[0.04]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div
            className={`pt-3 border-t flex items-center gap-3 ${
              isDark ? "border-white/[0.08]" : "border-black/[0.08]"
            }`}
          >
            <a
              href="https://wa.me/918127471282"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 transition-all flex items-center justify-center text-white shadow-sm shrink-0"
            >
              <WhatsAppIcon className="w-6 h-6 text-white" />
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openCalendly();
              }}
              className={`flex-1 flex items-center justify-center gap-2.5 px-5 py-3.5 text-base font-semibold rounded-xl transition-all cursor-pointer ${
                isDark ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              <span>Book a call</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
