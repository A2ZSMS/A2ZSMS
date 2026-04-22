import React from 'react'
import HealthCare from '../Component/Solutions/HealthCare/HealthCare'

export const metadata = {
  title: "RCS Business Messaging for healthcare | A2ZSMS",
  description: "RCS Business Messaging for healthcare: send appointment reminders, test result alerts, billing updates, and 2-way support securely to cut no-shows 24/7 AI.",
  keywords: "WhatsApp API for healthcare,RCS messaging in healthcare,Automated appointment reminders,Medical appointment scheduling,Healthcare messaging solutions",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/health-care/" }],
  openGraph: {
    title: "RCS Business Messaging for healthcare | A2ZSMS",
    description: "RCS Business Messaging for healthcare: send appointment reminders, test result alerts, billing updates, and 2-way support securely to cut no-shows 24/7 AI.",
    url: "https://www.a2zsms.in/health-care/",
    siteName: "A2ZSMS",
    images: [
      {
        url: "/images/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "A2ZSMS WhatsApp for Healthcare Guide",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RCS Business Messaging for healthcare | A2ZSMS",
    description: "RCS Business Messaging for healthcare: send appointment reminders, test result alerts, billing updates, and 2-way support securely to cut no-shows 24/7 AI.",
    images: ["/images/meta-image.jpg"],

  },
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.a2zsms.in/health-care/",
  },
};

const page = () => {
  return (
    <div><HealthCare/></div>
  )
}

export default page