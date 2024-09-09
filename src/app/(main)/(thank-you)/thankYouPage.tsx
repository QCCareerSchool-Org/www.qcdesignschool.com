import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import type { FC } from 'react';
import CatalogImage from './catalog.jpg';
import CheckIcon from '@/components/icons/check-circle.svg';
import DownloadIcon from '@/components/icons/download.svg';
import LogoIcon from '@/components/icons/logo.svg';
import BookIcon from '@/components/icons/open-book.svg';
import { Logo } from '@/components/logo';

export const metadata: Metadata = {
  title: 'Your Course Catalog - QC Design School',
};

const iconSize = 16;

const ThankYouCourseCatalogComponent: FC<{ courseName: string }> = ({ courseName }) => (
  <>
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 col-xxl-5 mb-s mb-lg-0">
            <div className="mb-2">
              <Logo height={24} />
            </div>
            <h1 className="mb-4">Your Course Catalog</h1>
            <p className="lead fw-bold mb-3">Thank You For Your Interest in QC Design School!</p>
            <p className="mb-5">Learn more about QC's professional {courseName} Certification Program, tuition & payment information, and how you can get started!</p>
            <div className="d-flex">
              <Link href="/catalog.pdf" download className="btn btn-navy me-3"><DownloadIcon height={16} style={{ position: 'relative', top: -1 }} className="me-2" />Download Your Catalog Now</Link>
              <Link href="/online-courses" className="btn btn-outline-navy">View Courses</Link>
            </div>
          </div>
          <div className="col-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 text-center">
            <Link href="/catalog.pdf" download>
              <Image
                src={CatalogImage} placeholder="blur" priority alt="QC Event School course catalog" style={{
                  // this is so the book is centred on the page, because it has dropshadow built into the image
                  marginLeft: '-11.2%',
                  marginRight: '-21.9%',
                  marginTop: '-11.7%',
                  marginBottom: '-11.7%',
                }} className="img-fluid"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-navy text-white">
      <div className="container">
        <div className="row justify-content-center g-5">
          <div className="col-12 col-sm-7 col-lg-4">
            <h2 className="h5">Online Design Courses</h2>
            <p>Learn more about our courses so you can decide which design career is right for you.</p>
            <Link href="/online-courses" className="btn btn-outline-light">
              <span className="d-flex align-items-center"><BookIcon width={iconSize} />&nbsp;&nbsp;&nbsp;View Courses</span>
            </Link>
          </div>
          <div className="col-12 col-sm-7 col-lg-4">
            <h2 className="h5">Student Experience</h2>
            <p>See what our students and graduates are saying about QC Design School.</p>
            <Link href="/student-success" className="btn btn-outline-light">
              <span className="d-flex align-items-center"><LogoIcon width={iconSize} />&nbsp;&nbsp;&nbsp;Learn More</span>
            </Link>
          </div>
          <div className="col-12 col-sm-7 col-lg-4">
            <h2 className="h5">Enroll Online</h2>
            <p>QC accepts students 365 days a year. Enroll now to start your new design career!</p>
            <Link href="https://enroll.qcdesignschool.com" className="btn btn-light">
              <span className="d-flex align-items-center"><CheckIcon width={iconSize} />&nbsp;&nbsp;&nbsp;Enroll Now</span>
            </Link>          </div>
        </div>
      </div>
    </section>
  </>
);

export default ThankYouCourseCatalogComponent;
