import React from 'react'
import Terms from '../Component/TermsPrivacy/Terms'
 
export const metadata = {
  title: "Best Bulk WhatsApp Messaging & Marketing Services in India",
  description: "Boost your business with the best Bulk WhatsApp Messaging Services in India. Engage customers with seamless communication and advanced marketing solutions.",
  keywords: "Bulk WhatsApp Messaging Services in India, WhatsApp marketing, Business WhatsApp solutions, WhatsApp bulk messaging providers, Digital marketing services",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/terms/" }],
  openGraph: {
    title: "Best Bulk WhatsApp Messaging & Marketing Services in India",
    description: "Boost your business with the best Bulk WhatsApp Messaging Services in India. Engage customers with seamless communication and advanced marketing solutions.",
    url: "https://www.a2zsms.in/terms/",
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
    title: "Best Bulk WhatsApp Messaging & Marketing Services in India",
    description: "Boost your business with the best Bulk WhatsApp Messaging Services in India. Engage customers with seamless communication and advanced marketing solutions.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.a2zsms.in/terms/",
  },
};
 
const page = () => {
  return (
    <div>
        <Terms/>
    </div>
  )
}
 
export default page
 