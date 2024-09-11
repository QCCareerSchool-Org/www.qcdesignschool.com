import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import { getCertification } from '../certificationLogos';
import { getHeroImage } from '../hero/getHeroImage';
import { CardPrice } from './cardPrice';
import ChevronIcon from './chevron-right.svg';
import styles from './index.module.scss';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseName } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetch';
import { getData } from '@/lib/getData';

type Props = {
  courseCode: CourseCode;
  subtitle?: string;
  description: string;
  href: string;
  message?: string;
  showPrice?: boolean;
  showEnrollLink?: boolean;
  enrollLink?: string;
};

export const CourseTuitionCard: FC<Props> = async props => {
  const { countryCode, provinceCode } = getData();
  const price = props.showPrice ? await fetchPrice({ courses: [ props.courseCode ], countryCode, provinceCode: provinceCode ?? undefined }) : null;
  const enrollLink = `${props.enrollLink ?? 'https://enroll.qcdesignschool.com'}?c=${encodeURIComponent(props.courseCode)}`;
  return (
    <div className={`${styles.courseCard} card`}>
      <div className={styles.imageWrapper}>
        <Image src={getHeroImage(props.courseCode)} className="card-img-top" fill style={{ objectFit: 'cover' }} alt="" />
        {props.showPrice
          ? (
            <>
              <div className={styles.imageOverlay} />
              <div className={styles.overlayContent}>
                {props.subtitle && <div className={styles.subtitle}>{props.subtitle}</div>}
                <h3 className="h4 mb-0 text-white">{getCourseName(props.courseCode)}</h3>
              </div>
            </>
          )
          : (
            <div className={styles.overlayContent}>
              {getCertification(props.courseCode, 100)}
            </div>
          )}
        {props.message && <div className={styles.message}>{props.message}</div>}
      </div>
      <div className={`${styles.courseCardBody} card-body`}>
        <div>
          {!props.showPrice && (
            <>
              <h3 className="h5">{getCourseName(props.courseCode)}</h3>
            </>
          )}
          <p>{props.description}</p>
          {price && <CardPrice price={price} />}
        </div>
        <div className="d-flex flex-column flex-sm-row">
          {props.showEnrollLink
            ? (
              <>
                <Link href={props.href} className="d-lg-none btn btn-outline-medium mb-2 mb-sm-0" style={{ whiteSpace: 'nowrap' }}>Learn More</Link>
                <Link href={props.href} className="d-none d-lg-block btn btn-lg btn-outline-medium mb-2 mb-sm-0" style={{ whiteSpace: 'nowrap' }}>Learn More</Link>
                <Link href={enrollLink} className="d-lg-none btn btn-none" style={{ whiteSpace: 'nowrap' }}>Enroll Now<span className="ms-3"><ChevronIcon /></span></Link>
                <Link href={enrollLink} className="d-none d-lg-block btn btn-lg btn-none" style={{ whiteSpace: 'nowrap' }}>Enroll Now<span className="ms-3"><ChevronIcon /></span></Link>
              </>
            )
            : (
              <>
                <Link href={props.href} className="d-lg-none btn btn-none p-sm-0" style={{ whiteSpace: 'nowrap' }}>Learn More<span className="ms-3"><ChevronIcon /></span></Link>
                <Link href={props.href} className="d-none d-lg-block btn btn-lg btn-none p-sm-0" style={{ whiteSpace: 'nowrap' }}>Learn More<span className="ms-3"><ChevronIcon /></span></Link>
              </>
            )}
        </div>
      </div>
    </div>
  );
};
