import Image from 'next/image';
import type { FC } from 'react';

import DesktopImage from './desktop.jpg';
import MobileImage from './mobile.jpg';

export const VirtualCommunitySection: FC = () => (
  <section className="pb-0">
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <h2 className="mb-3">Access an Exclusive Virtual Community Where Creativity Thrives</h2>
          <p className="mb-0">We're here to inspire, inform, and innovate your educational journey. Discover the vibrant heart of our Virtual Community, where students and graduates connect to mentor, share insights, and grow together. Tap into free webinars for deep dives into design and industry secrets, and join lively chats for discussions that range from studies to career paths.</p>
          <p className="text-black">Join us in shaping the future of design innovation.</p>
        </div>
      </div>
      <div className="d-none d-sm-block"><Image src={DesktopImage} alt="" style={{ width: '100%', height: 'auto' }} /></div>
    </div>
    <div className="d-sm-none"><Image src={MobileImage} alt="" style={{ width: '100%', height: 'auto' }} /></div>
  </section>
);
