import type { FC } from 'react';

const BlankLayout: FC<LayoutProps<'/'>> = ({ children }) => (
  <>{children}</>
);

export default BlankLayout;
