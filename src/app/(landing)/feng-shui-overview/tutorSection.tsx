import type { FC } from 'react';

import { SingleTutorSection } from '@/components/singleTutorSection';
import TutorImage from '@/components/tutors/ivyEllerbyCollage-transparent.png';

interface Props {
  className?: string;
}

export const TutorSection: FC<Props> = ({ className }) => (
  <SingleTutorSection
    courseName="Feng Shui"
    description="When you enroll in QC’s Feng Shui Design course, you’ll learn from Advanced Feng Shui Design Professional, Ivy Ellerby, who will provide personalized feedback on every assignment you submit. Ivy is a consultant with Eastern Design and Home Staging and a published author whose book achieved #1 bestseller status on Amazon. Her deep passion for Feng Shui is evident in every aspect of her work. In her feedback, Ivy combines wisdom and practical insight with an engaging enthusiasm that makes the learning experience both enjoyable and inspiring."
    src={TutorImage}
    tutorName="Ivy Ellerby"
    className={className}
  />
);
