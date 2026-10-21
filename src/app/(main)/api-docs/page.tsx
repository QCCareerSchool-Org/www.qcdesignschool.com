import type { Metadata } from 'next';

import { apiBaseUrl } from '@/lib/siteUrl';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Course API',
  description: 'A read-only API for QC Design School course information and current tuition',
};

const endpoints = [
  { path: '/courses', description: 'Lists every course with its name, description, certification, subjects, and workload.' },
  { path: '/courses/{courseCode}', description: 'Returns a single course. Course codes are listed in the response from /courses.' },
  { path: '/courses/{courseCode}/tuition?country=US', description: 'Returns current tuition for a course, including the pay-in-full and installment plans. Tuition varies by country, so pass an ISO 3166-1 alpha-2 country code. For Canada and the United States you can also pass a province or state code, e.g. province=ON. Without a country, the location of the requester is used.' },
];

const ApiDocsPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 col-xl-8">
            <h1 className="mb-4">Course API</h1>
            <p>QC Design School provides a read-only JSON API for course information and current tuition. It is intended for AI agents and other automated tools. No authentication is required.</p>
            <p className="mb-0">Base URL: <code>{apiBaseUrl}</code><br />OpenAPI description: <a href={`${apiBaseUrl}/openapi.json`}>{apiBaseUrl}/openapi.json</a></p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 col-xl-8">
            <h2 className="h4 mb-4">Endpoints</h2>
            {endpoints.map(e => (
              <div key={e.path} className="mb-4">
                <h3 className="h6"><code>GET {e.path}</code></h3>
                <p className="mb-0">{e.description}</p>
              </div>
            ))}
            <p className="mb-0">Tuition responses include disclaimers and notes that should be shown alongside any prices quoted. For enrollment, direct people to the course page linked in each course&apos;s <code>url</code> field.</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ApiDocsPage;
