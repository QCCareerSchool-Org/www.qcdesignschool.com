import type { StaticImageData } from 'next/image';
import type { ReactNode } from 'react';

import ThreeDream from './_logos/3dream.png';
import ADPO from './_logos/adpo.png';
import ASPO from './_logos/aspo.png';
import CARAHS from './_logos/carahs.jpg';
// import CDECA from './_logos/cdeca.jpg';
import CRSC from './_logos/crsc.jpg';
import DDA from './_logos/dda.png';
import DesignFiles from './_logos/designfiles.png';
import DSA from './_logos/dsa.png';
import IAHSP from './_logos/iahsp.png';
import IFDA from './_logos/ifda.jpg';
import ISCC from './_logos/iscc.png';
import NeatMethod from './_logos/neat-method.png';
import Placez from './_logos/placez.png';
import PlanningWiz from './_logos/plannning-wiz.jpg';
import POC from './_logos/poc.png';
import RESA from './_logos/resa.jpg';
import SAF from './_logos/saf.jpg';
import SampleBoard from './_logos/sample-board.jpg';
import TheBoard from './_logos/the-board.png';
import UnionLuminairesDecor from './_logos/union-luminaires-decor.png';
import ViewItTech from './_logos/view-it-tech.png';

export type DesignAssociation = {
  name: string;
  description: ReactNode;
  image: StaticImageData;
  alt?: string;
  maxHeight?: number;
};

export const professionalAssociations: DesignAssociation[] = [
  {
    name: 'International Furnishings and Design Association (IFDA)',
    description: (
      <>As the &ldquo;voice&rdquo; of the total furnishings and design industry, IFDA provides its members with the tools and resources to enhance their businesses. Aggressive advocacy promotes the advantages of working with an IFDA professional. IFDA has members from every facet of the furnishings and design industry. Members are executives and companies professionally engaged in the design, production, distribution, promotion, communication or education in the furnishings and design and/or related industries.</>
    ),
    image: IFDA,
    alt: 'IFDA',
  },
  {
    name: 'Designer Society of America (DSA)',
    description: (
      <>The Designer Society of America (DSA) is a national organization dedicated to supporting residential interior designers and celebrating the diverse paths leading to success in the industry. DSA provides members with valuable resources including professional development, networking opportunities, industry advocacy, and recognition for design excellence. Our Interior Design and Decorating course has been reviewed and approved by the DSA and the RIDQC Board, meeting their rigorous standards. Graduates are eligible to take the RIDQC exam if they choose. For more information, visit <a href="https://www.dsasociety.org/membership-benefits" target="_blank" rel="noreferrer">DSA Membership</a>.</>
    ),
    image: DSA,
    alt: 'DSA',
  },
  {
    name: 'Decorators & Designers Association of Canada (DDA)',
    description: (
      <>A professional not-for-profit association representing home decorators, designers, and design-related businesses across Canada, the Decorators & Designers Association of Canada (DDA) provides industry-specific resources to its members. The DDA recognizes QC Design School as an approved educational institution. Canadian students and graduates of QC Design School's interior decorating course are eligible to join DDA. For more information on their available membership types, please visit <a href="https://ddacanada.com" target="_blank" rel="noreferrer">ddacanada.com</a>.</>
    ),
    image: DDA,
    alt: 'DDA',
    maxHeight: 60,
  },
  {
    name: 'Real Estate Staging Association (RESA)',
    description: (
      <>The Real Estate Staging Association (RESA) provides support to all professional real estate stagers in the United States and Canada. All home staging and design professionals are eligible for memberships with RESA, and members receive marketing assistance, peer-to-peer support, newsletters, and access to business resources. For more information on membership, visit <a href="https://realestatestagingassociation.com" target="_blank" rel="noreferrer">realestatestagingassociation.com</a>.</>
    ),
    image: RESA,
    alt: 'RESA',
  },
  {
    name: 'International Association of Home Staging Professionals (IAHSP)',
    description: (
      <>The International Association of Home Staging Professionals is a global organization dedicated to advancing the home staging, real estate, design, and related industries and supporting professionals through their journey. IAHSP strives to provide resources, education, and networking opportunities to help our members thrive in their careers. QC's Home Staging students can get $50 off their first year of Gold Membership!</>
    ),
    image: IAHSP,
  },
  {
    name: 'Canadian Association of Renovators and Home Stagers (CARAHS)',
    description: (
      <>Canadian-based students and graduates of QC can join the Canadian Association of Renovators and Home Stagers (CARAHS). This non-profit organization aims to unite people with complementary backgrounds and help them through education and networking. Members of CARAHS include home staging professionals and color consultants. Benefits of membership include discounts, business resources, website listings, free workshops, and discounted courses. For more information on the available membership types, visit <a href="https://carahs.org" target="_blank" rel="noreferrer">carahs.org</a>.</>
    ),
    image: CARAHS,
  },
  {
    name: 'Inter-Society Color Council (ISCC)',
    description: 'Founded in 1931, the Inter-Society Color Council (ISCC) aims to advance the knowledge of color as it relates to art, science, and industry. Membership benefits include an ISCC news subscription, a discount on color research and application, reduced conference fees, voting rights, and more. Membership is open to our Interior Decorating and Color Consultant students and graduates located in the United States. The council offers Individual Membership for graduates and a Student Membership option.',
    image: ISCC,
  },
  {
    name: 'Colour Research Society of Canada (CRSC)',
    description: 'The Colour Research Society of Canada (CRSC) is a not-for-profit organization dedicated to advancing colour knowledge across disciplines. As the Canadian member of the International Colour Association (AIC), CRSC connects artists, designers, scholars, and practitioners to foster collaboration in colour research. Members gain access to professional development opportunities, monthly virtual events, a global network, and exclusive research resources, supporting innovation and growth within the arts, sciences, and industry.',
    image: CRSC,
  },
  {
    name: 'American Society of Professional Organizers (ASPO)',
    description: 'The American Society of Professional Organizers offers industry connections and resources to certified organizers. Created by organizers, the ASPO’s main goal is to increase awareness of what professional organizing is and how it improves clients’ lives. QC Design School’s students and graduates are eligible for a discounted membership through the Online Student Center.',
    image: ASPO,
  },
  {
    name: 'Professional Organizers in Canada (POC)',
    description: (
      <>For QC Design School students and graduates who want to expand their networking opportunities, joining Professional Organizers in Canada (POC) is an excellent choice. This association provides members with support by providing access to tools, training, and resources to grow their own businesses. Students enrolled in professional organizing courses, as well as graduates, will enjoy monthly newsletters, discounted conferences, free local meetings, and access to business insurance. For more information on the available membership types, visit <a href="https://organizersincanada.com" target="_blank" rel="noreferrer">organizersincanada.com</a>.</>
    ),
    image: POC,
  },
  {
    name: 'Association of Professional Declutterers and Organisers (APDO)',
    description: (
      <>APDO is the UK's membership association for decluttering and organising professionals. It sets industry standards, supports professional development, and promotes growth in the field. APDO connects clients with local organisers through its online directory, offers training and mentoring for members, and shares resources like blogs, newsletters, and social media content to encourage a clutter-free lifestyle. Members also benefit from networking opportunities and an annual conference. For more information on membership, visit: <a href="https://www.apdo.co.uk/membership.html" target="_blank" rel="noreferrer">www.apdo.co.uk</a>.</>
    ),
    image: ADPO,
  },
  {
    name: 'Society of American Florists (SAF)',
    description: (
      <>The Society of American Florists has been representing and supporting the floral industry since 1884. Their membership base, which exceeds 6,000, is comprised of participants from all corners of the industry. Members are retail florists, flower growers, floral wholesalers and suppliers, importers, event-only florists, floral educators, and students. SAF offers each of our membership segments unique tools and opportunities that empower them to grow their businesses. SAF is proud to partner with Floral Design students to offer 50% off your first year of membership.</>
    ),
    image: SAF,
  },
];

