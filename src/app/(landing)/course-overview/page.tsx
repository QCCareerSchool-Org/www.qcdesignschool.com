import { CourseOverview } from '.';
import type { PageComponent } from '@/app/serverComponent';
import { getServerData } from '@/lib/getServerData';

const CourseOverviewPage: PageComponent = async props => {
  const { countryCode, provinceCode, date } = await getServerData(props.searchParams);
  return <CourseOverview countryCode={countryCode} provinceCode={provinceCode} date={date} />;
};

export default CourseOverviewPage;
