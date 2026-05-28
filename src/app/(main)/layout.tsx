import { SiteLayout } from '@/components/siteLayout';
import type { LayoutComponent } from '@/serverComponent';

import '../bootstrap.scss';

const MainLayout: LayoutComponent = ({ children }) => <SiteLayout>{children}</SiteLayout>;

export default MainLayout;
