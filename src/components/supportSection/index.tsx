import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import styles from './index.module.scss';
import StudentSupportImage from './student-support.jpg';
import ChatIcon from '@/components/icons/chat.svg';

const BOXING_DAY_2025_START = Date.UTC(2025, 11, 26, 8);
const BOXING_DAY_2025_END = Date.UTC(2026, 0, 3, 8);

const defaultCopy = (
  <>QC&apos;s dedicated team is here to help you select the right course, navigate your materials, and stay on track to reach your career goals. Available seven days a week by phone, email, or live chat, we are here to ensure you get the support you need&mdash;whether it&apos;s advice, troubleshooting, or planning your next step.</>
);

const boxingDayCopy = (
  <>QC&apos;s dedicated team is here to help you take control of your future&mdash;guiding you toward the right course, navigating your materials, and staying on track with your goals. Available seven days a week by phone, email, or live chat, we make sure you always have the support you need to keep moving forward.</>
);

type PromoWindow = { start: number; end: number };

const DEFAULT_PROMO_WINDOW: PromoWindow = {
  start: BOXING_DAY_2025_START,
  end: BOXING_DAY_2025_END,
};

interface Props {
  showLink?: boolean;
  promoWindowOverride?: PromoWindow;
}

export const SupportSection: FC<Props> = ({ showLink, promoWindowOverride }) => {
  const effectiveDate = Date.now();
  const dateRange = promoWindowOverride ?? DEFAULT_PROMO_WINDOW;
  const teamCopy = effectiveDate >= dateRange.start && effectiveDate < dateRange.end ? boxingDayCopy : defaultCopy;

  return (
    <section className={`${styles.section} text-white`}>
      <div className="container">
        <div className="row align-items-center justify-content-center g-5 g-xl-s">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5 text-center">
            <Image src={StudentSupportImage} alt="" className={styles.image} />
          </div>
          <div className="col-12 col-lg-7">
            <h2 className="mb-4">Real Support &amp; Guidance, Every Step of the Way</h2>
            <p className="lead mb-0">{teamCopy}</p>
            {showLink && <Link href="/contact-us" className="btn btn-primary mt-4"><ChatIcon height="16" className="me-2" />Talk to Us Today</Link>}
          </div>
        </div>
      </div>
    </section>
  );
};
