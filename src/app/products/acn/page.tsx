import React from "react";
import type { Metadata } from "next";
import { AcnDetailPage } from "@/components/AcnDetailPage";
import { ACN_FAQS, generateFaqSchema } from "@/data/faqs";

export const metadata: Metadata = {
  title: "ACN — After Call Notify | Lightweight Android Utility",
  description:
    "ACN is an offline-first, privacy-focused Android application that triggers custom follow-up actions, message templates, and workflows right after phone calls.",
  alternates: {
    canonical: "/products/acn",
  },
  openGraph: {
    title: "ACN — After Call Notify | NytKode",
    description:
      "Privacy-first Android utility that automatically triggers customizable post-call workflows and notifications right after phone calls.",
    url: "https://nytkode.com/products/acn",
  },
};

const acnFaqSchema = generateFaqSchema(
  ACN_FAQS,
  "https://nytkode.com/products/acn"
);

export default function AcnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(acnFaqSchema) }}
      />
      <AcnDetailPage />
    </>
  );
}
