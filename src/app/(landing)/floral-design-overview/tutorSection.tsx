import type { FC } from 'react';

import { MwaiYeboahCircle } from '@/components/tutors/mwaiYeboah';
import { ReneeTucciCircle } from '@/components/tutors/reneeTucci';

type Props = {
  className?: string;
};

export const TutorSection: FC<Props> = ({ className }) => (
  <section className={className}>
    <div className="container">
      <div className="row mb-5">
        <div className="col-12 col-md-10 col-lg-7">
          <h2>Meet Your Floral Design Experts</h2>
          <p className="lead mb-0">QC is proud to work with leaders of the global design industry to develop our courses. Our international team of instructors bring diverse experience and skills to aspiring designers around the globe.</p>
        </div>
      </div>
      <div className="row g-5 g-lg-s">
        <div className="col-12 col-lg-6">
          <div className="mb-3"><ReneeTucciCircle /></div>
          <h3 className="h4">Renee Tucci</h3>
          <p className="mb-0">With over 20 years of floral design experience, Renee Tucci, recognized by the American Institute of Floral Designers and Professional Floral Communicators International, is a dedicated instructor in the QC course, guiding students to master the art of floral design.</p>
        </div>
        <div className="col-12 col-lg-6">
          <div className="mb-3"><MwaiYeboahCircle /></div>
          <h3 className="h4">Mwai Yeboah</h3>
          <p className="mb-0">Mwai Yeboah, founder of Love From Mwai and multi-award-winning planner, specializes in destination wedding planning and luxury floral design. Mawai transforms weddings and events into immersive experiences for luxury clients worldwide.</p>
        </div>
      </div>
    </div>
  </section>
);
