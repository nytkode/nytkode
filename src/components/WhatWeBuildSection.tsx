"use client";

import React, { useState, useEffect, useRef } from "react";

interface StepData {
  number: string;
  headline: string;
  explanation: string;
  renderVisual: () => React.ReactNode;
}

export const WhatWeBuildSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  // Scroll listener with optimized thresholds and shorter scroll track
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;

      if (scrollableDistance <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);

      // Fast, responsive step division with minimal trailing dead-space
      if (progress < 0.40) {
        setActiveStep(0);
      } else if (progress < 0.80) {
        setActiveStep(1);
      } else {
        setActiveStep(2);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Click to jump directly to the target step
  const scrollToStep = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    const scrollableDistance = rect.height - window.innerHeight;
    const stepOffsets = [0, 0.48, 0.88];
    const targetScroll = scrollTop + rect.top + (stepOffsets[index] || 0) * scrollableDistance;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  const steps: StepData[] = [
    {
      number: "01",
      headline: "Never miss an opportunity.",
      explanation:
        "Every enquiry, message and lead gets captured instead of getting lost between apps, people and busy days.",
      renderVisual: () => (
        <div className="bg-neutral-950 border border-neutral-800/90 rounded-2xl p-5 sm:p-6 lg:p-7 space-y-5 shadow-2xl">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
            Customer Inquiries Converging in Real Time
          </div>

          {/* Inbound Channels Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {["WhatsApp", "Instagram", "Facebook", "Website"].map((channel) => (
              <div
                key={channel}
                className="py-2.5 px-3 rounded-xl bg-neutral-900 border border-neutral-800 text-center text-xs font-medium text-neutral-200"
              >
                {channel}
              </div>
            ))}
          </div>

          {/* Downward Flow Arrow */}
          <div className="flex justify-center text-neutral-500 font-mono text-sm">
            &darr;
          </div>

          {/* Result: Captured Single Stream */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-900/90 border border-neutral-700/80 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                Captured Enquiry
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                New consultation booking request
              </div>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono text-neutral-400 px-2 py-0.5 rounded bg-black/60 border border-neutral-800 shrink-0">
              Instantly Logged
            </span>
          </div>
        </div>
      ),
    },
    {
      number: "02",
      headline: "Let routine work run itself.",
      explanation:
        "Automate the questions, bookings, reminders and follow-ups your team handles again and again.",
      renderVisual: () => (
        <div className="bg-neutral-950 border border-neutral-800/90 rounded-2xl p-5 sm:p-6 lg:p-7 space-y-4 shadow-2xl">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
            Automated Operations Workflow
          </div>

          {/* 4 Connected Sequential Stages */}
          <div className="space-y-2">
            {[
              { label: "Customer enquiry received", status: "Instant Response" },
              { label: "Question answered & availability checked", status: "Automated" },
              { label: "Appointment slot booked & locked", status: "Confirmed" },
              { label: "Timely reminder & calendar sync sent", status: "Scheduled" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between text-xs sm:text-sm"
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-neutral-500 font-bold">
                    0{idx + 1}
                  </span>
                  <span className="text-neutral-200 font-medium">{item.label}</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 px-2 py-0.5 rounded bg-white/5 border border-white/10 hidden sm:inline-block">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      number: "03",
      headline: "Give your team time back.",
      explanation:
        "Put the information and tools your team needs in one place, so they can focus on customers instead of coordination.",
      renderVisual: () => (
        <div className="bg-neutral-950 border border-neutral-800/90 rounded-2xl p-5 sm:p-6 lg:p-7 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between pb-2.5 border-b border-neutral-800">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              One Workspace For Everything
            </span>
            <span className="text-[10px] font-mono text-neutral-500">
              Live Operations
            </span>
          </div>

          {/* 4 Clean Workspace Pillars */}
          <div className="grid grid-cols-2 gap-2.5">
            {[
              { title: "Enquiries", desc: "All incoming messages" },
              { title: "Bookings", desc: "Confirmed schedule" },
              { title: "Customers", desc: "Complete history" },
              { title: "Tasks", desc: "Team coordination" },
            ].map((box, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800"
              >
                <div className="text-xs sm:text-sm font-semibold text-white mb-0.5">
                  {box.title}
                </div>
                <div className="text-[11px] text-neutral-400 font-normal">
                  {box.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-1 text-center text-[11px] font-mono text-neutral-500">
            Everything your team needs to operate in one place
          </div>
        </div>
      ),
    },
  ];

  const current = steps[activeStep];

  return (
    <section id="approach" data-theme="dark" className="bg-black text-white relative">
      {/* ========================================================================= */}
      {/* DESKTOP PINNED STORYTELLING CONTAINER (180vh track for brisk, smooth scroll) */}
      {/* ========================================================================= */}
      <div ref={containerRef} className="hidden lg:block relative h-[180vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 px-6 lg:px-8 max-w-7xl mx-auto w-full overflow-hidden border-b border-neutral-800">
          {/* Ambient Studio Depth Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[750px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none" />

          {/* Top Main Section Heading — Positioned with Safe Clearance Below Navbar */}
          <div className="relative shrink-0 mb-4 lg:mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl">
              We build systems around the work that matters.
            </h2>
          </div>

          {/* Active Step Storytelling Grid */}
          <div className="relative flex-1 grid grid-cols-12 gap-8 lg:gap-14 items-center py-2">
            {/* Left Column: Huge Number + Headline + Explanation (6 Cols) */}
            <div
              key={`text-${current.number}`}
              className="col-span-6 flex flex-col justify-center space-y-4 sm:space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              {/* Huge Monolithic Step Number */}
              <div className="text-7xl sm:text-8xl lg:text-[8.5rem] xl:text-[9.5rem] font-black font-mono tracking-tighter text-white/90 leading-none select-none">
                {current.number}
              </div>

              {/* Step Headline */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                {current.headline}
              </h3>

              {/* Short Plain Business Explanation */}
              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-lg">
                {current.explanation}
              </p>
            </div>

            {/* Right Column: Clean Supporting Visual (6 Cols) */}
            <div
              key={`visual-${current.number}`}
              className="col-span-6 animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              {current.renderVisual()}
            </div>
          </div>

          {/* Bottom Interactive Step Switcher */}
          <div className="relative shrink-0 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
            <div className="flex items-center gap-6 sm:gap-8">
              {steps.map((s, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={s.number}
                    onClick={() => scrollToStep(idx)}
                    className={`flex items-baseline gap-2.5 text-left transition-colors cursor-pointer group ${
                      isActive ? "text-white" : "text-neutral-500 hover:text-neutral-300"
                    }`}
                  >
                    <span className="font-mono text-xs sm:text-sm font-bold">{s.number}</span>
                    <span className="text-xs sm:text-sm font-semibold tracking-tight">
                      {s.headline.replace(".", "")}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-1.5">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToStep(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeStep === idx ? "w-8 bg-white" : "w-2 bg-neutral-700 hover:bg-neutral-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE SEQUENTIAL STACK (Visible on screens < lg)                         */}
      {/* ========================================================================= */}
      <div className="block lg:hidden py-20 px-4 sm:px-6 border-b border-neutral-800 relative">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none" />

        <div className="relative max-w-xl mx-auto space-y-16">
          {/* Main Section Heading */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              We build systems around the work that matters.
            </h2>
          </div>

          {/* 3 Sequential Steps */}
          {steps.map((s) => (
            <div key={s.number} className="space-y-5 pt-8 border-t border-neutral-800">
              {/* Huge Step Number */}
              <div className="text-6xl sm:text-7xl font-black font-mono tracking-tighter text-white/90 leading-none">
                {s.number}
              </div>

              {/* Headline */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                {s.headline}
              </h3>

              {/* Explanation */}
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {s.explanation}
              </p>

              {/* Visual */}
              <div className="pt-2">
                {s.renderVisual()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




