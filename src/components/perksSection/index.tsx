import Image from 'next/image';
import type { FC } from 'react';

import FocalPointImage from './focal-point.jpg';
import styles from './index.module.scss';
import NetworkAssociationsImage from './network-associations.jpg';
import OnlineCommunityImage from './online-community.jpg';
import OnlineStudentCenter from './online-student-center.jpg';

type Props = {
  className?: string;
};

export const PerksSection: FC<Props> = ({ className }) => (
  <section className={className}>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-xl-3 mb-4 mb-xl-0">
          <div className="mb-3">
            <Image className={styles.perksImage} src={OnlineStudentCenter} alt="" />
          </div>
          <h2 className="h6 mb-3">Lifetime Access to the Online Student Center</h2>
          <p className="mb-0">QC students and graduates are provided with customizable business resources in the Online Student Center such as invoices, client contracts, vendor tracking sheets, and more. The Online Student Center also contains helpful career resources such as resume-building tips, how to prepare for an interview, a list of job websites, and a social media guide.</p>
        </div>
        <div className="col-12 col-md-6 col-xl-3 mb-4 mb-xl-0">
          <div className="mb-3">
            <Image className={styles.perksImage} src={FocalPointImage} alt="" />
          </div>
          <h2 className="h6 mb-3">A Blog for Design Professionals</h2>
          <p className="mb-0">The Focal Point blog offers home design ideas, expert decorating advice, student and graduate features, industry trends, and more. Access helpful articles, sample course videos, and recommendations for business resources, from design software to marketing. Use these invaluable resources throughout your courses and career as a certified decorator.</p>
        </div>
        <div className="col-12 col-md-6 col-xl-3 mb-4 mb-md-0">
          <div className="mb-3">
            <Image className={styles.perksImage} src={NetworkAssociationsImage} alt="" />
          </div>
          <h2 className="h6 mb-3">Eligibility to Join Design Associations</h2>
          <p className="mb-0">As a QC student or graduate, further develop your professional skills by joining design associations! Professional Organizers in Canada (POC) is just one example of an association that QC students are eligible to join. Members enjoy discounts on workshops and conferences as well as helpful monthly newsletters.</p>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="mb-3">
            <Image className={styles.perksImage} src={OnlineCommunityImage} style={{ objectPosition: '50% 100%' }} alt="" />
          </div>
          <h2 className="h6 mb-3">An Online Community of Design Professionals</h2>
          <p className="mb-0">We're here to inspire, inform, and innovate your educational journey. Discover the vibrant heart of our Virtual Community, where students and graduates connect to mentor, share insights, and grow together. Tap into free webinars for deep dives into design and industry secrets, and join lively chats for discussions that range from studies to career paths.</p>
        </div>
      </div>
    </div>
  </section>
);
