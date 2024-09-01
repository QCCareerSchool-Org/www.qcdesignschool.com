import type { Metadata } from 'next';
import Image from 'next/image';
import type { FC } from 'react';
import { OutlineSection } from '../../online-courses/event-decor/_outlineSection';
import { OnlineCoursePageRM } from '../onlineCoursesRmPage';
import styles from '../page.module.scss';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';

export const metadata: Metadata = {
  title: 'Event Decor Course - QC Design School',
};

const testimonialIds = [ 'TD-0006', 'TD-0008', 'TD-0009', 'TD-0010', 'TD-0011', 'TD-0012' ];

const IntroSection: FC = () => (
  <section>
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-lg-6">
          <h2 className="mb-4">Event Decor</h2>
          <p className="lead mb-4">QC's Event Decor certification course provides students with the most comprehensive training available to succeed in the event decor industry.</p>
          <ul>
            <li>No previous training required&mdash;our premium Event Decor course is designed to take you from beginner to expert</li>
            <li>Personalized feedback and advice on your assignments from our top industry design & decorating experts</li>
            <li>Thriving virtual community to connect with other decorators, get feedback and gain exclusive access to bonus materials</li>
            <li>Built-in business training and real-world templates to help you launch your design career and grow your clientele as a certified Event Decorator</li>
            <li>Discounts and affiliations with top organizations including the American Society of Professional Organizers, Decorators & Designers Association of Canada, and more</li>
          </ul>
        </div>
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <Image src={WhyQCImage} alt="" className={`img-fluid ${styles.whyQCImage}`} />
        </div>
      </div>
    </div>
  </section>
);

const EventDecorPage: PageComponent = () => (
  <OnlineCoursePageRM
    testimonialIds={testimonialIds}
    OutlineSection={OutlineSection}
    IntroSection={IntroSection}
  />

);

export default EventDecorPage;
