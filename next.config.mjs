/** @type {import('next').NextConfig} */
const nextConfig = {
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
  