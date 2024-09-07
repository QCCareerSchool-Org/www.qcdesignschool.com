import type { StaticImageData } from 'next/image';
import { default as BarbImage } from './images/barb_stiles.png';
import { default as Empathy2Image } from './images/empathy2_tempo.png';
import { default as LilyImage } from './images/lily_gardea.png';
import { default as LyndsayImage } from './images/lyndsay_maskell.png';
import { default as NatalieImage } from './images/natalie_mireault.png';
import { default as VanessaImage } from './images/vanessa_guinto.png';

export type ReviewData = {
  name: string;
  image: StaticImageData;
  reviewText: string;
};

export const reviewData: ReviewData[] = [
  {
    name: 'Barb Stiles',
    image: BarbImage,
    reviewText: "I am a recent graduate of the Interior Decorating Program at QC Design school. The program was easy to follow on line and the documents and assignments were easy to navigate, download and submit. I found the topics taught were very relevant and interesting, there was not one unit that I didn't enjoy. You can take up to 2 years from the time you enroll, to finish your studies, but once you get started 'you can't wait to move on to the next course. I enjoyed this course so much that I enrolled in 2 more courses. Once I am finished those I will do another one. Thank you QC Design School",
  },
  {
    name: 'Lyndsay Maskell',
    reviewText: "My experience during completing my schooling was great. My tutors were very helpful and gave me lots of tips to help me in the future. I fully recommend this school to help start your next chapter towards your goals, I'm now done my schooling and working towards next steps in starting my own company or working with others in near future.",
    image: LyndsayImage,
  },
  {
    name: 'Empathy2 tempo',
    reviewText: "I've really enjoyed my experience with QC Design School. The instruction is in real time practical everyday life scenarios. The instructors give great insight on their experience in the field as well.",
    image: Empathy2Image,
  },
  {
    name: 'Lily Gardea',
    reviewText: 'Obsessed with QC Design School. Got the course for Interior Decorator and staging because I liked it and wanted to learn it and now I do it for work. Get so many good compliments for the work that I do but it’s all thanks to what QC Design School thought me. Definitely recommend to anyone who is thinking of taking one or more of their courses :)',
    image: LilyImage,
  },
  {
    name: 'Vanessa Guinto',
    reviewText: "I really enjoyed being able to take QC's online courses at my own pace! The staff was incredibly helpful when I had questions and provided me with all the resources I needed to succeed. I decided to take these courses when I wanted a career change and I would highly recommend QC Design School for anyone in the same position. The affordability, flexibility, and support made my experience a positive one.",
    image: VanessaImage,
  },
  {
    name: 'Natalie Mireault',
    reviewText: "I am a graduate of QC design school from the home staging course and I can't recommend QC design school enough.They were so organized and quick to reply with any questions or concerns I had. The tutors were very knowledgeable and helpful! I love that I got to do it on my own pace and I  wasn't rushed . Because of QC design school, I am able to succeed in my own home staging business, and I continue to learn from them through their blog posts and social media ! I highly recommend checking out their courses.",
    image: NatalieImage,
  },

];
