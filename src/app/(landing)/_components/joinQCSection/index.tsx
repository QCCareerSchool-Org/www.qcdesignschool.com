import type { FC } from 'react';

import styles from './index.module.scss';
import BarChartIcon from '@/components/icons/bar-chart.svg';
import BookWithBookmarkIcon from '@/components/icons/book-bookmark.svg';
import CertIcon from '@/components/icons/certification.svg';
import ChatIcon from '@/components/icons/chat.svg';
import CoinsIcon from '@/components/icons/coins.svg';
import InfinityIcon from '@/components/icons/infinity.svg';

const iconHeight = 40;

type Props = {
  className?: string;
};

export const JoinQCSection: FC<Props> = ({ className = 'bg-light' }) => (
  <section className={className}>
    <div className="container text-center">
      <h2 className="h3 mb-4">Join QC Design School</h2>
      <p className="lead mb-4">QC's design courses provide you with:</p>
      <div className="row justify-content-center g-4">
        <div className="col-12 col-md-6 col-lg-4">
          <ChatIcon height={iconHeight} className={`${styles.icon} mt-3 mb-4`} />
          <h3 className="h6 mb-4">One-on-One Feedback</h3>
          <p className="mb-0">Personalized one-on-one feedback from a professional tutor invested in your success</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <BookWithBookmarkIcon height={iconHeight} className={`${styles.icon} mt-3 mb-4`} />
          <h3 className="h6 mb-4">Flexible Payment Options</h3>
          <p className="mb-0">Get practical design knowledge and more with flexible payment options and affordable tuition</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <BarChartIcon height={iconHeight} className={`${styles.icon} mt-3 mb-4`} />
          <h3 className="h6 mb-4">Business Training</h3>
          <p className="mb-0">The training and tools you need to launch your own business as soon as you graduate</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <CertIcon height={iconHeight} className={`${styles.icon} mt-3 mb-4`} />
          <h3 className="h6 mb-4">Professional Certification</h3>
          <p className="mb-0">A professional certification and designation upon graduation of your course</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <InfinityIcon height={iconHeight} className={`${styles.icon} mt-3 mb-4`} />
          <h3 className="h6 mb-4">Lifetime Access</h3>
          <p className="mb-0">Lifetime access to up-to-date course materials and business templates</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <CoinsIcon height={iconHeight} className={`${styles.icon} mt-3 mb-4`} />
          <h3 className="h6 mb-4">Virtual Community</h3>
          <p className="mb-0">Join a vibrant virtual community of designers and access expert-led webinars</p>
        </div>
      </div>
    </div>
  </section>
);
