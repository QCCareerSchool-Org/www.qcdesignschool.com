import Image from 'next/image';
import type { FC } from 'react';

import DesktopImage from './desktop.jpg';
import MobileImage from './mobile.jpg';

type Props = {
  text?: string;
  callToAction?: string;
};

const defaultText = "Be a member of QC's supportive Virtual Community where students and graduates can connect with mentors, share insights and grow together. Tap into free webinars where top design professionals share industry secrets, and take part in lively discussions covering everything from your latest assignment to your next career move. We're here to inspire and enhance your educational journey.";
const defaultCallToAction = 'Join us in shaping the future of the design industry.';

export const VirtualCommunitySection: FC<Props> = ({ text, callToAction }) => (
  <section className="pb-0">
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <h2 className="mb-3">Access an Exclusive Virtual Community Where Creativity Thrives</h2>
          <p className="mb-0">{text ?? defaultText}</p>
          <p className="fw-bold">{callToAction ?? defaultCallToAction}</p>
        </div>
      </div>
      <div className="d-none d-sm-block"><Image src={DesktopImage} alt="" style={{ width: '100%', height: 'auto' }} /></div>
    </div>
    <div className="d-sm-none"><Image src={MobileImage} alt="" style={{ width: '100%', height: 'auto' }} /></div>
  </section>
);
