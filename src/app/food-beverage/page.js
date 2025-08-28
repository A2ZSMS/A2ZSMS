import React from "react";
import Food from "../Component/Solutions/Food/Food";
export const metadata = {
  title: "WhatsApp Solutions for Food & Beverage Industry",
  description:
    "Enhance your food business with WhatsApp: send promotions, manage orders, provide real-time updates, and engage customers effectively.",
  keywords:
    "WhatsApp Business API for Food Industry, WhatsApp Marketing for Food and Beverage,WhatsApp Broadcast for Restaurants, WhatsApp Business for Food & Beverage",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/food-beverage/" }],
  openGraph: {
    title: "WhatsApp Solutions for Food & Beverage Industry",
    description:
      "Enhance your food business with WhatsApp: send promotions, manage orders, provide real-time updates, and engage customers effectively.",

    url: "https://www.a2zsms.in/food-beverage/",
    siteName: "A2ZSMS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Solutions for Food & Beverage Industry",
    description:
      "Enhance your food business with WhatsApp: send promotions, manage orders, provide real-time updates, and engage customers effectively.",

    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",

  alternates: {
    canonical: "https://www.a2zsms.in/food-beverage/",
  },
};

const page = () => {
  return (
    <div>
      <Food />
    </div>
  );
};

export default page;
