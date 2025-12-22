import { CourseOverview } from '.';
import type { PageComponent } from '@/app/serverComponent';
import { getSeverData } from '@/lib/getData';

const CourseOverviewPage: PageComponent = async props => {
  const { countryCode, provinceCode, date } = await getSeverData(props.searchParams);
  return <CourseOverview countryCode={countryCode} provinceCode={provinceCode} date={date} />;
};

export default CourseOverviewPage;
