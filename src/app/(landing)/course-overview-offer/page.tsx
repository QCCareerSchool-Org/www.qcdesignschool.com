import { CourseOverview } from '../course-overview';
import type { PageComponent } from '@/app/serverComponent';
import { DeadlineFunnelScript } from '@/components/deadlineFunnelScript';

const CourseOverviewPage: PageComponent = () => (
  <>
    <DeadlineFunnelScript />
    <CourseOverview />
  </>
);

export default CourseOverviewPage;
