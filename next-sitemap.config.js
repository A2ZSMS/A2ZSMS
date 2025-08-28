/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.a2zsms.in", // Your website URL
    generateRobotsTxt: true, // (Optional) Generate a robots.txt file
    priority: 0.70,
    sitemapSize: 5000,
    exclude: ["/404", "/admin/*"],
    robotsTxtOptions: {
      policies: [
        { userAgent: "*", allow: "/" },
        { userAgent: "*", disallow: ["/404", "/admin"] },
      ],
    },
  };
  
 