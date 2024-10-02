import type { StaticImageData } from 'next/image';
import type { ReactNode } from 'react';

import { ASOP, CARAHS, DDA, ISC, Placez, PlanningWiz, POC, RESA, SampleBoard, TheBoard, ThreeDream, ViewItTech } from './images';

export type DesignAssociation = {
  name: string;
  description: ReactNode;
  image: StaticImageData;
};

export const professionalAssociations: DesignAssociation[] = [
  {
    name: 'Decorators & Designers Association of Canada (DDA)',
    description: (
      <>A professional not-for-profit association representing home decorators, designers, and design-related businesses across Canada, the Decorators & Designers Association of Canada (DDA) provides industry-specific resources to its members. The DDA recognizes QC Design School as an approved educational institution. Canadian students and graduates of QC Design School's interior decorating course are eligible to join DDA. For more information on their available membership types, please visit <a href="https://ddacanada.com" target="_blank" rel="noreferrer">ddacanada.com</a>.</>
    ),
    image: DDA,
  },
  {
    name: 'Real Estate Staging Association (RESA)',
    description: (
      <>The Real Estate Staging Association (RESA) provides support to all professional real estate stagers in the United States and Canada. All home staging and design professionals are eligible for memberships with RESA, and members receive marketing assistance, peer-to-peer support, newsletters, and access to business resources. For more information on membership, visit <a href="https://realestatestagingassociation.com" target="_blank" rel="noreferrer">realestatestagingassociation.com</a>.</>
    ),
    image: RESA,
  },
  {
    name: 'Canadian Association of Renovators and Home Stagers (CARAHS)',
    description: (
      <>Canadian-based students and graduates of QC can join the Canadian Association of Renovators and Home Stagers (CARAHS). This non-profit organization aims to unite people with complementary backgrounds and help them through education and networking. Members of CARAHS include home staging professionals and color consultants. Benefits of membership include discounts, business resources, website listings, free workshops, and discounted courses. For more information on the available membership types, visit <a href="https://carahs.org" target="_blank" rel="noreferrer">carahs.org</a>.</>
    ),
    image: CARAHS,
  },
  {
    name: 'Professional Organizers in Canada (POC)',
    description: (
      <>For QC Design School students and graduates who want to expand their networking opportunities, joining Professional Organizers in Canada (POC) is an excellent choice. This association provides members with support by providing access to tools, training, and resources to grow their own businesses. Students enrolled in professional organizing courses, as well as graduates, will enjoy monthly newsletters, discounted conferences, free local meetings, and access to business insurance. For more information on the available membership types, visit <a href="https://organizersincanada.com" target="_blank" rel="noreferrer">organizersincanada.com</a>.</>
    ),
    image: POC,
  },
  {
    name: 'Inter-Society Color Council (ISCC)',
    description: 'Founded in 1931, the Inter-Society Color Council (ISCC) aims to advance the knowledge of color as it relates to art, science, and industry. Membership benefits include an ISCC news subscription, a discount on color research and application, reduced conference fees, voting rights, and more. Membership is open to our Interior Decorating and Color Consultant students and graduates located in the United States. The council offers Individual Membership for graduates and a Student Membership option.',
    image: ISC,
  },
  {
    name: 'American Society of Professional Organizers (ASPO)',
    description: 'The American Society of Professional Organizers offers industry connections and resources to certified organizers. Created by organizers, the ASPO’s main goal is to increase awareness of what professional organizing is and how it improves clients’ lives. QC Design School’s students and graduates are eligible for a discounted membership through the Online Student Center.',
    image: ASOP,
  },
];

export const preferredPartners: DesignAssociation[] = [
  {
    name: 'Placez',
    description: 'Placez is an industry-leading diagramming software that allows you to create professional 2D and 3D floor plans. Made for use across a variety of industries, this program allows you to quickly draw and share your design concepts with clients and other designers. QC’s students and graduates are eligible for a 30% discount on Placez products.',
    image: Placez,
  },
  {
    name: 'PlanningWiz Floor Planner',
    description: 'PlanningWiz is an easy-to-use 2D and 3D digital floor planning software that allows design & decorating professionals to draw up floorplans quickly for any project. QC’s students and graduates are eligible for a 50% discount off of the GROW and PRO plans.',
    image: PlanningWiz,
  },
  {
    name: '3Dream.net',
    description: '3Dream.net is an interactive, online, 3D room designer. You can now apply your design techniques to client spaces and help them visualize how a new or empty space will look. As a QC Design School student or graduate, you are entitled to special rates.',
    image: ThreeDream,
  },
  {
    name: 'The Board Space Planning Systems',
    description: 'Use The Board to arrange a single room or create an entire floor plan. Convey ideas quickly and avoid miscommunication with 1/4″ scaled magnet furniture and accessory pieces. You’ll receive preferred pricing as a QC Design School student or graduate.',
    image: TheBoard,
  },
  {
    name: 'SampleBoard',
    description: 'Whether you\'re planning a complete home redesign or simply giving a room a fresh new look, your clients want to see a visual representation of your ideas in a well thought out and professional manner. SampleBoard.com allows you to prepare an online inspiration board in just minutes. QC students can receive a monthly recurring 50% discount off the Pro plan (15 boards per month), every month as long as the account remains active. Graduates are also eligible for special pricing.',
    image: SampleBoard,
  },
  {
    name: 'ViewIT Technologies',
    description: 'ViewIT Technologies provides software solutions to help professionals implement design concepts for home decor, kitchen & bath, home furnishings, and more. As a QC student and graduate, you are eligible for discounts on a variety of products.',
    image: ViewItTech,
  },
];
