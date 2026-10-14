// Old typo URL: the page only redirects to /refund-policy/, so keep it out of Google
export const metadata = {
  title: "Refund Policy | A2ZSMS",
  robots: "noindex, follow",
  alternates: { canonical: "https://www.a2zsms.in/refund-policy/" },
};

export default function RefundPolicieLayout({ children }) {
  return children;
}
