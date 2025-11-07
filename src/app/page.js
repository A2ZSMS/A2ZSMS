import Home from "./Component/Home/Home";

export const metadata = {
  title: "Top Messaging Services in Bangalore: SMS, WhatsApp, RCS & Voice",
  description:
    "Get top messaging services in Bangalore, India. Reliable Bulk SMS, WhatsApp, RCS, and Voice Call solutions for businesses and marketing campaigns.",
  keywords:
    "Bulk SMS Services Bangalore, WhatsApp Messaging Services Bangalore, RCS Messaging Provider Bangalore, Voice Call Services Bangalore, Messaging Solutions India",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in" }],
  openGraph: {
    title: "Top Messaging Services in Bangalore: SMS, WhatsApp, RCS & Voice",
    description:
      "Get top messaging services in Bangalore, India. Reliable Bulk SMS, WhatsApp, RCS, and Voice Call solutions for businesses and marketing campaigns.",
    url: "https://www.a2zsms.in",
    siteName: "A2ZSMS",
    images: [
      {
        url: "/images/hardesr_part_bsns.png",
        width: 1200,
        height: 630,
        alt: "Top Messaging Services in Bangalore: SMS, WhatsApp, RCS & Voice",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Messaging Services in Bangalore: SMS, WhatsApp, RCS & Voice",
    description:
      "Reliable Bulk SMS, WhatsApp, RCS, and Voice Call services in Bangalore, India. Perfect solutions for business communication and marketing.",
    images: ["/images/hardesr_part_bsns.png"],
    site: "@yourtwitterhandle",
  },
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://www.a2zsms.in",
  },
};

const Page = () => {
  return <Home />;
};

export default Page;
