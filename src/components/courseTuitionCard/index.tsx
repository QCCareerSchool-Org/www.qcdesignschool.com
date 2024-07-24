import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import { CourseCardCertifcation } from '../courseCardCertification';
import { getHeroImage } from '../hero/getHeroImage';
import { CardDiscount } from './cardDiscount';
import { CardPrice } from './cardPrice';
import ChevronIcon from './chevron-right.svg';
import styles from './index.module.scss';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseName } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetch';

type Props = {
  courseCode: CourseCode;
  // name: string | JSX.Element;
  description: string;
  href: string;
  message?: string;
  showPrice?: boolean;
};

export const CourseTuitionCard: FC<Props> = async props => {
  const price = props.showPrice ? await fetchPrice({ courses: [ props.courseCode ], countryCode: 'ca', provinceCode: 'on' }) : null;
  const enrollLink = `https://enroll.qcdesignschool.com?c=${encodeURIComponent(props.courseCode)}`;
  return (
    <div className={`${styles.courseCard} card`}>
      <div className={styles.imageWrapper}>
        <Image src={getHeroImage(props.courseCode)} className="card-img-top" style={{ height: 'auto' }} alt="" />
        <div className={styles.certification}>
          <CourseCardCertifcation courseCode={props.courseCode} />
        </div>
        {props.message && <div className={styles.message}>{props.message}</div>}
      </div>
      <div className={`${styles.courseCardBody} card-body`}>
        <div>
          {price && <CardDiscount price={price} />}
          <h2 className="h4">{getCourseName(props.courseCode)}</h2>
          <p>{props.description}</p>
          {price && <CardPrice price={price} />}
        </div>
        <div className="d-flex flex-column flex-sm-row">
          <Link href={props.href} className="d-lg-none btn btn-outline-medium mb-2 mb-sm-0" style={{ whiteSpace: 'nowrap' }}>Learn More</Link>
          <Link href={props.href} className="d-none d-lg-block btn btn-lg btn-outline-medium mb-2 mb-sm-0" style={{ whiteSpace: 'nowrap' }}>Learn More</Link>
          <Link href={enrollLink} className="d-lg-none btn btn-none" style={{ whiteSpace: 'nowrap' }}>Enroll<span className="ms-3"><ChevronIcon /></span></Link>
          <Link href={enrollLink} className="d-none d-lg-block btn btn-lg btn-none" style={{ whiteSpace: 'nowrap' }}>Enroll<span className="ms-3"><ChevronIcon /></span></Link>
        </div>
      </div>
    </div>
  );
};
