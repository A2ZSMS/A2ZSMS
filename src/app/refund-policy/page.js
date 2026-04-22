import React from "react";
import Refund from "../Component/TermsPrivacy/Refund";

export const metadata = {
  metadataBase: new URL("https://www.a2zsms.in"),
  title: "Refund Policy – A2ZSMS | Fair & Transparent Refunds",
  description:
    "Read A2ZSMS's refund policy. We offer transparent, fair refund terms for Bulk SMS, WhatsApp API, and RCS messaging services. Know your rights before purchasing.",
  keywords:
    "A2ZSMS refund policy, SMS service refund, WhatsApp API refund terms, messaging service cancellation policy",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/refund-policy/" }],
  openGraph: {
    title: "Refund Policy – A2ZSMS | Fair & Transparent Refunds",
    description:
      "Read A2ZSMS's refund policy for Bulk SMS, WhatsApp API, and RCS messaging services. Transparent terms and fair refund process.",
    url: "https://www.a2zsms.in/refund-policy/",
    siteName: "A2ZSMS",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Refund Policy – A2ZSMS",
    description:
      "Transparent refund policy for A2ZSMS messaging services including Bulk SMS, WhatsApp API, and RCS.",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.a2zsms.in/refund-policy/",
  },
};

const page = () => {
  return (
    <div>
      <Refund />
    </div>
  );
};

export default page;
