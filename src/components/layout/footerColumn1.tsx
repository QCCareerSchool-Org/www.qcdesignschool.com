import Link from 'next/link';
import type { FC } from 'react';

export const FooterColumn1: FC = () => (
  <>
    <li><Link href="/online-courses/interior-decorating">Interior Decorating</Link></li>
    <li><Link href="/online-courses/home-staging">Home Staging</Link></li>
    <li><Link href="/online-courses/landscape-design">Landscape Design</Link></li>
    <li><Link href="/online-courses/feng-shui-design">Feng Shui Design</Link></li>
    <li><Link href="/online-courses/professional-organizing">Professional Organizing</Link></li>
    <li><Link href="/online-courses/event-decor">Event Decor</Link></li>
    <li><Link href="/online-courses/color-consultant">Color Consultant</Link></li>
    <li><Link href="/online-courses/floral-design">Floral Design</Link></li>
  </>
);
