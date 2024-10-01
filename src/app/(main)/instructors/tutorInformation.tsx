import type { StaticImageData } from 'next/image';

import AngieChapmanImage from '@/components/tutors/angieChapman.jpg';
import ChristineKittelstadImage from '@/components/tutors/christina.jpg';
import IvyEllerbyImage from '@/components/tutors/ivyEllerby.jpg';
import JaneLockhartImage from '@/components/tutors/janeLockhart.jpg';
import PatriziaBolandImage from '@/components/tutors/patrizia.jpg';

type InstructorType = 'instructor' | 'expert';
type TutorInformation = {
  name: string;
  description: string;
  src: StaticImageData;
  type: InstructorType;
};

export const tutors: TutorInformation[] = [
  {
    name: 'Angie Chapman',
    description: 'Award-winning interior design consultant and QC tutor Angie Chapman has always loved all aspects of interior design, decorating and architecture. After receiving diplomas in both Interior Design and Decorating and Home Staging from the Sheffield School of Interior Design, Angie started her own business, Interiors Just for You, in Peterborough, Ontario in 1998.',
    src: AngieChapmanImage,
    type: 'instructor',
  },
  {
    name: 'Ivy Ellerby',
    description: 'For Accredited Staging Professional and Advanced Feng Shui Design Professional Ivy Ellerby, the inspiration to pursue a design career started at a very young age. Ivy\'s background in clinical and experimental psychology allows her to use feng shui to increase harmony and balance in her clients\' homes.',
    src: IvyEllerbyImage,
    type: 'instructor',
  },
  {
    name: 'Christina Kittelstad',
    description: 'Christina Kittelstad is an accomplished color expert and owner of Spiral Design Color Consulting in Lakewood, Colorado. Through her lifelong passion for all things color, Christina brings a high level of creativity, professionalism, and talent to every project. She partners with residential and commercial clients and is best known for creating beautiful, functional spaces on any budget. She provides clients with a strong sense of style and personality that is uniquely their own.',
    src: ChristineKittelstadImage,
    type: 'instructor',
  },
  {
    name: 'Patrizia Boland',
    description: 'Designing interiors and my beautiful family are the two greatest passions in Patrizia\'s life. Patrizia graduated from QC Design School as a certified International Design and Decorating Professional and went on to launch Boland Designs. Her approach to design is to take a holistic view of the client\'s entire space and how they wish to live in it. Patrizia enjoys helping transform her client\'s space into a beautiful environment that reflects their personality and functionality.',
    src: PatriziaBolandImage,
    type: 'instructor',
  },
  {
    name: 'Jane Lockhart',
    description: 'Many will recognize Jane from her television show, Color Confidential, which airs on both HGTV and W Network. Jane uses both her design expertise and kind demeanor to help people overcome their fear of color. As the host of QC Design School\'s Color Consultant course videos, Jane teaches students how to use the color wheel in order to help clients choose the best colors for their home. She demonstrates how to conduct a professional color consultation, as well as how to build a strong relationship between art and design in the home.',
    src: JaneLockhartImage,
    type: 'expert',
  },
];
