// Server component (no "use client"): renders per-page Service / FAQPage JSON-LD
// and a "Related guides" internal-linking block into the static HTML, with no client JS.
import Link from "next/link";
import blogs from "../../../../public/data/blog.json";
import {
  Whatsapp,
  RcsData,
  voicecall,
  bulkSmsData,
} from "../Resources/Faq/FaqData";
import { ChatbotFaqData } from "../Product/Chatbot/ChatbotFaqData";
import { EducationFAQ } from "../Solutions/Education/JsonData";
import { HealthcareFAQ } from "../Solutions/HealthCare/JsonData";
import { RealEstateFAQ } from "../Solutions/RealEstate/JsonData";
import { RetailFAQ } from "../Solutions/Retail/jsonData";
import { TravelFAQ } from "../Solutions/Travel/JsonData";
import { FoodFAQ } from "../Solutions/Food/JsonData";
import { GamingFAQ } from "../Solutions/Gaming/JsonData";
import { GovernmentFAQContent } from "../Solutions/Government/JsonData";
import { MediaFAQ } from "../Solutions/Media/JsonData";
import "../Home/Home.css";

const SITE = "https://www.a2zsms.in";

const SERVICES = {
  "bulk-sms": { href: "/bulk-sms/", label: "Bulk SMS Service" },
  "whatsapp-api": { href: "/whatsapp-api/", label: "WhatsApp Business API" },
  "rcs-service": { href: "/rcs-service/", label: "RCS Business Messaging" },
  "voice-call": { href: "/voice-call/", label: "Bulk Voice Call Broadcasting" },
  chatbot: { href: "/chatbot/", label: "AI WhatsApp Chatbot" },
  platform: { href: "/platform/", label: "CPaaS Messaging Platform" },
  services: { href: "/services/", label: "All Messaging Services" },
  faq: { href: "/faq/", label: "Messaging FAQs" },
};

