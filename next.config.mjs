/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['superb-files.s3.amazonaws.com'],
    },
};

export default nextConfig;
