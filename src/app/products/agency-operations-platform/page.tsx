import React from "react";
import type { Metadata } from "next";
import { AgencyOperationsDetailPage } from "@/components/AgencyOperationsDetailPage";
import { AGENCY_OPS_FAQS, generateFaqSchema } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Agency Operations Platform — Systems for Marketing Agencies",
  description:
    "A purpose-built operational system for small and medium marketing agencies to organize clients, raw assets, frame-by-frame approval pipelines, and day-to-day operations.",
  alternates: {
    canonical: "/products/agency-operations-platform",
  },
  openGraph: {
    title: "Agency Operations Platform | NytKode",
    description:
      "Operations built for marketing agencies: Centralized asset pipeline, client review portals, and automated milestone gates.",
    url: "https://nytkode.com/products/agency-operations-platform",
  },
};

const agencyOpsFaqSchema = generateFaqSchema(
  AGENCY_OPS_FAQS,
  "https://nytkode.com/products/agency-operations-platform"
);

export default function AgencyOperationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agencyOpsFaqSchema) }}
      />
      <AgencyOperationsDetailPage />
    </>
  );
}
