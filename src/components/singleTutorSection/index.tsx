import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

type Props = {
  courseName: string;
  description: string;
  src: StaticImageData;
  alt: string;
  className?: string;
};

export const SingleTutorSection: FC<Props> = ({ courseName, description, src, alt, className }) => (
  <section id="instructors" className={className}>
    <div className="container">
      <div className="row justify-content-center align-items-center g-lg-s">
        <div className="col-12 col-lg-6 col-xl-7 col-xxl-6 mb-5 mb-lg-0">
          <h2 className="mb-3">Meet Your {courseName} Instructor</h2>
          <p className="mb-0">{description}</p>
        </div>
        <div className="col-8 col-sm-6 col-lg-5 col-xl-4">
          <Image src={src} alt={alt} className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
);
