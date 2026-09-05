"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRightIcon,
  ReplyIcon,
  ListBulletIcon,
  HospitalIcon,
  BadgeCheckIcon,
} from "./Icons";
import { CaseStudyModal } from "./CaseStudyModal";

interface ProofSectionProps {
  onOpenCaseStudy?: () => void;
}

export const ProofSection: React.FC<ProofSectionProps> = ({ onOpenCaseStudy }) => {
  const [step, setStep] = useState<number>(0);
  const [isInView, setIsInView] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  const handleOpenCaseStudy = () => {
    if (onOpenCaseStudy) {
      onOpenCaseStudy();
    } else {
      setModalOpen(true);
    }
  };

  // Observe when Proof section is in view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Conversational step timing sequence — only active when in view
  useEffect(() => {
    if (!isInView) return;

    const stepDelays = [
      600,   // 0 -> 1: User sends "Hi"
      700,   // 1 -> 2: Bot typing...
      900,   // 2 -> 3: Bot welcome + stacked attached reply buttons (Book Appointment / Help)
      1100,  // 3 -> 4: User picks "Book Appointment"
      600,   // 4 -> 5: Bot typing...
      1000,  // 5 -> 6: Bot sends doctor consultation message with attached doctor buttons
      1200,  // 6 -> 7: User picks "Dr. A. Verma"
      600,   // 7 -> 8: Bot typing...
      900,   // 8 -> 9: Bot sends location options with attached branch buttons
      1100,  // 9 -> 10: User picks "Downtown Clinic"
      800,   // 10 -> 11: Bot sends time slot picker with attached "Slots" list button
      1100,  // 11 -> 12: User picks "Thursday, 10:30 AM"
      600,   // 12 -> 13: Bot typing...
      800,   // 13 -> 14: Bot asks for patient name
      1100,  // 14 -> 15: User sends "Rahul Sharma"
      800,   // 15 -> 16: Bot sends booking summary & "Pay Now" action
      1200,  // 16 -> 17: Payment successful indicator
      800,   // 17 -> 18: Bot sends final Confirmation Card
      5000,  // 18 -> 0: Hold completed flow for inspection, then loop restart
    ];

    const currentDelay = stepDelays[step] || 1000;
    const timer = setTimeout(() => {
      setStep((prev) => (prev >= 18 ? 0 : prev + 1));
    }, currentDelay);

    return () => clearTimeout(timer);
  }, [step, isInView]);

  // Auto-scroll to keep latest chat message visible
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTo({
        top: chatScrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [step]);

  const isTyping = step === 2 || step === 5 || step === 8 || step === 13;

  return (
    <section
      ref={sectionRef}
      id="proof"
      data-theme="dark"
      className="bg-black text-white py-28 sm:py-36 border-b border-neutral-800 relative overflow-hidden"
    >
      {/* Ambient Depth Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ========================================================================= */}
          {/* LEFT / PRIMARY EDITORIAL & METRIC (5 Cols Desktop)                        */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Primary Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.04] mb-8">
              We&apos;ve built this before.
            </h2>

            {/* Main Dominant Metric */}
            <div className="mb-8">
              <div className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter text-white font-mono leading-none mb-3">
                66+
              </div>
              <div className="text-xl sm:text-2xl font-medium text-neutral-200 tracking-tight">
                appointments in one month
              </div>
            </div>

            {/* Supporting Copy & Additional Context */}
            <div className="space-y-4 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed mb-8">
              <p>
                An automated WhatsApp appointment workflow built for a multi-specialty healthcare operation, supporting multiple doctors and locations.
              </p>
              <p className="text-sm sm:text-base text-neutral-500">
                66+ appointments handled in a single month through automated scheduling, reminders, doctor allocation and location-specific workflows.
              </p>
            </div>

            {/* Complexity Line */}
            <div className="pt-6 border-t border-neutral-800/90 mb-8">
              <p className="text-base sm:text-lg font-semibold text-neutral-200 tracking-tight">
                Multiple doctors. Multiple locations. One automated workflow.
              </p>
            </div>

            {/* Case Study Invitation CTA */}
            <div>
              <button
                onClick={handleOpenCaseStudy}
                className="inline-flex items-center gap-2.5 text-sm sm:text-base font-semibold text-white group cursor-pointer hover:text-neutral-200 transition-colors"
              >
                <span className="border-b border-neutral-600 group-hover:border-white pb-0.5 transition-colors">
                  See what we built
                </span>
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </button>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT / PRIMARY VISUAL EVIDENCE (7 Cols Desktop)                          */}
          {/* Live Animated Conversation Artifact Inside Clean Phone Mockup Frame       */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end lg:pr-6 xl:pr-12 items-center">
            {/* Clean Metallic Phone Hardware Shell — Proportional to Reference Image */}
            <div className="relative w-full max-w-[325px] sm:max-w-[350px] md:max-w-[365px] rounded-[50px] sm:rounded-[54px] p-[8px] sm:p-[10px] bg-gradient-to-b from-[#3a3a3d] via-[#242427] to-[#1a1a1c] ring-1 ring-white/20 shadow-[0_30px_90px_-15px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_-1px_1px_rgba(0,0,0,0.8)]">
              {/* Subtle Hardware Side Buttons */}
              {/* Action Button (Top-Left) */}
              <div className="absolute -left-[5px] top-[115px] w-[3px] h-6 bg-[#3a3a3e] rounded-l-xs shadow-xs" />
              {/* Volume Up (Left) */}
              <div className="absolute -left-[5px] top-[160px] w-[3px] h-12 bg-[#3a3a3e] rounded-l-xs shadow-xs" />
              {/* Volume Down (Left) */}
              <div className="absolute -left-[5px] top-[225px] w-[3px] h-12 bg-[#3a3a3e] rounded-l-xs shadow-xs" />
              {/* Power Button (Right) */}
              <div className="absolute -right-[5px] top-[175px] w-[3px] h-18 bg-[#3a3a3e] rounded-r-xs shadow-xs" />

              {/* Inner Black Screen Bezel */}
              <div className="rounded-[44px] sm:rounded-[47px] p-[3px] bg-black">
                {/* Screen Display Viewport */}
                <div className="rounded-[41px] sm:rounded-[44px] overflow-hidden bg-neutral-950 flex flex-col h-[690px] sm:h-[730px] md:h-[760px] relative border border-neutral-800/80 shadow-inner">
                  {/* Top Header Bar — City Hospital Branding */}
                  <div className="flex items-center justify-between px-4 py-3.5 bg-neutral-900/95 border-b border-neutral-800 backdrop-blur-md shrink-0 z-20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700/80 flex items-center justify-center text-white shrink-0">
                        <HospitalIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
                            City Hospital
                          </span>
                          <BadgeCheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                        </div>
                        <div className="text-xs font-mono mt-0.5">
                          {isTyping ? (
                            <span className="text-emerald-400 font-medium">typing...</span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 text-neutral-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              Online
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setStep(0)}
                        title="Restart Demo"
                        className="text-[11px] font-mono text-neutral-400 hover:text-white px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 hover:border-white/25 transition-colors cursor-pointer"
                      >
                        Replay
                      </button>
                    </div>
                  </div>

                {/* Message Stream Scrollable View */}
                <div
                  ref={chatScrollRef}
                  className="flex-1 overflow-y-auto space-y-3.5 p-3.5 text-xs font-sans select-none scroll-smooth bg-neutral-950/60"
                >
                  {/* 1. Inbound Patient: "Hi" */}
                  {step >= 1 && (
                  <div className="flex justify-end animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="max-w-[85%] sm:max-w-[75%] bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-xs space-y-1">
                      <p className="leading-relaxed">Hi</p>
                      <span className="text-[10px] font-mono text-neutral-500 block text-right">
                        10:14 AM
                      </span>
                    </div>
                  </div>
                )}

                {/* 2. Bot: Welcome + Attached Reply Buttons */}
                {step >= 3 && (
                  <div className="flex flex-col items-start animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="w-full max-w-[92%] sm:max-w-[85%] bg-neutral-900/90 border border-neutral-800 text-white rounded-2xl rounded-tl-sm shadow-sm overflow-hidden">
                      {/* Message Content */}
                      <div className="p-3.5 space-y-1.5">
                        <p className="leading-relaxed text-neutral-200">
                          Welcome to City Hospital. How can we assist you today?
                        </p>
                        <span className="text-[10px] font-mono text-neutral-400 block text-right">
                          10:14 AM &bull; Automated
                        </span>
                      </div>

                      {/* Attached Interactive Reply Buttons */}
                      <div className="border-t border-neutral-800/80 p-2 flex flex-col gap-1.5 bg-black/20">
                        <div
                          className={`w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                            step >= 4
                              ? "bg-white text-black font-semibold shadow-xs"
                              : "bg-neutral-800/90 hover:bg-neutral-700 text-neutral-200 border border-neutral-700/50"
                          }`}
                        >
                          <ReplyIcon className={`w-3.5 h-3.5 ${step >= 4 ? "text-black" : "text-neutral-400"}`} />
                          <span>Book Appointment</span>
                        </div>
                        <div className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium bg-neutral-800/90 text-neutral-400 border border-neutral-700/50">
                          <ReplyIcon className="w-3.5 h-3.5 text-neutral-500" />
                          <span>Help &amp; Inquiries</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. User Selection: "Book Appointment" */}
                {step >= 4 && (
                  <div className="flex justify-end animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="max-w-[80%] bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-xs space-y-1">
                      <p className="leading-relaxed">Book Appointment</p>
                      <span className="text-[10px] font-mono text-neutral-500 block text-right">
                        10:14 AM
                      </span>
                    </div>
                  </div>
                )}

                {/* 4. Bot: Doctor List Message with Attached Doctor Buttons */}
                {step >= 6 && (
                  <div className="flex flex-col items-start animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="w-full max-w-[94%] sm:max-w-[88%] bg-neutral-900/90 border border-neutral-800 text-white rounded-2xl rounded-tl-sm shadow-sm overflow-hidden">
                      {/* Message Content */}
                      <div className="p-3.5 space-y-2.5">
                        <div className="font-semibold text-neutral-200 text-xs sm:text-sm">
                          Specialist Medical Consultation
                        </div>
                        <p className="text-xs text-neutral-300 leading-relaxed">
                          Please select the specialist physician you wish to consult with:
                        </p>
                        <div className="p-2.5 rounded-lg bg-black/40 border border-neutral-800/80 space-y-1.5 text-[11px] text-neutral-300">
                          <div>
                            <strong className="text-white block">Dr. A. Verma</strong>
                            <span className="text-neutral-400">Consultant Physician &amp; Cardiology</span>
                          </div>
                          <div className="pt-1 border-t border-neutral-800/60">
                            <strong className="text-white block">Dr. S. Kulkarni</strong>
                            <span className="text-neutral-400">Orthopedics &amp; Joint Replacement</span>
                          </div>
                          <div className="pt-1 border-t border-neutral-800/60">
                            <strong className="text-white block">Dr. P. Bhargava</strong>
                            <span className="text-neutral-400">Obstetrics &amp; Laparoscopic Surgery</span>
                          </div>
                        </div>
                        <p className="text-[11px] text-neutral-400">
                          Please choose one of the options below:
                        </p>
                        <span className="text-[10px] font-mono text-neutral-400 block text-right">
                          10:14 AM &bull; Automated
                        </span>
                      </div>

                      {/* Attached Doctor Quick Reply Buttons */}
                      <div className="border-t border-neutral-800/80 p-2 flex flex-col gap-1.5 bg-black/20">
                        <div
                          className={`w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                            step >= 7
                              ? "bg-white text-black font-semibold shadow-xs"
                              : "bg-neutral-800/90 hover:bg-neutral-700 text-neutral-200 border border-neutral-700/50"
                          }`}
                        >
                          <ReplyIcon className={`w-3.5 h-3.5 ${step >= 7 ? "text-black" : "text-neutral-400"}`} />
                          <span>Dr. A. Verma</span>
                        </div>
                        <div className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium bg-neutral-800/90 text-neutral-300 border border-neutral-700/50">
                          <ReplyIcon className="w-3.5 h-3.5 text-neutral-400" />
                          <span>Dr. S. Kulkarni</span>
                        </div>
                        <div className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium bg-neutral-800/90 text-neutral-300 border border-neutral-700/50">
                          <ReplyIcon className="w-3.5 h-3.5 text-neutral-400" />
                          <span>Dr. P. Bhargava</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. User Selection: "Dr. A. Verma" */}
                {step >= 7 && (
                  <div className="flex justify-end animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="max-w-[80%] bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-xs space-y-1">
                      <p className="leading-relaxed">Dr. A. Verma</p>
                      <span className="text-[10px] font-mono text-neutral-500 block text-right">
                        10:14 AM
                      </span>
                    </div>
                  </div>
                )}

                {/* 6. Bot: Location Selection Message with Attached Branch Buttons */}
                {step >= 9 && (
                  <div className="flex flex-col items-start animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="w-full max-w-[92%] sm:max-w-[85%] bg-neutral-900/90 border border-neutral-800 text-white rounded-2xl rounded-tl-sm shadow-sm overflow-hidden">
                      {/* Message Content */}
                      <div className="p-3.5 space-y-1.5">
                        <p className="leading-relaxed text-neutral-200 text-xs sm:text-sm">
                          Select your preferred clinic location for <strong className="text-white">Dr. A. Verma</strong>:
                        </p>
                        <span className="text-[10px] font-mono text-neutral-400 block text-right">
                          10:15 AM &bull; Automated
                        </span>
                      </div>

                      {/* Attached Location Buttons */}
                      <div className="border-t border-neutral-800/80 p-2 flex flex-col gap-1.5 bg-black/20">
                        <div
                          className={`w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                            step >= 10
                              ? "bg-white text-black font-semibold shadow-xs"
                              : "bg-neutral-800/90 hover:bg-neutral-700 text-neutral-200 border border-neutral-700/50"
                          }`}
                        >
                          <ReplyIcon className={`w-3.5 h-3.5 ${step >= 10 ? "text-black" : "text-neutral-400"}`} />
                          <span>Downtown Clinic (Branch 01)</span>
                        </div>
                        <div className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium bg-neutral-800/90 text-neutral-300 border border-neutral-700/50">
                          <ReplyIcon className="w-3.5 h-3.5 text-neutral-400" />
                          <span>West Wing Center (Branch 02)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 7. User Selection: "Downtown Clinic" */}
                {step >= 10 && (
                  <div className="flex justify-end animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="max-w-[80%] bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-xs space-y-1">
                      <p className="leading-relaxed">Downtown Clinic (Branch 01)</p>
                      <span className="text-[10px] font-mono text-neutral-500 block text-right">
                        10:15 AM
                      </span>
                    </div>
                  </div>
                )}

                {/* 8. Bot: Time Slot Picker with Attached "Slots" List Button (Matching Screenshot) */}
                {step >= 11 && (
                  <div className="flex flex-col items-start animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="w-full max-w-[90%] sm:max-w-[82%] bg-neutral-900/90 border border-neutral-800 text-white rounded-2xl rounded-tl-sm shadow-sm overflow-hidden">
                      {/* Message Content */}
                      <div className="p-3.5 space-y-1.5">
                        <p className="leading-relaxed text-neutral-200 text-xs sm:text-sm">
                          Choose your convenient consultation time slot:
                        </p>
                        <span className="text-[10px] font-mono text-neutral-400 block text-right">
                          10:15 AM &bull; Automated
                        </span>
                      </div>

                      {/* Attached "Slots" List Button */}
                      <div className="border-t border-neutral-800/80 p-2 bg-black/20">
                        <div
                          className={`w-full flex items-center justify-center gap-2.5 px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                            step >= 12
                              ? "bg-white text-black shadow-xs"
                              : "bg-neutral-800/90 hover:bg-neutral-700 text-neutral-200 border border-neutral-700/50"
                          }`}
                        >
                          <ListBulletIcon className={`w-4 h-4 ${step >= 12 ? "text-black" : "text-neutral-300"}`} />
                          <span>Slots</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 9. User Selection: "Thursday, 10:30 AM" */}
                {step >= 12 && (
                  <div className="flex justify-end animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="max-w-[80%] bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-xs space-y-1">
                      <p className="leading-relaxed">Thursday, 10:30 AM</p>
                      <span className="text-[10px] font-mono text-neutral-500 block text-right">
                        10:15 AM
                      </span>
                    </div>
                  </div>
                )}

                {/* 10. Bot: Ask for Patient Name */}
                {step >= 14 && (
                  <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="max-w-[88%] sm:max-w-[82%] bg-neutral-900/90 border border-neutral-800 text-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-xs space-y-1">
                      <p className="leading-relaxed text-neutral-200">
                        Please enter the patient&apos;s full name to proceed with booking:
                      </p>
                      <span className="text-[10px] font-mono text-neutral-400 block text-right">
                        10:15 AM &bull; Automated
                      </span>
                    </div>
                  </div>
                )}

                {/* 11. User: "Rahul Sharma" */}
                {step >= 15 && (
                  <div className="flex justify-end animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="max-w-[80%] bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-xs space-y-1">
                      <p className="leading-relaxed">Rahul Sharma</p>
                      <span className="text-[10px] font-mono text-neutral-500 block text-right">
                        10:16 AM
                      </span>
                    </div>
                  </div>
                )}

                {/* 12. Bot: Booking Summary & Attached Pay Now Action */}
                {step >= 16 && (
                  <div className="flex flex-col items-start animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="w-full max-w-[94%] sm:max-w-[88%] bg-neutral-900/90 border border-neutral-800 text-white rounded-2xl rounded-tl-sm shadow-sm overflow-hidden">
                      {/* Summary Header & Details */}
                      <div className="p-3.5 space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                          <span className="text-xs font-mono font-bold tracking-wider text-neutral-200 uppercase">
                            CONSULTATION SUMMARY
                          </span>
                          <span className="text-[10px] font-mono text-neutral-400">
                            PENDING PAYMENT
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                          <div>
                            <span className="text-neutral-400 block text-[10px]">PATIENT</span>
                            <span className="text-white font-semibold">Rahul Sharma</span>
                          </div>
                          <div>
                            <span className="text-neutral-400 block text-[10px]">DOCTOR</span>
                            <span className="text-white font-semibold">Dr. A. Verma</span>
                          </div>
                          <div>
                            <span className="text-neutral-400 block text-[10px]">LOCATION</span>
                            <span className="text-white font-semibold">Downtown Clinic</span>
                          </div>
                          <div>
                            <span className="text-neutral-400 block text-[10px]">TIME</span>
                            <span className="text-white font-semibold">Thu, 10:30 AM</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-neutral-800 flex items-center justify-between font-mono text-xs">
                          <span className="text-neutral-400">Consultation Fee:</span>
                          <span className="text-white font-bold">₹800</span>
                        </div>

                        <span className="text-[10px] font-mono text-neutral-400 block text-right">
                          10:16 AM &bull; Automated Checkout
                        </span>
                      </div>

                      {/* Attached Pay Action Button */}
                      <div className="border-t border-neutral-800/80 p-2 bg-black/20">
                        <div
                          className={`w-full py-2.5 rounded-lg text-center font-semibold text-xs transition-all ${
                            step >= 17
                              ? "bg-neutral-800 border border-emerald-500/60 text-emerald-400"
                              : "bg-white hover:bg-neutral-200 text-black cursor-pointer shadow-sm"
                          }`}
                        >
                          {step >= 17 ? "✓ Payment Received (₹800)" : "Pay Now (₹800)"}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 13. Bot: Final Appointment Confirmation Card */}
                {step >= 18 && (
                  <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="w-full max-w-[94%] sm:max-w-[88%] bg-neutral-900 border border-neutral-700 text-white rounded-2xl rounded-tl-sm p-4 shadow-lg space-y-2.5">
                      <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                        <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">
                          ✓ APPOINTMENT CONFIRMED
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400">
                          REF #APT-6604
                        </span>
                      </div>

                      <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                        Your consultation with <strong className="text-white">Dr. A. Verma</strong> is confirmed for <strong className="text-white">Thursday, 10:30 AM</strong> at <strong className="text-white">Downtown Clinic</strong>.
                      </p>

                      <div className="p-2.5 rounded bg-black/60 border border-neutral-800 text-[11px] font-mono text-neutral-400 space-y-1">
                        <div>&bull; Doctor calendar updated &amp; slot locked</div>
                        <div>&bull; Automated reminders queued for T-24h &amp; T-2h</div>
                      </div>

                      <span className="text-[10px] font-mono text-neutral-500 block text-right">
                        10:16 AM &bull; Instant Confirmation
                      </span>
                    </div>
                  </div>
                )}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start animate-in fade-in duration-150">
                    <div className="bg-neutral-900 border border-neutral-800 px-3.5 py-2.5 rounded-2xl rounded-tl-sm shadow-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <CaseStudyModal
    isOpen={modalOpen}
    onClose={() => setModalOpen(false)}
  />
</section>
);
};

