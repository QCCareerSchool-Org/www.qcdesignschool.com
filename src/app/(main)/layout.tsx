import type { LayoutComponent } from '@/serverComponent';
import { SiteLayout } from '@/components/siteLayout';

const MainLayout: LayoutComponent = ({ children }) => <SiteLayout>{children}</SiteLayout>;

export default MainLayout;
