import type { FC } from 'react';

import { SingleTutorSection } from '@/components/singleTutorSection';
import TutorImage from '@/components/tutors/angieChapmanCollage-light.jpg';

type Props = {
  className?: string;
};

export const TutorSection: FC<Props> = ({ className }) => (
  <SingleTutorSection
    courseName="Professional Organizing"
    description="Award-winning interior design consultant and founder of Angie Chapman Interiors, Angie is a driving force in the design world. With over 10 years of experience in the industry, she has honed her skills and expertise to become a sought-after designer."
    src={TutorImage}
    tutorName="Angie Chapman"
    className={className}
  />
);
