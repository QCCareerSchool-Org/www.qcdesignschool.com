import Image from 'next/image';
import type { FC } from 'react';

import BelindaImage from './belinda.jpg';
import DoxceenImage from './doxceen.jpg';
import styles from './index.module.scss';
import KaseyImage from './kasey.jpg';

export const Testimonials: FC = () => {
  return (
    <div className="row g-5">
      <div className="col-12 col-lg-4">
        <div className="mb-3">
          <div className="mb-3">
            <Image src={BelindaImage} className="img-fluid" alt="Belinda T." />
          </div>
          <p>&ldquo;<span className="fst-italic">The day I was notified that I received my certification, I contacted Pottery Barn and was hired on the spot to work as an interior design stylist.&rdquo;</span>&mdash;Belinda T.</p>
          <a href="#" className={styles.readMore}>Read Full Story</a>
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <div className="mb-3">
          <div className="mb-3">
            <Image src={DoxceenImage} className="img-fluid" alt="Doxceen M." />
          </div>
          <p>&ldquo;<span className="fst-italic">There was never a moment I felt alone, because I knew that help was always a phone call away.&rdquo;</span>&mdash;Doxceen M.</p>
          <a href="#" className={styles.readMore}>Read Full Story</a>
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <div className="mb-3">
          <div className="mb-3">
            <Image src={KaseyImage} className="img-fluid" alt="Kasey M." />
          </div>
          <p>&ldquo;<span className="fst-italic">I was able to learn new techniques and create a more open mind when it came to furthering my career! I will forever be grateful for QC design!&rdquo;</span>&mdash;Kasey M.</p>
          <a href="#" className={styles.readMore}>Read Full Story</a>
        </div>
      </div>
    </div>
  );
};
