/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.a2zsms.in", // Your website URL
    generateRobotsTxt: true, // (Optional) Generate a robots.txt file
    priority: 0.70,
    sitemapSize: 5000,
    exclude: [
      "/404",
      "/admin/*",
      // Ads landing pages (noindex) – not meant to rank organically
      "/bulk-sms-service",
      "/bulk-sms-service/*",
      "/whatsapp-api-service",
      "/whatsapp-api-service/*",
      "/rcs-service-landing",
      "/rcs-service-landing/*",
      "/thank-you",
      // Old typo URL, only redirects to /refund-policy/
      "/refund-policie",
    ],
    robotsTxtOptions: {
      policies: [
        { userAgent: "*", allow: "/" },
        { userAgent: "*", disallow: ["/404", "/admin"] },
      ],
    },
  };
  
 