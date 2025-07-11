import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import { getCertification } from '../certificationLogos';
import { CardPrice } from './cardPrice';
import ChevronIcon from './chevron-right.svg';
import styles from './index.module.scss';
import { getHeroImage } from '../hero/getHeroImage';
import { Subtitle } from '../subtitle';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseName } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetch';
import { getData } from '@/lib/getData';

type Props = {
  courseCode: CourseCode;
  courseName?: string;
  subtitle?: string;
  description: string;
  href: string;
  message?: string;
  showPrice?: boolean;
  showEnrollLink?: boolean;
  enrollLink?: string;
};

export const CourseTuitionCard: FC<Props> = async props => {
  const { countryCode, provinceCode } = await getData();
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
                {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
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
              <h3 className="h5">{props.courseName ?? getCourseName(props.courseCode)}</h3>
            </>
          )}
          <p>{props.description}</p>
        </div>
        <div className="d-flex flex-column">
          {price && <CardPrice price={price} />}
          <div className="d-flex flex-column flex-sm-row">
            {props.showEnrollLink
              ? (
                <>
                  <Link href={props.href} className="d-xxl-none btn btn-outline-medium mb-2 mb-sm-0 me-sm-2" style={{ whiteSpace: 'nowrap' }}>Learn More</Link>
                  <Link href={props.href} className="d-none d-xxl-block btn btn-lg btn-outline-medium mb-2 mb-sm-0 me-sm-3" style={{ whiteSpace: 'nowrap' }}>Learn More</Link>
                  <Link href={enrollLink} className="d-xxl-none btn btn-dark" style={{ whiteSpace: 'nowrap' }}>Enroll Now</Link>
                  <Link href={enrollLink} className="d-none d-xxl-block btn btn-dark btn-lg" style={{ whiteSpace: 'nowrap' }}>Enroll Now</Link>
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
    </div>
  );
};
