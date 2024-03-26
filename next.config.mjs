/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['drive.google.com', 'images.unsplash.com', 'media.istockphoto.com']
    },
    experimental: {
        serverActions:true
    },
    env: {
        BACKEND_URL: process.env.BACKEND_URL,
        FRONTEND_URL: process.env.FRONTEND_URL
    }
};

export default nextConfig;
