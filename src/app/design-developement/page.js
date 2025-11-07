import React from "react";
import Designs from "../Component/Product/DesignAndDevolpment/Designs";

export const metadata = {
  title: "Best Website Development Services in India",
  description:
    "A2ZSMS offers top website development services in India. Professional service providers for custom, eCommerce, and business websites.",
  keywords:
    "Best Website Development Services India, Website Service Providers, Professional Web Development, Custom Website Development, eCommerce Website Development India, Business Website Services",
  authors: [
    { name: "A2ZSMS", url: "https://www.a2zsms.in/design-developement/" },
  ],
  openGraph: {
    title: "Best Website Development Services in India",
    description:
      "Professional website development services in India. A2ZSMS builds custom, business, and eCommerce websites that grow your brand online.",
    url: "https://www.a2zsms.in/design-developement/",
    siteName: "A2ZSMS",
    images: [
      {
        url: "/images/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "A2ZSMS Website Development Services India",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Website Development Services in India",
    description:
      "Get expert website development services in India. A2ZSMS delivers custom, business, and eCommerce website solutions.",
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
