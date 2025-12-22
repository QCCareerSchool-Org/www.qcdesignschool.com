import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import HeroImage from './desktop.jpg';
import { Price } from './price';
import ShieldIcon from './shield.svg';
import { Header } from '../_components/header';
import { GetStartedSection } from '@/components/getStartedSection';
import { CourseJsonLd } from '@/components/jsonLd/course';
import { SupportSection } from '@/components/supportSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';

const testimonialIds = [ 'TD-0006', 'TD-0008', 'TD-0009' ];

interface Props {
  countryCode: string;
  provinceCode: string | null;
  date: number;
}

export const CourseOverview: FC<Props> = async ({ countryCode, provinceCode, date }) => {

  return (
    <>
      <CourseJsonLd courseCode="i2" />
      <Header logoLink buttonContent={<><span className="d-none d-sm-inline">Enroll Online</span></>} buttonHref="https://enroll.qcdesignschool.com/all-courses-offer" />
      <section className="p-0" style={{ backgroundColor: '#333' }}>
        <div className="container">
          <a href="https://enroll.qcdesignschool.com/all-courses-offer">
            <Image src={HeroImage} alt="" className="img-fluid" />
          </a>
        </div>
      </section>
      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9">
              <p className="lead mb-5">This is your chance to gain a professional certification and launch the creative career you've always wanted. <strong>With over 45,000 students and graduates worldwide</strong>, QC has helped aspiring designers turn their passion into thriving businesses in interior decorating, home staging, organizing, floral design, and more. Don't wait—your dream career in design starts now!</p>
              <p><Link href="https://enroll.qcdesignschool.com/all-courses-offer"><button className="btn btn-lg btn-primary">Enroll Now</button></Link></p>
              <p style={{ textTransform: 'uppercase' }} className="mb-0"><ShieldIcon className="me-2" /><strong>21-day</strong> money-back guarantee</p>
            </div>
          </div>
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
      <TestimonialWallSection testimonialIds={testimonialIds} schemaCourseId="#course" />
      <SupportSection date={date} />
      <GetStartedSection
        title="Get Started Today"
        text="Enroll Now and Start Your Journey to Becoming a Certified Design Professional."
        buttonText="Enroll Now"
        buttonHref="https://enroll.qcdesignschool.com/all-courses-offer"
      />
    </>
  );
};
