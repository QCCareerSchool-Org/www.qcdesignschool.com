'use client';

import Link from 'next/link';
import type { FC } from 'react';

import Part3Image from './Curb Appeal.jpg';
import Part2Image from './The Arts of Depersonalizing and Decluttering.jpg';
import Part5Image from './The Business of Staging.jpg';
import Part1Image from './The Fundamentals of Home Staging.jpg';
import Part4Image from './Your Final Project.jpg';
import { CourseOutline } from '@/components/courseOutline';

type Props = {
  className?: string;
};

export const OutlineSection: FC<Props> = ({ className }) => (
  <section id="outline" className={className}>
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-xl-10 text-center">
          <h2 className="mb-3">Course Outline</h2>
          <p className="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dui lacus, tempus aliquam enim sed, dictum pharetra magna. Nam sit amet ante a justo mattis vehicula. Nulla ultrices viverra orci, nec interdum massa fermentum quis.</p>
        </div>
        <div className="col-12 col-xl-10">
          <CourseOutline title="The Fundamentals of Home Staging" src={Part1Image} open className="mb-3">
            <p className="small">Dive into the dynamic world of home staging and the important role a stager plays in selling homes. Learn about a home stager's services and responsibilities, and walk through a full-service home staging project from consultation to completion. Study color psychology and the color wheel. Begin applying the principles of home staging as you practice creating color palettes targeted to home staging scenarios.</p>
          </CourseOutline>
          <CourseOutline title="The Arts of Depersonalizing and Decluttering" src={Part2Image} className="mb-3">
            <p className="small">Discover the essential arts of depersonalizing and decluttering for home staging projects. You'll cover strategies for preparing every room in the house for a real estate showing, from clearing out clutter to removing personal tastes. Touch on some of the most prominent contemporary design styles and find style elements you can use to help appeal to target buyers. Learn how to use accessories and artwork to highlight appealing focal points and architectural features. Discover tips for accessorizing from award-winning interior designer Jane Lockhart in a special bonus video!</p>
          </CourseOutline>
          <CourseOutline title="Curb Appeal" src={Part3Image} className="mb-3">
            <p className="small">Learn all about curb appeal, including landscaping, outdoor decluttering and outdoor staging. You'll study how you can detect problems and identify necessary repairs to ensure clients' homes are ready to show. By the end of this unit, you'll know exactly how to ensure buyers are entranced before they've even made it to the front door.</p>
          </CourseOutline>
          <CourseOutline title="Your Final Project" src={Part4Image} className="mb-3">
            <p className="small">Put your knowledge and home design skills to use by professionally staging a home! In your final project, you'll draw on everything you've learned in your home staging course and refine your skills. You'll be well prepared to launch your home staging career!</p>
          </CourseOutline>
          <CourseOutline title="The Business of Staging" src={Part5Image}>
            <p className="small">You'll have the option to complete a specialized business unit designed for home stagers. Learn how to start and register your own business. Explore the world of marketing and promotion, including in-depth guidance to help you build your brand and market your business online. Selling your services, creating contracts and maintaining good client relationships are all covered as you learn about working with clients. You'll also develop an understanding of the real estate industry, which will be invaluable as you work with real estate agents and evaluate client priorities throughout your career.</p>
          </CourseOutline>
        </div>
        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
          <h3 className="h5 mb-3">Have Questions About the Course?</h3>
          <p className="lead mb-3">Don't hesitate to reach out to QC's dedicated team of student advisors for guidance and support. <strong>Your success is our priority!</strong></p>
          <Link href="/contact-us" className="btn btn-outline-grey">Contact Us</Link>
        </div>
      </div>
    </div>
  </section>
);
