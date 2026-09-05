import React from "react";
import type { Metadata } from "next";
import { ProductsView } from "@/components/ProductsView";

export const metadata: Metadata = {
  title: "Commercial & Open Source Products",
  description:
    "Explore NytKode's suite of operational products: MEGA for automated Meta messaging, Agency Operations Platform, ACN Android utility, and Project Igniter.",
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

export default function ProductsPage() {
  return <ProductsView />;
}
