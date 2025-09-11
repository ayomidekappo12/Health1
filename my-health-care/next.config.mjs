/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // Optional: Adjust if needed
  output: "standalone",

  images: {
    domains: ["res.cloudinary.com"], // Add the domain hosting your images
  },
};

export default nextConfig;
