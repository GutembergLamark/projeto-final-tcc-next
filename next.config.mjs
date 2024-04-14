/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/(.*)sitemap.xml',
        destination: '/essentials/sitemap-proxy',
      },
      {
        source: '/sitemap(.*).xml',
        destination: '/essentials/sitemap-proxy',
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: process.env.IMAGEPROTOCOL,
        hostname: process.env.IMAGEHOSTNAME,
        port: '',
        pathname: '/**',
      },
    ],
  },

};

export default nextConfig;
