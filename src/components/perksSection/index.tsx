import Image from 'next/image';
import type { FC } from 'react';
import * as Images from './images';
import styles from './index.module.scss';

type Props = {
  className?: string;
};

const PerksSection: FC<Props> = ({ className }) => {
  return(
    <section className={className}>
      <div className="container">
        <div className="row ">
          <div className="col-12 col-md-6 col-xl-3 p-4">
            <Image className={styles.perksImage} src={Images.OnlineCenter} alt="" />
            <h2 className="h5 mt-3">Lifetime Access to the Online Student Center</h2>
            <p>QC students and graduates are provided with customizable business resources in the Online Student Center such as invoices, client contracts, vendor tracking sheets, and more. The Online Student Center also contains helpful career resources such as resume-building tips, how to prepare for an interview, a list of job websites, and a social media guide.</p>
          </div>
          <div className="col-12 col-md-6 col-xl-3 p-4">
            <Image className={styles.perksImage} src={Images.FocalPoint} alt="" />
            <h2 className="h5 mt-3">A Blog for Design Professionals</h2>
            <p>The Focal Point blog offers home design ideas, expert decorating advice, student and graduate features, industry trends, and more. Access helpful articles, sample course videos, and recommendations for business resources, from design software to marketing. Use these invaluable resources throughout your courses and career as a certified decorator.</p>
          </div>
          <div className="col-12 col-md-6 col-xl-3 p-4">
            <Image className={styles.perksImage} src={Images.NetworkAssociations} alt="" />
            <h2 className="h5 mt-3">Eligibility to Join Design Associations</h2>
            <p>As a QC student or graduate, further develop your professional skills by joining design associations! Professional Organizers in Canada (POC) is just one example of an association that QC students are eligible to join. Members enjoy discounts on workshops and conferences as well as helpful monthly newsletters.</p>
          </div>
          <div className="col-12 col-md-6 col-xl-3 p-4">
            <Image className={styles.perksImage} src={Images.OnlineCommunity} alt="" />
            <h2 className="h5 mt-3">An Online Community of Design Professionals</h2>
            <p>We're here to inspire, inform, and innovate your educational journey. Discover the vibrant heart of our Virtual Community, where students and graduates connect to mentor, share insights, and grow together. Tap into free webinars for deep dives into design and industry secrets, and join lively chats for discussions that range from studies to career paths.</p>
          </div>
        </div>
      </div>
    </section>
  );

};

export default PerksSection;
