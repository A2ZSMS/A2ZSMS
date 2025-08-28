// This is a server component (no "use client" directive)
import BlogList from "./client";

// Updated metadata for the blogs page
export const metadata = {
  title: 'WhatsApp Business API',
  description: 'Get the top Bulk WhatsApp Messaging Services in Bangalore & RCS Message Service in India with Promotional Voice Services,bulk whatsapp messaging services in bangalore.',
  keywords: "SMS marketing blogs, WhatsApp API blogs, voice services blogs, A2ZSMS blogs, bulk SMS insights",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/blogs/" }],
  openGraph: {
    description: 'Get the top Bulk WhatsApp Messaging Services in Bangalore & RCS Message Service in India with Promotional Voice Services,bulk whatsapp messaging services in bangalore.',
    url: "https://www.a2zsms.in/blogs/",
    siteName: "A2ZSMS",
    type: "website",
    images: [
      {
        url: "/images/meta-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'WhatsApp Business API',
    description: 'Get the top Bulk WhatsApp Messaging Services in Bangalore & RCS Message Service in India with Promotional Voice Services,bulk whatsapp messaging services in bangalore.',
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.a2zsms.in/blogs/",
  }
};

// Page component
export default function BlogsPage() {
  return <BlogList />;
}