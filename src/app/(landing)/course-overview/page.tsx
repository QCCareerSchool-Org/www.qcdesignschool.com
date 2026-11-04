import type { FC } from 'react';

import { CourseOverview } from '.';
import { getServerData } from '@/lib/getServerData';

const CourseOverviewPage: FC<PageProps<'/course-overview'>> = async props => {
  const { countryCode, provinceCode, date } = await getServerData(props.searchParams);
  return <CourseOverview countryCode={countryCode} provinceCode={provinceCode} date={date} />;
};

export default CourseOverviewPage;
