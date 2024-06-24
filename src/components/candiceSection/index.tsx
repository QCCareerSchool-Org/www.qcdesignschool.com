import Image from 'next/image';
import type { FC } from 'react';

import CandiceImage from './candice.jpg';

type Props = {
  className?: string;
};

export const CandiceSection: FC<Props> = ({ className }) => (
  <section id="instructors" className={className}>
    <div className="container">
      <div className="row g-s">
        <div className="col-12 col-lg-6">
          <h2 className="h3 mb-3">Meet Your New Instructor</h2>
          <p className="mb-0">Candice Coppola is an incredibly talented entrepreneur and former owner of a wedding planning &amp; design business called Jubilee Events. With her unique flair, she's created amazing events all over the world, from New York to Fiji, and even Costa Rica. She's no stranger to big budgets either, managing events that cost upwards of $1,000,000! With her wealth of knowledge and experience, Candice is a passionate and driven coach, instructor, and mentor, helping aspiring individuals in the event-planning business reach their entrepreneurial goals.</p>
        </div>
        <div className="d-none d-lg-block col-lg-6">
          <Image src={CandiceImage} alt="Candice Coppola" className="img-fluid" sizes="50wv" />
        </div>
      </div>
    </div>
  </section>
);
