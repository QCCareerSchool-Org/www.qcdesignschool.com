import type { FC } from 'react';

import { SingleTutorSection } from '@/components/singleTutorSection';
import TutorImage from '@/components/tutors/chrisTuccioCollage-light.jpg';

type Props = {
  className?: string;
};

export const TutorSection: FC<Props> = ({ className }) => (
  <SingleTutorSection
    courseName="Landscape Design"
    description="Chris Tuccio, professor and Program Coordinator of Horticulture & Landscape Design at Naugatuck Valley Community College, holds a Master's in Landscape Architecture from Harvard. He also serves on the CT Horticulture Society Board and manages Draftscapes."
    src={TutorImage}
    alt="Chris Tuccio"
    className={className}
  />
);
