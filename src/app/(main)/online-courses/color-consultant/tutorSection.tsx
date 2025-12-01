import type { FC } from 'react';

import { SingleTutorSection } from '@/components/singleTutorSection';
import TutorImage from '@/components/tutors/janeLockhartCollage-light.jpg';

interface Props {
  className?: string;
}

export const TutorSection: FC<Props> = ({ className }) => (
  <SingleTutorSection
    courseName="Color Consultant"
    description="Many recognize Jane from her show, Color Confidential, on HGTV and W Network. She is also the best-selling author of two books and frequently lends her design expertise to Canadian television shows including The Marilyn Denis Show and Cityline."
    src={TutorImage}
    tutorName="Jane Lockhart"
    className={className}
  />
);
