/**
 * Make sure to update @/domain/courseCode.ts if the subjects change.
 */
'use client';

import Link from 'next/link';
import type { FC } from 'react';

import Part4Image from './Applying Design Theory to Feng Shui.jpg';
import Part3Image from './Feng Shui Cures and Symbols.jpg';
import Part5Image from './Feng Shui in Private and Public Spaces.jpg';
import Part2Image from './The Bagua Map and Floor Plans.jpg';
import Part6Image from './The Business of Feng Shui.jpg';
import Part1Image from './The Fundamentals Concepts of Feng Shui.jpg';
import { CourseOutline } from '@/components/courseOutline';

export const OutlineSection: FC = () => (
  <section id="outline">
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-xl-10 text-center">
          <h2 className="mb-3">Course Outline</h2>
          <p className="lead mb-0">QC's Feng Shui course is divided into six specialized training units aimed at refining and mastering your feng shui design skills.</p>
        </div>
        <div className="col-12 col-xl-10">
          <CourseOutline title="The Fundamentals Concepts of Feng Shui" src={Part1Image} open className="mb-3">
            <p className="small">Start your online feng shui course by studying your role as a feng shui consultant. Discover the basic principles of this ancient Chinese practice, including ch'i, yin and yang energy, the Five Elements and the Celestial Animals. Find out how you can apply these principles to bring positive energy to your designs.</p>
          </CourseOutline>
          <CourseOutline title="The Bagua Map and Floor Plans" src={Part2Image} className="mb-3">
            <p className="small">Learn to read the energy, or ch'i, in a client's home or workplace using the bagua map. By applying this ancient feng shui tool to a scaled floor plan of a space, you can bring positive energy to different areas of your clients' lives. You'll also learn how to draw rough sketches and professionally scaled floorplans to support your bagua map readings.</p>
          </CourseOutline>
          <CourseOutline title="Feng Shui Cures and Symbols" src={Part3Image} className="mb-3">
            <p className="small">Discover the feng shui cures and symbols that you can use to correct energy imbalances and attract positive ch'i through your designs. You'll learn a variety of traditional and modern feng shui solutions to restore balance, including decluttering a space and conducting space cleansing ceremonies.</p>
          </CourseOutline>
          <CourseOutline title="Applying Design Theory to Feng Shui" src={Part4Image} className="mb-3">
            <p className="small">Learn how to combine feng shui practice with interior decorating principles. As a feng shui consultant, you'll create aesthetically pleasing color schemes according to your bagua map readings. You'll also help your clients choose attractive lighting options and find decorative accessories that look great and encourage positive ch'i flow.</p>
          </CourseOutline>
          <CourseOutline title="Feng Shui in Private and Public Spaces" src={Part5Image} className="mb-3">
            <p className="small">Once you understand the principles behind creating feng shui designs, you'll be able to apply these techniques to a variety of spaces. Study the positive effects that feng shui can have in public and private spaces within a client's home. Learn how to apply feng shui principles in outdoor spaces and how to balance the energy in a workplace. We'll apply feng shui to many different spaces, including bedrooms, bathrooms, hallways, entryways, living rooms, kitchens, offices, outdoor spaces, and even attics, basements and garages!</p>
          </CourseOutline>
          <CourseOutline title="The Business of Feng Shui" src={Part6Image}>
            <p className="small">Discover how you can start your own feng shui consulting business. Find step-by-step instructions on writing your business plan. Study a range of business topics, including marketing, selling your services, and working with clients.</p>
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
