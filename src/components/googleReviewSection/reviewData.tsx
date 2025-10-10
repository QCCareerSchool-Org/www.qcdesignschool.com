import type { StaticImageData } from 'next/image';
import type { CSSProperties } from 'react';

import DeborahHankinsImage from './images/deborah hankins.png';
import ElianaVarnadoreImage from './images/eliana varnadore.png';
import Empathy2TempoImage from './images/empathy2 tempo.png';
import LilyGardeaImage from './images/Lily Gardea.png';
import LoryTurnerImage from './images/lory turner.png';
import NataleMiraultImage from './images/natalie mireault.png';
import PaolaFrascaImage from './images/paola frasca.png';
import type { CourseCode } from '@/domain/courseCode';

export enum Priority {
  HIGH = 3,
  NORMAL = 2,
  LOW = 1,
}

export type ReviewData = {
  name: string;
  reviewText: string;
  initial: string;
  imageSrc?: StaticImageData;
  backgroundColor: CSSProperties['backgroundColor'];
  /** font size in rem */
  size?: number;
  rating: 1 | 2 | 3 | 4 | 5;
  courseCodes?: CourseCode[];
  priority?: Priority;
};

export const reviewData: ReviewData[] = [
  {
    name: 'Barb Stiles',
    initial: 'b',
    backgroundColor: '#bf360c',
    reviewText: "I am a recent graduate of the Interior Decorating Program at QC Design School. The program was easy to follow on line and the documents and assignments were easy to navigate, download and submit. I found the topics taught were very relevant and interesting, there was not one unit that I didn't enjoy. Once you get started you can't wait to move on to the next course. I enjoyed this course so much that I enrolled in 2 more courses. Once I am finished those I will do another one. Thank you QC Design School",
    rating: 5,
    courseCodes: [ 'i2' ],
  },
  {
    name: 'Lyndsay Maskell',
    initial: 'L',
    backgroundColor: '#0097a7',
    reviewText: "My experience during completing my schooling was great. My tutors were very helpful and gave me lots of tips to help me in the future. I fully recommend this school to help start your next chapter towards your goals, I'm now done my schooling and working towards next steps in starting my own company or working with others in near future.",
    priority: Priority.HIGH,
    rating: 5,
    courseCodes: [ 'db' ],
  },
  {
    name: 'empathy2 tempo',
    initial: 'E',
    backgroundColor: 'green',
    imageSrc: Empathy2TempoImage,
    reviewText: "I've really enjoyed my experience with QC Design School. The instruction is in real time practical everyday life scenarios. The instructors give great insight on their experience in the field as well.",
    size: 1.25,
    rating: 5,
    courseCodes: [ 'ld' ],
  },
  {
    name: 'Lily Gardea',
    initial: 'L',
    backgroundColor: 'red',
    imageSrc: LilyGardeaImage,
    reviewText: 'Obsessed with QC Design School. Got the course for Interior Decorator and staging because I liked it and wanted to learn it and now I do it for work. Get so many good compliments for the work that I do but it’s all thanks to what QC Design School taught me. Definitely recommend to anyone who is thinking of taking one or more of their courses :)',
    priority: Priority.HIGH,
    rating: 5,
    courseCodes: [ 'i2', 'ms' ],
  },
  {
    name: 'Vanessa Guinto',
    initial: 'V',
    backgroundColor: '#0097a7',
    reviewText: "I really enjoyed being able to take QC's online courses at my own pace! The staff was incredibly helpful when I had questions and provided me with all the resources I needed to succeed. I decided to take these courses when I wanted a career change and I would highly recommend QC Design School for anyone in the same position. The affordability, flexibility, and support made my experience a positive one.",
    priority: Priority.HIGH,
    rating: 5,
    courseCodes: [ 'fd' ],
  },
  {
    name: 'Natalie Mireault',
    initial: 'N',
    backgroundColor: 'green',
    imageSrc: NataleMiraultImage,
    reviewText: "I am a graduate of QC Design School from the home staging course and I can't recommend QC Design School enough.They were so organized and quick to reply with any questions or concerns I had. The tutors were very knowledgeable and helpful! I love that I got to do it on my own pace and I wasn't rushed. Because of QC Design School, I am able to succeed in my own home staging business, and I continue to learn from them through their blog posts and social media ! I highly recommend checking out their courses.",
    priority: Priority.HIGH,
    rating: 5,
    courseCodes: [ 'st' ],
  },
  {
    name: 'Eliana Varnadore',
    imageSrc: ElianaVarnadoreImage,
    initial: 'E',
    backgroundColor: 'grey',
    reviewText: 'Loved learning more in depth of color psychology',
    size: 1.25,
    priority: Priority.LOW,
    rating: 5,
    courseCodes: [ 'cc' ],
  },
  {
    name: 'Deborah Hankins',
    imageSrc: DeborahHankinsImage,
    initial: 'D',
    backgroundColor: 'blue',
    reviewText: 'It was a great class. Extremely informative and made you think. Great tips on how to learn more about your clients likes and dislikes. Can\'t wait for the next class.',
    size: 1.25,
    rating: 5,
    courseCodes: [ 'cc' ],
  },
  {
    name: 'Lory Turner',
    imageSrc: LoryTurnerImage,
    initial: 'L',
    backgroundColor: 'green',
    reviewText: 'Enjoyed a free, informative webinar on color psychology, thanks to QC Design School.',
    size: 1.25,
    rating: 5,
    courseCodes: [ 'cc' ],
  },
  {
    name: 'Amy S.',
    initial: 'A',
    backgroundColor: 'darkblue',
    reviewText: "I enjoyed the Webinar!\n Education is lifelong!\n You can't have too many skills or too much knowledge!!",
    size: 1.25,
    rating: 5,
  },
  {
    name: 'Paola Frasca',
    imageSrc: PaolaFrascaImage,
    initial: 'P',
    backgroundColor: 'grey',
    reviewText: "I'm a graduate of QC Design School, and I'm truly blessed to have taken 3 courses from QC Design School.  The courses are easy, straight forward and being able to work at my own pace was a bonus.  I graduated from Homes Staging, Colour Consultation and Virtual Design.  My Home Staging business is booming thanks to what I learned from QC Design School. FIVE stars and highly recommend 👍",
    priority: Priority.HIGH,
    rating: 5,
    courseCodes: [ 'st', 'cc', 'vd' ],
  },
  {
    name: 'Mackenzie Clapperton',
    initial: 'M',
    backgroundColor: 'green',
    reviewText: 'Great course options, fair pricing and instructors are very helpful! Would recommend for anyone looking to increase their knowledge in the world of interior decorating.',
    size: 1.25,
    rating: 5,
    courseCodes: [ 'ap' ],
  },
  {
    name: 'Alexa Jorgenson',
    initial: 'A',
    backgroundColor: 'purple',
    reviewText: 'I am a graduate of QC Design School, and I am very happy with my experience!  The tutors were super helpful and knowledgeable.  Even though I have graduated, I still remain in contact with them because they are so nice and helpful. The courses are very fun too! I originally just planned on taking Interior Decorating and Staging, but since I really liked the courses, I also took three more - Professional Organizing, Virtual Design, and Feng Shui.  QC Design School allows students to work at their own pace, and it gives plenty of time to complete each course.  Because of QC Design School, I have been able to advance in my interior decorating career.  Thank you QC!',
    rating: 5,
    courseCodes: [ 'i2', 'st', 'vd', 'fs', 'po' ],
  },
  {
    name: 'Karen Alba',
    initial: 'K',
    backgroundColor: 'red',
    reviewText: 'QC made everything very easy and accessible for me to accomplish this program. The feedback from the graders were great.  My units were graded in a very timely manner. I really enjoyed all of the reading material. I learned so much. I highly recommend this program.',
    rating: 5,
    courseCodes: [ 'ap', 'po' ],
  },
];
