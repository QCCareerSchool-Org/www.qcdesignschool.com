import type { FC } from 'react';

import DestineeMelendelImage from './distinee-melendel.jpg';
import { FeaturedGrad } from './featuredGrad';
import { Testimonials } from './tesimonials';

export const Stories: FC = () => (
  <section id="stories" className="bg-light">
    <div className="container text-center">
      <p className="lead mb-3">Student Showcase</p>
      <h2 className="mb-5">From Passion to Profession</h2>
      <div className="ratio ratio-16x9 mb-5">
        <video src="https://51d9ccad7be11d8ada71-aeafba698c87c1173d616904e85b2e3e.ssl.cf1.rackcdn.com/distinee-melendel.mp4" poster={DestineeMelendelImage.src} controls preload="metadata" />
      </div>
      <div className="mb-5">
        <p className="lead"><span className="fst-italic">&ldquo;I chose QC because it allows me to work virtually from home&mdash;it was able to fit within my schedule. I like the fact that QC provides the opportunity for us to do the work at our own pace.&rdquo;</span> (Watch time 150s)</p>
      </div>
      <div className="mb-5">
        <Testimonials />
      </div>
      <FeaturedGrad />
    </div>
  </section>
);
