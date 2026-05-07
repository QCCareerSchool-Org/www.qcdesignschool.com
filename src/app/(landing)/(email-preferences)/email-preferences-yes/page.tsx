import type { Metadata } from 'next';

import { CurrentPromotion } from '../../_components/currentPromotion';
import { EmailPreferencesYesSection } from '../../_components/emailPreferencesSection/yesSection';
import { Header } from '../../_components/header';
import HeroDesktopImage from '../../free-course-catalog/hero-large.jpg';
import HeroMobileImage from '../../free-course-catalog/hero-small.jpg';
import { GetStartedSection } from '@/components/getStartedSection';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { CourseJsonLd } from '@/components/jsonLd/course';
import { SupportSection } from '@/components/supportSection';
import type { TestimonialId } from '@/components/testimonial/data';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { ThreeReasonsSection } from '@/components/threeReasonsSection';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'You’re officially back in the loop!',
  description: 'Thanks for updating your preferences. We’ll keep sending you design tips, student success stories, exclusive offers, and updates from QC Design School.',
  alternates: { canonical: '/email-preferences-yes' },
  robots: { index: false },
};

const testimonialIds: TestimonialId[] = [ 'TD-0015', 'TD-0014', 'TD-0016' ];

const emailPreferencesYesPage: PageComponent = async props => {
  const { countryCode, date } = await getServerData(props.searchParams);
  return (
    <>
      <CourseJsonLd courseCode="i2" />
      <Header countryCode={countryCode} logoLink />
      <EmailPreferencesYesSection heroSrc={HeroDesktopImage} mobileHeroSrc={HeroMobileImage} countryCode={countryCode} />
      <CurrentPromotion date={date} countryCode={countryCode} />
      <TestimonialWallSection testimonialIds={testimonialIds} schemaCourseId="#courseId" />
      <ThreeReasonsSection />
      <SupportSection date={date} showLink />
      <GuaranteeSection />
      <GetStartedSection
        title="Ready to start your interior decorating career?"
        text="Become professionally certified with QC's online training today and start earning!"
      />
    </>
  );
};

export default emailPreferencesYesPage;
