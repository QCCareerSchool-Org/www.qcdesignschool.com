import type { FC } from 'react';

import styles from './index.module.scss';
import BarChartIcon from '@/components/icons/bar-chart.svg';
import BookWithBookmarkIcon from '@/components/icons/book-bookmark.svg';
import CertIcon from '@/components/icons/certification.svg';
import ChatIcon from '@/components/icons/chat.svg';
import CoinsIcon from '@/components/icons/coins.svg';
import InfinityIcon from '@/components/icons/infinity.svg';

const iconHeight = 40;

interface Props {
  className?: string;
  subheading?: string;
}

export const JoinQCSection: FC<Props> = ({ className = 'bg-light', subheading }) => (
  <section className={className}>
    <div className="container text-center">
      <h2 className="h3 mb-4">Join QC Design School</h2>
      <p className="lead mb-4">{subheading ?? <>QC's design courses provide you with:</>}</p>
      <div className="row justify-content-center g-4">
        <div className="col-12 col-md-6 col-lg-4">
          <ChatIcon height={iconHeight} className={`${styles.icon} mt-3 mb-4`} />
          <h3 className="h6 mb-4">One-on-One Mentorship</h3>
          <p className="mb-0">Gain the confidence to launch your business with personalized feedback from a design professional</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <BookWithBookmarkIcon height={iconHeight} className={`${styles.icon} mt-3 mb-4`} />
          <h3 className="h6 mb-4">Flexible Payment Options</h3>
          <p className="mb-0">Launch your career quickly with flexible, interest-free payment options and affordable tuition</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <BarChartIcon height={iconHeight} className={`${styles.icon} mt-3 mb-4`} />
          <h3 className="h6 mb-4">Complete Business Training</h3>
          <p className="mb-0">Gain exclusive professional training and tools designed to help you launch a profitable design business</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <CertIcon height={iconHeight} className={`${styles.icon} mt-3 mb-4`} />
          <h3 className="h6 mb-4">Professional Certification</h3>
          <p className="mb-0">Earn a globally recognized professional designation upon graduation - with no annual renewal fees</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <InfinityIcon height={iconHeight} className={`${styles.icon} mt-3 mb-4`} />
          <h3 className="h6 mb-4">Lifetime Access</h3>
          <p className="mb-0">Lifetime access to up-to-date course materials and business templates</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <CoinsIcon height={iconHeight} className={`${styles.icon} mt-3 mb-4`} />
          <h3 className="h6 mb-4">Global Design Community</h3>
          <p className="mb-0">Join a community of design entrepreneurs and experts for industry insights, collaboration and professional support</p>
        </div>
      </div>
    </div>
  </section>
);
