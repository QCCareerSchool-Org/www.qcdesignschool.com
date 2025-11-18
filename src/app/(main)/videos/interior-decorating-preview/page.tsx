import type { Metadata } from 'next';

import PosterImage from '@/app/(blank)/previews/interior-decorating/_sections/platform/poster.jpg';
import type { PageComponent } from '@/app/serverComponent';

export const metadata: Metadata = {
  title: 'Your Journey Starts Here',
  description: 'Unleash your creativity and shape the future of design with QC Design School. Together we can tranform your passion into a dynamic, thriving career.',
};

const InteriorDecoratingPreviewVideoPage: PageComponent = () => (
  <section className="bg-light py-4">
    <div className="container">
      <div className="ratio ratio-16x9 mb-s">
        <video src="https://51d9ccad7be11d8ada71-aeafba698c87c1173d616904e85b2e3e.ssl.cf1.rackcdn.com/qc-student-center.mp4" poster={PosterImage.src} controls preload="metadata" />
      </div>
    </div>
  </section>
);

export default InteriorDecoratingPreviewVideoPage;
