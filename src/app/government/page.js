import React from 'react'
import Government from '../Component/Solutions/Government/Government'
export const metadata = {
  title: "Enhance Government Outreach with WhatsApp Solutions",
  description: "Utilize WhatsApp for instant citizen notifications, secure OTP verifications, and interactive campaigns to improve public engagement and service delivery .",
  keywords: ", Best WhatsApp marketing services in Bangalore, SMS marketing, WhatsApp bulk messaging service providers Bangalore, WhatsApp Business for Government Communication",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/government/" }],
  openGraph: {
    title: "Enhance Government Outreach with WhatsApp Solutions",
    description: "Utilize WhatsApp for instant citizen notifications, secure OTP verifications, and interactive campaigns to improve public engagement and service delivery.",
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
    title: "Enhance Government Outreach with WhatsApp Solutions",
    description: "Utilize WhatsApp for instant citizen notifications, secure OTP verifications, and interactive campaigns to improve public engagement and service delivery.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
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