import WhatsappApi from "../Component/Product/Whatsapp/WhatsappApi";

export const metadata = {
  title: "WhatsApp Business API Provider in Bangalore | A2ZSMS",
  description:
    "A2ZSMS is the top WhatsApp Business API provider in Bangalore. Get free WhatsApp API setup, bulk messaging, automation, and the best WhatsApp marketing services in 2025.",
  keywords:
    "WhatsApp Business API Provider Bangalore, Free WhatsApp API Setup, Best WhatsApp Marketing Services Bangalore, WhatsApp Bulk Messaging, WhatsApp API Solutions, WhatsApp Automation for Business",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/whatsapp-api/" }],
  openGraph: {
    title: "WhatsApp Business API Provider in Bangalore | A2ZSMS",
    description:
      "Looking for a WhatsApp Business API provider in Bangalore? A2ZSMS offers free API setup, automation, and bulk WhatsApp messaging solutions for businesses.",
    url: "https://www.a2zsms.in/whatsapp-api/",
    siteName: "A2ZSMS",
    images: [
      {
        url: "/images/1.png",
        width: 1200,
        height: 630,
        alt: "A2ZSMS WhatsApp Business API Provider Bangalore",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Business API Provider in Bangalore | A2ZSMS",
    description:
      "Get WhatsApp Business API services in Bangalore with A2ZSMS. Free setup, automation, and bulk WhatsApp marketing for your business.",
    images: ["/images/1.png"],
    site: "@yourtwitterhandle",
  },
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://www.a2zsms.in/whatsapp-api/",
  },
  // ✅ Extra SEO meta tags
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#0A8F08",
  category: "WhatsApp Business API",
  applicationName: "A2ZSMS",
  generator: "Next.js",
  other: {
    "twitter:creator": "@yourtwitterhandle",
    "og:updated_time": new Date().toISOString(),
  },
};

const page = () => {
  return (
    <div>
      <WhatsappApi />
    </div>
  );
};

export default page;
