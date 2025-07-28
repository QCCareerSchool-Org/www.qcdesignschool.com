import type { LayoutComponent } from '../serverComponent';

const BlankLayout: LayoutComponent = ({ children }) => (
  <>{children}</>
);

export default BlankLayout;
