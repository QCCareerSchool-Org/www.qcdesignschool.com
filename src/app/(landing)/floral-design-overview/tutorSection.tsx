import type { FC } from 'react';

import { SingleTutorSection } from '@/components/singleTutorSection';
import TutorImage from '@/components/tutors/reneeTucci.jpg';

interface Props {
  className?: string;
}

export const TutorSection: FC<Props> = ({ className }) => (
  <SingleTutorSection
    courseName="Floral Design"
    src={TutorImage}
    description="With over 20 years of floral design experience, Renee Tucci, recognized by the American Institute of Floral Designers and Professional Floral Communicators International, is a dedicated instructor in the QC course, guiding students to master the art of floral design."
    tutorName="Renee Tucci"
    className={className}
    mask
  />
);
