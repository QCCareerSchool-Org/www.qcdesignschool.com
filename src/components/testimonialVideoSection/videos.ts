import type { StaticImageData } from 'next/image';
import type { Slide } from 'yet-another-react-lightbox';

import AlexaImage from './images/alexa.jpg';
import DaniellaImage from './images/daniella.jpg';
import TrishaImage from './images/trisha.jpg';

export interface TestimonialVideo {
  src: string;
  thumbnailSrc: StaticImageData;
  quote: string;
  name: string;
  professionalTitle: string;
}

const makeSlide = (video: TestimonialVideo): Slide => (
  {
    type: 'video',
    autoPlay: true,
    width: 720,
    height: 1280,
    sources: [
      {
        src: video.src,
        type: 'video/mp4',
      },
    ],
  }
);

export const videos: TestimonialVideo[] = [
  {
    src: 'https://51d9ccad7be11d8ada71-aeafba698c87c1173d616904e85b2e3e.ssl.cf1.rackcdn.com/design-reviews-alexa.mp4',
    thumbnailSrc: AlexaImage,
    name: 'Alexa Jorgenson',
    quote: "I'm grateful for my experience at QC Design School",
    professionalTitle: 'Design Associate at LazyBoy Furniture Galleries',
  },
  {
    src: 'https://51d9ccad7be11d8ada71-aeafba698c87c1173d616904e85b2e3e.ssl.cf1.rackcdn.com/design-reviews-daniella.mp4',
    thumbnailSrc: DaniellaImage,
    name: 'Daniella De Luca',
    quote: 'QC gave me the skills to start my own business.',
    professionalTitle: 'Founder of Maximize Design',
  },
  {
    src: 'https://51d9ccad7be11d8ada71-aeafba698c87c1173d616904e85b2e3e.ssl.cf1.rackcdn.com/design-reviews-trish.mp4',
    thumbnailSrc: TrishaImage,
    quote: "I loved QC's flexibility to complete courses at my pace.",
    name: 'Trish Espinosa',
    professionalTitle: 'Founder of Willowhaus Interiors',
  },
];

export const videoSlides: Slide[] = videos.map(makeSlide);
