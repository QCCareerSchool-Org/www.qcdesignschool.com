import type { FC } from 'react';

import { Certification } from './certification';
import { Highlights } from './highlights';
import PosterImage from './poster.jpg';

export const WhyQC: FC = () => {
  return (
    <section id="why-qc">
      <div className="container text-center">
        <p className="lead mb-3">Why Learn with QC Design School?</p>
        <h2 className="mb-3">A Trusted Name in Design Education</h2>
        <p className="mb-4">With over 40 years of excellence in design education and <strong>45,000+</strong> graduates worldwide, QC's flexible online platform combines interactive lessons, hands-on projects and expert feedback to help you excel in the design world&mdash;whether you're building a new career or pursuing your passion. From your first lesson to graduation day, our team is here to support and inspire your journey every step of the way.</p>
        <div className="ratio ratio-16x9 mb-5">
          <video src="https://51d9ccad7be11d8ada71-aeafba698c87c1173d616904e85b2e3e.ssl.cf1.rackcdn.com/design-marketing-video.mp4" poster={PosterImage.src} controls preload="metadata" />
        </div>
        <div className="mb-5">
          <Highlights />
        </div>
        <Certification />
      </div>
    </section>
  );
};
