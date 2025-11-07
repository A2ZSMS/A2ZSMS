// This is a server component (no "use client" directive)
import BlogList from "./client";

// Updated metadata for the blogs page
export const metadata = {
  title: "Bulk SMS & WhatsApp Marketing Blogs | A2ZSMS",
  description:
    "Read expert blogs on Bulk SMS, WhatsApp API, RCS messaging, and voice call marketing. Stay updated with the latest tips, trends, and insights in India.",
  keywords:
    "Bulk SMS blogs, WhatsApp API blogs, RCS messaging blogs, Voice call marketing blogs, SMS marketing tips India",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/blogs/" }],
  openGraph: {
    title: "Bulk SMS & WhatsApp Marketing Blogs | A2ZSMS",
    description:
      "Expert blogs on Bulk SMS, WhatsApp API, RCS messaging, and voice call services. Stay updated with marketing tips, trends, and insights in India.",
    url: "https://www.a2zsms.in/blogs/",
    siteName: "A2ZSMS",
    type: "website",
    images: [
      {
        url: "/images/oct8.png",
        width: 1200,
        height: 630,
        alt: "Bulk SMS & WhatsApp Marketing Blogs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulk SMS & WhatsApp Marketing Blogs | A2ZSMS",
    description:
      "Explore blogs on Bulk SMS, WhatsApp API, RCS messaging, and voice marketing services in India. Get the latest updates and insights.",
    images: ["/images/oct8.png"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.a2zsms.in/blogs/",
  },
};

// Page component
export default function BlogsPage() {
  return <BlogList />;
}
