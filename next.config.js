/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

    // Uncomment if you need to configure images from external domains
    // images: {
    //   domains: ['example.com'],
    // },
    
    // Uncomment if you need environment variables accessible in the browser
    // env: {
    //   NEXT_PUBLIC_API_URL: 'https://api.yourdomain.com',
    // },
    
    // Uncomment if you need to handle redirects
    // async redirects() {
    //   return [
    //     {
    //       source: '/old-path',
    //       destination: '/new-path',
    //       permanent: true,
    //     },
    //   ]
    // },
 