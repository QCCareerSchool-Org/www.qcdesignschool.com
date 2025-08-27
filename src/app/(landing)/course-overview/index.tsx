import type { FC } from 'react';

import { Price } from './price';
import { getData } from '@/lib/getData';

export const CourseOverview: FC = async () => {
  const { countryCode, provinceCode } = await getData();

  return (
    <>
      <section>
        <div className="container text-center">
          <h1>Do What Inspires You</h1>
          <p className="lead">Enroll with our Lowest Tuition Ever</p>
          <p>All Courses Now $998 or Less</p>
          <p>This is your chance to gain a professional certification and launch the creative career you've always wanted. With over 45,000 students and graduates worldwide, QC has helped aspiring designers turn their passion into thriving businesses in interior decorating, home staging, organizing, floral design, and more. Don't wait—your dream career in design starts now!</p>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="text-center">
            <h2>Choose Your Learning Path</h2>
            <p className="lead text-primary mb-4">Get 50% Off Each Additional Course</p>
          </div>
          <div className="row justify-content-center g-4">
            <Price countryCode={countryCode} provinceCode={provinceCode} courseCode="i2" />
            <Price countryCode={countryCode} provinceCode={provinceCode} courseCode="st" />
            <Price countryCode={countryCode} provinceCode={provinceCode} courseCode="ld" />
            <Price countryCode={countryCode} provinceCode={provinceCode} courseCode="po" />
            <Price countryCode={countryCode} provinceCode={provinceCode} courseCode="cc" />
            <Price countryCode={countryCode} provinceCode={provinceCode} courseCode="fd" />
            <Price countryCode={countryCode} provinceCode={provinceCode} courseCode="ed" />
            <Price countryCode={countryCode} provinceCode={provinceCode} courseCode="fs" />
            <Price countryCode={countryCode} provinceCode={provinceCode} courseCode="db" />
            <Price countryCode={countryCode} provinceCode={provinceCode} courseCode="ap" />
            <Price countryCode={countryCode} provinceCode={provinceCode} courseCode="vd" />
          </div>
        </div>
      </section>
    </>
  );
};
