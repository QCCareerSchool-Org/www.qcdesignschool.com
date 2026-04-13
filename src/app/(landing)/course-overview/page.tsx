import { CourseOverview } from '.';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

const CourseOverviewPage: PageComponent = async props => {
  const { countryCode, provinceCode, date } = await getServerData(props.searchParams);
  return <CourseOverview countryCode={countryCode} provinceCode={provinceCode} date={date} />;
};

export default CourseOverviewPage;
