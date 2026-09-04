"use client";

import React, { useState, useEffect } from "react";
import { NytKodeLogo } from "./NytKodeLogo";
import { MenuIcon, XIcon, ArrowRightIcon } from "./Icons";

interface NavbarProps {
  onTalkToUs: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onTalkToUs }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navTheme, setNavTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 15);

      // Detect the section directly under the navbar (center of screen, 42px from top)
      const navbarY = 42;
      const elements = document.elementsFromPoint(window.innerWidth / 2, navbarY);
      for (const el of elements) {
        const closestThemed = el.closest("[data-theme]");
        if (closestThemed) {
          const detected = closestThemed.getAttribute("data-theme");
          if (detected === "dark" || detected === "light") {
            setNavTheme(detected);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const navLinks = [
    { label: "Products", href: "#products" },
    { label: "Approach", href: "#approach" },
    { label: "About", href: "#about" },
    { label: "Community", href: "#community" },
  ];

  const isDark = navTheme === "dark";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? "bg-black/90 backdrop-blur-md border-b border-white/[0.08] py-3 sm:py-3.5 shadow-xs"
            : "bg-white/90 backdrop-blur-md border-b border-black/[0.08] py-3 sm:py-3.5 shadow-xs"
          : isDark
          ? "bg-transparent py-5 sm:py-6"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo (Large, prominent, and theme-adaptive) */}
        <a href="#" className="flex items-center group focus:outline-none transition-transform active:scale-95">
          <NytKodeLogo
            size={84}
            variant={isDark ? "light" : "dark"}
            className="transition-opacity duration-200"
          />
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm lg:text-base font-medium px-4 py-2 rounded-lg transition-all ${
                isDark
                  ? "text-neutral-300 hover:text-white hover:bg-white/[0.08]"
                  : "text-neutral-700 hover:text-black hover:bg-black/[0.04]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onTalkToUs}
            className={`inline-flex items-center gap-2.5 px-5.5 py-2.5 text-sm font-semibold rounded-lg transition-all cursor-pointer active:scale-[0.98] shadow-xs ${
              isDark
                ? "text-black bg-white hover:bg-neutral-200"
                : "text-white bg-black hover:bg-neutral-800"
            }`}
          >
            <span>Talk to us</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2.5">
          <button
            onClick={onTalkToUs}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg active:scale-95 transition-colors ${
              isDark ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            Talk to us
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className={`p-2 rounded-lg transition-colors border ${
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
              <a
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
              </a>
            ))}
          </div>
          <div
            className={`pt-3 border-t ${
              isDark ? "border-white/[0.08]" : "border-black/[0.08]"
            }`}
          >
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onTalkToUs();
              }}
              className={`w-full flex items-center justify-center gap-2.5 px-5 py-3 text-base font-semibold rounded-lg transition-all ${
                isDark ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              <span>Talk to us</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
