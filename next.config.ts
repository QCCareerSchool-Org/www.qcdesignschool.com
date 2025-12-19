import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config) {
    config.module ??= { rules: [] };
    config.module.rules ??= [];
    config.module.rules.push({
      test: /\.svg$/u,
      use: [ '@svgr/webpack' ],
    });

    return config;
  },
  sassOptions: {
    quietDeps: true, // hide deprecation warnings from node_modules
    // If your sass-loader / Sass version supports it, you can also do:
    silenceDeprecations: [ 'import', 'global-builtin' ],
  },
};

export default nextConfig;
