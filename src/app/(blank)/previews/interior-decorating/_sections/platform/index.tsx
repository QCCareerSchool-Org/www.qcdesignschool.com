import type { FC } from 'react';

import { PlatformExperts } from './experts';
import { PlatformFeatures } from './features';
import PosterImage from './poster.jpg';

export const Platform: FC = () => (
  <section id="platform" className="bg-light">
    <div className="container text-center">
      <div className="lead mb-3">See the Platform</div>
      <h2 className="mb-3">Peek Inside the Student Center</h2>
      <p className="mb-4">Our intuitive, mobile-friendly platform is designed for your convenience. You can access anytime, anywhere from your phone, tablet or laptop. Enjoy interactive lessons, engaging activities, and a seamless experience that keeps you motivated and on track.</p>
      <div className="ratio ratio-16x9 mb-5">
        <video src="https://51d9ccad7be11d8ada71-aeafba698c87c1173d616904e85b2e3e.ssl.cf1.rackcdn.com/qc-student-center.mp4" poster={PosterImage.src} controls preload="metadata" />
      </div>
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-lg-10">
          <p className="lead mb-0"><span className="fst-italic">&ldquo;I enrolled in the Interior Design & Decorating and Home Staging for Designers courses and instantly began to benefit from the convenience of being able to study online and pursue my passion and joy. There was never a moment I felt alone because I knew that help was always a phone call away. Personally, I really enjoyed getting feedback from my tutor on my assignments and knowing that if I had a query, help was just a phone call away. The student center was particularly helpful.&rdquo;</span>&mdash;Doxceen Malcolm</p>
        </div>
      </div>
      <div className="mb-s">
        <PlatformFeatures />
      </div>
      <PlatformExperts />
    </div>
  </section>
);
