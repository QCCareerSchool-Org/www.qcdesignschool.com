'use client';

import Link from 'next/link';
import type { FC } from 'react';

import Part4Image from './Floorplans and Layouts.jpg';
import Part3Image from './Lighting and Accessories.jpg';
import Part2Image from './Popular Design Styles and Materials.jpg';
import Part6Image from './The Business of Design.jpg';
import Part1Image from './The Fundamentals of Design.jpg';
import Part5Image from './Your Final Project.jpg';
import { CourseOutline } from '@/components/courseOutline';

type Props = {
  className?: string;
  designRestricted: boolean;
};

export const OutlineSection: FC<Props> = ({ className, designRestricted }) => (
  <section id="outline" className={className}>
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-xl-10 text-center">
          <h2 className="mb-3">Course Outline</h2>
          <p className="lead mb-0">QC's Interior {designRestricted ? 'Decorating' : 'Design'} course is divided into seven comprehensive training units crafted to build your design skills step-by-step.</p>
        </div>
        <div className="col-12 col-xl-10">
          <CourseOutline title="The Fundamentals of Design" src={Part1Image} open className="mb-3">
            <p className="small">Learn about the elements and principles of design, and study your role as a professional interior {designRestricted ? 'decorator' : 'designer'}. You'll begin your certification course with an in-depth look at the entire design process, from signing the contract to implementing the design plan. You'll study color theory and become familiar with various popular design styles, from country to contemporary.</p>
          </CourseOutline>
          <CourseOutline title="Popular Design Styles and Materials" src={Part2Image} className="mb-3">
            <p className="small">Explore a variety of international and historical design styles, from French Rococo to Victorian to Scandinavian, and discover how these styles influence modern designs. Learn all about basic design materials such as wood, ceramic, plaster and stone, and how they can be used to achieve many different functional and aesthetic effects in home design. Glass, concrete and metal are just a few of the modern design materials you'll explore in your interior decorating certification course. You'll also study various wall treatments and textiles, and learn how to use them to alter a room's appearance and character.</p>
          </CourseOutline>
          <CourseOutline title="Lighting and Accessories" src={Part3Image} className="mb-3">
            <p className="small">Study lighting functions and fixtures, and learn how to create different moods using cool, warm and neutral lighting within a space. Compare various window treatments and learn how to dress a window effectively to suit any style of room, from traditional to contemporary. Create custom interiors by showcasing home accessories using shelves and cabinets and by properly arranging artwork. Discover tips for accessorizing from award-winning interior designer Jane Lockhart in a special bonus video!</p>
          </CourseOutline>
          <CourseOutline title="Floorplans and Layouts" src={Part4Image} className="mb-3">
            <p className="small">Become a master of one of the building blocks of interior {designRestricted ? 'decorating' : 'design'}: drawing professional floorplans. First, you'll learn how to measure and sketch the dimensions of a room. Use these skills to draw scaled floorplans for clients to present a bird's-eye view of your home design plans. Discover how to use balance, visual weight and traffic patterns to place furniture within different spaces. Throughout this unit, you'll be guided by step-by-step videos featuring QC instructor Angie Chapman.</p>
          </CourseOutline>
          <CourseOutline title="Designing Room by Room" className="mb-3">
            <p className="small">Explore the essentials of designing individual spaces—from cozy bedrooms to functional kitchens and welcoming living areas. Learn to assess a room's purpose, flow, and key features to create practical, cohesive designs. Discover how to tailor color schemes, layouts, and decor to suit each space.</p>
          </CourseOutline>
          <CourseOutline title="Your Final Project" src={Part5Image} className="mb-3">
            <p className="small">For your final project, you'll draw on everything you've learned in your interior {designRestricted ? 'decorating' : 'design'} course. You'll create a custom-designed space for a mock client, and show off all the skills you've gained as a home design student. With personalized feedback, you'll be ready to launch your interior {designRestricted ? 'decorating' : 'design'} career!</p>
          </CourseOutline>
          <CourseOutline title="The Business of Design" src={Part6Image}>
            <p className="small">You'll have the option to complete a specialized business unit to help you launch your interior {designRestricted ? 'decorating' : 'design'} business. You'll learn how to start and register your own business and explore the world of marketing and promotion, including in-depth guidance to help you build your brand and market your business online. Selling your services, creating contracts and maintaining good client relationships are all covered as you learn about working with clients. You'll also study special topics such as working with contractors and using design software, and gain access to essential business templates to help you work with clients efficiently. In a bonus online text, discover how to create a stunning design portfolio that will help to attract new clients and build your brand.</p>
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
