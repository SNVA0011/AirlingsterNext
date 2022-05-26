/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'en',
      },
};

module.exports = nextConfig;
