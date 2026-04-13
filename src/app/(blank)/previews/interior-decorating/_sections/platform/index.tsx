import Image from 'next/image';
import type { FC } from 'react';

import ChantalImage from './chantal.png';
import { PlatformExperts } from './experts';
import { PlatformFeatures } from './features';
import PosterImage from './poster.jpg';

export const Platform: FC = () => (
  <section id="platform" className="bg-light">
    <div className="container text-center">
      <div className="lead mb-3">See the Platform</div>
      <h2 className="mb-3">Peek Inside the Student Center</h2>
      <p className="mb-4">Our intuitive, mobile-friendly platform is designed for your convenience. You can access anytime, anywhere from your phone, tablet or laptop. Enjoy interactive lessons, engaging activities, and a seamless experience that keeps you motivated and on track.</p>
      <div className="ratio ratio-16x9 mb-s">
        <video src="https://cdn.qccareerschool.com/design/qc-student-center.mp4" poster={PosterImage.src} controls preload="metadata" />
      </div>
      <div className="row justify-content-center mb-s">
        <div className="col-6 col-lg-8 mb-3">
          <Image src={ChantalImage} alt="Chantal Marion" className="img-fluid" style={{ width: 275 }} />
        </div>
        <div className="col-12 col-lg-10">
          <p className="lead mb-0"><span className="fst-italic">&ldquo;The courses were very well organized, and I had amazing support from QC as well as my tutor throughout the process. I totally recommend it!&rdquo;</span>&mdash;Chantal Marion</p>
        </div>
      </div>
      <div className="mb-s">
        <PlatformFeatures />
      </div>
      <PlatformExperts />
    </div>
  </section>
);
