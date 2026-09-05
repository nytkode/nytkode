"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { ContactModal } from "@/components/ContactModal";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  MessageSquareIcon,
  WorkflowIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ReplyIcon,
} from "@/components/Icons";

interface ChatMessage {
  sender: "customer" | "mega";
  text: string;
  time: string;
  isAutomated?: boolean;
  buttons?: string[];
}

interface ChannelConversation {
  customer: string;
  handle: string;
  channelLabel: string;
  tag: string;
  status: string;
  messages: ChatMessage[];
  automationTrace: string;
}

export default function ProductsPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState<string | undefined>(undefined);
  const [activeChannel, setActiveChannel] = useState<"whatsapp" | "instagram" | "facebook" | "threads">("instagram");
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);
  const [humanTakeover, setHumanTakeover] = useState(false);

  const handleOpenContact = (subject?: string) => {
    setContactSubject(subject);
    setContactOpen(true);
  };

  const handleCloseContact = () => {
    setContactOpen(false);
    setContactSubject(undefined);
  };

  // Unified Demo Inbox data per channel
  const demoConversations: Record<"whatsapp" | "instagram" | "facebook" | "threads", ChannelConversation> = {
    instagram: {
      customer: "Elena Rostova",
      handle: "@elena.rostova",
      channelLabel: "Instagram DM",
      tag: "Lead: High Intent",
      status: "Automated Flow Active",
      messages: [
        { sender: "customer", text: "Hi! How much is the hydra-facial package?", time: "10:14 AM" },
        { sender: "mega", text: "Hey Elena! Our Deluxe Hydra-Facial is $180. We have 2 slots available this Thursday at 2:00 PM and 4:30 PM. Would you like to lock in a slot?", time: "10:14 AM", isAutomated: true },
        { sender: "customer", text: "Thursday at 2:00 PM works perfectly!", time: "10:15 AM" },
        { sender: "mega", text: "Reserved for you! Here is your private confirmation link: nytk.de/b/elena-3091. See you Thursday!", time: "10:15 AM", isAutomated: true },
      ],
      automationTrace: "Trigger: Keyword 'package' → Dynamic Slot Query → Auto Confirmation Dispatched",
    },
    whatsapp: {
      customer: "Dr. Marcus Reed",
      handle: "+1 (555) 382-9102",
      channelLabel: "WhatsApp Business API",
      tag: "Patient Booking",
      status: "Reminder Cadence",
      messages: [
        {
          sender: "mega",
          text: "Hello Marcus, this is a reminder for your consultation tomorrow at 11:00 AM with Dr. Aris.",
          buttons: ["Confirm", "Reschedule"],
          time: "09:00 AM",
          isAutomated: true,
        },
        { sender: "customer", text: "Confirm", time: "09:01 AM" },
        { sender: "mega", text: "Appointment confirmed! Your clinic location is Suite 400, Midtown Medical Tower. Check-in code: D-8821.", time: "09:01 AM", isAutomated: true },
      ],
      automationTrace: "Trigger: 24h Prior Cadence → 'Confirm' Selected → State: CONFIRMED_IN_CALENDAR",
    },
    facebook: {
      customer: "Sarah Jenkins",
      handle: "Sarah Jenkins (Page Inbox)",
      channelLabel: "Facebook Messenger",
      tag: "Ad Inbound",
      status: "Lead Captured",
      messages: [
        { sender: "customer", text: "Saw your ad for clinic expansion software. Can this sync across 3 branches?", time: "02:30 PM" },
        { sender: "mega", text: "Hi Sarah! Yes, MEGA synchronizes patient booking, doctor shifts, and ad lead routing across unlimited physical locations.", time: "02:30 PM", isAutomated: true },
        { sender: "customer", text: "Can we schedule a 15-min walkthrough?", time: "02:31 PM" },
        { sender: "mega", text: "Instant booking link sent: Pick your preferred time slot at nytk.de/marcus-demo", time: "02:31 PM", isAutomated: true },
      ],
      automationTrace: "Trigger: Inbound Ad Payload → Multi-Location Qualification Rule Applied",
    },
    threads: {
      customer: "TechOps Agency",
      handle: "@techops_agency",
      channelLabel: "Threads Mentions",
      tag: "Brand Ingestion",
      status: "Auto Response Logged",
      messages: [
        { sender: "customer", text: "@nytkode love the architecture breakdowns! Are public APIs open?", time: "11:20 AM" },
        { sender: "mega", text: "Thanks for the shout! Yes, our open-source tools and developer CLI are on GitHub.", time: "11:21 AM", isAutomated: true },
        { sender: "customer", text: "Great, checking them out now!", time: "11:22 AM" },
        { sender: "mega", text: "Feel free to reach out if you need custom system integration!", time: "11:22 AM", isAutomated: true },
      ],
      automationTrace: "Trigger: Brand Mention Filter → Public Reply Generator Queued",
    },
  };

  const workflowSteps = [
    { title: "Instagram Comment", detail: "Customer comments 'PRICE' on recent treatment post", actor: "CUSTOMER" },
    { title: "Keyword Detected", detail: "MEGA regex engine detects high-intent trigger 'PRICE' in <120ms", actor: "ENGINE" },
    { title: "Public Reply", detail: "Automated public comment: 'We have sent you the pricing details in DM!'", actor: "MEGA" },
    { title: "DM Sent", detail: "Direct message with treatment brochure & private booking calendar link", actor: "MEGA" },
    { title: "Lead Captured", detail: "Customer profile, phone number, and intent logged into CRM database", actor: "DATABASE" },
    { title: "Automated Follow-up", detail: "Automated gentle reminder sent 4 hours later if slot unconfirmed", actor: "CADENCE" },
    { title: "Human Takeover", detail: "Front desk staff can step in at any moment with single-click takeover", actor: "STAFF" },
  ];

  const currentConv = demoConversations[activeChannel];

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      {/* 1. Navigation */}
      <Navbar onTalkToUs={() => handleOpenContact()} initialTheme="light" />

      <main className="flex-1 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Heading */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.06] mb-5">
              Software built by NytKode.
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed">
              Production systems, agency operations, and open utilities designed around the way businesses actually work.
            </p>
          </div>

          {/* ========================================================================= */}
          {/* 01. MEGA — FLAGSHIP META AUTOMATION                                        */}
          {/* ========================================================================= */}
          <div id="mega" className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl mb-16 sm:mb-20 scroll-mt-28">
            {/* Header & Hierarchy */}
            <div className="max-w-4xl mb-12">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-xs font-mono font-bold tracking-widest uppercase bg-black text-white px-3 py-1 rounded">
                  MEGA
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  Meta Engagement &amp; Growth Automation
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 leading-[1.06] mb-5">
                One system for your entire Meta presence.
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl">
                Automate conversations, capture leads, respond to comments, and manage customer interactions across WhatsApp, Instagram, Facebook and Threads.
              </p>
            </div>

            {/* MEGA DASHBOARD SHOWCASE (Interactive Workspace) */}
            <div className="bg-neutral-950 text-white border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl mb-14">
              {/* Top Workspace Header Bar */}
              <div className="bg-neutral-900/90 border-b border-neutral-800 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-neutral-700" />
                    <div className="w-3 h-3 rounded-full bg-neutral-700" />
                    <div className="w-3 h-3 rounded-full bg-neutral-700" />
                  </div>
                  <span className="text-xs font-mono text-neutral-400 font-medium pl-2 border-l border-neutral-800">
                    MEGA Workspace
                  </span>
                </div>

                {/* Channel Tabs Bar */}
                <div className="flex items-center gap-1.5 p-1 bg-black/50 rounded-lg border border-neutral-800 text-xs font-mono">
                  {(["instagram", "whatsapp", "facebook", "threads"] as const).map((ch) => (
                    <button
                      key={ch}
                      onClick={() => setActiveChannel(ch)}
                      className={`px-3 py-1 rounded transition-all capitalize cursor-pointer ${
                        activeChannel === ch
                          ? "bg-white text-black font-semibold shadow-xs"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      {ch}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Interface Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[540px] lg:min-h-[580px]">
                {/* Compact Sidebar Navigation */}
                <div className="hidden md:flex md:col-span-3 border-r border-neutral-800 p-4 sm:p-5 flex-col justify-between bg-neutral-950/60">
                  <div className="space-y-1.5 text-xs font-mono">
                    <div className="text-[10px] uppercase text-neutral-500 px-2.5 py-1.5 tracking-wider">
                      Operational Modules
                    </div>
                    {[
                      { label: "Overview", count: "4 Active" },
                      { label: "Inbox", count: "12 Unread", active: true },
                      { label: "Comments", count: "24 Monitored" },
                      { label: "Contacts", count: "1,420" },
                      { label: "Analytics", count: "+38%" },
                      { label: "Settings", count: "Meta API OK" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${
                          item.active
                            ? "bg-white/10 text-white font-semibold"
                            : "text-neutral-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className="text-[10px] text-neutral-500 font-normal">
                          {item.count}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-[11px] font-mono">
                    <div className="text-neutral-400">Meta API Status:</div>
                    <div className="text-emerald-400 font-semibold flex items-center gap-1.5 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Live &bull; Low Latency</span>
                    </div>
                  </div>
                </div>

                {/* Center / Right: Live Channel Conversation Stream */}
                <div className="md:col-span-9 flex flex-col justify-between p-4 sm:p-6 lg:p-7 bg-neutral-950">
                  {/* Active Thread Meta Card */}
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-neutral-800/80">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm sm:text-base font-bold text-white">
                            {currentConv.customer}
                          </span>
                          <span className="text-xs font-mono text-neutral-400">
                            {currentConv.handle}
                          </span>
                        </div>
                        <div className="text-xs font-mono text-neutral-500 mt-0.5">
                          Channel: <span className="text-neutral-300">{currentConv.channelLabel}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-neutral-300">
                          {currentConv.tag}
                        </span>
                        <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{currentConv.status}</span>
                        </span>
                      </div>
                    </div>

                    {/* Chat Bubble Stream */}
                    <div className="space-y-4 py-6">
                      {currentConv.messages.map((msg, idx) => (
                        <div
                          key={idx}
                          className={`flex flex-col ${
                            msg.sender === "customer" ? "items-start" : "items-end"
                          }`}
                        >
                          <div
                            className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-xs sm:text-sm ${
                              msg.sender === "customer"
                                ? "bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-tl-xs"
                                : "bg-white text-black font-normal rounded-tr-xs shadow-md"
                            }`}
                          >
                            <p className="leading-relaxed">{msg.text}</p>

                            {/* Optional Attached WhatsApp Button Pickers */}
                            {msg.buttons && (
                              <div className="mt-3 pt-2.5 border-t border-neutral-200/40 flex flex-wrap gap-2">
                                {msg.buttons.map((btn) => (
                                  <span
                                    key={btn}
                                    className="px-2.5 py-1 rounded bg-neutral-100 text-neutral-900 font-semibold text-xs border border-neutral-300"
                                  >
                                    {btn}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="flex items-center gap-2 px-1 pt-1 text-[10px] font-mono text-neutral-500">
                            <span>{msg.time}</span>
                            {msg.isAutomated && (
                              <span className="text-neutral-400">&bull; Automated via MEGA Engine</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Trace & Takeover Controls */}
                  <div className="pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-neutral-400">
                    <div className="flex items-center gap-2 truncate">
                      <span className="text-neutral-500 font-semibold">TRACE:</span>
                      <span className="text-neutral-300 truncate">{currentConv.automationTrace}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => setHumanTakeover(!humanTakeover)}
                        className={`px-3 py-1.5 rounded text-xs transition-colors cursor-pointer ${
                          humanTakeover
                            ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                            : "bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10"
                        }`}
                      >
                        {humanTakeover ? "Staff Takeover Active" : "Take over chat"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Feature Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  icon: MessageSquareIcon,
                  title: "Direct Messages",
                  desc: "Instant replies, appointment booking, and customer inquiry routing on Instagram and WhatsApp.",
                },
                {
                  icon: ReplyIcon,
                  title: "Comment Automation",
                  desc: "Detect keywords on posts and ads, reply in public, and automatically send private DMs.",
                },
                {
                  icon: WorkflowIcon,
                  title: "Cross-Platform Sync",
                  desc: "Connect WhatsApp, Instagram, Facebook, and Threads under a single synchronized operations hub.",
                },
                {
                  icon: ShieldCheckIcon,
                  title: "Human Takeover",
                  desc: "Seamlessly transfer high-intent conversations to live staff with zero latency or context loss.",
                },
              ].map((feat, idx) => {
                const IconComp = feat.icon;
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 mb-4">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-neutral-900 mb-2">
                        {feat.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* MEGA Bottom CTA Row */}
            <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold text-neutral-950">
                  Ready to deploy MEGA for your business?
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                  Configure custom channels and workflows for your team.
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => handleOpenContact("Deploy MEGA")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs font-semibold text-white bg-black hover:bg-neutral-800 transition-colors cursor-pointer shadow-sm"
                >
                  <span>Request Deployment</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 02. AGENCY OPERATIONS PLATFORM                                            */}
          {/* ========================================================================= */}
          <div id="agency-operations-platform" className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl mb-16 sm:mb-20 scroll-mt-28">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase bg-black text-white px-3 py-1 rounded">
                      AOP
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      Agency Operations Platform
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-200/80 border border-neutral-300/80 text-[11px] font-mono text-neutral-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    <span>In development</span>
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 leading-[1.06] mb-4">
                  Operations built for marketing agencies.
                </h2>

                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
                  A purpose-built operational system for small and medium-sized marketing agencies to organize clients, assets, delivery pipelines, and day-to-day operations in one unified workspace.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => handleOpenContact("Agency Operations Platform — Early Access")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-xs font-mono font-semibold text-white bg-black hover:bg-neutral-800 transition-colors cursor-pointer shadow-sm"
                >
                  <span>Get Notified for Early Access</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 03 & 04. FREE & PUBLIC UTILITIES (ACN & Project Igniter)                   */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ACN */}
            <div id="acn" className="bg-neutral-950 text-white border border-neutral-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl flex flex-col justify-between scroll-mt-28">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase bg-white/10 text-white border border-white/20 px-3 py-1 rounded">
                      ACN
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      After Call Notify
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-widest uppercase bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 px-2.5 py-1 rounded-md">
                    Free Forever
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                  Lightweight Android call action triggers.
                </h3>

                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-6">
                  A privacy-first Android utility that automatically triggers helpful follow-up workflows and notifications right after phone calls.
                </p>

                <div className="space-y-2.5 font-mono text-xs text-neutral-300 mb-8">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Zero ads. 100% free utility.</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Offline-first local device processing.</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="https://acn.nytkode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-colors shadow-sm cursor-pointer"
                >
                  <span>Visit acn.nytkode.com</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Project Igniter */}
            <div id="project-igniter" className="bg-neutral-950 text-white border border-neutral-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl flex flex-col justify-between scroll-mt-28">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase bg-white/10 text-white border border-white/20 px-3 py-1 rounded">
                      IGNITER
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      Project Igniter
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-widest uppercase bg-white/10 text-white border border-white/20 px-2.5 py-1 rounded-md">
                    Open Source
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                  Visual workflow composer &amp; script generator.
                </h3>

                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-6">
                  A visual development workspace to construct multi-step operational workflows and generate zero-dependency configuration scripts.
                </p>

                <div className="space-y-2.5 font-mono text-xs text-neutral-300 mb-8">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                    <span>Open-source developer tooling.</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                    <span>Public repository available on GitHub.</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="https://github.com/vishesh-sachan/Project_Igniter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-colors shadow-sm cursor-pointer"
                >
                  <span>View on GitHub</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterSection onTalkToUs={() => handleOpenContact()} theme="dark" />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={handleCloseContact}
        defaultSubject={contactSubject}
      />
    </div>
  );
}
