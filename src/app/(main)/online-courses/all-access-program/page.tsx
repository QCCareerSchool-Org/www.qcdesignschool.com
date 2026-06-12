import type { Metadata } from 'next';
import Link from 'next/link';
import type { IconType } from 'react-icons';
import { BiBadgeCheck, BiBriefcaseAlt2, BiCheckCircle, BiLayer, BiTrendingUp } from 'react-icons/bi';

import { Card } from './_components/card';
import { CourseDescription } from './_components/courseDescription';
import { PriceWidget } from './_components/priceWidget';
import { SuccessStoriesSection } from './_components/successStories';
import HeroMobile from './hero-mobile.jpg';
import HeroDesktop from './hero.jpg';
import { IconCircle } from './iconCircle';
import { AccordionFAQ } from '@/components/accordionFAQ';
import { BackgroundImage } from '@/components/backgroundImage';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { Testimonial } from '@/components/testimonial';
import type { TestimonialId } from '@/components/testimonial/data';
import type { CourseCode } from '@/domain/courseCode';
import { aapCourseCodes } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'All-Access Program | QC Design School',
  description: 'Join QC Design School\'s All-Access Program and earn multiple certifications across today\'s most in-demand design specialties.',
  alternates: { canonical: '/online-courses/all-access-program' },
};

const courseCode: CourseCode = 'ad';
const courseCodes: CourseCode[] = [ courseCode ];
const testimonialIds: TestimonialId[] = [ 'TD-0006', 'TD-0003', 'TD-0018', 'TD-0002', 'TD-0011', 'TD-0023' ];
const enrollHref = 'https://enroll.qcdesignschool.com/all-access-program';

const col1 = 'col-12 col-md-6 col-xl-4 d-flex';
const col2 = 'col-12 col-lg-6';

