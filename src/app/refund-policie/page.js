"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Redirects the old typo URL /refund-policie/ to the canonical /refund-policy/
export default function RefundRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/refund-policy/");
  }, [router]);

  return null;
}
