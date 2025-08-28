import React from "react";
import Designs from "../Component/Product/DesignAndDevolpment/Designs";

export const metadata = {
  title: "Best Web Design Agency, Website Designer in India",
  description:
    "Website Designing, Website Designer, Website Developer, Website Designing Services, Internet Website Designers, Website Creation Services, service providers, India",
  keywords:
    "Bulk WhatsApp Messaging Services Bangalore, WhatsApp marketing for business, WhatsApp bulk messaging providers, WhatsApp Business solutions, SMS marketing",
  authors: [
    { name: "A2ZSMS", url: "https://www.a2zsms.in/design-developement/" },
  ],
  openGraph: {
    title: "Website Designing, Website Designer in India",
    description:
      "Website Designing, Website Designer, Website Developer, Website Designing Services, Internet Website Designers, Website Creation Services, service providers, India",
    url: "https://www.a2zsms.in/design-developement/",
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
    title: "Website Designing, Website Designer in India",
    description:
      "Website Designing, Website Designer, Website Developer, Website Designing Services, Internet Website Designers, Website Creation Services, service providers, India",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.a2zsms.in/design-developement/",
  },
};

const page = () => {
  return (
    <>
      <Designs />
    </>
  );
};

export default page;
