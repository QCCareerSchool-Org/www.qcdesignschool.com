import { NextResponse } from 'next/server';

import { apiBaseUrl, siteUrl } from '@/lib/siteUrl';
import type { RouteHandler } from '@/serverComponent';

// RFC 9727
const linkset = {
  linkset: [
    {
      'anchor': apiBaseUrl,
      'service-desc': [ { href: `${apiBaseUrl}/openapi.json`, type: 'application/vnd.oai.openapi+json' } ],
      'service-doc': [ { href: `${siteUrl}/api-docs`, type: 'text/html' } ],
    },
  ],
};

export const GET: RouteHandler = () => {
  return NextResponse.json(linkset, { headers: { 'Content-Type': 'application/json' } }); // application/linkset+json
};
