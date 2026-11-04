import type { FC } from 'react';

import { CourseOverview } from '../course-overview';
import { DeadlineFunnelScript } from '@/components/deadlineFunnelScript';
import { getServerData } from '@/lib/getServerData';

const CourseOverviewPage: FC<PageProps<'/course-overview-offer'>> = async props => {
  const { countryCode, provinceCode, date } = await getServerData(props.searchParams);
  return (
    <>
      <DeadlineFunnelScript />
      <CourseOverview countryCode={countryCode} provinceCode={provinceCode} date={date} />
    </>
  );
};

export default CourseOverviewPage;
