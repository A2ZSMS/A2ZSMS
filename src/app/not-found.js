import Link from "next/link";

export const metadata = {
  title: "Page Not Found | A2ZSMS",
  robots: "noindex, follow",
};

const LINKS = [
  { href: "/bulk-sms/", label: "Bulk SMS Service" },
  { href: "/whatsapp-api/", label: "WhatsApp Business API" },
  { href: "/rcs-service/", label: "RCS Messaging" },
  { href: "/voice-call/", label: "Voice Call" },
  { href: "/blogs/", label: "Blogs" },
  { href: "/contact/", label: "Contact Us" },
];

export default function NotFound() {
  return (
    <section className="container py-5 text-center" style={{ minHeight: "60vh" }}>
      <p className="display-1 fw-bold text-primary mb-0">404</p>
      <h1 className="h2 mb-3">Sorry, this page could not be found</h1>
      <p className="text-muted mb-4">
        The page may have moved or no longer exists. Try one of these instead:
      </p>
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        {LINKS.map((l) => (
          <Link prefetch={false} key={l.href} href={l.href} className="btn btn-outline-primary">
            {l.label}
          </Link>
        ))}
      </div>
      <Link prefetch={false} href="/" className="btn btn-primary">
        Go to Homepage
      </Link>
    </section>
  );
}
