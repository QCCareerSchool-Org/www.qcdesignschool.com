import Link from 'next/link';
import type { FC } from 'react';

import BookReaderIcon from '@/components/icons/book-reader.svg';
import QLogoIcon from '@/components/icons/q-logo.svg';
import ShieldCheckIcon from '@/components/icons/shield-check.svg';

const iconSize = 32;

export const ThreeReasonsSection: FC = () => (
  <section className="bg-navy text-white">
    <div className="container">
      <div className="row justify-content-center text-center text-lg-start g-s">
        <div className="col-12 col-sm-7 col-lg-4">
          <BookReaderIcon width={iconSize} className="mb-4" />
          <h2 className="h6 mb-4">Online Design Courses</h2>
          <p className="mb-4">Learn more about our courses so you can decide which design career is right for you.</p>
          <Link href="/online-courses" className="btn btn-outline-light">View Courses</Link>
        </div>
        <div className="col-12 col-sm-7 col-lg-4">
          <QLogoIcon width={iconSize} className="mb-4" />
          <h2 className="h6 mb-4">Student Experience</h2>
          <p className="mb-4">See what our students and graduates are saying about QC Design School.</p>
          <Link href="/student-success" className="btn btn-outline-light">Learn More</Link>
        </div>
        <div className="col-12 col-sm-7 col-lg-4">
          <ShieldCheckIcon width={iconSize} className="mb-4" />
          <h2 className="h6 mb-4">Enroll Online</h2>
          <p className="mb-4">QC accepts students 365 days a year. Enroll now to start your new design career!</p>
          <Link href="https://enroll.qcdesignschool.com" className="btn btn-light">Enroll Now</Link>
        </div>
      </div>
    </div>
  </section>
);
