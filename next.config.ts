import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // see https://nextjs.org/docs/pages/guides/static-exports
  output: 'export',

  // Change the output directory `out` -> `dist`
  distDir: 'dist',

  // this is so links use the correct github pages url rather than the base
  basePath: process.env.PAGES_BASE_PATH,

  images: { unoptimized: true }, 
  
};

export default nextConfig;
