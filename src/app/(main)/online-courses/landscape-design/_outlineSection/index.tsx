'use client';

import Link from 'next/link';
import type { FC } from 'react';

import Part2Image from './Functional Landscape Design.jpg';
import Part1Image from './Introduction to Landscape Design.jpg';
import Part3Image from './Plants and Garden Design.jpg';
import Part5Image from './The Business of Landscape Design.jpg';
import Part4Image from './The Principles and Elements of Design.jpg';
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
          <p className="lead mb-0">QC's Landscape Design course is divided into five comprehensive sections, each comprised of specialized training crafted to perfect your landscape design skills.</p>
        </div>
        <div className="col-12 col-xl-10">
          <CourseOutline title="Introduction to Landscape Design" src={Part1Image} open className="mb-3">
            <p className="small">Learn about the landscape design industry and the role of a professional landscape designer, from the initial consultation and site visit to the final landscape design drawing. Learn about the types of sites and projects you might work on throughout your career and the reasons your clients will hire you. You'll discover how you can increase the perceived value of your clients' homes and properties by improving curb appeal. Finally, learn how to gather essential information during a client consultation and site visit.</p>
          </CourseOutline>
          <CourseOutline title="Functional Landscape Design" src={Part2Image} className="mb-3">
            <p className="small">Discover key factors in developing a functional landscape design. You'll learn about spatial planning and the &ldquo;outdoor room concept.&rdquo; Explore the ways you can use these concepts to organize a site into distinct areas that meet your clients' functional needs. You'll also learn about planning the hardscape and softscape of a landscape site. The hardscape consists of all the non-living elements of a site, including decks, fire pits and gazebos. The softscape refers to the garden plants, trees, shrubs and all other plants on a site.</p>
          </CourseOutline>
          <CourseOutline title="Plants and Garden Design" src={Part3Image} className="mb-3">
            <p className="small">Learn about how plants live, grow and die to design healthy softscapes. You'll read about plant classifications, physiology and growing conditions and learn how these factors will affect your landscape designs. Discover popular garden styles through the ages and how to design modern gardens that exceed your clients' expectations. You'll learn important factors of sustainable and environmentally friendly landscape design.</p>
          </CourseOutline>
          <CourseOutline title="The Principles and Elements of Design" src={Part4Image} className="mb-3">
            <p className="small">Explore the principles and elements of design and discover how to apply these foundational aspects of design to a landscape site. You'll also discover the many different types of landscape diagrams and drawings you'll develop throughout the design process. Learn how to create high-quality, professional drawings that you're proud to present to your clients.</p>
          </CourseOutline>
          <CourseOutline title="The Business of Landscape Design" src={Part5Image}>
            <p className="small">Learn important steps involved in business start-up. Explore the world of marketing and promotion, including how to build your brand and market your business online. Learn to communicate with clients and discover practical techniques to help you sell your services. You'll also cover special topics such as working with vendors and contractors and developing a professional portfolio to showcase your work.</p>
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
