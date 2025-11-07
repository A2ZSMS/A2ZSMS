import React from "react";
import RcsSms from "../Component/Product/Rcs/RcsSms";

export const metadata = {
  title: "Best RCS Messaging Provider in Bangalore | India",
  description:
    "Top RCS messaging provider in Bangalore, India. Reliable business RCS services for enterprises, campaigns, and customer engagement.",
  keywords:
    "Best RCS Messaging Provider Bangalore, RCS Messaging Services India, RCS Business Messaging Provider, RCS Provider Bangalore, Rich Communication Services India",
  authors: [
    { name: "RCS Services Team", url: "https://www.a2zsms.in/rcs-service/" },
  ],
  openGraph: {
    title: "Best RCS Messaging Provider in Bangalore | India",
    description:
      "Looking for the best RCS messaging provider in Bangalore, India? Get enterprise RCS campaigns, business messaging, and rich communication services.",
    url: "https://www.a2zsms.in/rcs-service/",
    siteName: "RCS Messaging Services",
    images: [
      {
        url: "/images/2.png",
        width: 1200,
        height: 630,
        alt: "Best RCS Messaging Provider in Bangalore | India",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best RCS Messaging Provider in Bangalore | India",
    description:
      "Top RCS messaging services in Bangalore, India. Enterprise RCS provider for rich communication, customer engagement, and business messaging.",
    images: ["/images/2.png"],
    site: "@yourtwitterhandle",
  },

  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",

  alternates: {
    canonical: "https://www.a2zsms.in/rcs-service/",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#0072ff",
  category: "RCS Business Messaging",
  applicationName: "RCS Messaging Services",
  generator: "Next.js",
  other: {
    "twitter:creator": "@yourtwitterhandle",
    "og:updated_time": new Date().toISOString(),
  },
};

const page = () => {
  return (
    <div>
      <RcsSms />
    </div>
  );
};

export default page;
