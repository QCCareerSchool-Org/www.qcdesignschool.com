'use client';

import Link from 'next/link';
import type { FC } from 'react';

import Part2Image from './Applying Universal Design Principles.jpg';
import Part3Image from './Final Project.jpg';
import Part1Image from './Introduction to Aging in Place Design.jpg';
import { CourseOutline } from '@/components/courseOutline';

export const OutlineSection: FC = () => (
  <section id="outline">
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-xl-10 text-center">
          <h2 className="mb-3">Course Outline</h2>
          <p className="lead mb-0">QC's Aging in Place Design course is divided into three specialized training units designed to improve your skills and develop your expertise in universal design.</p>
        </div>
        <div className="col-12 col-xl-10">
          <CourseOutline title="Introduction to Aging in Place Design" src={Part1Image} open className="mb-3">
            <p className="small">Learn about the importance of creating a strong brand identity for your business and how to target your ideal clients. You'll introduce your business and goals to your tutor, and establish your brand while developing your customer personas. Finally, you'll start to plan different types of promotions you might run for your business.</p>
          </CourseOutline>
          <CourseOutline title="Applying Universal Design Principles" src={Part2Image} className="mb-3">
            <p className="small">Now that you have a better understanding of branding, you'll start to put that knowledge to good use as you explore your online presence, from your website to your social media presence. You'll learn about what makes a &ldquo;good&rdquo; website, how to effectively manage your social media presence, how to handle negative reviews, marketing your business online, the art of blogging, content marketing and more.</p>
          </CourseOutline>
          <CourseOutline title="Final Project" src={Part3Image}>
            <p className="small">Discover how to present your business to attractive prospective clients. You'll learn to develop an eye-catching professional portfolio to showcase your skills, and practice effective communication strategies for working with clients. You'll study the process of creating high-quality client proposals to sell your services.</p>
          </CourseOutline>
        </div>
        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
          <h3 className="h5 mb-3">Have Questions About the Course?</h3>
          <p className="lead mb-3">Don't hesitate to reach out to our dedicated team of student advisors for guidance and support. <strong>Your success is our priority!</strong></p>
          <Link href="/contact-us" className="btn btn-outline-grey">Contact Us</Link>
        </div>
      </div>
    </div>
  </section>
);
