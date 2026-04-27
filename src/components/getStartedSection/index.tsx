import Link from 'next/link';
import type { CSSProperties, FC, JSX } from 'react';

import styles from './index.module.scss';

interface Props {
  title: string;
  text?: string;
  courseCodes?: string[];
  buttonText?: string | JSX.Element;
  buttonHref?: string;
  background?: CSSProperties['background'];
}

export const GetStartedSection: FC<Props> = ({ title, text, courseCodes, buttonText = 'Enroll Today', buttonHref, background }) => {
  let href: string;
  if (buttonHref) {
    href = buttonHref;
  } else {
    href = 'https://enroll.qcdesignschool.com';
    if (courseCodes) {
      href += '?' + courseCodes.map(c => `c=${encodeURIComponent(c)}`).join('&');
    }
  }
  return (
    <section className={styles.section} style={{ background }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xl-7 text-center">
            <h2 className="mb-4">{title}</h2>
            {text && <p className="mb-4">{text}</p>}
            <Link href={href} className={`btn btn-lg btn-primary ${styles.button}`}>{buttonText}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
