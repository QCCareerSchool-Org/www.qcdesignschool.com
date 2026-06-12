import type { StaticImageData } from 'next/image';
import type { FC } from 'react';
import type { IconType } from 'react-icons';
import { BiAward, BiMedal, BiTrophy } from 'react-icons/bi';

import { SuccessStoriesCarousel } from './carousel';
import AlexaJorgensonImage from './images/alexa-jorgenson.jpg';
import DeniaDiazImage from './images/denia-diaz.jpg';
import FernandaOlayaImage from './images/fernanda-olaya.jpg';
import JamieCromarImage from './images/jamie-cromar.jpg';
import LaiceeCharetteImage from './images/laicee-charette.jpg';
import styles from './index.module.css';

interface Props {
  className?: string;
}

export const SuccessStoriesSection: FC<Props> = ({ className }) => (
  <section className={className}>
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-lg-10 col-xl-9">
          <SuccessStoriesCarousel images={carouselImages} />
        </div>
      </div>
      <div className="row justify-content-center text-center mb-5">
        <div className="col-12 col-lg-9 col-xl-8">
          <h2 className="h3 mb-3">Certifications That Build Client Confidence</h2>
          <p className="mb-0">Professional certifications help demonstrate your skills and commitment to excellence.</p>
        </div>
      </div>
      <div className="row justify-content-center g-4">
        {certificationFeatures.map(feature => (
          <div className="col-12 col-md-4" key={feature.title}>
            <div className="text-center">
              <div className={`${styles.featureIcon} mb-3`}><feature.icon aria-hidden /></div>
              <h3 className="h6 mb-2">{feature.title}</h3>
              <p className="mb-0">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const certificationFeatures: { icon: IconType; title: string; text: string }[] = [
  {
    icon: BiMedal,
    title: 'Individual Professional Certifications',
    text: 'Earn specialized credentials in each design discipline you complete, allowing you to promote targeted services with confidence.',
  },
  {
    icon: BiTrophy,
    title: 'Elite Design Professional Certification',
    text: 'Graduate with QC Design School\'s premier designation, recognizing advanced training across multiple areas of residential design and client services.',
  },
  {
    icon: BiAward,
    title: 'Industry Recognition',
    text: 'QC Design School\'s courses are designed to support professional development and help graduates establish credibility within the design industry.',
  },
];

const carouselImages: { src: StaticImageData; alt: string }[] = [
  {
    src: AlexaJorgensonImage,
    alt: 'Alexa Jorgenson holding her QC Design School certificate',
  },
  {
    src: DeniaDiazImage,
    alt: 'Denia Diaz holding her framed QC Design School certificate',
  },
  {
    src: FernandaOlayaImage,
    alt: 'Fernanda Olaya holding her QC Design School certificate',
  },
  {
    src: JamieCromarImage,
    alt: 'Jamie Cromar holding her QC Design School certificate',
  },
  {
    src: LaiceeCharetteImage,
    alt: 'Laicee Charette holding her QC Design School certificate',
  },
];
