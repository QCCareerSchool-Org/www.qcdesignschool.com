import type { Metadata } from 'next';
import Link from 'next/link';

import { EnrollmentValueSection } from './_enrollmentValueSection';
import { OutlineSection } from './_outlineSection';
import { RoadmapSection } from './_roadmapSection';
import { CareerPathSection } from './careerPathSection';
import { CertificationSection } from './certificationSection';
import styles from './page.module.scss';
import { TutorSection } from './tutorSection';
import { AccordionFAQ } from '@/components/accordionFAQ';
import { CareerEssentialsKitDesignFilesSection } from '@/components/careerEssentialsKitDesignFilesSection';
import { GetStartedSection } from '@/components/getStartedSection';
import { GraduateSuccessSection } from '@/components/graduateSuccessSection';
import BriefcaseIcon from '@/components/icons/briefcase.svg';
import GlobeIcon from '@/components/icons/globe.svg';
import GroupIcon from '@/components/icons/group.svg';
import OpenBookIcon from '@/components/icons/open-book.svg';
import { CourseJsonLd } from '@/components/jsonLd/course';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { StatsSection } from '@/components/statsSection';
import type { Props as StatProps } from '@/components/statsSection/stat';
import { TestimonialCarousel } from '@/components/testimonialCarousel';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { getServerData } from '@/lib/getServerData';
import { getDesignRestricted } from '@/lib/restrictions';
import type { GenerateMetadata, PageComponent } from '@/serverComponent';

export const generateMetadata: GenerateMetadata = async (): Promise<Metadata> => {
  const { countryCode, provinceCode } = await getServerData();

  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  return {
    title: `Interior ${designRestricted ? 'Decorating' : 'Design'} Course`,
    description: 'QC\'s Interior Decorating course covers design fundamentals, styles, lighting, floorplans, a final project and business strategies to launch your career.',
    alternates: { canonical: '/online-courses/interior-decorating' },
  };
};

const courseCodes: CourseCode[] = [ 'i2' ];

