import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NytKode — Systems that generate more revenue in less time.",
  description:
    "We build software, automation, and infrastructure that help businesses capture more opportunities, eliminate repetitive work, and operate faster.",
  keywords: [
    "NytKode",
    "Night Code",
    "B2B Software",
    "Business Automation",
    "Operational Infrastructure",
    "MEGA Meta Automation",
    "WhatsApp Business API",
    "Workflow Software",
    "ACN",
    "Project Installer",
  ],
  authors: [{ name: "NytKode" }],
  openGraph: {
    title: "NytKode — Systems that generate more revenue in less time.",
    description:
      "We build software, automation, and infrastructure that help businesses capture more opportunities, eliminate repetitive work, and operate faster.",
    siteName: "NytKode",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-black font-sans antialiased selection:bg-black selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
