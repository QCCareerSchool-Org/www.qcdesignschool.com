import Link from 'next/link';
import type { FC } from 'react';

import styles from './footer.module.scss';
import { TelephoneLink } from '@/components/telephoneLink';
import { getData } from '@/lib/getData';

export const Footer: FC = async () => {
  const { countryCode } = await getData();
  return (
    <footer className={styles.footer}>
      <div className="container text-center">
        <div className="small d-flex flex-column flex-md-row justify-content-around">
          <div className="mb-2 mb-md-0">&copy; {new Date().getFullYear()} QC Design School</div>
          <div className="mb-2 mb-md-0"><Link href="/terms">Privacy Policy</Link></div>
          <div className="mb-2 mb-md-0">Have a Questions? Give Us a Call</div>
          <div><TelephoneLink countryCode={countryCode} /></div>
        </div>
      </div>
    </footer>
  );
};
