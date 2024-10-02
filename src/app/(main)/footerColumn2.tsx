import Link from 'next/link';
import type { FC } from 'react';

export const FooterColumn2: FC = () => (
  <>
    <li><Link href="/faq">FAQ</Link></li>
    <li><Link href="/student-success">Student Success</Link></li>
    <li><Link href="/instructors">Instructors</Link></li>
    <li><Link href="/about">About the School</Link></li>
    <li><Link href="/design-associations">Design Associations</Link></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="https://studentcenter.qccareerschool.com/students" target="_blank" rel="noreferrer">Student Login</a></li>
  </>
);
