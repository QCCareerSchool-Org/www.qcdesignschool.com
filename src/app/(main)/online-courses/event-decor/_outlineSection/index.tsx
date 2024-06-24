'use client';

import Link from 'next/link';
import type { FC } from 'react';

import Part3Image from './Build Your Career in Event Decor.jpg';
import Part2Image from './Components of Event Decor.jpg';
import Part1Image from './Introduction to Event Decor.jpg';
import { CourseOutline } from '@/components/courseOutline';

export const OutlineSection: FC = () => (
  <section id="outline">
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-xl-10 text-center">
          <h2 className="mb-3">Course Outline</h2>
          <p className="lead mb-0">The Event Decor course is divided into three parts, each comprising separate training units.</p>
        </div>
        <div className="col-12 col-xl-10">
          <CourseOutline title="Introduction to Event Decor" src={Part1Image} open className="mb-3">
            <p className="small">Learn about what an event decorator does on a day-to-day basis and the services you can offer to clients. You'll study the client consultation process to ensure you know how to get the information you need to plan and design event themes and concepts. Explore how you'll use your design skills and knowledge to impact the tone and atmosphere of an event. You'll learn how to create a practical layout for an event, while executing a cohesive theme through color schemes and other design elements.</p>
          </CourseOutline>
          <CourseOutline title="Components of Event Decor" src={Part2Image} className="mb-3">
            <p className="small">Discover the decor items you'll use to execute breathtaking events. Study popular types of flowers, the cost of each and which flowers work well together in a design. You'll learn to work with florists to plan the perfect arrangements for your events. Find out how to match different centerpieces with a number of table styles, and make an impression with your table decor. Learn how you can use lighting to create the perfect mood and ambiance for your event. In this unit, you'll explore options for renting event decor and equipment and consider how to develop positive relationships with event vendors.</p>
          </CourseOutline>
          <CourseOutline title="Build Your Career in Event Decor" src={Part3Image} className="mb-3">
            <p className="small">Explore the steps you'll take to start your own event decor business. Decide which services you'll offer to clients, and think about how much you'll charge for each service. Learn how to build a brand that stands out in the event and design industries and attracts your target market. In this unit, you'll practice important strategies to maximize your productivity and manage your business effectively.</p>
          </CourseOutline>
        </div>
        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
          <h3 className="h5 mb-3">Have Questions About the Course?</h3>
          <p className="lead mb-3">Don't hesitate to reach out to our dedicated student support team for guidance and support. <strong>Your success is our priority!</strong></p>
          <Link href="/contact-us" className="btn btn-outline-grey">Contact Us</Link>
        </div>
      </div>
    </div>
  </section>
);
