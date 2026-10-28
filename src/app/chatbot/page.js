import { PageSchema, RelatedGuides } from "../Component/Seo/PageSeo";
import Chatbot from "../Component/Product/Chatbot/Chatbot";

export const metadata = {
  metadataBase: new URL("https://www.a2zsms.in"),
  title:
    "AI WhatsApp Chatbot for Customer Support & Leads | A2ZSMS",
  description:
    "AI WhatsApp chatbot by A2ZSMS: automate customer support, capture leads and boost sales with smart 24/7 conversations. Built for businesses across India.",
  keywords:
    "WhatsApp chatbot, AI chatbot, WhatsApp automation, customer support automation, lead generation, WhatsApp API, India",
  openGraph: {
    title: "AI WhatsApp Chatbot for Customer Support & Leads | A2ZSMS",
    description:
      "AI WhatsApp chatbot by A2ZSMS: automate customer support, capture leads and boost sales with smart 24/7 conversations. Built for businesses across India.",
    url: "https://www.a2zsms.in/chatbot/",
    siteName: "A2ZSMS",
    images: [
      {
        url: "/image/product/chatbot_1.png",
        width: 1024,
        height: 1024,
        alt: "AI WhatsApp Chatbot",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.a2zsms.in/chatbot/",
  },
};

const ChatbotPage = () => {
  return (
    <div>
      <PageSchema slug="chatbot" />
      <Chatbot />
      <RelatedGuides slug="chatbot" />
    </div>
  );
};

export default ChatbotPage;
