'use client';

import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import { useState } from 'react';
import { BiShieldAlt2 } from 'react-icons/bi';
import { FaRegCheckCircle } from 'react-icons/fa';

import styles from './index.module.scss';
import type { Price } from '@/domain/price';
import { formatPrice } from '@/lib/formatPrice';
import { getDesignRestricted } from '@/lib/restrictions';

interface Props {
  price: Price;
  countryCode: string;
  provinceCode: string | null;
}

export const EnrollmentValueSection: FC<Props> = ({ price, countryCode, provinceCode }) => {
  const fullTotal = `${price.currency.symbol}${formatPrice(price.plans.full.total, 2)}`;
  const installment = `${price.currency.symbol}${formatPrice(price.plans.part.installmentSize, 2)}`;
  const [ paymentPlan, setPaymentPlan ] = useState<PaymentPlan>('full');
  const courseType = getDesignRestricted(countryCode, provinceCode) ? 'Decorating' : 'Design';

  const href = `https://enroll.qcdesignschool.com?c=i2&paymentPlan=${paymentPlan}`;

  const handlePayInFullClick = (): void => setPaymentPlan('full');
  const handleMonthlyClick = (): void => setPaymentPlan('part');

  return (
    <section id="whatsIncluded">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-9 col-xl-8">
            <h2 className="mb-3">What's Included in Your Enrollment</h2>
            <p className="mb-0">When you enroll in the Interior {courseType}: Career Accelerator, you aren't just purchasing a course&mdash;you're getting everything you need to become a career-ready design professional and build a profitable business.</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <div className={`${styles.enrollmentCard} overflow-hidden`}>
              <div className={`${styles.enrollmentList} bg-white`}>
                {enrollmentItems.map(item => (
                  <div className={styles.enrollmentItem} key={item.id}>
                    <div className={styles.enrollmentCheck} aria-hidden="true"><FaRegCheckCircle size={18} /></div>
                    <div>
                      <h3 className="h6 mb-1">{item.title}</h3>
                      <p className="mb-0">{item.text}</p>
                    </div>
                    <div className={styles.enrollmentValue}><span className="badge rounded-pill px-3 py-2 text-bg-light">Value: {item.value}</span></div>
                  </div>
                ))}
              </div>
              <div className={`${styles.pricingCta} d-flex flex-column flex-xl-row align-items-center justify-content-between gap-4 gap-lg-5 p-4 p-md-5`}>
                <div className="text-white text-center text-lg-start flex-grow-1">
                  <p className="lead fw-bold mb-2">Ready To Launch Your Career?</p>
                  <p className="mb-0 small">Get everything listed above and choose the payment plan that works best for you.</p>
                </div>
                <div className={`${styles.paymentPanel} d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 p-4 rounded-3 border flex-grow-0`}>
                  <div className={`${styles.paymentControls} d-flex flex-column align-items-center align-items-md-start gap-3`}>
                    <div className={`${styles.paymentToggle} btn-group rounded-pill gap-1 p-1`} role="group" aria-label="Choose a payment option">
                      <button type="button" className={`btn btn-sm rounded-pill fw-semibold ${styles.paymentToggleButton}`} aria-pressed={paymentPlan === 'full'} onClick={handlePayInFullClick}>Pay in Full</button>
                      <button type="button" className={`btn btn-sm rounded-pill fw-semibold ${styles.paymentToggleButton}`} aria-pressed={paymentPlan === 'part'} onClick={handleMonthlyClick}>Monthly</button>
                    </div>
                    <div className="text-center text-md-start">
                      <div className="text-light">Total Value: <span className={styles.strikeout}>$5071</span></div>
                      {paymentPlan === 'part' ? (
                        <>
                          <div className={`${styles.priceLine} display-6 fw-bold text-white lh-1`}>{installment} <span className="fs-6 fw-semibold text-white-50">/ month</span></div>
                        </>
                      ) : (
                        <>
                          <div className={`${styles.priceLine} display-6 fw-bold text-white lh-1`}>{fullTotal} <span className="fs-6 fw-semibold text-white-50">all-inclusive</span></div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className={`vr d-none d-md-inline-block flex-shrink-0 ${styles.paymentDivider}`} aria-hidden="true" />
                  <div className="d-flex justify-content-center align-self-center flex-shrink-0">
                    <Link href={href} className="btn btn-primary btn-lg rounded-pill px-4 text-nowrap">Enroll Now</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.guarantee}><BiShieldAlt2 size={20} className="text-green me-2" style={{ position: 'relative', top: -2 }} />21-Day No-Risk Money-Back Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

type PaymentPlan = 'full' | 'part';

const enrollmentItems: { id: string; title: ReactNode; value: string; text: string }[] = [
  {
    id: 'elite-design-training',
    title: 'Elite Design Training',
    value: '$1,498',
    text: 'Build real-world design skills through interactive lessons and an exclusive masterclass with Jane Lockhart.',
  },
  {
    id: 'personal-mentorship',
    title: 'Personal Mentorship',
    value: '$525+',
    text: 'Seven 1-on-1 professional audio feedback sessions from a practicing design expert and business owner—a level of personal mentorship only available only at QC.',
  },
  {
    id: 'career-launch-toolkit',
    title: 'The Career-Launch Toolkit',
    value: '$300+',
    text: 'Start working faster with ready-to-use client contracts, invoice templates, a customizable onboarding package, social media templates and business planning tools.',
  },
  {
    id: 'business-start-up-guide',
    title: 'The Business Start-Up Guide',
    value: '$200',
    text: 'In a specialized unit, learn how to manage projects, work confidently with clients and contractors, and run your business like a professional.',
  },
  {
    id: 'pro-design-software',
    title: 'Pro Design Software',
    value: '$300',
    text: 'Create polished, client-ready presentations and digital floor plans with four months free access to DesignFiles.',
  },
  {
    id: 'lifetime-iddp-credential',
    title: <>Lifetime IDDP&trade; Credential (No Renewal Fees)</>,
    value: '$600+ / year',
    text: 'Earn a globally recognized designation that builds credibility and supports your career long-term.',
  },
  {
    id: 'accelerate-your-business-workshop',
    title: 'BONUS: Accelerate Your Business Workshop',
    value: '$1,248',
    text: 'Maximize your earning potential with advanced marketing and business strategies—includes a mentor-led business review.',
  },
  {
    id: 'virtual-design-training',
    title: 'BONUS: Virtual Design Training',
    value: '$350',
    text: 'Access proven virtual design workflows to bring your business online and reach a global audience.',
  },
];
