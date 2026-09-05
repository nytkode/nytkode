import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jaro = localFont({
  src: "../../public/fonts/Jaro-Regular.ttf",
  variable: "--font-jaro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NytKode — Systems that generate more revenue in less time.",
  description:
    "We build systems that help businesses win more customers, save time, and get more done.",
  keywords: [
    "NytKode",
    "Knight Code",
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
      "We build systems that help businesses win more customers, save time, and get more done.",
    siteName: "NytKode",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/nytkode.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/nytkode.svg"],
    apple: [
      { url: "/nytkode.svg", type: "image/svg+xml" },
    ],
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
    <html lang="en" className={`scroll-smooth ${jaro.variable}`}>
      <body className="min-h-screen bg-white text-black font-sans antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
