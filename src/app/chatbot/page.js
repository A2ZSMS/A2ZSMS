import Chatbot from "../Component/Product/Chatbot/Chatbot";

export const metadata = {
  metadataBase: new URL("https://www.a2zsms.in"),
  title:
    "AI WhatsApp Chatbot - Automate Customer Support & Engagement | A2ZSMS",
  description:
    "Transform your business with our AI-powered WhatsApp chatbot. Automate customer support, generate leads, and boost sales with conversations. Available in India.",
  keywords:
    "WhatsApp chatbot, AI chatbot, WhatsApp automation, customer support automation, lead generation, WhatsApp API, India",
  openGraph: {
    title: "AI WhatsApp Chatbot - Automate Customer Support & Engagement",
    description:
      "Transform your business with our AI-powered WhatsApp chatbot. Automate customer support, generate leads, and boost sales with intelligent conversations.",
    url: "https://a2zsms.in/chatbot",
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
    canonical: "https://a2zsms.in/chatbot",
  },
};

const ChatbotPage = () => {
  return (
    <div>
      <Chatbot />
    </div>
  );
};

export default ChatbotPage;
