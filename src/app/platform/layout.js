export const metadata = {
  metadataBase: new URL("https://www.a2zsms.in"),
  title: "CPaaS Platform: SMS, WhatsApp, RCS & Voice API | A2ZSMS",
  description:
    "CPaaS platform for Indian businesses: bulk SMS, SMPP, WhatsApp Business API, RCS and voice in one cloud, with DLT compliance and real-time delivery reports.",
  alternates: {
    canonical: "https://www.a2zsms.in/platform/",
  },
  robots: "index, follow",
  openGraph: {
    title: "CPaaS Platform: SMS, WhatsApp, RCS & Voice API | A2ZSMS",
    description:
      "CPaaS platform for Indian businesses: bulk SMS, SMPP, WhatsApp Business API, RCS and voice in one cloud, with DLT compliance and real-time delivery reports.",
    url: "https://www.a2zsms.in/platform/",
    siteName: "A2ZSMS",
    images: [
      {
        url: "/Images/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "A2ZSMS CPaaS Platform for SMS, WhatsApp, RCS & Voice",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
};

export default function PlatformLayout({ children }) {
  return children;
}
