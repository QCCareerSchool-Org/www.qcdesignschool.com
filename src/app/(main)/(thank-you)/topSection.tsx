import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import CatalogImage from './catalog.jpg';
import styles from './topSection.module.scss';
import DownloadIcon from '@/components/icons/download.svg';
import { Logo } from '@/components/logo';

type Props = {
  courseName: string;
  emailAddress?: string;
  firstName?: string;
};

export const TopSection: FC<Props> = ({ courseName, emailAddress, firstName }) => (
  <section>
    <div className="container">
      <div className="row g-s">
        <div className="col-12 col-lg-7 col-xl-6">
          <div className="mb-2">
            <Logo height={24} />
          </div>
          <h1 className="h2 mb-4">Your Course Catalog</h1>
          <p className="lead fw-bold mb-3">Thank You For Your Interest in QC Design School{firstName && <>, {firstName}</>}!</p>
          <p>Learn more about QC's professional {courseName} Certification Program, tuition & payment information, and how you can get started!</p>
          {emailAddress && <p className="lead text-primary">Your email was sent to <strong>{emailAddress}</strong>. If you don't see it in your inbox in a few minutes, please check your spam or junk mail folder.</p>}
          <div className="d-flex mt-5">
            <Link href="/catalog.pdf" download className="btn btn-navy me-3"><DownloadIcon height={16} style={{ position: 'relative', top: -1 }} className="me-2" />Download Your Catalog Now</Link>
            <Link href="/online-courses" className="btn btn-outline-navy">View Courses</Link>
          </div>
        </div>
        <div className="col-10 col-md-8 col-lg-5 col-xxl-4 text-center">
          <Link href="/catalog.pdf" download>
            <Image src={CatalogImage} placeholder="blur" priority alt="QC Event School course catalog" className={`${styles.brochure} img-fluid`} />
          </Link>
        </div>
      </div>
    </div>
  </section>
);