const InteriorDecoratingPage: PageComponent = async () => {
  const { countryCode, provinceCode } = await getServerData();

  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  const priceResult = await fetchPrice([ 'i2' ], countryCode, provinceCode);
  const price = priceResult.success ? priceResult.value : undefined;

  return (
    <div className={styles.page}>
      <CourseJsonLd courseCode={courseCodes[0]} showPrice />
      <section className={styles.careerHero}>
        <div className="container text-white">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 col-xl-7 text-center">
              <p className={styles.eyebrow}>Globally Recognized IDDP&trade; Certification</p>
              <h1>Interior {designRestricted ? 'Decorating' : 'Design'}: Career Accelerator</h1>
              <p className="lead text-white-50">The only program that gives you the IDDP&trade; certification course with professional mentorship and ready-to-use business infrastructure to launch your business in under 6 months.</p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <a href="https://enroll.qcdesignschool.com?c=i2" className="btn btn-lg btn-light">Enroll Now</a>
                <Link href="#whatsIncluded" className="btn btn-lg btn-outline-light">See What's Included</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12 col-lg-9 col-xl-7">
              <h2>Why Build Your Career with QC?</h2>
              <p className="lead mb-0">You bring the talent. We provide the professional roadmap.</p>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-lg-10">
              <p className="mb-0 text-center">Most programs teach design theory. <strong>QC helps you turn your skills into a client-ready, income-generating business.</strong> From interactive lessons to mentorship and business tools, every component is designed to get you working professionally as fast as possible.</p>
            </div>
          </div>
          <div className="row justify-content-center g-4">
            {whyQCItems.map(item => (
              <div className="col-12 col-md-6" key={item.title}>
                <div className="h-100 bg-white rounded-4 shadow-sm p-4">
                  <div className={`${styles.whyQCIcon} bg-light text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}>
                    <item.icon width={22} height={22} aria-hidden="true" />
                  </div>
                  <h3 className="h6">{item.title}</h3>
                  <p className="mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {price && <CareerPathSection price={price} />}
      <StatsSection backgroundImage={null} backgroundColor="#020025" stats={stats} />
      {price && <EnrollmentValueSection countryCode={countryCode} price={price} provinceCode={provinceCode} />}
      <RoadmapSection designRestricted={designRestricted} />
      <CertificationSection />
      <GraduateSuccessSection gradKeys={[ 'ValerieWilliams', 'MariaOppedisano', 'BelindaThomason', 'LaiceeCharette' ]} />
      <section className="pt-0">
        <TestimonialCarousel priority="i2" />
      </section>
      <TutorSection className="bg-light" />
      <OutlineSection designRestricted={designRestricted} />
      <CareerEssentialsKitDesignFilesSection />
      <PaymentPlanSection courseCodes={courseCodes} />
      <section>
        <div itemScope itemType="https://schema.org/FAQPage">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <h2 className="text-center mb-4">Frequently Asked Questions</h2>
                <AccordionFAQ heading="Interior decorator vs. an interior designer: what's the difference?" className="mb-3">
                  <p>If you're considering a career in design, it's essential to understand the key differences between an interior decorator and an interior designer.</p>
                  <p>An interior decorator focuses on the visual appearance and ambiance of a space. Decorators work with color palettes, textiles, lighting, furniture, and accessories to enhance the aesthetic of homes or commercial environments. They do not typically make structural changes.</p>
                  <p>In contrast, an interior designer will focus on the visual appeal of a space and may collaborate with architects and engineers to plan structural layouts. This means that interior designers often require knowledge of building codes and spatial planning. </p>
                  <p>Whether you aspire to become an interior decorator or designer, QC Design School's online Interior {designRestricted ? 'Decorating' : 'Design'} course equips you with the skills and knowledge to build a successful, rewarding career. You'll master the elements and principles of design, color theory, textiles, furniture selection, and space planning to create stunning, functional interiors your clients will love.</p>
                </AccordionFAQ>
                <AccordionFAQ heading={`How much does an interior ${designRestricted ? 'decorator' : 'designer'} earn?`} className="mb-3">
                  <p>According to the Bureau of Labor Statistics, the average interior {designRestricted ? 'decorator' : 'designer'} salary is typically around $68,530 per year.* Your earnings will vary based on experience, location and services offered. Earning your professional certification from QC Design School demonstrates your expertise and credibility so that you can charge higher rates. The global design market was valued at $747.75 billion in 2024 and is expected to grow to over $1 trillion by 2032. You can be part of that industry and earn a salary as an interior {designRestricted ? 'decorator' : 'designer'} in less than a year!</p>
                  <p className="small">* <a href="https://www.bls.gov/ooh/arts-and-design/interior-designers.htm" target="_blank" rel="noreferrer">Occupational Outlook Handbook</a>. <i>U.S. Bureau of Labor Statistics.</i> April 2025</p>
                </AccordionFAQ>
                <AccordionFAQ heading={`Do I need a license or degree to become an interior ${designRestricted ? 'decorator' : 'designer'}?`} className="mb-3">
                  <p>You don't need a license or an expensive university degree to be successful in the design industry. Instead, you can train online and start attracting clients and generating income in a matter of months!</p>
                  <p>QC Design School's interior {designRestricted ? 'decorating' : 'design'} course teaches you how to become an interior {designRestricted ? 'decorator' : 'designer'} without a degree. When you graduate, you'll receive the International Design and Decorating Professional (IDDP) certificate—a respected credential that demonstrates your expertise to clients and employers alike.</p>
                </AccordionFAQ>
                <AccordionFAQ heading={`How long does it take to become an interior ${designRestricted ? 'decorator' : 'designer'}?`} className="mb-3">
                  <p>With QC's flexible online interior {designRestricted ? 'decorating' : 'design'} course, you can learn at your own pace. Many students complete the program in just 2 to 6 months, though you'll have up to a year to finish. Whether you're balancing a busy schedule or studying full-time, our course allows you to start your new career entirely on your terms.</p>
                </AccordionFAQ>
                <AccordionFAQ heading="Will I be eligible to join a professional association when I graduate from QC Design School?" className="mb-3">
                  <p>Absolutely. After graduating from QC Design School's online interior {designRestricted ? 'decorating' : 'design'} course, you will be eligible to apply for membership with top industry organizations, including {countryCode === 'CA' ? <>the Decorators and Designers Association of Canada,</> : <>Design Society of America (DSA)</>} and the Interior Design Society (IDS).</p>
                  <p>These memberships can enhance your credibility, expand your professional network, and give you access to exclusive resources, job boards, and continuing education opportunities. Plus, as a QC Design School student, you'll have access to exclusive discounts with our preferred partners, including design software options like DesignFiles and SampleBoard.</p>
                </AccordionFAQ>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GetStartedSection
        title={`Ready to Start Your Interior ${designRestricted ? 'Decorating' : 'Design'} Career?`}
        text={`Become professionally certified with QC's online interior ${designRestricted ? 'decorating' : 'design'} training.`}
        courseCodes={courseCodes}
      />
    </div>
  );
};

export default InteriorDecoratingPage;

const whyQCItems = [
  {
    icon: OpenBookIcon,
    title: 'A Proven Alternative to Traditional Programs',
    text: 'QC offers a streamlined, flexible path focused on what actually matters: building your career with real skills, real projects, and real-world application.',
  },
  {
    icon: GroupIcon,
    title: 'Real-World Insights from Professional Mentors',
    text: 'Get personalized feedback from a professional designer who reviews your projects, refines your skills, and helps you reach a client-ready standard faster than learning on your own.',
  },
  {
    icon: BriefcaseIcon,
    title: 'Tools to Start Working Immediately',
    text: 'Go beyond theory with ready-to-use contracts, client workflows, and design tools that prepare you to take on real projects.',
  },
  {
    icon: GlobeIcon,
    title: 'A Professional Network for Your Long-Term Success',
    text: 'Join a community of design professionals and stay connected after you graduate, with opportunities for networking, collaboration, and industry access.',
  },
];

const stats: [StatProps, StatProps, StatProps] = [
  {
    value: 45,
    suffix: 'K',
    heading: 'Students & Graduates',
    description: 'Join a global network of successful design entrepreneurs.',
  },
  {
    value: 40,
    heading: 'Years of Excellence',
    description: 'Secure your future with a legacy-backed professional designation.',
  },
  {
    value: 20,
    heading: 'Experts & Mentors',
    description: 'Master your craft with direct mentorship from industry leaders.',
  },
];
