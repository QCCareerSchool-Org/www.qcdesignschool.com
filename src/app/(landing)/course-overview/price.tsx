import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';
import { memo } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';

import styles from './price.module.scss';
import BackgroundDB from '@/app/(main)/online-courses/accelerate-your-design-business/hero.jpg';
import BackgroundAP from '@/app/(main)/online-courses/aging-in-place/hero.jpg';
import BackgroundCC from '@/app/(main)/online-courses/color-consultant/hero.jpg';
import BackgroundED from '@/app/(main)/online-courses/event-decor/hero.jpg';
import BackgroundFS from '@/app/(main)/online-courses/feng-shui-design/hero.jpg';
import BackgroundFD from '@/app/(main)/online-courses/floral-design/hero.jpg';
import BackgroundST from '@/app/(main)/online-courses/home-staging/hero.jpg';
import BackgroundI2 from '@/app/(main)/online-courses/interior-decorating/hero.jpg';
import BackgroundLD from '@/app/(main)/online-courses/landscape-design/hero.jpg';
import BackgroundPO from '@/app/(main)/online-courses/professional-organizing/hero.jpg';
import BackgroundVD from '@/app/(main)/online-courses/virtual-design/hero.jpg';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseName, getCourseURL } from '@/domain/courseCode';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { formatPrice } from '@/lib/formatPrice';

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

  if (!price) {
    return null;
  }

  const CustomTooltip: FC = props => (
    <Tooltip id="button-tooltip" {...props}>
      <strong>{price?.currency.symbol}{formatPrice(price?.plans.part.deposit)} now and {price?.plans.part.installments} monthly<br />installments of {price?.currency.symbol}{formatPrice(price?.plans.part.installmentSize)}</strong>
    </Tooltip>
  );

  return (
    <div className="col-12 col-lg-8">
      <div className={`${styles.wrapper} bg-white d-flex flex-column ${courseCode === 'i2' ? 'border border-2 border-primary' : ''} rounded-3 shadow-lg`}>
        <div className="d-flex flex-column flex-lg-row">
          <div className={`${styles.imageWrapper} flex-shrink-0`}><Image src={getImage(courseCode)} fill className={styles.image} style={{ objectFit: 'cover', objectPosition: '100% 50%' }} alt="" /></div>
          <div className="p-4">
            <h3 className="h5">{getCourseName(courseCode)}</h3>
            {courseCode === 'i2' && (
              <p className="badge bg-primary mb-2">Most Popular</p>
            )}
            <p>{getShortDescription(courseCode)}</p>
            <Link href={getCourseURL(courseCode)}>Learn More</Link>
          </div>
        </div>
        <div className="bg-light p-4" style={{ color: '#888' }}>
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <h4 className="h6">Pay in Full</h4>
              <p className="mb-1"><span className={styles.price}>{price?.currency.symbol}{formatPrice(price?.plans.full.total)}</span> <del>{price?.currency.symbol}{formatPrice(price?.cost)}</del></p>
              <p className="text-success">Save {price?.currency.symbol}{formatPrice(price?.plans.full.discount)}</p>
              <Link href={`https://enroll.qcdesignschool.com/all-courses-offer?c=${courseCode}&paymentPlan=full`}><button className="btn btn-primary w-100">Enroll</button></Link>
            </div>
            <div className="col-12 col-md-6">
              <h4 className="h6">
                <span className="me-2">Installments</span>
                <OverlayTrigger placement="top" overlay={<CustomTooltip />}>
                  <span style={{ color: '#aaa' }}><FaInfoCircle /></span>
                </OverlayTrigger>
              </h4>
              <p className="mb-1"><span className={styles.price}>{price?.currency.symbol}{formatPrice(price?.plans.part.installmentSize)}</span>/mo</p>
              <p>Total {price?.currency.symbol}{formatPrice(price?.plans.part.total)} {price?.cost !== price?.plans.part.total && <del>{price?.currency.symbol}{formatPrice(price?.cost)}</del>}</p>
              <Link href={`https://enroll.qcdesignschool.com/all-courses-offer?c=${courseCode}&paymentPlan=part`}><button className="btn btn-secondary w-100">Enroll</button></Link>
            </div>
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
    case 'ld':
      return BackgroundLD;
    case 'po':
      return BackgroundPO;
    case 'cc':
      return BackgroundCC;
    case 'fd':
      return BackgroundFD;
    case 'ed':
      return BackgroundED;
    case 'fs':
      return BackgroundFS;
    case 'db':
      return BackgroundDB;
    case 'ap':
      return BackgroundAP;
    case 'vd':
      return BackgroundVD;
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
