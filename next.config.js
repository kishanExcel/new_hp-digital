/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.google.com"],
  },
  webpack: (config) => {
    Object.assign(config.resolve.alias, {
      "@aws-sdk/credential-providers": false,
      snappy: false,
      aws4: false,
      kerberos: false,
      "supports-color": false,
    });
    return config;
  },
};

module.exports = nextConfig;
