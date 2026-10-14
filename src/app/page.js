import Home from "./Component/Home/Home";

export const metadata = {
  metadataBase: new URL("https://www.a2zsms.in"),
  title: "Bulk SMS, WhatsApp & RCS Services in Bangalore | A2ZSMS",
  description:
    "Bulk SMS, WhatsApp & RCS services in Bangalore by A2ZSMS. Reliable DLT-compliant SMS, WhatsApp Business API, RCS and voice calls for business campaigns.",
  keywords:
    "Bulk SMS Services Bangalore, WhatsApp Messaging Services Bangalore, RCS Messaging Provider Bangalore, Voice Call Services Bangalore, Messaging Solutions India",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in" }],
  openGraph: {
    title: "Bulk SMS, WhatsApp & RCS Services in Bangalore | A2ZSMS",
    description:
      "Bulk SMS, WhatsApp & RCS services in Bangalore by A2ZSMS. Reliable DLT-compliant SMS, WhatsApp Business API, RCS and voice calls for business campaigns.",
    url: "https://www.a2zsms.in",
    siteName: "A2ZSMS",
    images: [
      {
        url: "/Images/hardesr_part_bsns.png",
        width: 1200,
        height: 630,
        alt: "Bulk SMS, WhatsApp & RCS Services in Bangalore | A2ZSMS",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulk SMS, WhatsApp & RCS Services in Bangalore | A2ZSMS",
    description:
      "Reliable Bulk SMS, WhatsApp, RCS, and Voice Call services in Bangalore, India. Perfect solutions for business communication and marketing.",
    images: ["/Images/hardesr_part_bsns.png"],

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
