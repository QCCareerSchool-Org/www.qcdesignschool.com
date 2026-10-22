import { NextResponse } from 'next/server';

import { apiBaseUrl, siteUrl } from '@/lib/siteUrl';
import type { RouteHandler } from '@/serverComponent';

// Agentic Resource Discovery (https://github.com/Agent-Card/ai-catalog)
const catalog = {
  specVersion: '1.0',
  host: {
    displayName: 'QC Design School',
    documentationUrl: `${siteUrl}/api-docs`,
    logoUrl: `${siteUrl}/logo.svg`,
  },
  entries: [
    {
      identifier: 'urn:air:qcdesignschool.com:api:courses',
      type: 'application/vnd.oai.openapi+json',
      url: `${apiBaseUrl}/openapi.json`,
      displayName: 'Course API',
      description: 'Read-only course details and current tuition by country. No authentication is required.',
      tags: [ 'courses', 'tuition', 'education' ],
    },
    {
      identifier: 'urn:air:qcdesignschool.com:docs:llms',
      type: 'text/plain',
      url: `${siteUrl}/llms.txt`,
      displayName: 'llms.txt',
      description: 'An index of the main pages on the site.',
      tags: [ 'llms.txt' ],
    },
    {
      identifier: 'urn:air:qcdesignschool.com:docs:llms-full',
      type: 'text/plain',
      url: `${siteUrl}/llms-full.txt`,
      displayName: 'llms-full.txt',
      description: 'A broader index of courses, catalogs, guides, and career resources.',
      tags: [ 'llms.txt' ],
    },
  ],
};

export const GET: RouteHandler = () => {
  return NextResponse.json(catalog, { headers: { 'Content-Type': 'application/json' } }); // application/ai-catalog+json
};
