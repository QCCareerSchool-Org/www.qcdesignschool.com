import type { Metadata } from 'next';

import Link from 'next/link';
import { BottomSection } from '../bottomSection';
import { AboutSection } from '../free-course-catalog/_sections/aboutSection';
import { CertificationSection } from '../free-course-catalog/_sections/certificationSection';
import { HowYoullLearnSection } from '../free-course-catalog/_sections/howYoullLearnSection';
import { JoinQCSection } from '../free-course-catalog/_sections/joinQCSection';
import { Header } from '../header';
import HeroDesktopImage from './hero-large.jpg';
import HeroMobileImage from './hero-small.jpg';
import styles from './page.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { BrevoForm } from '@/components/brevoForm';
import DownloadIcon from '@/components/icons/download.svg';
import { TestimonialSection } from '@/components/testimonialSection';
import { getData } from '@/lib/getData';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Free Catalog - QC Design School',
};

const FreeCatalogPage: PageComponent = ({ searchParams }) => {
  const { countryCode, provinceCode } = getData();
  const gclid = getParam(searchParams.gclid);
  const msclkid = getParam(searchParams.msclkid);
  const utmSource = getParam(searchParams.utm_source);
  const utmMedium = getParam(searchParams.utm_medium);
  const utmCampaign = getParam(searchParams.utm_campaign);
  const utmContent = getParam(searchParams.utm_content);
  const utmTerm = getParam(searchParams.utm_term);

  return (
    <>
      <Header logoLink buttonContent={<><span className="text-light"><DownloadIcon height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span><span className="d-none d-sm-inline">Get Your Free </span>Catalog</>} />
      <section className="text-white">
        <BackgroundImage desktopSrc={HeroDesktopImage} mobileSrc={HeroMobileImage} mobileObjectPosition="50% 100%" />
        <div className="container">
          <div className="row g-0">
            <div className="col-12 col-md-7 col-lg-6 col-xl-5 order-lg-first">
              <div className={`card bg-light ${styles.card}`}>
                <div className="card-body">
                  <h1 className="h3 mb-3 text-navy">Become a Home Designer</h1>
                  <h3 className="h6 mb-4 text-navy">Download the Course Catalog</h3>
                  <div className={styles.formWrapper}>
                    <BrevoForm
                      successLocation="https://www-qcdesignschool-com.vercel.app/thank-you-interior-decorating-course-catalog"
                      listId={4}
                      countryCode={countryCode}
                      provinceCode={provinceCode}
                      gclid={gclid}
                      msclkid={msclkid}
                      utmSource={utmSource}
                      utmMedium={utmMedium}
                      utmCampaign={utmCampaign}
                      utmContent={utmContent}
                      utmTerm={utmTerm}
                      placeholders
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HowYoullLearnSection />
      <JoinQCSection />
      <TestimonialSection id="TD-0006" />
      <CertificationSection />
      <AboutSection />
      <BottomSection>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-9 col-xxl-8">
            <h2 className="mb-5">Get Started with a Free Course Catalog</h2>
            <Link href="#" className="btn btn-primary btn-lg">Get Your Free Catalog</Link>
          </div>
        </div>
      </BottomSection>
    </>
  );
};

export default FreeCatalogPage;
