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
            <p>This first unit will introduce you to the Aging in Place (AIP) design industry. You'll learn about the responsibilities of an AIP designer and how AIP services differ from other types of design work. You'll also learn about common physiological changes, medical conditions, and lifestyle changes people experience as they age, and about all of the different housing and support options available to people facing aging-related challenges. This unit will also teach you how act as an AIP educator and market your services effectively.</p>
          </CourseOutline>
          <CourseOutline title="Applying Universal Design Principles" src={Part2Image} className="mb-3">
            <p>Unit B focuses on developing the skills required to assess client needs, evaluate homes from an AIP perspective, and create AIP modification plans. You'll start by learning about the design standards Aging in Place professionals use to guide their work, including universal design, accessible design and visitable design. You'll then learn how to apply these principles to assess clients' homes and make effective design recommendations. This unit will also teach you how you can incorporate decluttering and home transition services into your AIP business.</p>
          </CourseOutline>
          <CourseOutline title="Final Project" src={Part3Image}>
            <p>Unit C is your final project for the course. This unit will ask you to work with the home of a friend or relative. The home's resident(s) can be any age and at any stage of life. You will simply be assessing the home as if it belonged to an AIP client. You'll assess your mock client's home, conduct a needs assessment, create a design plan, and explain your reasoning to your tutor who will provide detailed feedback on your full approach, as always.</p>
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
