import React from 'react'
import Education from '../Component/Solutions/Education/Education'
export const metadata = {
  title: "WhatsApp Business API for Education | A2ZSMS",
  description: "WhatsApp Business API for Education: send fee reminders, attendance alerts, exam updates, and 2-way student support with chatbots to reduce calls 24/7.",
  keywords: "WhatsApp for Education,Educational Messaging Solutions,WhatsApp Group Learning, WhatsApp Business for Education Sector,Student Engagement via WhatsApp,WhatsApp Business API for Schools",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/education/" }],
  openGraph: {
    title: "WhatsApp Business API for Education | A2ZSMS",
    description: "WhatsApp Business API for Education: send fee reminders, attendance alerts, exam updates, and 2-way student support with chatbots to reduce calls 24/7.",
    url: "https://www.a2zsms.in/education/",
    siteName: "A2ZSMS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Business API for Education | A2ZSMS",
    description: "WhatsApp Business API for Education: send fee reminders, attendance alerts, exam updates, and 2-way student support with chatbots to reduce calls 24/7.",
    images: ["/images/meta-image.jpg"],

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