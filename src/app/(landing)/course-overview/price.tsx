import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';
import { memo } from 'react';

import styles from './price.module.scss';
import BackgroundST from '@/app/(main)/online-courses/home-staging/hero.jpg';
import BackgroundI2 from '@/app/(main)/online-courses/interior-decorating/hero.jpg';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseName, getCourseURL } from '@/domain/courseCode';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';

type Props = {
  countryCode: string;
  provinceCode: string | null;
  courseCode: CourseCode;
};

export const Price: FC<PropsWithChildren<Props>> = memo(async ({ countryCode, provinceCode, courseCode }) => {
  const priceQuery: PriceQuery = {
    countryCode,
    provinceCode: provinceCode ?? undefined,
    courses: [ courseCode ],
    options: {
      promoCode: '100OFF',
    },
  };

  const price = await fetchPrice(priceQuery);

  return (
    <div className="col-12 col-lg-8">
      <div className={`${styles.wrapper} bg-white d-flex flex-column border border-2 border-primary rounded-3 shadow-lg`}>
        <div className="d-flex flex-column flex-lg-row">
          <div className={styles.imageWrapper}><Image src={getImage(courseCode)} fill className={styles.image} style={{ objectFit: 'cover' }} alt="" /></div>
          <div className="p-4">
            <h3 className="h5">{getCourseName(courseCode)}</h3>
            <p>{getShortDescription(courseCode)}</p>
            <Link href={getCourseURL(courseCode)}>Learn More</Link>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row bg-light">
          <div className={`${styles.price} p-4`}>
            <h4 className="h6">Pay in Full</h4>
            <p>{price?.currency.symbol}{price?.plans.full.total} <del>{price?.currency.symbol}{price?.cost}</del></p>
            <p>You save {price?.currency.symbol}{price?.plans.full.discount}</p>
            <Link href={`https://enroll.qcdesignschool.com/?c=${courseCode}&paymentPlan=full`}><button className="btn btn-primary">Enroll</button></Link>
          </div>
          <div className={`${styles.price} p-4`}>
            <h4 className="h6">Installments</h4>
            <p>{price?.currency.symbol}{price?.plans.part.installmentSize}/mo</p>
            <p>Total {price?.currency.symbol}{price?.plans.part.total} {price?.cost !== price?.plans.part.total && <del>{price?.currency.symbol}{price?.cost}</del>}</p>
            <Link href={`https://enroll.qcdesignschool.com/?c=${courseCode}&paymentPlan=part`}><button className="btn btn-secondary">Enroll</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
});

Price.displayName = 'Price';

const getImage = (courseCode: CourseCode): StaticImageData => {
  switch (courseCode) {
    case 'i2':
      return BackgroundI2;
    case 'st':
      return BackgroundST;
  }

  return BackgroundI2;
};

const getShortDescription = (courseCode: CourseCode): string => {
  switch (courseCode) {
    case 'i2':
      return 'Create personalized spaces blending creativity with practical design.';
    case 'st':
      return 'Declutter, depersonalize, and transform spaces buyers connect with.';
    case 'ld':
      return 'Design outdoor spaces that balance beauty and function.';
    case 'po':
      return 'Turn cluttered spaces into organized, stress-free environments.';
    case 'cc':
      return 'Design harmonious palettes tailored to each client\'s lifestyle.';
    case 'fd':
      return 'Create floral arrangements using design principles.';
    case 'ed':
      return 'Design unforgettable event spaces with style and creativity.';
    case 'fs':
      return 'Create harmony by balancing energy within any space.';
    case 'db':
      return 'Boost your design career with business-building strategies.';
    case 'ap':
      return 'Design safe, accessible, stylish homes for independent living.';
    case 'vd':
      return 'Serve clients worldwide with professional online design services.';
  }

  throw Error('Unrecognized course code');
};
