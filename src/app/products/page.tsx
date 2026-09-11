import React from "react";
import type { Metadata } from "next";
import { ProductsView } from "@/components/ProductsView";
import { PRODUCTS_CATALOG_FAQS, generateFaqSchema } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Commercial & Open Source Products",
  description:
    "Explore NytKode's suite of operational products: MEGA for Multi-Channel Engagement & Growth Automation, Agency Operations Platform, ACN Android utility, and Project Igniter.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "NytKode Products — MEGA, Agency Platform, ACN & Project Igniter",
    description:
      "Explore NytKode's suite of operational products: MEGA, Agency Operations Platform, ACN, and Project Igniter.",
    url: "https://nytkode.com/products",
  },
};

const productsFaqSchema = generateFaqSchema(
  PRODUCTS_CATALOG_FAQS,
  "https://nytkode.com/products"
);

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsFaqSchema) }}
      />
      <ProductsView />
    </>
  );
}
