import React from 'react'
import HealthCare from '../Component/Solutions/HealthCare/HealthCare'

export const metadata = {
  title: "Enhance Healthcare with WhatsApp & RCS Messaging Solutions",
  description: "Discover A2ZSMS's secure WhatsApp and RCS messaging services to improve patient engagement, streamline appointments, and provide 24/7 support in healthcare.",
  keywords: "WhatsApp API for healthcare,RCS messaging in healthcare,Automated appointment reminders,Medical appointment scheduling,Healthcare messaging solutions",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/health-care/" }],
  openGraph: {
    title: "Enhance Healthcare with WhatsApp & RCS Messaging Solutions",
    description: "Discover A2ZSMS's secure WhatsApp and RCS messaging services to improve patient engagement, streamline appointments, and provide 24/7 support in healthcare.",
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
    title: "Enhance Healthcare with WhatsApp & RCS Messaging Solutions",
    description: "Discover A2ZSMS's secure WhatsApp and RCS messaging services to improve patient engagement, streamline appointments, and provide 24/7 support in healthcare.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
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