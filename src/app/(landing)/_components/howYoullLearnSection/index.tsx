'use client';

import Image from 'next/image';
import type { FC } from 'react';

import styles from './index.module.scss';
import VideoPlayerImage from './video-player.jpg';
import { VideoPopup } from '@/components/videoPopup';
import HowYoullLearnImage from '@/images/how-youll-learn.jpg';
import { getDesignRestricted } from '@/lib/restrictions';

interface Props {
  graduateTitle: string;
  withVideo?: boolean;
  countryCode: string;
  provinceCode: string | null;
}

export const HowYoullLearnSection: FC<Props> = ({ withVideo = false, countryCode, provinceCode }) => {
  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  return (
    <section>
      <div className="container">
        <div className="row align-items-center justify-content-center g-s">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xxl-6">
            {withVideo ? (
              <VideoPopup
                video={{
                  width: 1280,
                  height: 720,
                  name: 'QC Marketing Video - "How you\'ll learn" section',
                  source: {
                    src: 'https://cdn.qccareerschool.com/design/design-marketing-video.mp4',
                    type: 'video/mp4',
                  },
                }}
              >
                <Image src={VideoPlayerImage} className={styles.howYoullLearn} alt="" />
              </VideoPopup>
            ) : (
              <Image src={HowYoullLearnImage} className={styles.howYoullLearn} alt="" />
            )}
          </div>
          <div className="col-12 col-md-10 col-lg-7 col-xxl-6">
            <h2 className="h3 mb-4">Start Your Interior {designRestricted ? 'Decorating' : 'Design'} Career Today</h2>
            <p className="lead mb-4">{countryCode === 'CA' && 'Join Canada\'s trusted school for aspiring design professionals. '}You'll receive industry-recognized design training and career-ready skills without the high cost of a college or university degree.</p>
            <ul className={`${styles.list} list-unstyled mb-0`}>
              {countryCode === 'CA' && (
                <li><strong>Enjoy Extra Savings:</strong> You could qualify to have over 50% of your course fees covered by claiming the Canada Training Credit and the Tuition Tax Credit.</li>
              )}
              <li><strong>Future-Proof Your Career:</strong> Master the skills AI can't replace & gain the professional edge to offer the custom design, high-end customer service and expert curation that make a designer truly indispensable to their clients.</li>
              <li><strong>Access Top Design Mentors:</strong> Get personalized feedback from a professional designer dedicated to helping you reach a client-ready standard—faster than learning on your own.</li>
              <li><strong>Leverage the Career-Launch Toolkit:</strong> Fast-track your business growth with QC's exclusive ready-to-use contracts, pricing structures, and client-acquisition strategies.</li>
              <li><strong>Learn on Your Schedule:</strong> Enjoy flexible, self-paced online training that fits into your lifestyle—study anytime, anywhere.</li>
              <li><strong>Join a Professional Network:</strong> Stay connected long after you graduate, with opportunities for networking, collaboration, and industry access.</li>
              <li><strong>Earn Your Certification (No Renewal Fees):</strong> Gain a globally recognized credential that establishes your credibility instantly and supports your career for life.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
