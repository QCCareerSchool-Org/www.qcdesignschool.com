import { CertificationSection } from '@/app/(landing)/_components/certificationSection';
import { JoinQCSection } from '@/app/(landing)/_components/joinQCSection';
import { ThankYouSection } from '@/app/(main)/(thank-you)/_components/thankYouSection';
import CertificationBackgroundImage from '@/app/(main)/online-courses/interior-decorating/cert-bg.jpg';
import type { GenerateMetadata, PageComponent } from '@/app/serverComponent';
import CertificationIcon from '@/components/certificationLogos/iddp.svg';
import { GetStartedSection } from '@/components/getStartedSection';
import { SupportSection } from '@/components/supportSection';
import { TestimonialVideoSection } from '@/components/testimonialVideoSection';
import { getData } from '@/lib/getData';
import { getDesignRestricted } from '@/lib/restrictions';

export const generateMetadata: GenerateMetadata = async () => {
  const { countryCode, provinceCode } = await getData();

  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  return {
    title: `Download Your Interior ${designRestricted ? 'Decorating' : 'Design'} Course Catalog`,
    description: `Download your course catalog to explore QC's Interior ${designRestricted ? 'Decorating' : 'Design'} Certification and online design courses!`,
    alternates: { canonical: '/download-interior-design-course-catalog' },
    robots: { index: false },
  };
};

const DownloadInteriorDesignCourseCatalogPage: PageComponent = async () => {
  const { countryCode, provinceCode } = await getData();

  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  return (
    <>
      <ThankYouSection courseName={`Interior ${designRestricted ? 'Decorating' : 'Design'}`} course="design" />
      <TestimonialVideoSection heading="Student Success Stories" subtitle={false} />
      <JoinQCSection className="bg-white" />
      <CertificationSection
        backgroundImageSrc={CertificationBackgroundImage}
        certification={<CertificationIcon fill="#faf0b6" alt="International Design and Decorating Professional (IDDP™) certification" />}
        overlayColor="rgb(0,0,0,0.2)"
      >
        <h2 className="h3">Your Design Certification</h2>
        <p>Once you've completed the Interior {designRestricted ? 'Decorating' : 'Design'} Course online, you'll graduate with the International Design and Decorating Professional™ (IDDP™ ) certificate. This internationally recognized professional designation is yours to use for life.</p>
        <p>Your certificate demonstrates that you have successfully completed professional training in the design & decorating industry and you possess all the skills and knowledge required to be successful in the industry.</p>
        <h3 className="h5">What Your Certification Unlocks</h3>
        <ul className="mb-0">
          <li>Launch your own home design and decorating business with comprehensive business training included in your course</li>
          <li>Secure a position at an established design and decorating firm</li>
          <li>Design corporate offices, conference rooms, and retail stores</li>
          <li>Offer expert consulting services to both residential and commercial clients</li>
        </ul>
        <div className="d-none d-lg-block d-xxl-none" style={{ height: 100 }} />
        <div className="d-lg-none" style={{ height: 180 }} />
      </CertificationSection>
      <SupportSection showLink />
      <GetStartedSection title="Ready to start your design career?" text="Become professionally certified with QC's online training today and start earning!" />
    </>
  );
};

export default DownloadInteriorDesignCourseCatalogPage;
