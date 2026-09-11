"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { FAQSection } from "@/components/FAQSection";
import { MEGA_FAQS } from "@/data/faqs";
import { useCalendly } from "@/context/CalendlyContext";
import {
  ArrowRightIcon,
  ChevronRightIcon,
  CheckIcon,
  MessageSquareIcon,
  WorkflowIcon,
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

export const MegaDetailPage: React.FC = () => {
  const { openCalendly } = useCalendly();
  const [activeChannel, setActiveChannel] = useState<"whatsapp" | "instagram" | "facebook" | "threads">("instagram");
  const [humanTakeover, setHumanTakeover] = useState(false);

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

  const currentConv = demoConversations[activeChannel];

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <Navbar initialTheme="light" />

      <main className="flex-1 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-8 sm:mb-12">
            <Link href="/products" className="hover:text-black transition-colors">
              Products
            </Link>
            <ChevronRightIcon className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-neutral-900 font-medium truncate">MEGA</span>
          </div>

          {/* Hero Section */}
          <div className="max-w-4xl mb-14 sm:mb-16">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-xs font-mono font-bold tracking-widest uppercase bg-black text-white px-3 py-1 rounded">
                MEGA
              </span>
              <span className="text-xs font-mono text-neutral-500">
                Multi-Channel Engagement &amp; Growth Automation
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.06] mb-6">
              One system for your customer messaging channels.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 font-normal leading-relaxed max-w-3xl mb-8">
              Automate customer conversations, capture qualified leads, reply to ad comments in seconds, and synchronize bookings across WhatsApp, Instagram, Facebook, and Threads.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => openCalendly()}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-semibold text-white bg-black hover:bg-neutral-800 transition-colors cursor-pointer shadow-sm"
              >
                <span>Deploy MEGA for Your Business</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Workspace Simulator */}
          <div className="bg-neutral-950 text-white border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl mb-16 sm:mb-20">
            {/* Top Bar */}
            <div className="bg-neutral-900/90 border-b border-neutral-800 px-4 sm:px-6 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                </div>
                <span className="text-xs font-mono text-neutral-400 font-medium pl-2 border-l border-neutral-800">
                  MEGA Live Interface Simulator
                </span>
              </div>

              {/* Channel Tabs */}
              <div className="flex items-center gap-1 p-1 bg-black/60 rounded-xl border border-neutral-800/80 text-xs font-mono w-full sm:w-auto overflow-x-auto no-scrollbar">
                {(["instagram", "whatsapp", "facebook", "threads"] as const).map((ch) => (
                  <button
                    key={ch}
                    onClick={() => setActiveChannel(ch)}
                    className={`flex-1 sm:flex-initial text-center px-3 py-1.5 rounded-lg transition-all capitalize cursor-pointer whitespace-nowrap ${
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

            {/* Interface Body */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[540px] lg:min-h-[580px]">
              {/* Sidebar Modules */}
              <div className="hidden md:flex md:col-span-3 border-r border-neutral-800 p-4 sm:p-5 flex-col justify-between bg-neutral-950/60 select-none">
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
                    { label: "Settings", count: "APIs Connected" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-default select-none ${
                        item.active
                          ? "bg-white/10 text-white font-semibold"
                          : "text-neutral-400"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] text-neutral-500 font-normal">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-[11px] font-mono cursor-default select-none">
                  <div className="text-neutral-400">Channel Ingestion:</div>
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live &bull; Low Latency</span>
                  </div>
                </div>
              </div>

              {/* Chat Stream & Composer */}
              <div className="md:col-span-9 flex flex-col justify-between p-4 sm:p-6 lg:p-7 bg-neutral-950">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-800/80 select-none">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
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

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-neutral-300">
                        {currentConv.tag}
                      </span>
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{currentConv.status}</span>
                      </span>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="space-y-4 py-6">
                    {currentConv.messages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col ${
                          msg.sender === "customer" ? "items-start" : "items-end"
                        }`}
                      >
                        <div
                          className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-xs sm:text-sm select-none ${
                            msg.sender === "customer"
                              ? "bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-tl-xs"
                              : "bg-white text-black font-normal rounded-tr-xs shadow-md"
                          }`}
                        >
                          <p className="leading-relaxed">{msg.text}</p>

                          {msg.buttons && (
                            <div className="mt-3 pt-2.5 border-t border-neutral-200/40 flex flex-wrap gap-2">
                              {msg.buttons.map((btn) => (
                                <span
                                  key={btn}
                                  className="px-2.5 py-1 rounded bg-neutral-100 text-neutral-900 font-semibold text-xs border border-neutral-300 cursor-default select-none"
                                >
                                  {btn}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-2 px-1 pt-1 text-[10px] font-mono text-neutral-500 select-none">
                          <span>{msg.time}</span>
                          {msg.isAutomated && (
                            <span className="text-emerald-400 font-medium">[MEGA ENGINE AUTO]</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Controls */}
                <div className="pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-neutral-400 select-none">
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-neutral-500 font-semibold">ENGINE TRACE:</span>
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
                      {humanTakeover ? "Staff Takeover Active" : "Test Live Takeover"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Feature Pillars */}
          <div className="mb-20">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-2">
                SYSTEM CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
                Engineered for speed, reliability, and revenue capture.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: MessageSquareIcon,
                  title: "Direct Messages",
                  desc: "Sub-second automatic responses, appointment booking links, and customer qualification on WhatsApp and Instagram.",
                },
                {
                  icon: ReplyIcon,
                  title: "Comment Automation",
                  desc: "Detect public comment triggers on posts and ads, reply publicly to boost engagement, and auto-dispatch private DMs.",
                },
                {
                  icon: WorkflowIcon,
                  title: "Cross-Platform Sync",
                  desc: "Consolidate WhatsApp, Instagram, Facebook, and Threads under a single deterministic operations hub.",
                },
                {
                  icon: ShieldCheckIcon,
                  title: "Human Takeover",
                  desc: "Seamlessly transition high-intent conversations to live staff with full context and zero message loss.",
                },
              ].map((feat, idx) => {
                const IconComp = feat.icon;
                return (
                  <div key={idx} className="p-6 sm:p-7 rounded-2xl bg-neutral-50 border border-neutral-200/90 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 mb-4 shadow-2xs">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-neutral-900 mb-2">
                        {feat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Modular Add-ons */}
          <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-neutral-950 text-white border border-neutral-800">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-2">
                MODULAR ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
                Deploy channel by channel.
              </h2>
              <p className="text-sm sm:text-base text-neutral-400">
                Choose only the communication rails your operational workflow requires.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "WhatsApp API",
                  desc: "Inbound enquiries, automated appointment booking, two-way reminders, and patient/customer support cadences.",
                },
                {
                  title: "Instagram DM & Comments",
                  desc: "Direct message lead qualification, Story mention ingestion, and automated comment-to-DM triggers.",
                },
                {
                  title: "Facebook Messenger",
                  desc: "Business Page Messenger workflows, Lead Ad instant response routing, and public post engagement.",
                },
                {
                  title: "Threads Operations",
                  desc: "Monitored brand conversations, public keyword triggers, and supported interaction pipelines.",
                },
              ].map((channel, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {channel.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {channel.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                    <CheckIcon className="w-3.5 h-3.5" />
                    <span>Modular Capability</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MEGA FAQ Section */}
          <FAQSection
            items={MEGA_FAQS}
            theme="light"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about supported channels, Meta API compliance, latency, and integration."
            className="mb-20 pt-12 border-t border-neutral-200"
          />

          {/* Bottom Deployment CTA */}
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-100 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 mb-2">
                Ready to deploy MEGA for your business?
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We configure the channels, state machines, and booking rules tailored directly to your team’s daily operations.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => openCalendly()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-semibold text-white bg-black hover:bg-neutral-800 transition-colors cursor-pointer shadow-sm"
              >
                <span>Book a Technical Discovery Call</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <FooterSection theme="dark" />
    </div>
  );
};
