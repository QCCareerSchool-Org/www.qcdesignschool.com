import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';

import HeroImage from './not-found-hero.jpg';
import styles from './not-found.module.scss';
import { BackgroundImage } from '@/components/backgroundImage';
import BookReaderIcon from '@/components/icons/book-reader.svg';
import CertificationIcon from '@/components/icons/certification.svg';
import ShieldCheckIcon from '@/components/icons/shield-check.svg';
import { SiteLayout } from '@/components/siteLayout';
import { SupportSection } from '@/components/supportSection';

const iconSize = 32;

export const ErrorTemplate: FC<PropsWithChildren> = ({ children }) => {
  const date = Date.now();

  return (
    <SiteLayout>
      <section>
        <BackgroundImage src={HeroImage} priority />
        <div className="container text-white text-shadow">
          <div className={styles.wrapper}>
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 text-center">
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center g-4 text-center">
            <div className="col-12 col-lg-4 d-flex">
              <div className="d-flex flex-column justify-content-between w-100">
                <div>
                  <div className="text-primary mb-3"><CertificationIcon height={iconSize} /></div>
                  <h2 className="h6 mb-3">Learn more about QC's professional certification courses.</h2>
                </div>
                <div>
                  <Link href="/online-courses" className="btn btn-primary">View Courses</Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex">
              <div className="d-flex flex-column justify-content-between w-100">
                <div>
                  <div className="text-primary mb-3"><BookReaderIcon height={iconSize} /></div>
                  <h2 className="h6 mb-3">Hear from QC Design School's students and graduates.</h2>
                </div>
                <div>
                  <Link href="/student-experience" className="btn btn-primary">Student Experience</Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex">
              <div className="d-flex flex-column justify-content-between w-100">
                <div>
                  <div className="text-primary mb-3"><ShieldCheckIcon height={iconSize} /></div>
                  <h2 className="h6 mb-3">Enroll today to jumpstart your new design career!</h2>
                </div>
                <div>
                  <Link href="https://enroll.qcdesignschool.com" className="btn btn-primary">Enroll Online</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <SupportSection date={date} showLink />
    </SiteLayout>
  );
};
