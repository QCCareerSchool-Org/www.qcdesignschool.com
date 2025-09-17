import Image from 'next/image';
import type { FC } from 'react';

import styles from './index.module.scss';
import Portfolio1Image from './portfolio-1.jpg';
import Portfolio2Image from './portfolio-2.jpg';
import Portfolio3Image from './portfolio-3.jpg';
import ProfileImage from './profile.jpg';

export const FeaturedGrad: FC = () => (
  <div className="row justify-content-center g-4">
    <div className="col-12 col-md-8 col-lg-6 col-xl-6">
      <Image src={ProfileImage} className="img-fluid" alt="Rachel Stafford" />
    </div>
    <div className="col-12 col-xl-6 text-xl-start d-flex flex-column justify-content-between">
      <div>
        <h3>Featured Grad: Rachael Stafford</h3>
        <p className="lead">Founder and Creative Director of Order in the House</p>
        <div className="d-block d-xl-none d-xxl-block">
          <p>&ldquo;I chose QC Design School after researching online certifications. The courses were flexible, well laid out, and budget-friendly. As someone working full-time, being able to study at my own pace was a must. I looked forward to each assignment, and completing the course gave me the confidence to expand my existing organizing and moving services into staging and redesign as well. Getting A's across the board didn't hurt either!</p>
          <p>&ldquo;The QC course was incredibly practical. It confirmed my skills, helped me grow, and gave me credibility in a competitive market like the GTA. I'd recommend QC to anyone looking to break into the design space. It's approachable, effective, and built for real life.</p>
          <p>&ldquo;As a mom, wife, and entrepreneur, I've always valued calm and balance, which is exactly what I strive to bring to my clients' homes. Helping people feel less stressed during major transitions like moving or selling a home is incredibly rewarding, and I'm grateful to do it alongside our amazing team.</p>
          <p>&ldquo;Every time we help a family settle into their new space or stage a home for a successful sale, I feel proud of the work we do. That little leap of enrolling in QC helped launch a business I truly love.&rdquo;</p>
        </div>
        <div className="d-none d-xl-block d-xxl-none">
          <p>&ldquo;I chose QC Design School after researching online certifications. The courses were flexible, well laid out, and budget-friendly. As someone working full-time, being able to study at my own pace was a must. I looked forward to each assignment, and completing the course gave me the confidence to expand my existing organizing and moving services into staging and redesign as well.</p>
          <p>&ldquo;The QC course was incredibly practical. It confirmed my skills, helped me grow, and gave me credibility in a competitive market. I'd recommend QC to anyone looking to break into the design space. It's approachable, effective, and built for real life. Every time we help a family settle into their new space or stage a home for a successful sale, I feel proud of the work we do. That little leap of enrolling in QC helped launch a business I truly love.&rdquo;</p>
        </div>
      </div>
      <div className="mt-3 d-flex justify-content-between">
        <Image src={Portfolio1Image} className={styles.image} alt="1" />
        <Image src={Portfolio2Image} className={styles.image} alt="2" />
        <Image src={Portfolio3Image} className={styles.image} alt="3" />
      </div>
    </div>
  </div>
);
