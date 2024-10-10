import type { StaticImageData } from 'next/image';

import AngieChapmanImage from '@/components/tutors/angieChapman.jpg';
import ChrisTuccioImage from '@/components/tutors/chris.jpg';
import ChristineKittelstadImage from '@/components/tutors/christina.jpg';
import DarcieGarciaImage from '@/components/tutors/darcie.jpg';
import IvyEllerbyImage from '@/components/tutors/ivyEllerby.jpg';
import JaneLockhartImage from '@/components/tutors/janeLockhart.jpg';
import LianneCouvisImage from '@/components/tutors/lianne.jpg';
import MwaiYeboahImage from '@/components/tutors/mwai.jpg';
import PatriziaBolandImage from '@/components/tutors/patrizia.jpg';
import ReneeTucciImage from '@/components/tutors/reneeTucci.jpg';
import TammyHartImage from '@/components/tutors/tammyHart.jpg';

type InstructorInformation = {
  name: string;
  description: string;
  src: StaticImageData;
};

export const experts: InstructorInformation[] = [
  {
    name: 'Renee Tucci',
    description: 'With over 20 years of floral design experience, Renee Tucci, recognized by the American Institute of Floral Designers and Professional Floral Communicators International, is a dedicated instructor in the QC course, guiding students to master the art of floral design.',
    src: ReneeTucciImage,
  },
  {
    name: 'Mwai Yeboah',
    description: 'Mwai Yeboah, founder of Love From Mwai and multi-award winning planner, specializes in destination wedding planning. As the lead planner and designer, she transforms weddings and events into immersive experiences for luxury clients worldwide.',
    src: MwaiYeboahImage,
  },
  {
    name: 'Angie Chapman',
    description: 'Award-winning interior design consultant and founder of Angie Chapman Interiors, Angie is a driving force in the design world. With over 10 years of experience in the industry, she has honed her skills and expertise to become a sought-after designer.',
    src: AngieChapmanImage,
  },
  {
    name: 'Ivy Ellerby',
    description: 'Accredited Staging Professional, Advanced Feng Shui Design Professional, and consultant at Eastern Design and Home Staging, Ivy blends her background in clinical and experimental psychology to enhance harmony and balance in homes.',
    src: IvyEllerbyImage,
  },
  {
    name: 'Jane Lockhart',
    description: 'Many recognize Jane from her show, Color Confidential, on HGTV and W Network. She is also the best-selling author of two books and frequently lends her design expertise to Canadian television shows including The Marilyn Denis Show and Cityline.',
    src: JaneLockhartImage,
  },
  {
    name: 'Chris Tuccio',
    description: 'Chris Tuccio, professor and Program Coordinator of Horticulture & Landscape Design at Naugatuck Valley Community College, holds a Master\'s in Landscape Architecture from Harvard. He also serves on the CT Horticulture Society Board and manages Draftscapes.',
    src: ChrisTuccioImage,
  },
  {
    name: 'Tammy Hart',
    description: 'Tammy is the owner of Designer Chick Co. She also served as a director on the National Board for DDA. Tammy has presented at IIDEXCanada and The Small Business Forum, been featured in East of the City Magazine, and appeared on the Rogers Daytime Durham talk show.',
    src: TammyHartImage,
  },
];

export const tutors: InstructorInformation[] = [
  {
    name: 'Lianne Couvis',
    description: 'Lianne, owner of ChiChi Fringo Designs in Toronto, is a QC Design School graduate with certifications in decorating, staging, color consulting, and organizing. Originally from the Bahamas, she blends vibrant colors, textures, and patterns in her designs. With 20 years in film and TV, Lianne continues to find daily inspiration in design.',
    src: LianneCouvisImage,
  },
  {
    name: 'Christina Kittelstad',
    description: 'Christina, owner of Spiral Design Color Consulting in Lakewood, Colorado, excels in creating beautiful, functional spaces on any budget. Known for her creativity and professionalism, Christina collaborates with residential and commercial clients. Her work has been featured on HGTV’s House Hunters, Houzz, The Denver Post, and more.',
    src: ChristineKittelstadImage,
  },

  {
    name: 'Patrizia Boland',
    description: 'Graduating from QC Design School as a certified International Design and Decorating Professional, Patrizia launched Boland Designs. Patrizia\'s holistic approach transforms clients’ spaces into beautiful, functional environments reflective of their personalities. As a QC tutor, she helps students achieve their highest potential in the design & decorating industry.',
    src: PatriziaBolandImage,
  },
  {
    name: 'Darcie Garcia',
    description: 'Darcie Garcia, owner of The Florapest Raleigh, has 32 years of floral industry experience and is an accredited educator by the American Institute of Floral Designers. She has managed large flower shops and traveled nationally to teach. Darcie\'s nurturing approach encourages creativity and confidence, inspiring aspiring designers to excel in the floral industry.',
    src: DarcieGarciaImage,
  },
];
