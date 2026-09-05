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

import Script from "next/script";
import { CalendlyProvider } from "@/context/CalendlyContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${jaro.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K9VT2Z5X');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-black font-sans antialiased flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K9VT2Z5X"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <CalendlyProvider>{children}</CalendlyProvider>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
