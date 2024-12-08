/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/aplikacje-internetowe',
    assetPrefix: './',
    trailingSlash: true,
    async redirects() {
      return [
        {
          source: '/',
          destination: '/about', // Redirect root to /about
          permanent: true, // Permanent (301) redirect
        },
      ];
    },
  };
  
  export default nextConfig;
  