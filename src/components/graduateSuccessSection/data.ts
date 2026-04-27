import type { StaticImageData } from 'next/image';

import * as Images from './_images';

export interface Grad {
  name: string;
  intro?: string;
  title: string;
  provinceCode?: string;
  text: string[];
  image: StaticImageData;
}

export const grads = {
  ValerieWilliams: {
    name: 'Valerie Williams',
    title: 'The Strategic Career Switcher',
    intro: 'Valerie used the IDDP credential to move from enthusiast to expert, mastering the skills needed to work alongside contractors and architects.',
    text: [ 'QC offered more knowledge than any other school. Learning to draw an actual floor plan and understanding how to fit a life-size room on paper for an architect or contractor was amazing!' ],
    image: Images.ValerieWilliams,
  },
  MariaOppedisano: {
    name: 'Maria Oppedisano',
    title: 'The Modern Mompreneur',
    intro: 'Maria built a thriving business while nurturing her family with QC\'s flexible, "at-your-own-pace" professional program.',
    text: [ 'As a wife and mom, learning at my own pace was great. I was able to graduate and now have my own interior design business, doing what I love!' ],
    image: Images.MariaOppedisano,
  },
  BelindaThomason: {
    name: 'Belinda Thomason',
    title: 'The Ambitious Scaler',
    intro: 'Belinda used the IDDP credential to get hired on the spot by a global brand and scale to boutique hotel renovations in record time.',
    text: [ 'The depth of this curriculum surprised even my colleagues with 4-year university degrees. The day I received my certification, I was hired on the spot to help customers with renovations, swatches and furnishing entire homes. This gave me the courage to launch my own business—I\'m now the proud owner of Wow the Stage Interiors, LLC!' ],
    image: Images.BelindaThomason,
  },
  LaiceeCharette: {
    name: 'Laicee Charette',
    title: 'The Creative Upskiller',
    intro: 'Laicee transformed her painting business into a full-service design firm after earning her IDDP credential.',
    text: [ 'Design and decorating is in high demand and even on my painting jobs clients ask for my input on decorating their homes which is what drove me to get my certification. QC has made me feel confident in owning my own business at 22!' ],
    image: Images.LaiceeCharette,
  },
} as const satisfies Record<string, Grad | undefined>;

export type GradKey = keyof typeof grads;
