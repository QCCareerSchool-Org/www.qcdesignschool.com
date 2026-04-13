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
        <video src="https://cdn.qccareerschool.com/design/distinee-melendel.mp4" poster={DestineeMelendelImage.src} controls preload="metadata" />
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