const AllAccessProgramPage: PageComponent = async () => {
  const { countryCode, provinceCode } = await getServerData();
  const [ priceResult, allCoursesPriceResult ] = await Promise.all([
    fetchPrice(courseCodes, countryCode, provinceCode, undefined, undefined, process.env.FIREWALL_BYPASS_SECRET),
    fetchPrice(aapCourseCodes, countryCode, provinceCode, undefined, undefined, process.env.FIREWALL_BYPASS_SECRET),
  ]);
  const price = priceResult.success ? priceResult.value : undefined;
  const allCoursesPrice = allCoursesPriceResult.success ? allCoursesPriceResult.value : undefined;

  return (
    <>
      <section className="bg-navy text-white text-center">
        <BackgroundImage src={HeroDesktop} mobile={{ src: HeroMobile, breakpoint: 'lg' }} priority />
        <div className="container">
          <div className="eyebrow text-shadow mb-3"><strong>Best Value:</strong> Earn Your Elite Design Professional Certification</div>
          <h1 className="text-shadow mb-4">Join the All-Access Program</h1>
          <p className="lead fw-medium text-shadow mb-5">Save 68% or More on Tuition &amp; Maximize Your Earning Potential</p>
          <div className="d-flex justify-content-center gap-4">
            <Link href={enrollHref} className="btn btn-primary shadow">Become an Elite Design Professional</Link>
            <Link href="#included" className="btn btn-outline-light shadow">See 9 Included Courses</Link>
          </div>
        </div>
      </section>
      <section className="text-center">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-md-10 col-lg-8">
              <h2 className="mb-3">Everything You Need to Build a Multi-Service Design Business</h2>
              <p className="mb-0">Whether you&apos;re launching a new career, expanding your services, or building a thriving design business, the All-Access Program gives you the skills, certifications, and expert mentorship to get there faster.</p>
            </div>
          </div>
          <div className="row justify-content-center mb-0 g-3 text-start">
            {highlights.map(item => (
              <div className="col-12 col-sm-6 col-lg-5" key={item}>
                <p className="mb-0">&#10003; {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="included" className="bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-lg-11 col-xl-10 text-center">
              <div className="eyebrow text-primary mt-0 mb-4">What&apos;s Included</div>
              <h2 className="h3 mb-4">Get the Most Comprehensive Design Training Available</h2>
              <p className="mb-0">Gain unlimited access to QC Design School&apos;s complete collection of professional design training programs and graduate with the prestigious <strong>Elite Design Professional Certification</strong>&mdash;our most comprehensive credential for aspiring design professionals. Develop expertise across all of today&apos;s most in-demand design specialties.</p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12 col-md-6">
              <h3 className="h5 pb-2 mb-0" style={{ borderBottom: '1px solid #ccc' }}><strong>Courses include:</strong></h3>
            </div>
          </div>
          <div className="row g-4">
            <div className={col2}>
              <CourseDescription heading="Interior Decorating">
                Master space planning, furniture layouts, color, lighting, and styling to create beautiful, functional interiors.
              </CourseDescription>
            </div>
            <div className={col2}>
              <CourseDescription heading="Home Staging">
                Learn proven staging techniques that help properties sell faster and for higher value.
              </CourseDescription>
            </div>
            <div className={col2}>
              <CourseDescription heading="Landscape Design">
                Expand your expertise outdoors with site planning, plant selection, and outdoor living design.
              </CourseDescription>
            </div>
            <div className={col2}>
              <CourseDescription heading="Professional Organizing">
                Help clients create organized, efficient spaces that support their lifestyle and goals.
              </CourseDescription>
            </div>
            <div className={col2}>
              <CourseDescription heading="Color Consulting">
                Develop expert-level knowledge of color theory, psychology, and lighting to guide confident design decisions.
              </CourseDescription>
            </div>
            <div className={col2}>
              <CourseDescription heading="Feng Shui">
                Learn how to create harmonious environments that promote balance, comfort, and well-being.
              </CourseDescription>
            </div>
            <div className={col2}>
              <CourseDescription heading="Aging in Place Design">
                Use Universal Design principles to create beautiful, accessible spaces that support independence and long-term comfort.
              </CourseDescription>
            </div>
            <div className={col2}>
              <CourseDescription heading="Accelerate Your Design Business">
                Learn pricing, marketing, contracts, client management, and business-building strategies.
              </CourseDescription>
            </div>
            <div className={col2}>
              <CourseDescription heading="Virtual Design Training">
                Discover how to deliver professional design services online and work with clients anywhere.
              </CourseDescription>
            </div>
          </div>
          {price && allCoursesPrice && <PriceWidget price={price} allCoursesPrice={allCoursesPrice} />}
        </div>
      </section>
      <section>
        <div className="container text-center">
          <div className="eyebrow text-primary mt-0 mb-4">Why become an Elite Design Professional?</div>
          <h2 className="h3 mb-5">Build the Skills, Confidence, and Credentials to Stand Out</h2>
          <div className="text-start row g-4 mt-2 mb-5">
            {benefits.map(item => (
              <div className={col1} key={item.heading}>
                <Card>
                  <h3 className="h6">{item.heading}</h3>
                  {item.text}
                </Card>
              </div>
            ))}
          </div>
          <Link href={enrollHref} className="btn btn-primary">Become an Elite Design Professional</Link>
          <p className="mt-4 text-center text-black text-uppercase small fw-bold" style={{ letterSpacing: '1px' }}>Earn multiple professional certifications &bull; Book paying clients in under a year &bull; Learn from industry experts &bull; Enjoy lifetime access</p>
        </div>
      </section>
      <SuccessStoriesSection className="bg-light" />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 col-xl-8 col-xxl-7 text-lg-center">
              <h2 className="mb-4">What Our Students Say</h2>
            </div>
          </div>
          <div className="row justify-content-center g-5">
            {testimonialIds.map(id => (
              <div key={id} className="col-12 col-sm-8 col-lg-4">
                <Testimonial id={id} courseCodes={courseCodes} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container text-center">
          <div className="eyebrow text-primary mb-3">Who Is This Program For</div>
          <h2 className="mb-3">The Strategic Choice for Design Professionals</h2>
          <p className="mb-5">The All-Access Program is ideal for aspiring and established designers who want the flexibility to serve a wide range of clients while building a resilient, future-focused business.</p>
          <h3 className="h4 mb-3">The All-Access Program is perfect if you want to:</h3>
          <div className="row justify-content-center g-4">
            {audienceItems.map(item => (
              <div className="col-12 col-md-10 col-lg-4" key={item.text}>
                <div className="mb-3"><IconCircle><item.icon size={32} /></IconCircle></div>
                <strong>{item.text}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PaymentPlanSection
        className=""
        courseCodes={courseCodes}
        lead="Exceptional Value"
        heading="Tuition & Payment Plans"
        sub={<><span className="d-block mb-2">Access Complete Professional Design Training for <del>$12,084</del> $4498</span><span>Gain access to every QC Design School course and save 60% or more on your tuition.</span></>}
      />
      <section className="bg-light">
        <div itemScope itemType="https://schema.org/FAQPage">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <h2 className="mb-5 text-center">Frequently Asked Questions</h2>
                <AccordionFAQ heading="How do the courses work?" className="mb-3">
                  <p>QC Design School courses are fully online and self-paced. You&apos;ll complete engaging lessons, watch expert-led training videos, and apply what you&apos;ve learned through practical assignments based on real-world design scenarios.</p>
                </AccordionFAQ>
                <AccordionFAQ heading="Will I receive mentor support?" className="mb-3">
                  <p>Yes. Every course includes personalized feedback from experienced design professionals who review your assignments and help you refine your skills.</p>
                </AccordionFAQ>
                <AccordionFAQ heading="How long does the program take?" className="mb-3">
                  <p>Most students complete the program within a year, though you&apos;re free to move faster or slower depending on your schedule.</p>
                </AccordionFAQ>
                <AccordionFAQ heading="Are payment plans available?" className="mb-3">
                  <p>Yes. Flexible payment options make it easy to start your training without delaying your goals.</p>
                </AccordionFAQ>
                <AccordionFAQ heading="Is there a refund policy?" className="mb-3">
                  <p>Yes. Your enrollment is protected by our 21-day money-back guarantee.</p>
                </AccordionFAQ>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GoogleReviewSection />
      <GetStartedSection
        title="Ready to Become an Elite Design Professional?"
        text="Join the most comprehensive training program QC Design School has to offer and graduate with the skills, confidence, and credentials to build a rewarding design career."
        buttonText="Enroll Today"
        buttonHref={enrollHref}
      />
    </>
  );
};

export default AllAccessProgramPage;

const highlights = [
  'Earn multiple professional certifications',
  'Book paying clients in under a year',
  'Learn from industry experts',
  'Enjoy lifetime access to your course materials',
];

const benefits = [
  {
    heading: 'Expand Your Expertise.',
    text: 'Develop a versatile skill set that allows you to confidently take on interiors, staging projects, outdoor spaces, organizing consultations, and more.',
  },
  {
    heading: 'Increase Your Earning Potential.',
    text: 'Offer a broader range of services, attract higher-value clients, and create multiple revenue streams within your business.',
  },
  {
    heading: 'Fast-Track Your Career.',
    text: 'Instead of enrolling in courses one at a time, gain access to everything you need now and progress at your own pace.',
  },
  {
    heading: 'Command Premium Rates.',
    text: 'Deliver a polished client experience backed by professional training and recognized certifications.',
  },
  {
    heading: 'Earn Professional Credentials.',
    text: 'Receive an individual certification for every course you complete, plus the prestigious Master Designer Certification upon graduation.',
  },
  {
    heading: 'Learn by Doing.',
    text: 'Complete practical design projects and receive personalized feedback from experienced design professionals throughout your training.',
  },
];

const audienceItems: { icon: IconType; text: string }[] = [
  {
    icon: BiLayer,
    text: 'Expand beyond a single design specialty',
  },
  {
    icon: BiBadgeCheck,
    text: 'Build credibility with multiple professional certifications',
  },
  {
    icon: BiBriefcaseAlt2,
    text: 'Create a scalable design business with diverse service offerings',
  },
  {
    icon: BiTrendingUp,
    text: 'Increase your earning potential and career opportunities',
  },
  {
    icon: BiCheckCircle,
    text: 'Gain practical experience before working with clients',
  },
];
