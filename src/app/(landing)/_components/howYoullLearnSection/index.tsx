'use client';

import Image from 'next/image';
import type { FC } from 'react';

import styles from './index.module.scss';
import VideoPlayerImage from './video-player.jpg';
import BookHeartIcon from '@/components/icons/book-heart.svg';
import CertificationIcon from '@/components/icons/certification.svg';
import CheckCircleIcon from '@/components/icons/check-circle.svg';
import { VideoPopup } from '@/components/marketingVideo';
import HowYoullLearnImage from '@/images/how-youll-learn.jpg';

const iconHeight = '1.5rem';

type Props = {
  graduateTitle: string;
  withVideo?: boolean;
};

export const HowYoullLearnSection: FC<Props> = ({ graduateTitle, withVideo = false }) => (
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
                  src: 'https://51d9ccad7be11d8ada71-aeafba698c87c1173d616904e85b2e3e.ssl.cf1.rackcdn.com/design-marketing-video.mp4',
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
          <h2 className="h3 mb-4">How You'll Learn</h2>
          <p className="lead fw-bold mb-4">You don't need a university degree to become a professional {graduateTitle}!</p>
          <p className="mb-4">With QC Design School, you'll receive high-quality, comprehensive training to start a successful career without the high tuition fees of associate degree programs.</p>
          <ul className={`${styles.list} list-unstyled mb-0`}>
            <li>
              <div className={styles.listWrapper}>
                <div className={styles.listIcon}>
                  <CheckCircleIcon height={iconHeight} style={{ position: 'relative', top: -1 }} />
                </div>
                <div className={styles.listText}>
                  <strong>Enroll Today & Start</strong>&mdash;No deadlines&mdash;Enroll anytime! Access your course online in two business days and join the exclusive Virtual Community.
                </div>
              </div>
            </li>
            <li>
              <div className={styles.listWrapper}>
                <div className={styles.listIcon}>
                  <BookHeartIcon height={iconHeight} style={{ position: 'relative', top: -1 }} />
                </div>
                <div className={styles.listText}>
                  <strong>Study & Submit Assignments</strong>&mdash;Complete your work in the Online Student Center and get personalized audio feedback.
                </div>
              </div>
            </li>
            <li>
              <div className={styles.listWrapper}>
                <div className={styles.listIcon}>
                  <CertificationIcon height={iconHeight} style={{ position: 'relative', top: -1 }} />
                </div>
                <div className={styles.listText}>
                  <strong>Graduate as a professional {graduateTitle}</strong>&mdash;Finish in as little as 3 months, earn your certification, and start booking clients.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
