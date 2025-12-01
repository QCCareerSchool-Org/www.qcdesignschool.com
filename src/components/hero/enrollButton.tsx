import type { FC } from 'react';

import styles from './enrollButton.module.scss';
import ForwardArrowIcon from './forward-arrow.svg';

interface Props {
  courseCodes: string[];
}

export const EnrollButton: FC<Props> = ({ courseCodes }) => {
  let href = 'https://enroll.qcdesignschool.com?';
  for (const c of courseCodes) {
    href += `c=${encodeURIComponent(c)}`;
  }
  return (
    <a href={href} className={`btn btn-lg btn-secondary ${styles.button}`}>Enroll Now<div className={styles.icon}><ForwardArrowIcon /></div></a>
  );
};
