/** @type {import('next').NextConfig} */

const Prod = process.env.NODE_ENV = 'production';

const nextConfig = {
    basePath: Prod ? '/navbarINEA' : '',
    output: 'export',
    images: {
      unoptimized:true,
    },
};

export default nextConfig;
