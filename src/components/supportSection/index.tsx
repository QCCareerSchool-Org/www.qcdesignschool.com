import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import styles from './index.module.scss';
import SupportTeamImage from './support-team.png';
import ChatIcon from '@/components/icons/chat.svg';

export const SupportSection: FC = () => (
  <section className={`${styles.section} text-white`}>
    <div className="container">
      <div className="row justify-content-center g-5 g-xl-s">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <Image src={SupportTeamImage} alt="" className="img-fluid" />
        </div>
        <div className="col-12 col-lg-6">
          <h2 className="mb-4">Real Support &amp; Guidance, Every Step of the Way</h2>
          <p className="lead mb-4">QC's dedicated team is here to help you select the right course, navigate your materials, and stay on track to reach your career goals. Available seven days a week by phone, email, or live chat, we are here to ensure you get the support you need&mdash;whether it's advice, troubleshooting, or planning your next step.</p>
          <Link href="/contact-us" className="btn btn-primary"><ChatIcon height="16" className="me-2" />Talk to Us Today</Link>
        </div>
      </div>
    </div>
  </section>
);