'use client';

import { type FC, useState } from 'react';
import { Lightbox } from 'yet-another-react-lightbox';
import Video from 'yet-another-react-lightbox/plugins/video';

import 'yet-another-react-lightbox/styles.css';
import { VideoCard } from './videoCard';
import { videos, videoSlides } from './videos';

export const TestimonialVideoSection: FC = () => {
  const [ slideIndex, setSlideIndex ] = useState<number>(0);
  const [ open, setOpen ] = useState<boolean>(false);

  return (
    <>
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12 col-md-10 col-lg-8">
              <h2>Join 45,000+ Student & Graduates Shaping the Future of Design</h2>
              <p>With over 45,000 students & graduates and 40 years in distance education, QC Design School empowers your passion for design and transforms it into a successful career. Learn from the best and join a community that's redefining the industry.</p>
            </div>
          </div>
          <div className="row justify-content-center g-5">
            {videos.map((video, index) => (
              <VideoCard {...video} key={video.src} open={() => { setSlideIndex(index); setOpen(true); }} />
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={open}
        index={slideIndex}
        close={() => setOpen(false)}
        plugins={[ Video ]}
        slides={videoSlides}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
};