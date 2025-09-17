'use client';
// build section here, build modal part in portfolio.tsx then import and put in here
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

// import styles from './index.module.scss';
// import type { ResponsiveType } from 'react-multi-carousel';
// import Carousel from 'react-multi-carousel';

// import { students } from './data';

interface ShowcaseProps {
  name: string;
  title?: string;
  business?: string;
  description: string;
  image: StaticImageData;
  galleryImages?: string[];
}

export const StudentShowcaseSection: FC<{ student: ShowcaseProps }> = ({ student }) => {
  return (
    <div className="container">
      <div className="row justify-content-center g-s mb-5 mt-4">
        <div className="col-12 col-lg-6">
          <Image src={student.image} alt="" style={{ borderRadius: '8px' }} className="img-fluid rounded-lg" />
        </div>
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 mb-2">
          <h3 className="mb-1">{student.name}</h3>
          <h5 className="mb-4">{student.business}</h5>
          <p className="lead mb-4">{student.description}</p>
        </div>
      </div>
    </div>
  );
};
