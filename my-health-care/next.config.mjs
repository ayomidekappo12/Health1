/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, // Enables the faster SWC-based minifier
  trailingSlash: true, // Optional: Adjust if needed
  output: "standalone",

  images: {
    domains: ["res.cloudinary.com"], // Add the domain hosting your images
  },
};

export default nextConfig;
