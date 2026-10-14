import Link from "next/link";

const SITE = "https://www.a2zsms.in";

// Each blog category points readers (and Google) to the matching service page
const SERVICE_BY_TOPIC = {
  whatsapp: { href: "/whatsapp-api/", label: "WhatsApp Business API" },
  rcs: { href: "/rcs-service/", label: "RCS Business Messaging" },
  sms: { href: "/bulk-sms/", label: "Bulk SMS Service" },
  otp: { href: "/bulk-sms/", label: "OTP & Transactional SMS" },
  voice: { href: "/voice-call/", label: "Voice Call Broadcasting" },
  web: { href: "/design-developement/", label: "Website Design & Development" },
  general: { href: "/services/", label: "Business Messaging Services" },
};

export function topicOf(blog) {
  const c = (blog.category || "").toLowerCase();
  // Several RCS posts are filed under "Bulk SMS Service", so the title wins for RCS
  if ((blog.title || "").toLowerCase().includes("rcs")) return "rcs";
  if (c.includes("whatsapp")) return "whatsapp";
  if (c.includes("rcs")) return "rcs";
  if (c.includes("otp")) return "otp";
  if (c.includes("sms")) return "sms";
  if (c.includes("voice")) return "voice";
  if (c.includes("web")) return "web";
  return "general";
}

// Blog components that already output their own Article/Breadcrumb schema
const HAS_OWN_SCHEMA = new Set(["oct13"]);

export function BlogSchema({ blog }) {
  const url = `${SITE}/blogs/${blog.slug}/`;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE}/blogs/` },
      { "@type": "ListItem", position: 3, name: blog.title, item: url },
    ],
  };
  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    image: `${SITE}${blog.image || "/Images/meta-image.jpg"}`,
    datePublished: blog.date,
    author: { "@type": "Organization", name: "A2ZSMS", url: `${SITE}/` },
    publisher: {
      "@type": "Organization",
      name: "A2ZSMS",
      logo: { "@type": "ImageObject", url: `${SITE}/image/logo1.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  if (HAS_OWN_SCHEMA.has(blog.componentKey.toLowerCase())) return null;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}

export default function BlogRelated({ blog, allBlogs }) {
  const topic = topicOf(blog);
  const service = SERVICE_BY_TOPIC[topic];
  const others = allBlogs.filter((b) => b.slug !== blog.slug);
  const sameTopic = others.filter((b) => topicOf(b) === topic);
  // Same-topic posts first, then the newest posts to fill up to 3
  const related = [...sameTopic, ...others.filter((b) => !sameTopic.includes(b))]
    .slice(0, 3);

  return (
    <section className="container py-5 border-top">
      <div className="p-4 mb-5 rounded-3 text-center" style={{ background: "#f3f7ff" }}>
        <h2 className="h4 mb-2">Looking for a reliable {service.label} provider?</h2>
        <p className="text-muted mb-3">
          A2ZSMS helps businesses across India reach customers faster with DLT-compliant
          messaging, real-time reports and expert support.
        </p>
        <Link href={service.href} className="btn btn-primary">
          Explore {service.label}
        </Link>
      </div>

      <h2 className="h4 mb-4">Related Articles</h2>
      <div className="row">
        {related.map((b) => (
          <div className="col-md-4 mb-4" key={b.slug}>
            <Link href={`/blogs/${b.slug}/`} className="text-decoration-none">
              <div className="card h-100 shadow-sm">
                <img
                  src={b.image || "/Images/meta-image.jpg"}
                  alt={b.title}
                  className="card-img-top"
                  loading="lazy"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h3 className="h6 card-title text-dark">{b.title}</h3>
                  <p className="card-text text-muted small mb-0">{b.category}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link href="/blogs/" className="btn btn-outline-primary">
          View all articles
        </Link>
      </div>
    </section>
  );
}
