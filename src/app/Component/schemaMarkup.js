"use client";

import { usePathname } from "next/navigation";
import { A2ZSMS_Service } from "../../../public/Schema/HomeSchema";
import { Organization } from "../../../public/Schema/Organization";
import { Website_Schema } from "../../../public/Schema/Website";
import { SoftwareApplication } from "../../../public/Schema/SoftwareApplication";
import { Whatsapp } from "./Resources/Faq/FaqData";

const SITE = "https://www.a2zsms.in";

// Readable names for breadcrumb trails (URL segment -> label)
const PAGE_NAMES = {
  about: "About Us",
  "bulk-sms": "Bulk SMS",
  "whatsapp-api": "WhatsApp Business API",
  "rcs-service": "RCS Messaging",
  "voice-call": "Voice Call",
  chatbot: "WhatsApp Chatbot",
  "design-developement": "Website Design & Development",
  services: "Services",
  platform: "Platform",
  contact: "Contact Us",
  career: "Careers",
  faq: "FAQ",
  blogs: "Blogs",
  "request-demo": "Request a Demo",
  "try-for-free": "Try for Free",
  privacy: "Privacy Policy",
  terms: "Terms & Conditions",
  "refund-policy": "Refund Policy",
  education: "Education",
  "health-care": "Healthcare",
  "real-estate": "Real Estate",
  "retail-ecommerce": "Retail & E-commerce",
  "tours-travel": "Tours & Travel",
  "food-beverage": "Food & Beverage",
  gaming: "Gaming",
  government: "Government",
  "media-entertainment": "Media & Entertainment",
};

// FAQ schema must match FAQs that are visible on the page (homepage shows the WhatsApp FAQ)
const homeFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: Whatsapp.faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

function breadcrumbFor(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  // Blog posts render their own breadcrumb (with the post title) in blogs/[slug]/page.js
  if (segments.length !== 1 || !PAGE_NAMES[segments[0]]) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: PAGE_NAMES[segments[0]],
        item: `${SITE}/${segments[0]}/`,
      },
    ],
  };
}

const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

// Rendered as plain <script> tags so the structured data is in the static HTML
const SchemaMarkup = () => {
  const pathname = usePathname() || "/";
  const isHome = pathname === "/";
  const breadcrumb = breadcrumbFor(pathname);

  return (
    <>
      <JsonLd data={Organization} />
      <JsonLd data={Website_Schema} />
      {isHome && <JsonLd data={A2ZSMS_Service} />}
      {isHome && <JsonLd data={SoftwareApplication} />}
      {isHome && <JsonLd data={homeFaq} />}
      {breadcrumb && <JsonLd data={breadcrumb} />}
    </>
  );
};

export default SchemaMarkup;
