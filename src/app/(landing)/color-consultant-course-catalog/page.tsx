import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Link from 'next/link';

import HeroImage from './hero.jpg';
import { AboutSection } from '../_components/aboutSection';
import { BottomSection } from '../_components/bottomSection';
import { CertificationSection } from '../_components/certificationSection';
import { FormCard } from '../_components/formCard';
import { FormWrapper } from '../_components/formWrapper';
import { Header } from '../_components/header';
import { HowYoullLearnSection } from '../_components/howYoullLearnSection';
import { JoinQCSection } from '../_components/joinQCSection';
import CertificationBackgroundImage from '@/app/(main)/online-courses/color-consultant/cert-bg.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { BrevoForm } from '@/components/brevoForm';
import CertificationIcon from '@/components/certificationLogos/iccp.svg';
import DownloadIcon from '@/components/icons/download.svg';
import { TestimonialSection } from '@/components/testimonialSection';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Free Color Consultant Course Catalog - QC Design School',
};

const brevoListId = 7; // General Leads
const brevoEmailTemplateId = 58; // General

const ColorConsultantCourseCatalogPage: PageComponent = ({ searchParams }) => {
  const gclid = getParam(searchParams.gclid);
  const msclkid = getParam(searchParams.msclkid);
  const utmSource = getParam(searchParams.utm_source);
  const utmMedium = getParam(searchParams.utm_medium);
  const utmCampaign = getParam(searchParams.utm_campaign);
  const utmContent = getParam(searchParams.utm_content);
  const utmTerm = getParam(searchParams.utm_term);
  const headerList = headers();
  const referrer = headerList.get('referer');

  return (
    <>
      <Header logoLink buttonContent={<><span className="text-light"><DownloadIcon height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span><span className="d-none d-sm-inline">Get Your Free </span>Catalog</>} />
      <section className="text-white">
        <BackgroundImage src={HeroImage} />
        <div className="container">
          <div className="row g-0">
            <div className="col-12 col-md-7 col-lg-6 col-xl-5">
              <FormCard>
                <h1 className="h2 mb-3 text-navy">Become a Color Consultant</h1>
                <h3 className="h6 mb-4 text-navy">Download the Free Course Catalog</h3>
                <FormWrapper>
                  <BrevoForm
                    successLocation={`${process.env.HOST ?? 'https://www.qcdesignschool.com'}/thank-you-color-consultant-course-catalog`}
                    listId={brevoListId}
                    emailTemplateId={brevoEmailTemplateId}
                    gclid={gclid}
                    msclkid={msclkid}
                    utmSource={utmSource}
                    utmMedium={utmMedium}
                    utmCampaign={utmCampaign}
                    utmContent={utmContent}
                    utmTerm={utmTerm}
                    referrer={referrer}
                    placeholders
                  />
                </FormWrapper>
              </FormCard>
            </div>
          </div>
        </div>
      </section>
      <HowYoullLearnSection />
      <JoinQCSection />
      <TestimonialSection id="TD-0006" />
      <CertificationSection backgroundImageSrc={CertificationBackgroundImage} certification={<CertificationIcon alt="International Color Consulting Professional (ICCP™) certification" />}>
        <h2 className="h3">Your Color Consultant Certification</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam enim lorem, convallis ac cursus ac, mollis sed dui. Etiam et lectus imperdiet, aliquet mi ut, tempor nulla.</p>
        <p>Maecenas euismod scelerisque mauris. Maecenas a nibh vel purus iaculis sodales ac id ipsum. Integer sollicitudin mollis dui. In nec nibh ultricies, pharetra neque eu, sollicitudin diam. Etiam odio metus, consequat in mi quis, faucibus posuere elit.</p>
        <h3 className="h5">What Your Certification Unlocks</h3>
        <ul className="mb-0">
          <li>Sed urna urna, molestie vitae ipsum vitae, venenatis rhoncus arcu. Aliquam ultrices accumsan urna, at gravida quam</li>
          <li>Morbi imperdiet quis dolor et blandit. Ut gravida quis urna vel molestie. Nulla et enim odio</li>
          <li>Pellentesque pretium dui a leo molestie mattis. Fusce in diam in neque fringilla pharetra</li>
        </ul>
      </CertificationSection>
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

export default ColorConsultantCourseCatalogPage;