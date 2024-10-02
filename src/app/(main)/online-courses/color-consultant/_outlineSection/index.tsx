'use client';

import Link from 'next/link';
import type { FC } from 'react';

import Part2Image from './Build an Online Presence.jpg';
import Part1Image from './Establish Your Brand and Business Goals.jpg';
import Part4Image from './Successful Project Management.jpg';
import { CourseOutline } from '@/components/courseOutline';

export const OutlineSection: FC = () => (
  <section id="outline">
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-xl-10 text-center">
          <h2 className="mb-3">Course Outline</h2>
          <p className="lead mb-0">QC's Color Consulting course is divided into four specialized training units, each designed to refine and enhance your color consulting expertise.</p>
        </div>
        <div className="col-12 col-xl-10">
          <CourseOutline title="Becoming a Color Consultant" src={Part1Image} open className="mb-3">
            <p>Find out who hires color consultants and how you can be successful in this role. Explore the color wheel, color terminology and color schemes, as well as the principles of design that can be applied to color theory. Delve into factors that influence color perception, such as lighting, undertones, and texture. You'll explore the fascinating world of color psychology, and learn how to build custom color palettes for clients, determine focal points in the home and create cohesive looks in challenging spaces.</p>
          </CourseOutline>
          <CourseOutline title="Creating a Color Palette" src={Part2Image} className="mb-3">
            <p>Bring a color palette to life using elements such as furniture, appliances, flooring and interior painting. Discover how to choose the right paint finishes, as well as ceiling, trim and wallpaper colors. Learn Jane Lockhart's secrets for designing with textiles, arranging accessories and building a strong relationship between art and design in your client's home.  Enhance curb appeal and entice buyers by designing exterior color schemes. </p>
          </CourseOutline>
          <CourseOutline title="Color Consulting Services" src={Part4Image}>
            <p>Find out how to expand your client base as a color consultant. You'll learn to consult on corporate color palettes that align with company goals. Explore color psychology in the office, and help retail brands appeal to customers using color. Follow Jane Lockhart's steps for conducting a color consultation, including working with contractors, managing client relationships, and working with color planning software. Establish yourself as a color expert and build a successful business by creating your brand, identifying target clientele, setting your prices, and marketing your services.</p>
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
