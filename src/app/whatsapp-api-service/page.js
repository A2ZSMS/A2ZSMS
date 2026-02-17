import WhatsappApiService from "../Component/Product/WhatsappApiService/WhatsappApiService";

export const metadata = {
  title:
    "WhatsApp API Service - Send Bulk Messages with Official API | A2ZSMS",
  description:
    "Get official WhatsApp Business API from A2ZSMS. Send bulk WhatsApp messages, automate notifications, set up chatbots, and boost sales. Starting at just Rs 2999 setup.",
  keywords:
    "WhatsApp API Service, Bulk WhatsApp Messaging, WhatsApp Business API, WhatsApp Marketing, WhatsApp Chatbot, WhatsApp Automation, WhatsApp API Provider India, WhatsApp Bulk Sender",
  authors: [
    {
      name: "A2ZSMS",
      url: "https://www.a2zsms.in/whatsapp-api-service/",
    },
  ],
  openGraph: {
    title:
      "WhatsApp API Service - Send Bulk Messages Instantly | A2ZSMS",
    description:
      "Boost sales and automate customer communication with official WhatsApp Business API. Trusted by 500+ businesses across India.",
    url: "https://www.a2zsms.in/whatsapp-api-service/",
    siteName: "A2ZSMS",
    images: [
      {
        url: "/images/1.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp API Service by A2ZSMS",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WhatsApp API Service - Bulk Messaging & Automation | A2ZSMS",
    description:
      "Official WhatsApp Business API provider. Send bulk messages, automate notifications, and integrate chatbots. Starting at Rs 2999.",
    images: ["/images/1.png"],
    site: "@yourtwitterhandle",
  },
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://www.a2zsms.in/whatsapp-api-service/",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#075e54",
  category: "WhatsApp API Service",
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
      <WhatsappApiService />
    </div>
  );
};

export default page;
