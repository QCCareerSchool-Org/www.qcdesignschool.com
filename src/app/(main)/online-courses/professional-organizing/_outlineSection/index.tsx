'use client';

import Link from 'next/link';
import type { FC } from 'react';

import Part3Image from './Essential Storage Solutions and Decluttering.jpg';
import Part2Image from './Floorplans and Layouts.jpg';
import Part1Image from './Introduction to Professional Organizing.jpg';
import Part5Image from './The Business of Professional Organizing.jpg';
import Part4Image from './Working with Clients.jpg';
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
          <CourseOutline title="Introduction to Professional Organizing" src={Part1Image} open className="mb-3">
            <p className="small">Learn the roles and responsibilities of a professional organizer and discover how this branch of the design industry can grow your clientele. Study the various factors that create organizational issues in a client's life. Discover how you'll use these strategies to help your clients regain control and order within the home.</p>
          </CourseOutline>
          <CourseOutline title="Floorplans and Layouts" src={Part2Image} className="mb-3">
            <p className="small">Learn how to produce home design plans for your clients by creating scaled floorplans. Discover how to use balance, visual weight and traffic patterns to place furniture within different spaces. Throughout this unit, you'll be guided by step-by-step videos featuring QC instructor Angie Chapman.</p>
          </CourseOutline>
          <CourseOutline title="Essential Storage Solutions and Decluttering" src={Part3Image} className="mb-3">
            <p className="small">Discover the wide range of movable and fixed storage solutions that allow professional organizers to restore order to their clients' homes. Learn how to apply fundamental organizational principles to each professional organizing job. Explore how decluttering can transform a space, and how to create activity spaces through strategic furniture placement.</p>
          </CourseOutline>
          <CourseOutline title="Working with Clients" src={Part4Image} className="mb-3">
            <p className="small">Study essential skills that allow you to communicate effectively with clients. Learn valuable listening skills to help you work with clients who are resistant to organizational systems and changes in their homes. You'll also learn the best strategies for selling your services and the proper way to approach each professional organizing consultation.</p>
          </CourseOutline>
          <CourseOutline title="The Business of Professional Organizing" src={Part5Image}>
            <p className="small">Become your own boss by learning how to register your organizing business, set up insurance and write a professional business plan. You'll learn different ways to market your professional organizing business. Plus, find out which services to charge for and how much to charge for each design project.</p>
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
