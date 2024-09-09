import type { FC } from 'react';

import { SingleTutorSection } from '@/components/singleTutorSection';
import TutorImage from '@/components/tutors/candiceCoppolaCollage-light.jpg';

type Props = {
  className?: string;
};

export const TutorSection: FC<Props> = ({ className }) => (
  <SingleTutorSection
    courseName="Event Decor"
    description="Candice Coppola is an incredibly talented entrepreneur and former owner of a wedding planning & design business called Jubilee Events. With her unique flair, she's created amazing events all over the world, from New York to Fiji, and even Costa Rica. She's no stranger to big budgets either, managing events that cost upwards of $1,000,000! With her wealth of knowledge and experience, Candice is a passionate and driven coach, instructor, and mentor, helping aspiring individuals in the event-planning business reach their entrepreneurial goals."
    src={TutorImage}
    alt="Angie Chapman"
    className={className}
  />
);
