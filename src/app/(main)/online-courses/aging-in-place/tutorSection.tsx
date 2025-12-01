import type { FC } from 'react';

import { SingleTutorSection } from '@/components/singleTutorSection';
import TutorImage from '@/components/tutors/tammyHeartCollage-light.jpg';

interface Props {
  className?: string;
}

export const TutorSection: FC<Props> = ({ className }) => (
  <SingleTutorSection
    courseName="Aging in Place"
    description="Tammy Hart is the owner of Designer Chick Co. She also served as a director on the National Board for DDA. Tammy has presented at IIDEXCanada and The Small Business Forum, been featured in East of the City Magazine, and appeared on the Rogers Daytime Durham talk show."
    src={TutorImage}
    tutorName="Tammy Hart"
    className={className}
  />
);
