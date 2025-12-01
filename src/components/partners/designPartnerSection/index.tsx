import type { FC } from 'react';

import Background from './background.jpg';
import { DDA } from './dda';
// import { DSA } from './dsa';
import { BackgroundImage } from '@/components/backgroundImage';
import { Overlay } from '@/components/overlay';

interface Props {
  countryCode: string;
}

export const DesignPartnerSection: FC<Props> = ({ countryCode }) => {
  if (countryCode === 'CA') {
    return (
      <section className="text-white text-center text-shadow">
        <BackgroundImage src={Background} />
        <Overlay backgroundColor="rgba(0,0,0,0.4)" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-6">
              <DDA />
              {/* {countryCode === 'CA' ? <DDA /> : <DSA />} */}
            </div>
          </div>
        </div>
      </section>
    );
  }
};
