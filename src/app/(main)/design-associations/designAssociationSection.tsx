import Image from 'next/image';
import type { FC } from 'react';

import { preferredPartners, professionalAssociations } from './designAssociations';
import styles from './page.module.scss';

type Props = {
  className?: string;
};

export const DesignAssociationSection: FC<Props> = ({ className }) => (
  <section className={className}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center mb-5">
          <h2>Professional Associations</h2>
        </div>
      </div>
      <div className="row g-5">
        {professionalAssociations.map((association, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-3" key={index}>
            <Image src={association.image} alt="" className={styles.logo} />
            <h6>{association.name}</h6>
            <p>{association.description}</p>
          </div>
        ))}
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center mb-5">
          <h2>Preferred Partners</h2>
          <p>QC Design School has partnered with the following companies to offer exclusive discounts to students and graduates. Use your discounts to further your career in the industry.</p>
        </div>
      </div>
      <div className="row g-5">
        {preferredPartners.map((partner, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-3" key={index}>
            <Image src={partner.image} alt="" className={styles.logo} />
            <h6>{partner.name}</h6>
            <p>{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
