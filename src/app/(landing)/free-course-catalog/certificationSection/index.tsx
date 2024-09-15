import Image from 'next/image';
import type { FC } from 'react';

import { Animation } from './animation';
import BackgroundImage from './background.jpg';
import styles from './index.module.scss';
import IDDPCertification from '@/components/certificationLogos/iddp.svg';

export const CertificationSection: FC = () => (
  <section className={`bg-dark text-white ${styles.certificationSection}`}>
    <Image src={BackgroundImage} alt="" fill placeholder="blur" style={{ objectFit: 'cover' }} />
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-6 col-sm-5 col-md-4 col-lg-4 col-xl-3 offset-xl-2">
          <Animation><IDDPCertification /></Animation>
        </div>
        <div className="col-12 col-md-10 col-lg-8 col-xl-7">
          <h2 className="h3">Your Design Certification</h2>
          <p>Once you've completed your online design course, you'll graduate with a certification of completion and a professional designation that is yours to use for life.</p>
          <p>Your certificate demonstrates that you have successfully completed professional training in the design & decorating industry and you possess all the skills and knowledge required to create beautiful and comfortable spaces for your clients.</p>
          <h3 className="h5">What Your Certification Unlocks</h3>
          <ul className="mb-0">
            <li>Launch your own home design and decorating business with comprehensive business training included in your course</li>
            <li>Secure a position at an established design and decorating firm</li>
            <li>Offer expert consulting services to both residential and commercial clients</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export const SplitCertificationSection: FC = () => (
  <section className="text-white text-shadow">
    <Image src={BackgroundImage} fill placeholder="blur" alt="" sizes="100vw" style={{ objectFit: 'cover' }} />
    <div className="container">
      <div className="row justify-content-center align-items-center g-5">
        <div className="col-12 col-lg-5 text-center">
          <IDDPCertification height="200" alt="International Staging and Redesign Professional (ISRP) certification logo" />
        </div>
        <div className="col-12 col-lg-7 text-start">
          <h3 className="text-white mb-3">Your Design Certification</h3>
          <p>Once you've completed your online design course, you'll graduate with a certification of completion and a professional designation that is yours to use for life. <br />Your certificate demonstrates that you have successfully completed professional training in the design & decorating industry and you possess all the skills and knowledge required to create beautiful and comfortable spaces for your clients.</p>
          <p>This certification demonstrates that you have successfully completed design training and that you possess all the skills and knowledge required to create functional and comfortable homes.</p>
          <h5 className="mt-4">What Your Certification Unlocks</h5>
          <ul>
            <li>Launch your own home design and decorating business with comprehensive business training included in your course</li>
            <li>Secure a position at an established design and decorating firm</li>
            <li>Offer expert consulting services to both residential and commercial clients</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
