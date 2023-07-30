/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['res.cloudinary.com', 'localhost', 'portfolio.haruthya.my.id', 'free-css.com'],
    },
}

module.exports = nextConfig
