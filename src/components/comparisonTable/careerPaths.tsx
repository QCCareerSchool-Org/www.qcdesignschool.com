import type { FC, PropsWithChildren } from 'react';

import type { ComparisonTableColumn, ComparisonTableRow } from '.';
import { ComparisonTable } from '.';

type Headings = 'qc' | 'degree' | 'online';

export const CareerPathComparisonTable: FC = () => <ComparisonTable columns={columns} rows={rows} />;

const columns: ComparisonTableColumn<Headings>[] = [
  { key: 'qc', heading: <><div className="small text-primary" style={{ height: 24, textTransform: 'uppercase' }}>QC Design School</div><h3>IDDP&trade; Program</h3></> },
  { key: 'degree', heading: <><div style={{ height: 24 }} /><h3>University or College Degree</h3>E.g., RMCAD, Yorkville University</> },
  { key: 'online', heading: <><div style={{ height: 24 }} /><h3>Standard Online Certifications</h3>E.g., NYIAD, Interior Design Institute</> },
];

const Heading: FC<PropsWithChildren> = ({ children }) => <div className="fw-bold mb-1" style={{ color: 'oklch(0.21 0.034 264.665)' }}>{children}</div>;

const rows: ComparisonTableRow<Headings>[] = [
  {
    feature: 'Career Outcomes',
    qc: 'Launch your own design business, establish professional credibility, or secure a lead role in a firm',
    degree: 'Entry-level junior designer or intern at an existing firm',
    online: 'Design associate or resident designer; additional training preferred for business ownership',
  },
  {
    feature: 'Time to Revenue',
    qc: <><Heading>3 to 6 Months:</Heading>* with up to a year to complete your course.</>,
    degree: <><Heading>4+ Years:</Heading>Degree completion in a physical location</>,
    online: <><Heading>3 to 6 Months:</Heading>Varies by program</>,
  },
  {
    feature: 'Course Format',
    qc: <>Total flexibility with interactive lessons, hands-on assignments, mentor feedback, and expert-led videos <strong>for every student</strong></>,
    degree: 'Set class schedules, rigid deadlines, and multi-year commitments',
    online: 'Self-guided format with online lessons and tutorials. Expert-led videos may be available at an extra cost',
  },
  {
    feature: 'Business Infrastructure',
    qc: <><Heading>Full Launch Kit:</Heading> Ready-to-use contracts, templates, and client onboarding suites + portfolio development and full business training</>,
    degree: <><Heading>Not Included:</Heading> Focuses on design history and theory rather than day-to-day business operations.</>,
    online: <><Heading>Limited Support:</Heading> Portfolio development with additional resources sometimes available for purchase</>,
  },
  {
    feature: 'Bonus Training',
    qc: <><Heading>Accelerate Your Business and Virtual Design Workshops Included</Heading> Access advanced training to maximize your earning potential</>,
    degree: <Heading>Not included</Heading>,
    online: <Heading>Not included</Heading>,
  },
  {
    feature: 'Mentorship & Support',
    qc: 'Seven 1-on-1 professional reviews from a practicing designer focused on career growth',
    degree: 'Limited access in group settings with less individual project feedback or career coaching',
    online: 'Varies. Automated grading and limited mentorship are included in some courses',
  },
  {
    feature: 'Design Software',
    qc: 'DesignFiles Pro included, with 4 months of access plus technical training on 3D floor planning',
    degree: 'Not included',
    online: 'Student discounts may be available',
  },
  {
    feature: 'Total Investment',
    qc: '$2,498 all-inclusive',
    degree: '$10,000-$50,000',
    online: '$1,200-$1,800',
  },
];