export const preferredPartners: DesignAssociation[] = [
  {
    name: 'DesignFiles',
    description: 'DesignFiles is an all-in-one design software that allows you to create branded content that you can share with your clients, design beautiful 2D and 3D presentation boards, develop design service packages, invoice your clients, and more. QC students are eligible for an extended free trial and special rate for DesignFile’s Professional Plan.',
    image: DesignFiles,
    maxHeight: 65,
  },
  {
    name: 'Union Lighting & Décor',
    description: 'With over 110 years of expertise, Union Lighting & Decor is a powerhouse in the industry, offering top-tier lighting, furniture, hardware, and decor solutions to residential and commercial clients. Representing over 300 premium brands, Union provides a phenomenal selection of products. QC Design School students and graduates can join their exclusive Trade Program! This program provides unmatched benefits, including a 20% discount, insider access to new product launches and trends, and a dedicated team to assist with sourcing, product knowledge, client presentations, and order tracking.',
    image: UnionLuminairesDecor,
  },
  {
    name: 'NEAT Method',
    description: 'NEAT Method, North America\'s largest and most established home organizing company, brings sophisticated ease to homes from coast to coast. Their white-glove services provide customized solutions for any space through thoughtful planning, curated product selection, and implementation that elevates clients\' lifestyles. NEAT\'s signature product line completes each organizing system with the perfect balance of aesthetics and functionality. They believe a well-arranged home creates positive effects throughout all aspects of life. QC Design School students and graduates can join their Trade Program for discounted rates!',
    image: NeatMethod,
  },
  {
    name: 'Placez',
    description: 'Placez is an industry-leading diagramming software that allows you to create professional 2D and 3D floor plans. Made for use across a variety of industries, this program allows you to quickly draw and share your design concepts with clients and other designers. QC’s students and graduates are eligible for a 30% discount on Placez products.',
    image: Placez,
    maxHeight: 45,
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
    maxHeight: 65,
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
    maxHeight: 60,
  },
];
