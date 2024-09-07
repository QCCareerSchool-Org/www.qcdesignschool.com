import type { FC } from 'react';

import styles from './page.module.scss';
import BarChartIcon from '@/components/icons/bar-chart.svg';
import BriefcaseIcon from '@/components/icons/briefcase.svg';
import RulerIcon from '@/components/icons/ruler.svg';

type Props = {
  className?: string;
};

const iconHeight = 32;

export const InfoSection: FC<Props> = ({ className }) => (
  <section className={className}>
    <div className="container">
      <div className="row justify-content-center g-4">
        <div className="col-12 col-sm-10 col-xl-4">
          <BriefcaseIcon height={iconHeight} className={`${styles.cobaltGrey} mb-3`} />
          <h2 className="h4 mb-3">Start a Design Business</h2>
          <p>QC Design School prepares you to become a successful design professional and business owner. Optional business training in every course covers setting up your company, writing an effective business plan, and marketing your services. You'll gain the skills needed to run your own successful design business in any design stream.</p>
        </div>
        <div className="col-12 col-sm-10 col-xl-4">
          <BarChartIcon height={iconHeight} className={`${styles.cobaltGrey} mb-3`} />
          <h2 className="h4 mb-3">Expand your Existing Business</h2>
          <p>If you're a seasoned design professional and are looking to take your career to the next level, adding a specialization and certification to your business is a great way to achieve this goal! Every stream in the home design industry complements the others. Offering more than once service in your design business can increase your revenue and improve client retention.</p>
        </div>
        <div className="col-12 col-sm-10 col-xl-4">
          <RulerIcon height={iconHeight} className={`${styles.cobaltGrey} mb-3`} />
          <h2 className="h4 mb-3">Work for an Established Home Design Firm</h2>
          <p>You don't have to start your own business to become a successful designer. Professional home design firms are always looking to add talent to their ranks. Being a certified design professional will give you a competitive advantage when looking for design jobs.</p>
        </div>
      </div>
    </div>
  </section>
);
