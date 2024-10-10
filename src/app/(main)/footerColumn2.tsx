import Link from 'next/link';
import type { FC } from 'react';

export const FooterColumn2: FC = () => (
  <>
    <li><Link href="/free-course-catalog">Free Catalog</Link></li>
    <li><Link href="/faq">FAQ</Link></li>
    <li><Link href="/design-associations">Design Associations</Link></li>
    <li><Link href="/your-career">Your Career</Link></li>
    <li><Link href="/how-it-works">How It Works</Link></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="https://studentcenter.qccareerschool.com/students" target="_blank" rel="noreferrer">Student Login</a></li>
  </>
);
