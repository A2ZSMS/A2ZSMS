import React from "react";
import Contact from "../Component/Company/Contact/Contact";
export const metadata = {
  title: "Contact - Get in Touch for Bulk SMS & WhatsApp Services",
  description:
    "Contact us for Bulk SMS and WhatsApp API solutions for businesses in Bangalore. Get the best WhatsApp marketing and bulk messaging services today!",
  keywords:
    "Contact - Get in Touch for Bulk SMS Services, Top Bulk WhatsApp Messaging Services in Bangalore, Best WhatsApp marketing services in Bangalore, SMS marketing, WhatsApp bulk messaging service providers Bangalore",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/contact/" }],
  openGraph: {
    title: "Contact - Get in Touch for Bulk SMS & WhatsApp Services",
    description:
      "Contact us for Bulk SMS and WhatsApp API solutions for businesses in Bangalore. Get the best WhatsApp marketing and bulk messaging services today!",
    url: "https://www.a2zsms.in/contact/",
    siteName: "A2ZSMS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Get in Touch for Bulk SMS & WhatsApp Services",
    description:
      "Contact us for Bulk SMS and WhatsApp API solutions for businesses in Bangalore. Get the best WhatsApp marketing and bulk messaging services today!",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",

  alternates: {
    canonical: "https://www.a2zsms.in/contact/",
  },
};

const page = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default page;
