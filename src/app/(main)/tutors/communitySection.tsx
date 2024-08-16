import Image from 'next/image';
import type { FC } from 'react';

import CommunityImage from '@/components/tutors/virtual-community.jpg';

export const CommunitySection: FC = () => (
  <>
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8 text-center">
            <h2 className="mb-3">Access an Exclusive Virtual Community Where Creativity Thrives</h2>
            <p className="mb-2">We're here to inspire, inform, and innovate your educational journey. Discover the vibrant heart of our Virtual Community, where students and graduates connect to mentor, share insights, and grow together. Tap into free webinars for deep dives into design and industry secrets, and join lively chats for discussions that range from studies to career paths.</p>
            <p className="text-dark">Join us in shaping the future of design innovation.</p>
          </div>
        </div>
      </div>
    </section>
    <Image src={CommunityImage} alt="" style={{ width: '100%', height: 'auto' }} />
  </>
);
