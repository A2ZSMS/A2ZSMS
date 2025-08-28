import React from 'react'
import About from '../Component/Company/About/About'
export const metadata = {
  title: "About - Reliable Bulk SMS & Top WhatsApp Messaging Services",
  description: "Learn about our reliable Bulk SMS services and WhatsApp API solutions for businesses in Bangalore to enhance communication and marketing efforts.",
  keywords: "About - Reliable Bulk SMS Services, Top Bulk WhatsApp Messaging Services in Bangalore, Best WhatsApp marketing services in Bangalore, SMS marketing, WhatsApp bulk messaging service providers Bangalore",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/about/" }],
  openGraph: {
    title: "About - Reliable Bulk SMS & Top WhatsApp Messaging Services",
    description: "Learn about our reliable Bulk SMS services and WhatsApp API solutions for businesses in Bangalore to enhance communication and marketing efforts.",
    url: "https://www.a2zsms.in/about/",
    siteName: "A2ZSMS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Reliable Bulk SMS & Top WhatsApp Messaging Services",
    description: "Learn about our reliable Bulk SMS services and WhatsApp API solutions for businesses in Bangalore to enhance communication and marketing efforts.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.a2zsms.in/about/",
  },
};

const page = () => {
  return (
    <div>
        <About/>
    </div>
  )
}

export default page