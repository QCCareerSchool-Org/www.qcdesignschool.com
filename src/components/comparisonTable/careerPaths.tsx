import type { FC } from 'react';

import type { ComparisonTableColumn, ComparisonTableRow } from '.';
import { ComparisonTable } from '.';

export const CareerPathComparisonTable: FC = () => <ComparisonTable columns={columns} rows={rows} />;

const columns: ComparisonTableColumn[] = [
  { key: 'qc', heading: <>QC Design School IDDP&trade; Program</> },
  { key: 'degree', heading: 'University or College Degree' },
  { key: 'online', heading: 'Standard Online Certifications' },
];

const rows: ComparisonTableRow[] = [
  {
    feature: 'Career Outcomes',
    qc: 'Launch your own design business, establish professional credibility, or secure a lead role in a firm.',
    degree: 'Entry-level junior designer or intern at an existing firm.',
    online: 'Design associate or resident designer; additional training preferred for business ownership.',
  },
  {
    feature: 'Time to Revenue',
    qc: '3-6 months, with up to a year to complete your course.',
    degree: '4+ years with degree completion in a physical location.',
    online: '6-24 months, depending on the program.',
  },
  {
    feature: 'Course Format',
    qc: 'Total flexibility with interactive lessons, hands-on assignments, mentor feedback, and expert-led videos for every student.',
    degree: 'Set class schedules, rigid deadlines, and multi-year commitments.',
    online: 'Self-guided format with online lessons and tutorials. Expert-led videos may be available at an extra cost.',
  },
  {
    feature: 'Business Infrastructure',
    qc: 'Full launch kit included: ready-to-use contracts, templates, client onboarding suites, portfolio development, and business training.',
    degree: 'Not included. Focuses on design history and theory rather than day-to-day business operations.',
    online: 'Limited support. Portfolio development with additional resources sometimes available for purchase.',
  },
  {
    feature: 'Bonus Training',
    qc: 'Accelerate Your Business and Virtual Design workshops included to help maximize your earning potential.',
    degree: 'Not included.',
    online: 'Not included.',
  },
  {
    feature: 'Mentorship & Support',
    qc: 'Seven 1-on-1 professional reviews from a practicing designer focused on career growth.',
    degree: 'Limited access in group settings with less individual project feedback or career coaching.',
    online: 'Varies. Automated grading and limited mentorship are included in some courses.',
  },
  {
    feature: 'Design Software',
    qc: 'DesignFiles Pro included, with 4 months of access plus technical training on 3D floor planning.',
    degree: 'Not included.',
    online: 'Student discounts may be available.',
  },
  {
    feature: 'Total Investment',
    qc: '$2,498 all-inclusive.',
    degree: '$10,000-$50,000.',
    online: '$1,200-$1,800.',
  },
];
