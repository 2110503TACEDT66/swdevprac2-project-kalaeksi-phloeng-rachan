/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['drive.google.com', 'images.unsplash.com', 'media.istockphoto.com']
    },
    experimental: {
        serverActions:true
    }
};

export default nextConfig;
