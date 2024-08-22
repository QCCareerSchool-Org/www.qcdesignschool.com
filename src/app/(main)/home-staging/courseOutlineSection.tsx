'use client';

import Link from 'next/link';
import type { FC } from 'react';

import { CourseOutline } from '@/components/courseOutline';

type Props = {
  className?: string;
};

export const CourseOutlineSection: FC<Props> = ({ className }) => (
  <section id="outline" className={className}>
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-xl-10 text-center">
          <h2 className="mb-3">Course Outline</h2>
          <p className="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dui lacus, tempus aliquam enim sed, dictum pharetra magna. Nam sit amet ante a justo mattis vehicula. Nulla ultrices viverra orci, nec interdum massa fermentum quis.</p>
        </div>
        <div className="col-12 col-xl-10">
          <CourseOutline title="Establish Your Brand and Business Goals" open className="mb-3">
            <p className="small">Find out who hires color consultants and how you can be successful in this role. Explore the color wheel, color terminology and color schemes, as well as the principles of design that can be applied to color theory. Delve into factors that influence color perception, such as lighting, undertones, and texture. You'll explore the fascinating world of color psychology, and learn how to build custom color palettes for clients, determine focal points in the home and create cohesive looks in challenging spaces.</p>
          </CourseOutline>
          <CourseOutline title="Build an Online Presence" className="mb-3">
            <p className="small">Now that you have a better understanding of branding, you'll start to put that knowledge to good use as you explore your online presence, from your website to your social media presence. You'll learn about what makes a &ldquo;good&rdquo; website, how to effectively manage your social media presence, how to handle negative reviews, marketing your business online, the art of blogging, content marketing and more.</p>
          </CourseOutline>
          <CourseOutline title="Showcase Your Business to Prospective Clients" className="mb-3">
            <p className="small">Discover how to present your business to attractive prospective clients. You'll learn to develop an eye-catching professional portfolio to showcase your skills, and practice effective communication strategies for working with clients. You'll study the process of creating high-quality client proposals to sell your services.</p>
          </CourseOutline>
          <CourseOutline title="Successful Project Management">
            <p className="small">This section of the course dives into the inner workings of your business. You'll look into different tools you can use to stay organized and to manage your projects. You'll also start to look into financial management solutions that can help keep your business on track. Finally, you'll discover the practicalities of building a budget, and the best methods of collecting payments from clients.</p>
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
