'use client';

import type { FC, MouseEventHandler, ReactNode } from 'react';

import { CourseModal } from './courseModal';
import type { CourseCode } from '@/domain/courseCode';
import type { Price } from '@/domain/price';
import { useToggle } from '@/hooks/useToggle';

type Props = {
  courseCode: CourseCode;
  price: Price;
};

export const LearnMore: FC<Props> = ({ courseCode, price }) => {
  const [ popup, toggle ] = useToggle();

  const [ modalHeading, modalBody ] = getModalBody(courseCode);

  const handleClick: MouseEventHandler = e => {
    e.preventDefault();
    toggle();
  };

  const handleHide = (): void => {
    toggle();
  };

  return (
    <>
      <a href="#" onClick={handleClick}>Learn More</a>
      <CourseModal show={popup} onHide={handleHide} courseCode={courseCode} header={modalHeading} price={price}>{modalBody}</CourseModal>
    </>
  );
};

const getModalBody = (courseCode: CourseCode): [heading: string, body: ReactNode] => {
  switch (courseCode) {
    case 'i2':
      return [
        'International Design and Decorating Professional',
        (
          <>
            <p>Your interior decorating certification will prepare you to</p>
            <ul>
              <li>Identify and apply all interior design trends</li>
              <li>Conduct detailed client consultations</li>
              <li>Create custom design presentations that include scale floorplans, furniture arrangements, color, accessory, and lighting choices</li>
              <li>Launch and grow a successful business or get hired in the industry</li>
            </ul>
          </>
        ),
      ];
    case 'st':
      return [
        'International Staging and Redesign Professional',
        (
          <>
            <p>Your home staging certification will prepare you to</p>
            <ul>
              <li>Identify where value can be added to your clients' homes by implementing redesign, depersonalizing and curb appeal principles.</li>
              <li>Conduct home staging consultations and prepare client reports.</li>
              <li>Launch and grow a successful staging business or get hired in the industry.</li>
            </ul>
          </>
        ),
      ];
    case 'ld':
      return [
        'International Landscape Design Professional',
        (
          <>
            <p>Your landscape design certification will prepare you to</p>
            <ul>
              <li>Create custom exteriors using landscape design principles.</li>
              <li>Assess conditions and plan appropriate softscape and hardscape features.</li>
              <li>Conduct consultations and site analyses, and prepare drawings to present to your clients.</li>
              <li>Launch and grow a successful landscape design business or get hired in the industry.</li>
            </ul>
          </>
        ),
      ];
    case 'po':
      return [
        'Advanced International Organizing Professional',
        (
          <>
            <p>Your professional organizing certification will prepare you to</p>
            <ul>
              <li>Conduct client consultations and identify the optimal function for each space.</li>
              <li>Build new functional systems for your clients.</li>
              <li>Prepare maintenance plans to keep your clients organized.</li>
              <li>Launch and grow a successful organizing business or get hired in the industry.</li>
            </ul>
          </>
        ),
      ];
    case 'fs':
      return [
        'Advanced Feng Shui Design Professional',
        (
          <>
            <p>Your feng shui certification will prepare you to</p>
            <ul>
              <li>Read the energy in a client's home or workplace by applying the Bagua map.</li>
              <li>Correct energy imbalances and attract positive ch'i.</li>
              <li>Select appropriate design choices for your clients' homes that look nice and encourage positive ch'i flow.</li>
              <li>Launch and grow a successful feng shui design business.</li>
            </ul>
          </>
        ),
      ];
    case 'cc':
      return [
        'International Color Consulting Professional',
        (
          <>
            <p>Your color consultant certification prepares you to</p>
            <ul>
              <li>Confidently select colors for your clients.</li>
              <li>Choose appropriate colors based on lighting, undertones, and existing color schemes.</li>
              <li>Create design plans that have consistent color flow throughout the home.</li>
              <li>Start and grow a successful and lucrative color consultation business.</li>
            </ul>
          </>
        ),
      ];
    case 'fd':
      return [
        'International Floral Design Professional',
        (
          <>
            <p>Your floral design certification prepares you to</p>
            <ul>
              <li>Incorporate floral design principles and elements into your floral designs.</li>
              <li>Expertly create all types of floral arrangements, from corsages and garlands to aisle decor.</li>
              <li>Conduct comprehensive client consultations.</li>
              <li>Start and grow a successful and lucrative floral design business.</li>
            </ul>
          </>
        ),
      ];
    case 'ed':
      return [
        'International Event Decor Professional',
        (
          <>
            <p>Your event decor certification prepares you to</p>
            <ul>
              <li>Conduct comprehensive client consultations.</li>
              <li>Create and present mood boards to your clients that outline lighting, color, furniture, and floral choices.</li>
              <li>Coordinate the implementation of your event decor plan on the day of the event.</li>
              <li>Start and grow a successful event decor business of your own.</li>
            </ul>
          </>
        ),
      ];
    case 'ap':
      return [
        'Aging in Place Design Professional',
        (
          <>
            <p>Your Aging in Place certification prepares you to</p>
            <ul>
              <li>Assess client needs and evaluate homes.</li>
              <li>Create AIP modification plans.</li>
              <li>Apply the principles of accessible design, universal design and vistable design.</li>
              <li>Conduct decluttering and home transition services.</li>
              <li>Start and grow your own successful aging in place business.</li>
            </ul>
          </>
        ),
      ];
    case 'db':
      return [
        'Accelerate Your Design Business',
        (
          <>
            <p>Take your design business to the next level! This course can be customized to meet the goals of your business.</p>
            <p>You'll learn how to:</p>
            <ul>
              <li>Establish your brand identity and find your ideal customer persona.</li>
              <li>Brainstorm unique promotions that appeal to your ideal customer.</li>
              <li>Build your online presence starting with a professional website.</li>
              <li>Managing your social media presence across channels.</li>
              <li>And much more!</li>
            </ul>
          </>
        ),
      ];
    case 'vd':
      return [
        'Virtual Design Training',
        (
          <>
            <p>Expand your clientele by taking your services online! Virtual consultations are more popular than ever.</p>
            <p>Virtual Design Training prepares you to:</p>
            <ul>
              <li>Confidently navigate online meeting room technology.</li>
              <li>Conduct design consultations online.</li>
              <li>Market your new online design services.</li>
            </ul>
          </>
        ),
      ];
  }

  throw Error();
};
