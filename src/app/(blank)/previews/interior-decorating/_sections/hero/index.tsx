import Link from 'next/link';
import type { FC } from 'react';

import DesktopImage from './hero-desktop.jpg';
import MobileImage from './hero-mobile.jpg';
import { BackgroundImage } from '@/components/backgroundImage';

export const Hero: FC = () => (
  <section>
    <BackgroundImage src={DesktopImage} objectPosition="50% 100%" mobile={{ src: MobileImage, breakpoint: 'md' }} />
    <div className="container text-center text-white">
      <div className="row justify-content-center">
        <div className="col-12 col-md-11 col-lg-10 col-xl-9">
          <h1 className="mb-4">Turn Your Eye for Style into Real-World Design Skills</h1>
          <p className="lead mb-4 mb-md-0">Step inside QC's immersive Interior Design program—designed to help you build essential skills from day one. Learn how to bring your clients' vision to life and create stunning, functional spaces through expert-guided online training.</p>
          <Link className="d-md-none" href="#why-qc"><button className="btn btn-lg btn-primary">Start Your Preview</button></Link>
        </div>
      </div>
    </div>
  </section>
);
