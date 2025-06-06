import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import CatalogImage from './catalog.jpg';
import styles from './index.module.scss';
import DownloadIcon from '@/components/icons/download.svg';
import { Logo } from '@/components/logo';

type Props = {
  courseName: string;
  course?: string;
};

export const ThankYouSection: FC<Props> = ({ course, courseName }) => {
  const downloadUrl = course ? `/catalog.pdf?course=${encodeURIComponent(course)}` : '/catalog.pdf';

  return (
    <section>
      <div className="container">
        <div className="row g-s">
          <div className="col-12 col-lg-7 col-xl-6">
            <div className="mb-2">
              <Logo height={24} />
            </div>
            <h1 className="h2 mb-4">Your Course Catalog</h1>
            <p className="lead fw-bold mb-3">Thank You For Your Interest in QC Design School!</p>
            <p>Learn more about QC's {courseName} Certification Program, tuition & payment information, and how you can get started!</p>
            <div className="d-flex mt-5">
              <a href={downloadUrl} download className="btn btn-navy me-3"><DownloadIcon height={16} style={{ position: 'relative', top: -1 }} className="me-2" />Download Your Catalog Now</a>
              <Link href="/online-courses" className="btn btn-outline-navy">View Courses</Link>
            </div>
          </div>
          <div className="col-10 col-md-8 col-lg-5 col-xxl-4 text-center">
            <Link href={downloadUrl} download>
              <Image src={CatalogImage} placeholder="blur" priority alt="QC Design School course catalog" className={`${styles.brochure} img-fluid`} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