// Every page: schema facts + the FAQ data the page visibly renders + related links.
// FAQ data is the exact object passed to FAQHome / SolutionsFAQ on that page.
const PAGES = {
  "bulk-sms": {
    name: "Bulk SMS Service",
    serviceType: "Bulk SMS",
    description:
      "DLT-compliant bulk SMS service from Bangalore: promotional, transactional and OTP SMS with 6-character sender IDs, real-time delivery reports and HTTP API access.",
    faq: bulkSmsData,
    intro: {
      heading: "DLT-Compliant Bulk SMS Service in Bangalore",
      text: [
        "All SMS routes are registered on DLT (Distributed Ledger Technology) as mandated by TRAI. We handle your DLT registration, sender ID and template approval, so your promotional, transactional and OTP messages go out compliant from day one.",
        "Promotional SMS is delivered between 9 am and 9 pm to non-DND numbers, while transactional and OTP SMS can be sent 24x7, including to DND numbers. Every campaign includes real-time delivery reports, and developers can send SMS through our API with webhook callbacks.",
      ],
    },
    guides: [
      "how-to-use-bulk-sms-service-grow-business-india-2026",
      "what-is-an-sms-api-and-how-does-it-work-for-indian-businesses",
      "best-otp-sms-provider-in-bangalore",
      "top-10-bulk-sms-secrets-professional-strategies",
      "rcs-fallback-to-sms",
    ],
    related: ["rcs-service", "whatsapp-api", "voice-call", "platform"],
  },
  "whatsapp-api": {
    name: "WhatsApp Business API",
    serviceType: "WhatsApp Business API",
    description:
      "Cloud WhatsApp Business API for Indian businesses: bulk WhatsApp campaigns, chatbots, CRM integration, message templates and real-time analytics.",
    faq: Whatsapp,
    intro: {
      heading: "WhatsApp Business API for Businesses in Bangalore & India",
      text: [
        "Our Cloud WhatsApp API connects your WhatsApp Business number to a hosted platform, so there are no servers to maintain. Sign up with your Facebook Business Manager account, connect your number and start sending approved template messages, campaigns and two-way support conversations.",
        "Integrate WhatsApp with your CRM and existing systems, automate replies with chatbots and track delivery and engagement in real-time analytics.",
      ],
    },
    guides: [
      "what-is-whatsapp-business-api-complete-guide-indian-businesses",
      "whatsapp-pricing-change-india-2026",
      "best-whatsapp-api-message-templates-for-indian-businesses",
      "send-bulk-whatsApp-messages",
      "step-by-step-guide-to-integrating-whatsApp-business-aPI-with-your-cRM",
    ],
    related: ["chatbot", "rcs-service", "bulk-sms", "platform"],
  },
  "rcs-service": {
    name: "RCS Business Messaging",
    serviceType: "RCS Business Messaging",
    description:
      "RCS business messaging with verified sender, branded rich cards, carousels, images and suggested-reply buttons delivered in the default messaging inbox on Android phones.",
    faq: RcsData,
    intro: {
      heading: "RCS Messaging with Verified Sender & SMS Fallback",
      text: [
        "RCS (Rich Communication Services) upgrades plain SMS with your verified brand name and logo, high-resolution images, carousels and action buttons inside the phone's default messaging app.",
        "Where a handset does not support RCS, messages can fall back to SMS so every customer is still reached.",
      ],
    },
    guides: [
      "what-is-rcs-business-messaging",
      "rcs-fallback-to-sms",
      "rcs-vs-sms-vs-whatsapp-which-channel-wins-for-indian-businesses",
      "rcs-marketing-automation-high-converting-campaigns",
      "rcs-vs-whatsapp-which-is-better-for-business-messaging",
    ],
    related: ["bulk-sms", "whatsapp-api", "voice-call", "platform"],
  },
  "voice-call": {
    name: "Bulk Voice Call Broadcasting",
    serviceType: "Voice Broadcasting",
    description:
      "Bulk voice call and voice broadcasting service: pre-recorded voice campaigns, IVR, scheduled calls, auto-retry and call delivery reports for Indian businesses.",
    faq: voicecall,
    intro: {
      heading: "Voice Broadcasting for Alerts, Reminders & Promotions",
      text: [
        "Upload a recorded message, choose your contact list and schedule the campaign. Our voice broadcasting service supports IVR inputs, automatic retries for unanswered calls and detailed call delivery reports, so you know exactly who heard your message.",
      ],
    },
    guides: [
      "what-is-voice-call-boardcasting",
      "power-of-voice-call-alert-business-communication",
      "reliable-voice-call-solutions-for-seamless-communication",
      "a2Z-sMS-voice-calls-elevating-your-marketing-strategy",
    ],
    related: ["bulk-sms", "whatsapp-api", "rcs-service", "platform"],
  },
  chatbot: {
    name: "AI WhatsApp Chatbot",
    serviceType: "WhatsApp Chatbot",
    description:
      "No-code AI WhatsApp chatbot for lead capture, sales and 24/7 customer support, built on the WhatsApp Business API.",
    faq: ChatbotFaqData,
    guides: [
      "how-whatsapp-chatbots-can-revolutionize-customer-support-for-indian-smes",
      "how-whatsApp-chatbots-drive-lead-generation-for-indian-startups",
      "top-10-benefits-of-whatsApp-chatbots-for-small-businesses-in-bangalore",
      "building-scalable-customer-support-with-whatsApp-api-and-chatbots-in-bangalore",
    ],
    related: ["whatsapp-api", "rcs-service", "bulk-sms", "platform"],
  },
  services: {
    guides: [
      "rcs-vs-sms-vs-whatsapp-which-channel-wins-for-indian-businesses",
      "how-to-use-bulk-sms-service-grow-business-india-2026",
      "what-is-whatsapp-business-api-complete-guide-indian-businesses",
      "what-is-voice-call-boardcasting",
    ],
    related: ["bulk-sms", "whatsapp-api", "rcs-service", "voice-call", "chatbot", "platform"],
  },
  "design-developement": {
    name: "Website Design & Development",
    serviceType: "Website Design and Development",
    description:
      "Responsive website design and development for businesses: business websites, e-commerce, maintenance and performance optimisation.",
    guides: ["website-development-services-drive-revenue-growth"],
    related: ["whatsapp-api", "chatbot", "bulk-sms"],
  },
};

const INDUSTRY = (label, faq, guides) => ({
  name: `WhatsApp Business API & Messaging for ${label}`,
  serviceType: "Business Messaging",
  audience: label,
  description: `WhatsApp Business API, bulk SMS, RCS and voice messaging solutions for the ${label} sector.`,
  faq,
  guides,
  related: ["whatsapp-api", "chatbot", "bulk-sms", "rcs-service"],
});

const GENERAL_WA = [
  "what-is-whatsapp-business-api-complete-guide-indian-businesses",
  "best-whatsapp-api-message-templates-for-indian-businesses",
];

