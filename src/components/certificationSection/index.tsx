import type { FC } from 'react';
import BackgroundImage from './background.jpg';
import IDDPLogo from './iddp.svg';
import styles from './index.module.scss';

const logoHeight = 150;
const backgroundImageLink = `url(${BackgroundImage.src})`;

export const CertificationSection: FC = () => (
  <section
    className={styles.certificationSection} style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${backgroundImageLink} `,
    }}
  >
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-sm-10 col-lg-8 col-xl-6">
          <IDDPLogo height={logoHeight} />
          <h2 className={styles.whiteHeader}>Interior Design and Decorating Certification</h2>
          <p>Once you've completed the Interior Decorating Course online, you'll graduate with the International Design and Decorating Professional (IDDP) certificate. This certification demonstrates that you have successfully completed professional interior decorator training and that you possess all the skills and knowledge required to create beautiful and comfortable homes.</p>
          <p className={styles.goldText}>International Design and Decorating Professional™</p>
        </div>
      </div>
    </div>

  </section>
);
