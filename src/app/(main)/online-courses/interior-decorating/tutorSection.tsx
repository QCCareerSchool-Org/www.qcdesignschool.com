import type { FC } from 'react';

import { AngieChapmanCircle } from '@/components/tutors/angieChapman';
import { JaneLockhartCircle } from '@/components/tutors/janeLockhart';

type Props = {
  className?: string;
};

export const TutorSection: FC<Props> = ({ className }) => (
  <section className={className}>
    <div className="container">
      <div className="row mb-5">
        <div className="col-12 col-md-10 col-lg-7">
          <h2>Meet Your Interior Decorating Experts</h2>
          <p className="lead mb-0">QC is proud to work with leaders of the global design industry to develop our courses. Our international team of instructors bring diverse experience and skills to aspiring designers around the globe.</p>
        </div>
      </div>
      <div className="row g-5 g-lg-s">
        <div className="col-12 col-lg-6">
          <div className="mb-3"><JaneLockhartCircle /></div>
          <h3 className="h4">Jane Lockhart</h3>
          <p className="mb-0">Many recognize Jane from her show, Color Confidential, on HGTV and W Network. She is also the best-selling author of two books and frequently lends her design expertise to Canadian television shows including The Marilyn Denis Show and Cityline.</p>
        </div>
        <div className="col-12 col-lg-6">
          <div className="mb-3"><AngieChapmanCircle /></div>
          <h3 className="h4">Angie Chapman</h3>
          <p className="mb-0">Award-winning interior design consultant and founder of Angie Chapman Interiors, Angie is a driving force in the design world. With over 10 years of experience in the industry, she has honed her skills and expertise to become a sought-after designer.</p>
        </div>
      </div>
    </div>
  </section>
);
