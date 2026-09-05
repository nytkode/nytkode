"use client";

import React, { useState } from "react";
import { ArrowRightIcon, CheckIcon, MessageSquareIcon, WorkflowIcon, SparklesIcon, ShieldCheckIcon, ChevronRightIcon, ReplyIcon } from "./Icons";

interface MegaProductShowcaseProps {
  onTalkToUs: (subject?: string) => void;
}

export const MegaProductShowcase: React.FC<MegaProductShowcaseProps> = ({
  onTalkToUs,
}) => {
  const [activeChannel, setActiveChannel] = useState<"whatsapp" | "instagram" | "facebook" | "threads">("instagram");
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);
  const [humanTakeover, setHumanTakeover] = useState(false);

  // Unified Demo Inbox data per channel
  const demoConversations = {
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
    <section id="products" data-theme="light" className="bg-white text-black py-28 sm:py-36 border-b border-neutral-200 relative overflow-hidden">
      {/* Ambient Studio Depth Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1300px] h-[700px] bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.03),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950">
            Technology built for business.
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* MEGA — PRIMARY PRODUCT SHOWCASE                                           */}
        {/* ========================================================================= */}
        <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl mb-24">
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

            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.02] mb-6">
              One system for your entire Meta presence.
            </h3>

            <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl">
              Automate conversations, capture leads, respond to comments, and manage customer interactions across WhatsApp, Instagram, Facebook and Threads.
            </p>
          </div>

          {/* ========================================================================= */}
          {/* LARGE MEGA DASHBOARD SHOWCASE (Unified Inbox & Production Workspace)      */}
          {/* ========================================================================= */}
          <div className="bg-neutral-950 text-white border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl mb-16">
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

            {/* Main Interface Layout with Expanded Height & Full Visibility Across All Channels */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[580px] lg:min-h-[620px]">
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
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>GRAPH API CONNECTED</span>
                  </div>
                </div>
              </div>

              {/* Center: Conversation Stream & Message Composer */}
              <div className="md:col-span-9 flex flex-col justify-between p-4 sm:p-6 bg-black/40 h-full">
                <div className="flex flex-col flex-1">
                  {/* Conversation Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-neutral-800 shrink-0">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-white text-base">
                          {currentConv.customer}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-neutral-300">
                          {currentConv.channelLabel}
                        </span>
                      </div>
                      <div className="text-xs text-neutral-500 font-mono mt-0.5">
                        {currentConv.handle} &bull; {currentConv.tag}
                      </div>
                    </div>

                    <button
                      onClick={() => setHumanTakeover(!humanTakeover)}
                      className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                        humanTakeover
                          ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                          : "bg-white/5 text-neutral-400 border-white/10 hover:text-white"
                      }`}
                    >
                      {humanTakeover ? "Staff Takeover Active" : "Take Over Live"}
                    </button>
                  </div>

                  {/* Message Stream — Spacious view showing full conversation, with natural space below shorter chats */}
                  <div className="space-y-4 pr-1 overflow-y-auto">
                    {currentConv.messages.map((msg: any, idx: number) => (
                      <div
                        key={idx}
                        className={`flex flex-col ${
                          msg.sender === "customer" ? "items-start" : "items-end"
                        }`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl text-xs sm:text-sm leading-relaxed overflow-hidden shadow-xs ${
                            msg.sender === "customer"
                              ? "bg-neutral-800 text-neutral-100 rounded-tl-xs p-3.5 border border-neutral-700/50"
                              : "bg-white text-neutral-950 font-medium rounded-tr-xs"
                          }`}
                        >
                          <div className={msg.sender === "mega" ? "p-3.5 pb-2.5" : ""}>
                            <p>{msg.text}</p>
                          </div>

                          {/* Attached Interactive Reply Buttons (Design ref from Proof Section) */}
                          {msg.buttons && (
                            <div className="border-t border-neutral-200/90 p-2 bg-neutral-100/90 flex flex-col sm:flex-row gap-2">
                              {msg.buttons.map((btn: string, bIdx: number) => (
                                <div
                                  key={bIdx}
                                  className={`flex-1 flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                                    bIdx === 0
                                      ? "bg-neutral-950 hover:bg-neutral-800 text-white shadow-xs"
                                      : "bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300/80 shadow-2xs"
                                  }`}
                                >
                                  <ReplyIcon className={`w-3.5 h-3.5 shrink-0 ${bIdx === 0 ? "text-white" : "text-neutral-500"}`} />
                                  <span>{btn}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-500 mt-1 px-1">
                          {msg.isAutomated && (
                            <span className="text-emerald-400 font-medium">[MEGA AUTO]</span>
                          )}
                          <span>{msg.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message Composer Anchored at Bottom */}
                <div className="pt-4 mt-4 border-t border-neutral-800 shrink-0">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={
                        humanTakeover
                          ? "Staff typing live response..."
                          : "Automated engine monitoring customer reply..."
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 focus:outline-none font-mono"
                    />
                    <button
                      onClick={() => onTalkToUs("MEGA Live Demo")}
                      className="px-4 py-2.5 rounded-lg bg-white text-black font-semibold text-xs font-mono shrink-0 hover:bg-neutral-200 transition-colors cursor-pointer"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* MODULAR CHANNEL CAPABILITIES                                              */}
          {/* ========================================================================= */}
          <div className="mb-20">
            <div className="max-w-2xl mb-8">
              <h4 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 mb-2">
                Start with one channel. Expand when you need to.
              </h4>
              <p className="text-sm text-neutral-600">
                Modular capabilities powered by the same unified MEGA engine. Pick only what your business operations require.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "WhatsApp Automation",
                  desc: "Automate enquiries, follow-ups, customer conversations, lead capture and appointment workflows.",
                  tag: "META CLOUD API",
                },
                {
                  title: "Instagram Automation",
                  desc: "Automate DMs, comment triggers, replies and lead capture.",
                  tag: "GRAPH API",
                },
                {
                  title: "Facebook Automation",
                  desc: "Automate Messenger conversations and Page comment interactions.",
                  tag: "PAGE MESSENGER",
                },
                {
                  title: "Threads Automation",
                  desc: "Automate supported conversations and interactions.",
                  tag: "THREADS API",
                },
              ].map((channel) => (
                <div
                  key={channel.title}
                  className="p-5 rounded-xl bg-white border border-neutral-200 flex flex-col justify-between hover:border-neutral-400 transition-colors shadow-xs"
                >
                  <div>
                    {/* <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-2">
                      {channel.tag}
                    </span> */}
                    <h5 className="text-lg font-bold text-neutral-950 mb-2">
                      {channel.title}
                    </h5>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {channel.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-semibold text-black">
                    <CheckIcon className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Modular Add-On</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* THE AUTOMATION ENGINE (Commented Out)                                      */}
          {/* ========================================================================= */}
          {/*
          <div className="mb-20 p-6 sm:p-8 rounded-2xl bg-neutral-900 text-white border border-neutral-800">
            <div className="max-w-2xl mb-8">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">
                THE AUTOMATION ENGINE
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                One interaction can trigger an entire workflow.
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2">
                One automation engine across your Meta channels — from the first public comment to the confirmed sale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-2 relative">
              {workflowSteps.map((step, idx) => {
                const isSelected = activeWorkflowStep === idx;
                return (
                  <div
                    key={step.title}
                    onClick={() => setActiveWorkflowStep(idx)}
                    className={`p-3.5 rounded-lg border text-left cursor-pointer transition-all ${
                      isSelected
                        ? "bg-white text-black border-white shadow-lg scale-105 z-10"
                        : "bg-neutral-950 text-neutral-300 border-neutral-800 hover:border-neutral-600"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                      <span className={isSelected ? "text-neutral-600" : "text-neutral-500"}>
                        0{idx + 1}
                      </span>
                      <span className={`px-1 rounded text-[9px] font-bold ${
                        isSelected ? "bg-black text-white" : "bg-white/10 text-neutral-400"
                      }`}>
                        {step.actor}
                      </span>
                    </div>
                    <h6 className="text-xs font-bold leading-tight mb-1">
                      {step.title}
                    </h6>
                    <p className={`text-[10px] leading-snug line-clamp-3 ${
                      isSelected ? "text-neutral-700" : "text-neutral-400"
                    }`}>
                      {step.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">CURRENT STEP:</span>
                <span className="text-white font-semibold">{workflowSteps[activeWorkflowStep].title}</span>
                <span className="text-neutral-500">— {workflowSteps[activeWorkflowStep].detail}</span>
              </div>
              <span className="text-[11px] text-neutral-400">
                Full deterministic execution &bull; 0 manual steps needed
              </span>
            </div>
          </div>
          */}

          {/* ========================================================================= */}
          {/* REAL BUSINESS EXAMPLE (Clinic Workflow: PRICE → Appointment) (Commented Out) */}
          {/* ========================================================================= */}
          {/*
          <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-white border border-neutral-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                  REAL BUSINESS USE CASE // HEALTHCARE &amp; AESTHETIC CLINICS
                </span>
                <h4 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
                  Turn conversations into appointments.
                </h4>
              </div>
              <span className="text-xs font-mono text-emerald-700 font-semibold px-3 py-1 rounded bg-emerald-50 border border-emerald-200">
                PROVEN REVENUE IMPACT
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
              {[
                { title: "Customer Comments", content: '"PRICE"', sub: "Instagram / Facebook Post" },
                { title: "Keyword Detection", content: "MEGA detects 'PRICE'", sub: "Instant regex trigger" },
                { title: "Public Reply", content: '"Sent you details!"', sub: "Engages social algorithm" },
                { title: "Instagram DM", content: "Pricing + Booking Link", sub: "Interactive calendar slot" },
                { title: "Lead Captured", content: "Contact & Slot Locked", sub: "CRM & Calendar Sync" },
                { title: "Staff Takeover", content: "Take over as needed", sub: "Zero manual data entry" },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">Step 0{idx + 1}</span>
                    <h6 className="text-xs font-bold text-neutral-900 mt-1 mb-1">{item.title}</h6>
                    <div className="text-xs font-semibold text-black bg-white p-2 rounded border border-neutral-200 my-1 font-mono">
                      {item.content}
                    </div>
                  </div>
                  <span className="text-[10px] text-neutral-500 mt-2">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
          */}

          {/* ========================================================================= */}
          {/* MEGA CTA BAR                                                              */}
          {/* ========================================================================= */}
          <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-neutral-950">
                Start automating your Meta presence.
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                Choose the channels and workflows your business needs.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onTalkToUs("Explore MEGA")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold text-white bg-black hover:bg-neutral-800 transition-colors cursor-pointer shadow-sm"
              >
                <span>Explore MEGA</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>

              <a
                href="https://calendly.com/nytkode/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold text-neutral-900 bg-neutral-200 hover:bg-neutral-300 transition-colors cursor-pointer"
              >
                <span>Book a call</span>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECOND COMMERCIAL PRODUCT (Agency Operations Platform)                   */}
        {/* ========================================================================= */}
        <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              {/* Product Badge & Name in same style as MEGA + In Development status */}
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

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 leading-[1.06] mb-4">
                Operations built for marketing agencies.
              </h3>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
                A purpose-built operational system for small and medium-sized marketing agencies to organize clients, assets, workflows and day-to-day operations.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onTalkToUs("Agency Operations Platform — Early Access")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-mono font-semibold text-white bg-black hover:bg-neutral-800 transition-colors cursor-pointer shadow-sm"
              >
                <span>Coming soon &bull; Get Notified</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