Object.assign(PAGES, {
  education: INDUSTRY("Education", EducationFAQ, [
    ...GENERAL_WA,
    "how-whatsApp-chatbots-drive-lead-generation-for-indian-startups",
  ]),
  "health-care": INDUSTRY("Healthcare", HealthcareFAQ, [
    "whatsApp-business-aPI-use-cases-transforming-healthcare-in-india",
    ...GENERAL_WA,
  ]),
  "real-estate": INDUSTRY("Real Estate", RealEstateFAQ, [
    "grow-leads-faster-with-smart-whatsapp-api",
    ...GENERAL_WA,
  ]),
  "retail-ecommerce": INDUSTRY("Retail & E-commerce", RetailFAQ, [
    "why-whatsApp-business-aPI-is-revolutionizing-e-commerce-in-india",
    "rcs-marketing-automation-high-converting-campaigns",
    ...GENERAL_WA,
  ]),
  "tours-travel": INDUSTRY("Tours & Travel", TravelFAQ, [
    "whatsapp-business-api-for-travel-agencies",
    "why-travel-businesses-in-2025-need-whatsApp-api-for-growth",
    GENERAL_WA[0],
  ]),
  "food-beverage": INDUSTRY("Food & Beverage", FoodFAQ, [
    ...GENERAL_WA,
    "how-to-use-bulk-sms-service-grow-business-india-2026",
  ]),
  gaming: INDUSTRY("Gaming", GamingFAQ, [
    ...GENERAL_WA,
    "best-otp-sms-provider-in-bangalore",
  ]),
  government: INDUSTRY("Government", GovernmentFAQContent, [
    "what-is-voice-call-boardcasting",
    "how-to-use-bulk-sms-service-grow-business-india-2026",
    GENERAL_WA[0],
  ]),
  "media-entertainment": INDUSTRY("Media & Entertainment", MediaFAQ, [
    ...GENERAL_WA,
    "rcs-business-messaging-features-benefits-how-it-works",
  ]),
});

const BLOG_BY_SLUG = Object.fromEntries(blogs.map((b) => [b.slug, b]));

function getPage(slug) {
  const page = PAGES[slug];
  if (!page) throw new Error(`PageSeo: unknown page "${slug}"`);
  return page;
}

function guidesFor(page) {
  return page.guides.map((s) => {
    const b = BLOG_BY_SLUG[s];
    // Fail the build rather than ship a broken internal link
    if (!b) throw new Error(`PageSeo: blog slug not found in blog.json: ${s}`);
    return b;
  });
}

const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export function PageSchema({ slug }) {
  const page = getPage(slug);
  const url = `${SITE}/${slug}/`;
  const out = [];
  if (page.name) {
    const service = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.name,
      serviceType: page.serviceType,
      description: page.description,
      url,
      provider: {
        "@type": "Organization",
        name: "A2ZSMS",
        url: `${SITE}/`,
        telephone: "+918431086185",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560092",
          addressCountry: "IN",
        },
      },
      areaServed: [
        { "@type": "City", name: "Bengaluru" },
        { "@type": "Country", name: "India" },
      ],
    };
    if (page.audience) {
      service.audience = { "@type": "BusinessAudience", name: page.audience };
    }
    out.push(service);
  }
  if (page.faq?.faqs?.length) {
    out.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }
  return out.map((d, i) => <JsonLd key={i} data={d} />);
}

export function RelatedGuides({ slug }) {
  const page = getPage(slug);
  const guides = guidesFor(page);
  const related = page.related.map((k) => SERVICES[k]);
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {page.intro && (
          <div className="row justify-content-center mb-5">
            <div className="col-lg-9">
              <h2 className="section-heading text-center">{page.intro.heading}</h2>
              {page.intro.text.map((t, i) => (
                <p key={i} className="section-desc mx-auto text-center">
                  {t}
                </p>
              ))}
            </div>
          </div>
        )}
        <div className="text-center mb-4">
          <span className="section-label">Resources</span>
          <h2 className="section-heading">Related Guides</h2>
        </div>
        <div className="row g-4 justify-content-center">
          {guides.map((b) => (
            <div className="col-md-6 col-lg-4" key={b.slug}>
              <div className="service-card">
                <h3 className="h5 fw-bold">
                  <Link href={`/blogs/${b.slug}/`} className="text-decoration-none text-dark">
                    {b.title.trim()}
                  </Link>
                </h3>
                {b.description && <p>{b.description}</p>}
                <Link href={`/blogs/${b.slug}/`} className="service-link">
                  Read the guide <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <h3 className="h5 fw-bold mb-3">Explore related services</h3>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {related.map((s) => (
              <Link key={s.href} href={s.href} className="btn btn-outline-primary btn-sm rounded-pill px-3">
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
