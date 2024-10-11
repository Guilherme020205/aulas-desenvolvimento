/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',  // Isso permite qualquer hostname
        },
      ],
    },
  };
  
  
  export default nextConfig;
  