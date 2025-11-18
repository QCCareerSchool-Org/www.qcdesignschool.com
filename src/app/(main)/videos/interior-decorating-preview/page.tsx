import PosterImage from '@/app/(blank)/previews/interior-decorating/_sections/platform/poster.jpg';
import type { PageComponent } from '@/app/serverComponent';

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
