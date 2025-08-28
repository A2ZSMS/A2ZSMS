import React from 'react'
import Education from '../Component/Solutions/Education/Education'
export const metadata = {
  title: "Enhance Education with WhatsApp Messaging Solutions",
  description: "Enhance education with WhatsApp! Get instant updates, personalized learning, and seamless communication between educators, students, and parents effortlessly.",
  keywords: "WhatsApp for Education,Educational Messaging Solutions,WhatsApp Group Learning, WhatsApp Business for Education Sector,Student Engagement via WhatsApp,WhatsApp Business API for Schools",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/education/" }],
  openGraph: {
    title: "Enhance Education with WhatsApp Messaging Solutions",
    description: "Enhance education with WhatsApp! Get instant updates, personalized learning, and seamless communication between educators, students, and parents effortlessly.",
    url: "https://www.a2zsms.in/education/",
    siteName: "A2ZSMS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enhance Education with WhatsApp Messaging Solutions",
    description: "Enhance education with WhatsApp! Get instant updates, personalized learning, and seamless communication between educators, students, and parents effortlessly.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.a2zsms.in/education/",
  },
};

const page = () => {
  return (
    <div>
        <Education/>
    </div>
  )
}

export default page