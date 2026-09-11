import React from "react";
import type { Metadata } from "next";
import { MegaDetailPage } from "@/components/MegaDetailPage";
import { MEGA_FAQS, generateFaqSchema } from "@/data/faqs";

export const metadata: Metadata = {
  title: "MEGA — Multi-Channel Engagement & Growth Automation",
  description:
    "MEGA is NytKode's flagship multi-channel automation platform for WhatsApp, Instagram, Facebook, and Threads. Sub-second response times, automated lead capture, and calendar booking.",
  alternates: {
    canonical: "/products/mega",
  },
  openGraph: {
    title: "MEGA — Multi-Channel Engagement & Growth Automation | NytKode",
    description:
      "One unified system for your customer messaging channels: WhatsApp, Instagram, Facebook, and Threads.",
    url: "https://nytkode.com/products/mega",
  },
};

const megaFaqSchema = generateFaqSchema(
  MEGA_FAQS,
  "https://nytkode.com/products/mega"
);

export default function MegaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(megaFaqSchema) }}
      />
      <MegaDetailPage />
    </>
  );
}
