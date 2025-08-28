import React from "react";
import Media from "../Component/Solutions/Media/Media";
export const metadata = {
  title: "WhatsApp API Solutions for Media & Entertainment Industry",
  description:
    "Engage audiences, promote events, and deliver rich media content seamlessly with our WhatsApp API solutions tailored for the media and entertainment industry.",
  keywords:
    "WhatsApp API for Entertainment Industry,customer engagement,sales optimization,WhatsApp Audience Interaction,WhatsApp Business for Media & Entertainment",
  authors: [
    { name: "A2ZSMS", url: "https://www.a2zsms.in/media-entertainment/" },
  ],
  openGraph: {
    title: "WhatsApp API Solutions for Media & Entertainment Industry",
    description:
      "Engage audiences, promote events, and deliver rich media content seamlessly with our WhatsApp API solutions tailored for the media and entertainment industry..",
    url: "https://www.a2zsms.in/media-entertainment/",
    siteName: "A2ZSMS",
    images: [
      {
        url: "/images/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "A2ZSMS Bulk WhatsApp Messaging Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp API Solutions for Media & Entertainment Industry",
    description:
      "Engage audiences, promote events, and deliver rich media content seamlessly with our WhatsApp API solutions tailored for the media and entertainment industry..",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",

  alternates: {
    canonical: "https://www.a2zsms.in/media-entertainment/",
  },
};

const page = () => {
  return (
    <div>
      <Media />
    </div>
  );
};

export default page;
