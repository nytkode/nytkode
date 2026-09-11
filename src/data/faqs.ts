export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

/**
 * Generate Schema.org JSON-LD FAQPage structured data
 */
export function generateFaqSchema(faqs: FAQItem[], pageUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(pageUrl ? { "@id": `${pageUrl}#faq` } : {}),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// 1. HOME PAGE FAQs
export const HOME_FAQS: FAQItem[] = [
  {
    id: "home-what-we-do",
    question: "What does NytKode actually do?",
    answer:
      "We build custom software and automations that take over repetitive, manual work in your business. Whether it's responding to customer messages 24/7, organizing client files and approvals, or connecting your tools together, we create reliable systems so you never lose leads or waste hours on routine busywork.",
    category: "Identity",
  },
  {
    id: "home-vs-agency",
    question: "How is NytKode different from a traditional software agency or consultancy?",
    answer:
      "Most agencies charge you for endless billable hours, slide decks, and temporary marketing campaigns. We don't. We are software engineers who build permanent, working systems directly inside your business operations. Once your system is deployed, it runs automatically without ongoing hourly consulting fees.",
    category: "Identity",
  },
  {
    id: "home-target-businesses",
    question: "What kinds of businesses do you work with?",
    answer:
      "We work with businesses where speed and customer communication matter — such as aesthetic and medical clinics, creative and growth marketing agencies, professional services, and scaling B2B companies. If your team spends hours answering WhatsApp messages, copy-pasting customer info, or chasing approvals, we can help.",
    category: "Scope",
  },
  {
    id: "home-timeline",
    question: "How fast can a system be built and live in my business?",
    answer:
      "Most custom systems go from initial diagnosis to live operation in 2 to 4 weeks. Because we build with proven, lightweight software foundations, we get your solution up and running quickly without unnecessary complexity.",
    category: "Process",
  },
  {
    id: "home-integrations",
    question: "Can you connect with the tools and apps we already use?",
    answer:
      "Yes. We easily connect with your existing tools — including WhatsApp Business, Instagram, Google Workspace, Calendly, Stripe, your CRM, and internal databases — so you don't have to switch platforms or change how your team likes to work.",
    category: "Technical",
  },
  {
    id: "home-getting-started",
    question: "How do we get started?",
    answer:
      "You can book a free 30-minute discovery call with our team. We'll look at where your business is currently losing time or leads, and map out a simple, actionable plan to automate it.",
    category: "Next Steps",
  },
];

// 2. PRODUCTS CATALOG FAQs (/products)
export const PRODUCTS_CATALOG_FAQS: FAQItem[] = [
  {
    id: "products-ready-vs-custom",
    question: "Can we use NytKode products out-of-the-box, or do you customize them for us?",
    answer:
      "You can do both. Products like MEGA and our Agency Operations Platform are ready to use right away, but we can also customize workflows, messaging rules, and integrations specifically to match how your team operates.",
    category: "Architecture",
  },
  {
    id: "products-interoperability",
    question: "Can different NytKode products work together?",
    answer:
      "Yes. All of our software is built on the same lightweight standards. For example, leads captured automatically through MEGA messaging can feed directly into your agency operational pipelines or CRM without any manual data entry.",
    category: "Integration",
  },
  {
    id: "products-support",
    question: "What kind of support do we get after launch?",
    answer:
      "We handle the cloud hosting, API updates, and 24/7 monitoring so everything runs smoothly in the background. If you ever need adjustments or new features as your business grows, our engineering team is here to support you.",
    category: "Support",
  },
  {
    id: "products-open-source",
    question: "Are your free tools like ACN and Project Igniter really free for business use?",
    answer:
      "Yes, 100%. Our community and open-source tools are completely free for both personal and commercial work. They have zero hidden fees, zero ads, and no data tracking.",
    category: "Licensing",
  },
];

// 3. MEGA FLAGSHIP FAQs (/products/mega)
export const MEGA_FAQS: FAQItem[] = [
  {
    id: "mega-what-is",
    question: "What is MEGA and how can it help my business?",
    answer:
      "MEGA is an all-in-one messaging system that automatically handles customer chats, ad comments, and appointment bookings across WhatsApp, Instagram, Facebook, and Threads. Instead of staff manually typing replies, MEGA answers customer questions instantly 24/7 and books appointments directly on your calendar.",
    category: "Overview",
  },
  {
    id: "mega-channels",
    question: "Which messaging platforms can I connect to MEGA?",
    answer:
      "MEGA connects your official WhatsApp Business API, Instagram Direct Messages, Instagram post & ad comments, Facebook Messenger, and Threads into one unified dashboard.",
    category: "Channels",
  },
  {
    id: "mega-comment-to-lead",
    question: "How does MEGA turn social media and ad comments into paying customers?",
    answer:
      "When someone leaves a comment on your Instagram post or Meta ad (like 'How much is this?' or 'Price?'), MEGA instantly replies publicly and automatically sends them a private DM with details, pricing, and a direct booking link in under a second.",
    category: "Automation",
  },
  {
    id: "mega-human-takeover",
    question: "What if a customer asks a complex question that needs a real person?",
    answer:
      "You're always in control. Whenever a conversation needs human touch, MEGA instantly pauses automation for that chat so your team can step in and reply directly. The bot won't interrupt while a team member is talking.",
    category: "Control",
  },
  {
    id: "mega-compliance",
    question: "Is MEGA safe to use with our official social media accounts?",
    answer:
      "Yes, completely. MEGA only uses official Meta Graph and WhatsApp Cloud APIs approved by Meta. It does not use risky unofficial browser scrapers or unauthorized bots, so your accounts and phone numbers are 100% safe from bans.",
    category: "Compliance",
  },
  {
    id: "mega-calendar-booking",
    question: "Can MEGA book appointments directly on my calendar?",
    answer:
      "Yes. MEGA syncs directly with tools like Calendly and Google Calendar. It checks available time slots in real time, offers them to the customer inside the chat, and confirms the booking immediately without sending them to confusing external websites.",
    category: "Booking",
  },
];

// 4. AGENCY OPERATIONS PLATFORM FAQs (/products/agency-operations-platform)
export const AGENCY_OPS_FAQS: FAQItem[] = [
  {
    id: "agency-what-is",
    question: "What is the Agency Operations Platform and how does it help my agency?",
    answer:
      "It is an operational workspace designed specifically for marketing and creative agencies. It solves the everyday chaos of lost client files, scattered WhatsApp feedback, and endless revision rounds by putting all your clients, raw assets, video review rooms, and approvals in one organized place.",
    category: "Overview",
  },
  {
    id: "agency-vs-drive",
    question: "How is this different from just using Google Drive or Dropbox?",
    answer:
      "Regular cloud storage only stores files — it doesn't help you manage client reviews. The Agency Operations Platform lets clients click a link, watch video cuts, and leave exact time-stamped feedback and approvals directly on the video without having to create an account or download bulky files.",
    category: "Product",
  },
  {
    id: "agency-approval-rooms",
    question: "How do client approvals work?",
    answer:
      "You send clients a private, secure review link. They can view the work on their phone or computer, leave clear revision notes, and click 'Approve' when satisfied. No lost email chains or confusing Slack threads.",
    category: "Collaboration",
  },
  {
    id: "agency-duplicate-prevention",
    question: "How does this prevent duplicate files and lost revisions?",
    answer:
      "The platform automatically tracks versions and locks in milestone statuses (e.g., Raw Upload → In Progress → Client Review → Approved). Your team and clients always know exactly which version is the current one, eliminating 'final_v2_edit.mp4' mistakes.",
    category: "Storage",
  },
  {
    id: "agency-permissions",
    question: "Can clients see each other's projects or files?",
    answer:
      "Never. Each client gets their own isolated workspace with strict permission controls. Clients only ever see their own approved materials, while your internal team can manage all client accounts from one central view.",
    category: "Security",
  },
];

// 5. ACN (AFTER CALL NOTIFY) FAQs (/products/acn)
export const ACN_FAQS: FAQItem[] = [
  {
    id: "acn-what-is",
    question: "What is ACN (After Call Notify) and how do I use it?",
    answer:
      "ACN is a simple Android app that pops up right after you finish a phone call, giving you quick one-tap buttons to send pre-written WhatsApp messages, SMS follow-ups, or save quick notes. If you frequently call clients or customers and need to send follow-up info immediately, ACN saves you from typing the same message over and over.",
    category: "Overview",
  },
  {
    id: "acn-privacy",
    question: "Does ACN save or upload my phone calls, contacts, or personal data?",
    answer:
      "No, never. ACN is 100% offline. Everything runs locally on your phone. It never connects to any external servers, does not track your calls, and contains zero analytics or telemetry. Your privacy is fully protected.",
    category: "Privacy",
  },
  {
    id: "acn-free",
    question: "Is ACN completely free?",
    answer:
      "Yes. ACN is a free community utility made by NytKode. There are no subscriptions, no in-app purchases, and no ads.",
    category: "Pricing",
  },
  {
    id: "acn-custom-templates",
    question: "Can I customize my own message templates and actions?",
    answer:
      "Yes. You can create custom message templates (like 'Thanks for your call! Here is our address/catalog link') and choose whether to send them via WhatsApp, SMS, or copy them to your clipboard with a single tap.",
    category: "Features",
  },
  {
    id: "acn-android-support",
    question: "What phones are supported?",
    answer:
      "ACN works on any modern Android smartphone running Android 10 or newer.",
    category: "Compatibility",
  },
];
