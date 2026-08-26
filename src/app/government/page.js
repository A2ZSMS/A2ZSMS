import React from 'react'
import Government from '../Component/Solutions/Government/Government'
export const metadata = {
  title: "WhatsApp Marketing for Government | A2ZSMS",
  description:
    "WhatsApp Marketing for Government: send citizen updates, service alerts, document reminders, and grievance support with verified messaging and 2-way help.",
  keywords:
    ", Best WhatsApp marketing services in Bangalore, SMS marketing, WhatsApp bulk messaging service providers Bangalore, WhatsApp Business for Government Communication",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/government/" }],
  openGraph: {
    title: "WhatsApp Marketing for Government | A2ZSMS",
    description:
      "WhatsApp Marketing for Government: send citizen updates, service alerts, document reminders, and grievance support with verified messaging and 2-way help.",
    url: "https://www.a2zsms.in/government/",
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
    title: "WhatsApp Marketing for Government | A2ZSMS",
    description:
      "WhatsApp Marketing for Government: send citizen updates, service alerts, document reminders, and grievance support with verified messaging and 2-way help.",
    images: ["/images/meta-image.jpg"],

  },
  robots: "index, follow",

  alternates: {
    canonical: "https://www.a2zsms.in/government/",
  },
};

const page = () => {
  return (
    <div>
        <Government/>
    </div>
  )
}

export default page