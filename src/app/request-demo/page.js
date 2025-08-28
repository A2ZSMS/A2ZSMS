import React from 'react'
import RequestDemo from '../Component/Forms/RequestDemo'
export const metadata = {
  title: "Request a Demo | WhatsApp & Voice Solutions in Bangalore",
  description: "Request a demo for WhatsApp & Voice Solutions in Bangalore. Get seamless business communication with top Bulk WhatsApp Messaging & API services.",
  keywords: "Request a Demo, WhatsApp & Voice Solutions, Top Bulk WhatsApp Messaging Services in Bangalore, Best WhatsApp marketing services in Bangalore, SMS marketing, WhatsApp bulk messaging service providers Bangalore",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/request-demo/" }],
  openGraph: {
    title: "Request a Demo | WhatsApp & Voice Solutions in Bangalore",
    description: "Request a demo for WhatsApp & Voice Solutions in Bangalore. Get seamless business communication with top Bulk WhatsApp Messaging & API services.",
    url: "https://www.a2zsms.in/request-demo/",
    siteName: "A2ZSMS",
    images: [
      {
        url: "/images/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "A2ZSMS WhatsApp & Voice Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Demo | WhatsApp & Voice Solutions in Bangalore",
    description: "Request a demo for WhatsApp & Voice Solutions in Bangalore. Get seamless business communication with top Bulk WhatsApp Messaging & API services.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.a2zsms.in/request-demo/",
  },
};

const page = () => {
  return (
    <div>
        <RequestDemo/>
    </div>
  )
}

export default page