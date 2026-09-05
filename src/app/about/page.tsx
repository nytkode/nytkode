"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { OriginDirectiveSection } from "@/components/OriginDirectiveSection";
import { FooterSection } from "@/components/FooterSection";
import { ContactModal } from "@/components/ContactModal";

export default function AboutPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState<string | undefined>(undefined);

  const handleOpenContact = (subject?: string) => {
    setContactSubject(subject);
    setContactOpen(true);
  };

  const handleCloseContact = () => {
    setContactOpen(false);
    setContactSubject(undefined);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      {/* 1. Navigation */}
      <Navbar onTalkToUs={() => handleOpenContact()} initialTheme="dark" />

      <main className="flex-1">
        {/* 2. Origin & Directive Section (Founder, Mission, Directives) */}
        <OriginDirectiveSection />
      </main>

      {/* 3. Footer (Black Background with Final CTA) */}
      <FooterSection onTalkToUs={handleOpenContact} theme="dark" />

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={handleCloseContact}
        defaultSubject={contactSubject}
      />
    </div>
  );
}
