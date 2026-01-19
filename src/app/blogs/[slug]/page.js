import { notFound } from "next/navigation";
import blogsData from "../../../../public/data/blog.json";
import meta from "../../../../public/data/metadata.json";

// Import blog components directly
import Dec13 from "@/app/Component/Blogs/December/Dec13";
import Dec14 from "@/app/Component/Blogs/December/Dec14";
import Dec15 from "@/app/Component/Blogs/December/Dec15";
import Dec16 from "@/app/Component/Blogs/December/Dec16";
import Dec17 from "@/app/Component/Blogs/December/Dec17";
import Dec18 from "@/app/Component/Blogs/December/Dec18";
import Dec19 from "@/app/Component/Blogs/December/Dec19";
import Dec20 from "@/app/Component/Blogs/December/Dec20";
import Dec21 from "@/app/Component/Blogs/December/Dec21";
import Dec22 from "@/app/Component/Blogs/December/Dec22";
import Dec23 from "@/app/Component/Blogs/December/Dec23";
import Dec24 from "@/app/Component/Blogs/December/Dec24";
import Jan1 from "@/app/Component/Blogs/January/Jan1";
import Jan2 from "@/app/Component/Blogs/January/Jan2";
import Jan3 from "@/app/Component/Blogs/January/Jan3";
import Jan4 from "@/app/Component/Blogs/January/Jan4";
import Jan5 from "@/app/Component/Blogs/January/Jan5";
import Jan6 from "@/app/Component/Blogs/January/Jan6";
import Jan7 from "@/app/Component/Blogs/January/Jan7";
import Jan8 from "@/app/Component/Blogs/January/Jan8";
import Jan9 from "@/app/Component/Blogs/January/Jan9";
import Jan10 from "@/app/Component/Blogs/January/Jan10";
import Mar10 from "@/app/Component/Blogs/March/Mar10";
import Mar12 from "@/app/Component/Blogs/March/Mar12";
import Mar18 from "@/app/Component/Blogs/March/Mar18";
import Mar19 from "@/app/Component/Blogs/March/Mar19";
import Mar25 from "@/app/Component/Blogs/March/Mar25";
import Mar24 from "@/app/Component/Blogs/March/Mar24";
import Aug26 from "@/app/Component/Blogs/Aug2025/Aug26";
import Sep2 from "@/app/Component/Blogs/Sep2025/Sep2";
import Sep9 from "@/app/Component/Blogs/Sep2025/Sep9";
import Sep16 from "@/app/Component/Blogs/Sep2025/Sep16";
import Sep23 from "@/app/Component/Blogs/Sep2025/Sep23";
import Sep30 from "@/app/Component/Blogs/Sep2025/Sep30";
import Oct6 from "@/app/Component/Blogs/Oct2025/Oct6";
import Oct7 from "@/app/Component/Blogs/Oct2025/Oct7";
import Oct1425 from "@/app/Component/Blogs/Oct2025/Oct14";
import Oct23 from "@/app/Component/Blogs/Oct2025/Oct23";
import Oct29 from "@/app/Component/Blogs/Oct2025/Oct29";
import Nov12 from "@/app/Component/Blogs/Nov2025/Nov12";
import Nov19 from "@/app/Component/Blogs/Nov2025/Nov19";
import Nov25 from "@/app/Component/Blogs/Nov2025/Nov25";
import Nov27 from "@/app/Component/Blogs/Nov2025/Nov27";
import Dec03 from "@/app/Component/Blogs/Dec2025/Dec03";
import Dec09 from "@/app/Component/Blogs/Dec2025/Dec09";
import Dec10 from "@/app/Component/Blogs/Dec2025/Dec10";
import Dec2025 from "@/app/Component/Blogs/Dec2025/Dec2025";
import Dec25 from "@/app/Component/Blogs/Dec2025/Dec25";
import Jan08 from "@/app/Component/Blogs/Jan2026/Jan08";

// Simple component mapping
const BlogComponents = {
  dec13: Dec13,
  dec14: Dec14,
  dec15: Dec15,
  dec16: Dec16,
  dec17: Dec17,
  dec18: Dec18,
  dec19: Dec19,
  dec20: Dec20,
  dec21: Dec21,
  dec22: Dec22,
  dec23: Dec23,
  dec24: Dec24,
  jan1: Jan1,
  jan2: Jan2,
  jan3: Jan3,
  jan4: Jan4,
  jan5: Jan5,
  jan6: Jan6,
  jan7: Jan7,
  jan8: Jan8,
  jan9: Jan9,
  jan10: Jan10,
  mar10: Mar10,
  mar12: Mar12,
  mar18: Mar18,
  mar19: Mar19,
  mar24: Mar24,
  mar25: Mar25,
  aug26: Aug26,
  sep02: Sep2,
  sep09: Sep9,
  sep16: Sep16,
  sep23: Sep23,
  sep30: Sep30,
  oct06: Oct6,
  oct07: Oct7,
  oct14: Oct1425,
  oct23: Oct23,
  oct29: Oct29,
  nov12: Nov12,
  nov19: Nov19,
  nov25: Nov25,
  nov27: Nov27,
  dec03: Dec03,
  dec09: Dec09,
  dec10: Dec10,
  dec2025: Dec2025,
  dec25: Dec25,
  jan08: Jan08
};

// ✅ Add this function to generate static pages
export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ Await params

  const blog = meta.find((post) => post.slug === slug);
  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.keywords,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://www.a2zsms.in/blogs/${blog.slug}`,
      type: "article",
      images: [
        {
          url: blog.image || "/images/meta-image.jpg",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      siteName: "A2ZSMS",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.image || "/images/meta-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://www.a2zsms.in/blogs/${blog.slug}`,
    },
    authors: [{ name: "A2ZSMS" }],
  };
}

export default function BlogPost({ params }) {
  // Find the blog post data
  const blog = blogsData.find((post) => post.slug === params.slug);

  if (!blog) {
    return notFound();
  }

  // Get the component from our mapping
  const BlogComponent = BlogComponents[blog.componentKey.toLowerCase()];

  if (!BlogComponent) {
    return (
      <div className="container py-5 text-center">
        <h2>Blog component not found</h2>
        <p>We couldn't find the requested blog content.</p>
      </div>
    );
  }

  return <BlogComponent />;
}
