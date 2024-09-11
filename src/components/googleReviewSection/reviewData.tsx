import type { StaticImageData } from 'next/image';
import type { CSSProperties } from 'react';

import Empathy2TempoImage from './_images/empathy2 tempo.png';
import LilyGardeaImage from './_images/Lily Gardea.png';
import NataleMiraultImage from './_images/natalie mireault.png';

export type ReviewData = {
  name: string;
  initial: string;
  backgroundColor: CSSProperties['backgroundColor'];
  imageSrc?: StaticImageData;
  reviewText: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export const reviewData: ReviewData[] = [
  {
    name: 'Barb Stiles',
    initial: 'b',
    backgroundColor: '#bf360c',
    reviewText: "I am a recent graduate of the Interior Decorating Program at QC Design school. The program was easy to follow on line and the documents and assignments were easy to navigate, download and submit. I found the topics taught were very relevant and interesting, there was not one unit that I didn't enjoy. You can take up to 2 years from the time you enroll, to finish your studies, but once you get started 'you can't wait to move on to the next course. I enjoyed this course so much that I enrolled in 2 more courses. Once I am finished those I will do another one. Thank you QC Design School",
    rating: 5,
  },
  {
    name: 'Lyndsay Maskell',
    initial: 'L',
    backgroundColor: '#0097a7',
    reviewText: "My experience during completing my schooling was great. My tutors were very helpful and gave me lots of tips to help me in the future. I fully recommend this school to help start your next chapter towards your goals, I'm now done my schooling and working towards next steps in starting my own company or working with others in near future.",
    rating: 5,
  },
  {
    name: 'empathy2 tempo',
    initial: 'E',
    backgroundColor: 'green',
    imageSrc: Empathy2TempoImage,
    reviewText: "I've really enjoyed my experience with QC Design School. The instruction is in real time practical everyday life scenarios. The instructors give great insight on their experience in the field as well.",
    rating: 5,
  },
  {
    name: 'Lily Gardea',
    initial: 'L',
    backgroundColor: 'red',
    imageSrc: LilyGardeaImage,
    reviewText: 'Obsessed with QC Design School. Got the course for Interior Decorator and staging because I liked it and wanted to learn it and now I do it for work. Get so many good compliments for the work that I do but it’s all thanks to what QC Design School thought me. Definitely recommend to anyone who is thinking of taking one or more of their courses :)',
    rating: 5,
  },
  {
    name: 'Vanessa Guinto',
    initial: 'V',
    backgroundColor: '#0097a7',
    reviewText: "I really enjoyed being able to take QC's online courses at my own pace! The staff was incredibly helpful when I had questions and provided me with all the resources I needed to succeed. I decided to take these courses when I wanted a career change and I would highly recommend QC Design School for anyone in the same position. The affordability, flexibility, and support made my experience a positive one.",
    rating: 5,
  },
  {
    name: 'Natalie Mireault',
    initial: 'N',
    backgroundColor: 'green',
    imageSrc: NataleMiraultImage,
    reviewText: "I am a graduate of QC design school from the home staging course and I can't recommend QC design school enough.They were so organized and quick to reply with any questions or concerns I had. The tutors were very knowledgeable and helpful! I love that I got to do it on my own pace and I  wasn't rushed . Because of QC design school, I am able to succeed in my own home staging business, and I continue to learn from them through their blog posts and social media ! I highly recommend checking out their courses.",
    rating: 5,
  },
];
