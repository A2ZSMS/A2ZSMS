import { PageSchema, RelatedGuides } from "../Component/Seo/PageSeo";
import React from "react";
import Food from "../Component/Solutions/Food/Food";
export const metadata = {
  metadataBase: new URL("https://www.a2zsms.in"),
  title: "WhatsApp Chatbots For The Food Technology Industry",
  description:
    "WhatsApp Chatbots For The Food Technology Industry: automate orders, menu queries, delivery updates, feedback, and support 24/7 to boost sales for brands!.",
  keywords:
    "WhatsApp Business API for Food Industry, WhatsApp Marketing for Food and Beverage,WhatsApp Broadcast for Restaurants, WhatsApp Business for Food & Beverage",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/food-beverage/" }],
  openGraph: {
    images: ["/Images/meta-image.jpg"],
    title: "WhatsApp Chatbots For The Food Technology Industry",
    description:
      "WhatsApp Chatbots For The Food Technology Industry: automate orders, menu queries, delivery updates, feedback, and support 24/7 to boost sales for brands!.",

    url: "https://www.a2zsms.in/food-beverage/",
    siteName: "A2ZSMS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Chatbots For The Food Technology Industry",
    description:
      "WhatsApp Chatbots For The Food Technology Industry: automate orders, menu queries, delivery updates, feedback, and support 24/7 to boost sales for brands!.",

    images: ["/Images/meta-image.jpg"],

  },
  robots: "index, follow",

  alternates: {
    canonical: "https://www.a2zsms.in/food-beverage/",
  },
};

const page = () => {
  return (
    <div>
      <PageSchema slug="food-beverage" />
      <Food />
    
      <RelatedGuides slug="food-beverage" />
    </div>
  );
};

export default page;
