import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

import type { Link } from './links';
import { links } from './links';

const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    config.module ??= { rules: [] };
    config.module.rules ??= [];
    config.module.rules.push({
      test: /\.svg$/u,
      use: [ '@svgr/webpack' ],
    }, {
      test: /\.lottie$/u,
      type: 'asset/resource',
    });

    return config;
  },
  // eslint-disable-next-line @typescript-eslint/require-await
  headers: async () => {
    return [
      {
        // agent discovery (RFC 8288)
        source: '/((?!api/|_next/).*)',
        headers: [
          {
            key: 'Link',
            value: links.map(linkHeader).join(', '),
          },
        ],
      },
      {
        source: '/(api/.*|\\.well-known/api-catalog|\\.well-known/ai-catalog\\.json)',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ];
  },
  sassOptions: {
    quietDeps: true, // hide deprecation warnings from node_modules
    // If your sass-loader / Sass version supports it, you can also do:
    silenceDeprecations: [ 'import', 'global-builtin' ],
  },
};

export default nextConfig;

const linkHeader = (l: Link): string => {
  let text = `<${encodeURI(assertAscii(l.href))}>; rel=${quote(l.rel)}`;

  if (l.type) {
    text += `; type=${quote(l.type)}`;
  }

  if (l.title) {
    text += `; title=${quote(l.title)}`;
  }

  return text;
};

const quote = (s: string): string => {
  return `"${assertAscii(s).replace(/[\\"]/gu, '\\$&')}"`;
};

const assertAscii = (s: string): string => {
  if (/[^\x20-\x7e]/u.test(s)) {
    throw Error(`Link header values must be printable ASCII: ${s}`);
  }
  return s;
};
