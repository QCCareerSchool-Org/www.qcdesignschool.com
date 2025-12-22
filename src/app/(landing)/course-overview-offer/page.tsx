import { CourseOverview } from '../course-overview';
import type { PageComponent } from '@/app/serverComponent';
import { DeadlineFunnelScript } from '@/components/deadlineFunnelScript';
import { getSeverData } from '@/lib/getData';

const CourseOverviewPage: PageComponent = async props => {
  const { countryCode, provinceCode, date } = await getSeverData(props.searchParams);
  return (
    <>
      <DeadlineFunnelScript />
      <CourseOverview countryCode={countryCode} provinceCode={provinceCode} date={date} />
    </>
  );
};

export default CourseOverviewPage;
