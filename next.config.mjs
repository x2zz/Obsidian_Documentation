import { createMDX } from 'fumadocs-mdx/next';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/Obsidian_Documentation',

  images: {
    unoptimized: true,
  },

  serverExternalPackages: ['typescript', 'twoslash'],

  async rewrites() {
    return [
      {
        source: '/obsidian.mdx',
        destination: '/llms.mdx/obsidian',
      },
      {
        source: '/obsidian/:path*.mdx',
        destination: '/llms.mdx/obsidian/:path*',
      },
    ];
  },
};

const withMDX = createMDX();
export default withMDX(config);
