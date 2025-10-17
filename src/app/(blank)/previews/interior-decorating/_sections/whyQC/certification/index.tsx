import Image from 'next/image';
import type { FC } from 'react';

import AlexaImage from './grad-cert-alexa.png';
import JamieImage from './grad-cert-jamie.png';
import LacieImage from './grad-cert-lacie.png';
import styles from './index.module.scss';
import CertificationLogo from '@/components/certificationLogos/iddp.svg';

export const Certification: FC = () => (
  <>
    <div className="row justify-content-center mb-4">
      <div className="col-12 col-md-10 col-lg-8">
        <div className="mb-3">
          <CertificationLogo fill="#C19E76" height="128" />
        </div>
        <h3 className="h4 mb-3">Your International Design & Decorating Professional (IDDP™) Certification</h3>
        <p>Upon graduating from QC's Interior Design and Decorating course, you'll earn your International Design and Decorating Professional (IDDP™) certification—a highly respected credential that validates your training, skills, and expertise. This prestigious designation demonstrates your ability to create beautiful, functional spaces that align with real-world demands and exceed industry expectations.</p>
        <p>You'll also gain eligibility to join QC's network of trusted industry partners and professional associations, enhancing your credibility and opening new doors in your design career.</p>
      </div>
    </div>
    <div className="row justify-content-center text-center g-4">
      <div className="col-4 col-sm-4">
        <div className="mb-3">
          <Image src={JamieImage} alt="Jamie" className={styles.image} />
        </div>
        <div>
          Jamie<br className="d-inline d-sm-none" /> Cromar<span className="d-none d-sm-inline">, IDDP graduate</span>
        </div>
      </div>
      <div className="col-4 col-sm-4">
        <div className="mb-3">
          <Image src={AlexaImage} alt="Alexa" className={styles.image} />
        </div>
        <div>
          Alexa<br className="d-inline d-sm-none" /> Jorgenson<span className="d-none d-sm-inline">, IDDP graduate</span>
        </div>
      </div>
      <div className="col-4 col-sm-4">
        <div className="mb-3">
          <Image src={LacieImage} alt="Lacie" className={styles.image} />
        </div>
        <div>
          Laciee<br className="d-inline d-sm-none" /> Charette<span className="d-none d-sm-inline">, IDDP graduate</span>
        </div>
      </div>
    </div>
  </>
);
