import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';

import styles from './index.module.scss';
import type { Price } from '@/domain/price';
import { formatPrice } from '@/lib/formatPrice';

interface Props {
  price: Price;
}

export const EnrollmentValueSection: FC<Props> = ({ price }) => {
  const fullTotal = `${price.currency.symbol}${formatPrice(price.plans.full.total, 2, true)}`;
  const deposit = `${price.currency.symbol}${formatPrice(price.plans.part.deposit, 2, true)}`;
  const installment = `${price.currency.symbol}${formatPrice(price.plans.part.installmentSize, 2, true)}`;
  const href = 'https://enroll.qcdesignschool.com?c=i2';

  return (
    <section id="whatsIncluded">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-9 col-xl-8">
            <h2>What's Included in Your Enrollment</h2>
            <p className="lead mb-3">Total Value: $5071+ | Your Investment: {fullTotal}</p>
            <p className="mb-0">When you enroll in the Interior Design/Decorating: Career Accelerator, you aren't just purchasing a course&mdash;you're getting everything you need to become a career-ready design professional and build a profitable business.</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <div className={styles.enrollmentCard}>
              <div className={styles.enrollmentList}>
                {enrollmentItems.map(item => (
                  <div className={styles.enrollmentItem} key={item.id}>
                    <div className={styles.enrollmentCheck} aria-hidden="true"><FaRegCheckCircle size={18} /></div>
                    <div>
                      <h3 className="h6 mb-1">{item.title}</h3>
                      <p className="mb-0">{item.text}</p>
                    </div>
                    <div className={styles.enrollmentValue}><span className="badge bg-secondary rounded-pill px-3 py-2 bg-light text-black">Value: {item.value}</span></div>
                  </div>
                ))}
              </div>
              <div className={styles.pricingCta}>
                <div className="text-white">
                  <p className="lead fw-bold mb-2">Ready To Launch Your Career?</p>
                  <p className="mb-0 small">Start today with flexible payment options.</p>
                </div>
                <div className={styles.pricingOptions}>
                  <div className={styles.pricingOption}>
                    <div className="small text-white-50">Pay in full</div>
                    <div className={styles.pricingAmount}>{fullTotal}</div>
                  </div>
                  <div className={styles.pricingOption}>
                    <div className="small text-white-50">Installments</div>
                    <div className={styles.pricingAmount}>{deposit} down</div>
                    <div className="small text-white-50">{price.plans.part.installments} payments of {installment}</div>
                  </div>
                  <Link href={href} className="btn btn-light">Enroll Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
    text: 'Seven 1-on-1 professional audio feedback sessions from a practicing design expert and business owner - a level of personal mentorship only available only at QC.',
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
    text: 'Maximize your earning potential with advanced marketing and business strategies - includes a mentor-led business review.',
  },
  {
    id: 'virtual-design-training',
    title: 'BONUS: Virtual Design Training',
    value: '$350',
    text: 'Access proven virtual design workflows to bring your business online and reach a global audience.',
  },
];
