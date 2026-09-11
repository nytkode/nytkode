import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jaro = localFont({
  src: "../../public/fonts/Jaro-Regular.ttf",
  variable: "--font-jaro",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nytkode.com"),
  title: {
    default: "NytKode — Systems that generate more revenue in less time.",
    template: "%s | NytKode",
  },
  description:
    "We engineer custom operational software and automation workflows that help businesses win more customers, eliminate manual busywork, and scale revenue.",
  keywords: [
    "NytKode",
    "Knight Code",
    "Operational Software",
    "Business Automation",
    "Operational Infrastructure",
    "WhatsApp Automation",
    "WhatsApp Business API",
    "MEGA Multi-Channel Engagement & Growth Automation",
    "Agency Operations Platform",
    "Custom Business Systems",
    "ACN",
    "Project Igniter",
  ],
  authors: [{ name: "NytKode", url: "https://nytkode.com" }],
  creator: "NytKode",
  publisher: "NytKode",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NytKode — Systems that generate more revenue in less time.",
    description:
      "We build systems that help businesses win more customers, save time, and get more done.",
    url: "https://nytkode.com",
    siteName: "NytKode",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NytKode — Systems that generate more revenue in less time.",
    description:
      "We build systems that help businesses win more customers, save time, and get more done.",
    creator: "@nytkode",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
import { ContactProvider } from "@/context/ContactContext";
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nytkode.com/#organization",
      "name": "NytKode",
      "alternateName": ["Knight Code", "Nyt Kode"],
      "url": "https://nytkode.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://nytkode.com/#logo",
        "url": "https://nytkode.com/nytkode.svg",
        "caption": "NytKode Logo",
      },
      "sameAs": [
        "https://www.linkedin.com/company/nytkode",
        "https://x.com/nytkode",
        "https://www.instagram.com/nytkode/",
        "https://www.facebook.com/profile.php?id=61594102536305",
        "https://github.com/nytkode",
        "https://github.com/vishesh-sachan"
      ],
      "founder": {
        "@type": "Person",
        "name": "Vishesh Sachan",
        "jobTitle": "Founder & Software Engineer",
        "url": "https://www.linkedin.com/in/vishesh-sachan",
        "sameAs": [
          "https://github.com/vishesh-sachan",
          "https://www.linkedin.com/in/vishesh-sachan",
          "https://x.com/visheshsachan21",
          "https://www.instagram.com/visheshsachan21/"
        ]
      },
      "description": "NytKode engineers custom operational software and automation workflows that help businesses win more customers, eliminate manual busywork, and scale revenue.",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "vishesh@nytkode.com",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://nytkode.com/#website",
      "url": "https://nytkode.com",
      "name": "NytKode",
      "publisher": {
        "@id": "https://nytkode.com/#organization"
      },
      "description": "Systems that generate more revenue in less time."
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${jaro.variable}`}>
      <head>
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

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

        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "ygmo1e4s72");`,
          }}
        />
        {/* End Microsoft Clarity */}

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

        <CalendlyProvider>
          <ContactProvider>{children}</ContactProvider>
        </CalendlyProvider>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
