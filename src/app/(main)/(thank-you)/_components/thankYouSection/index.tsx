import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import CatalogImage from './catalog.jpg';
import styles from './index.module.scss';
import DownloadIcon from '@/components/icons/download.svg';
import { Logo } from '@/components/logo';

type Props = {
  courseName?: string;
  course?: string;
  download?: boolean;
  emailAddress?: string;
  className?: string;
};

export const ThankYouSection: FC<Props> = ({ course, courseName, download, emailAddress, className }) => {
  const downloadUrl = course ? `/catalog.pdf?course=${encodeURIComponent(course)}` : '/catalog.pdf';

  return (
    <section className={className}>
      <div className="container">
        <div className="row g-s">
          <div className="col-12 col-lg-7 col-xl-6">
            <div className="mb-2">
              <Logo height={24} />
            </div>
            {download
              ? (
                <>
                  <h1 className="h2 mb-4">Your Course Catalog</h1>
                  <p className="lead fw-bold mb-3">Thank You For Your Interest in QC Design School!</p>
                  <p>Learn more about QC's {courseName} Certification Program, tuition & payment information, and how you can get started!</p>
                  <div className="d-flex mt-5">
                    <a href={downloadUrl} download className="btn btn-navy me-3"><DownloadIcon height={16} style={{ position: 'relative', top: -1 }} className="me-2" />Download Your Catalog Now</a>
                    <Link href="/online-courses" className="btn btn-outline-navy">View Courses</Link>
                  </div>
                </>
              )
              : (
                <>
                  <h1 className="h2 mb-4">Thank You!</h1>
                  <p className="lead fw-bold mb-3">Your Course Catalog Is on Its Way</p>
                  <p>We've just sent your course catalog{emailAddress && <> to <span className="text-primary">{emailAddress}</span></>}, and inside, you'll find an exclusive offer waiting just for you.</p>
                  <p>If you don't see it, be sure to check your junk or spam folder and add us to your safe senders list.</p>
                </>
              )}
          </div>
          <div className="col-10 col-md-8 col-lg-5 col-xxl-4 text-center">
            {download
              ? (
                <Link href={downloadUrl} download>
                  <Image src={CatalogImage} placeholder="blur" priority alt="QC Design School course catalog" className={`${styles.brochure} img-fluid`} />
                </Link>
              )
              : (
                <Image src={CatalogImage} placeholder="blur" priority alt="QC Design School course catalog" className={`${styles.brochure} img-fluid`} />
              )}
          </div>
        </div>
      </div>
    </section>
  );
};
