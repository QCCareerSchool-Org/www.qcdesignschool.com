'use client';

import Link from 'next/link';
import type { FC } from 'react';

import Part5Image from './Advanced Floral Designs.jpg';
import Part3Image from './Decorative Arrangements.jpg';
import Part4Image from './Flowers to Wear & Carry.jpg';
import Part6Image from './Running Your Floral Design Business.jpg';
import Part1Image from './The Floral Design Industry.jpg';
import Part2Image from './The Fundamentals of Floral Design.jpg';
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
          <CourseOutline title="The Floral Design Industry" src={Part1Image} open className="mb-3">
            <p className="small">Explore the different paths you can follow to build a successful career in the floral design industry. You'll study the history of floral design, following the industry's popularity from Ancient Egypt all the way to modern times. Then you'll learn about the most popular flowers in the industry and the most common types of arrangements you'll create with them.</p>
          </CourseOutline>
          <CourseOutline title="The Fundamentals of Floral Design" src={Part2Image} className="mb-3">
            <p className="small">Learn about plant anatomy and plant care to ensure you can create healthy, long-lasting designs for your clients. Study step-by-step instructions to process and prepare flowers and foliage for a design, and learn how to create a detailed design plan. Discover the tools and supplies you'll need to care for your flower materials as well as the mechanics involved in structuring a variety of floral designs. Finally, you'll study the principles and elements of design and learn how to combine these concepts with your client's goals to design beautiful arrangements.</p>
          </CourseOutline>
          <CourseOutline title="Decorative Arrangements" src={Part3Image} className="mb-3">
            <p className="small">Discover the essential design considerations you'll need to account for when you create decorative arrangements, including vase designs, foam and wire arrangements and sprays. Follow step-by-step instructions led by floral design expert, Renee Tucci. You'll learn about flower selection and placement for decorative arrangements and explore different methods to polish your designs using decorative accessories. Get inspired to create your own beautiful designs!</p>
          </CourseOutline>
          <CourseOutline title="Flowers to Wear & Carry" src={Part4Image} className="mb-3">
            <p className="small">Learn how to design flowers to wear and carry, including bouquets, boutonnieres and corsages. You'll discover how you can create customized designs to coordinate with and enhance your client's special events and occasions. Follow step-by-step instructions and detailed video tutorials to learn how to structure and design bouquets, boutonnieres and corsages. Discover essential techniques to keep these designs fresh even when they can't be stored in water.</p>
          </CourseOutline>
          <CourseOutline title="Advanced Floral Designs" src={Part5Image} className="mb-3">
            <p className="small">In this section of your course, you'll apply the fundamental floral design techniques you've learned so far to create advanced designs for your clients. Follow step-by-step instructions and video examples to try your hand at creating specialty floral designs, including garlands, wreaths, large arrangements and aisle decor for events and special occasions. You'll learn how you can use faux flowers to improve your designs and accommodate your clients' special requests. Expand your creativity and skill set by experimenting with advanced designs!</p>
          </CourseOutline>
          <CourseOutline title="Running Your Floral Design Business" src={Part6Image}>
            <p className="small">You'll have the opportunity to study the various types of businesses and explore the best option for your floral design career. Discover the steps involved in starting your business, whether you want to open a flower shop, specialize in floral design for events or work as a freelance florist. Explore special topics including your options for buying wholesale flowers and supplies, and managing a floral inventory. You'll also learn how to effectively market and promote your floral design business so that you stand out from the competition, and study effective communication and sales strategies to interact with customers professionally.</p>
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
