import Link from 'next/link';
import type { FC } from 'react';

import CheckIcon from '@/components/icons/check-circle.svg';
import BookIcon from '@/components/icons/open-book.svg';
import QLogoIcon from '@/components/icons/q-logo.svg';

const iconSize = 16;

export const ThreeReasonsSection: FC = () => (
  <section className="bg-navy text-white">
    <div className="container">
      <div className="row justify-content-center text-center text-lg-start g-s">
        <div className="col-12 col-sm-7 col-lg-4">
          <h2 className="h6">Online Design Courses</h2>
          <p>Learn more about our courses so you can decide which design career is right for you.</p>
          <Link href="/online-courses" className="btn btn-outline-light">
            <span className="d-flex align-items-center"><BookIcon width={iconSize} className="me-2" />View Courses</span>
          </Link>
        </div>
        <div className="col-12 col-sm-7 col-lg-4">
          <h2 className="h6">Student Experience</h2>
          <p>See what our students and graduates are saying about QC Design School.</p>
          <Link href="/student-success" className="btn btn-outline-light">
            <span className="d-flex align-items-center"><QLogoIcon width={iconSize} className="me-2" />Learn More</span>
          </Link>
        </div>
        <div className="col-12 col-sm-7 col-lg-4">
          <h2 className="h6">Enroll Online</h2>
          <p>QC accepts students 365 days a year. Enroll now to start your new design career!</p>
          <Link href="https://enroll.qcdesignschool.com" className="btn btn-light">
            <span className="d-flex align-items-center"><CheckIcon width={iconSize} className="me-2" />Enroll Now</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
);
