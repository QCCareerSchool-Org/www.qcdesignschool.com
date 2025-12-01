import type { FC } from 'react';

import { SingleTutorSection } from '@/components/singleTutorSection';
import TutorImage from '@/components/tutors/ivyEllerbyCollage-transparent.png';

interface Props {
  className?: string;
}

export const TutorSection: FC<Props> = ({ className }) => (
  <SingleTutorSection
    courseName="Feng Shui"
    description="Accredited Staging Professional, Advanced Feng Shui Design Professional, and consultant at Eastern Design and Home Staging, Ivy Ellerby blends her background in clinical and experimental psychology to enhance harmony and balance in homes."
    src={TutorImage}
    tutorName="Ivy Ellerby"
    className={className}
  />
);
