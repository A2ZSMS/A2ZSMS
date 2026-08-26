import RcsLanding from "../Component/Product/RcsLanding/RcsLanding";

export const metadata = {
  metadataBase: new URL("https://www.a2zsms.in"),
  title: "RCS Messaging Service - Rich Business Messaging | A2ZSMS",
  description:
    "India's leading RCS Messaging provider. Send rich, verified business messages with images, carousels & interactive buttons. 35% higher engagement than SMS. Free setup offer.",
  keywords:
    "RCS Messaging, RCS Business Messaging, Rich Communication Services, RCS API India, RCS Marketing, RCS vs SMS, Verified Business Messaging, Google RCS, RCS Bulk Messaging Bangalore",
  authors: [
    {
      name: "A2ZSMS",
      url: "https://www.a2zsms.in/rcs-service-landing/",
    },
  ],
  openGraph: {
    title: "RCS Messaging Service - Rich, Verified Business Messaging | A2ZSMS",
    description:
      "Send rich RCS messages with images, carousels & interactive buttons. 35% higher engagement than SMS. Verified sender. Trusted by 500+ businesses.",
    url: "https://www.a2zsms.in/rcs-service-landing/",
    siteName: "A2ZSMS",
    images: [
      {
        url: "/images/1.png",
        width: 1200,
        height: 630,
        alt: "RCS Messaging Service by A2ZSMS",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "RCS Messaging - Rich, Interactive Business Messages | A2ZSMS",
    description:
      "India's top RCS messaging platform. Rich media, verified sender, interactive buttons. 35% higher CTR than SMS. Free setup this month.",
    images: ["/images/1.png"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.a2zsms.in/rcs-service-landing/",
  },
  category: "RCS Messaging Service",
  applicationName: "A2ZSMS",
  generator: "Next.js",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#7c3aed",
};

const page = () => {
  return (
    <div>
      <RcsLanding />
    </div>
  );
};

export default page;
