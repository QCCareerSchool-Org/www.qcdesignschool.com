import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.scss';
import ScrollButton from './scroll-button';
import SocialImageDesktop from './social-image-desktop.png';
import SocialImageMobile from './social-image-mobile.jpg';
import SocialImage from './social-image.png';
import { SuccessTeamModalSection } from './success-team-modal-section';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { GetStartedSection } from '@/components/getStartedSection';
import IconHeart from '@/components/icons/icon-heart.svg';
import { CountUp } from '@/components/paymentPlanSection/countUp';
import { StudentShowcaseSection } from '@/components/studentShowcase';
import { students } from '@/components/studentShowcase/data';
import { TestimonialWallSection } from '@/components/testimonialWallSection';

export const metadata: Metadata = {
  title: 'Student Success',
  description: 'Join 45,000+ students and graduates shaping the future of design and explore their inspiring success stories and impressive design work!',
  alternates: { canonical: '/student-success' },
};

const testimonialIds = [ 'TD-0008', 'TD-0003', 'TD-0012', 'TD-0009', 'TD-0005', 'TD-0001' ];

const SuccessPage: PageComponent = () => (
  <div className={styles.page}>
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-md-10 col-xl-9 col-xxl-8">
            <div className={styles.subtitle}>40 Years of Excellence in Distance Education</div>
            <h2 className="mb-4"><>Join <CountUp value={45} />,000+ Students &amp; Graduates Shaping the Future of Design</></h2>
            <p className="lead mb-0">With over 45,000 students &amp; graduates and 40 years in distance education, QC Design School empowers your passion for design and transforms it into a successful career. Learn from the best and join a community that's redefining the industry.</p>
          </div>
          <div className="text-left">
            <ScrollButton targetSelector="section" />
          </div>
          <video controls muted loop style={{ width: '500px', height: '300px', borderRadius: '35px' }} poster="/videos/testimonial-thumb.png"> {/* non-rounded thumbnail preferred, can use borderRadius to round video after (avoid uneven border rounding) */}
            <source src="https://51d9ccad7be11d8ada71-aeafba698c87c1173d616904e85b2e3e.ssl.cf1.rackcdn.com/no-cta-testimonial-ad-montage.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
    <StudentShowcaseSection student={students['chantal-marion']} />
    <StudentShowcaseSection student={students['rachael-stafford']} />
    <section className={`${styles.section} text-white pb-0 pb-lg-5`} style={{ backgroundColor: '#EE9600' }}>
      <div className="d-none d-lg-block"><BackgroundImage src={SocialImageDesktop} objectPosition={'100% 50%'} /></div>
      <div className="container">
        <div className="row justify-content-center align-items-center g-lg-s">
          <div className="col-12 col-lg-7 col-xxl-6 ms-auto">
            <h3 className="mb-4">Design Around Life</h3>
            <p className="lead mb-4" style={{ marginRight: '60px' }}><strong>For Tylar Fertuck,</strong> QC&apos;s self-paced courses fit seamlessly between day-care runs and content uploads—proving that career growth, family life, and social influence don&apos;t have to compete. With a flexible program that adapts to your schedule, they can fuel one another.</p>
            <Link href="https://enroll.qcdesignschool.com">
              <button className="btn btn-primary btn-lg flex items-center mb-lg-5"><IconHeart height="22" className="me-2" style={{ position: 'relative', top: -1 }} />Start Today</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="d-none d-md-block d-lg-none text-center"><Image src={SocialImage} alt="" style={{ width: '70%', height: 'auto' }} /></div>
      <div className="d-md-none"><Image src={SocialImageMobile} alt="" style={{ width: '100%', height: 'auto' }} /></div>
    </section>
    <StudentShowcaseSection student={students['jamie-cromar']} />
    <StudentShowcaseSection student={students['curstyn-carter']} />
    <section>
      <div className="container">
        <div style={{ width: '100%', height: '1px', backgroundColor: '#506172', margin: '0 auto 1rem', marginBottom: '3rem' }} />
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-10 col-xl-9 col-xxl-8">
            <h2 className="mb-4 mt-lg-5">From Showcase To Spotlight&mdash;<br />You&apos;re Next</h2>
            <p className="lead mb-0">Turn your passion into a professional future with the training and support that set our grads apart.</p>
            <Link href="https://enroll.qcdesignschool.com">
              <button className="btn btn-outline-medium btn-lg mt-4" style={{ borderWidth: '2px', borderColor: '#02013f' }}>Join QC Design School</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <SuccessTeamModalSection className={`${styles.section} text-white`} />
    <section>
      <h2 className="text-center">What Our Students and Grads Are Saying</h2>
      <TestimonialWallSection testimonialIds={testimonialIds} hideHeading={true} />
    </section>
    <GetStartedSection
      title="Ready To Start Your Interior Design and Decorating Career?"
      text="Your career starts today. Join thousands of aspiring designers building a future they love."
      buttonHref="https://enroll.qcdesignschool.com/?c=i2"
      buttonText="Enroll Today"
    />
  </div>
);

export default SuccessPage;
