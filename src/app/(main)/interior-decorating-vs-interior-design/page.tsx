import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import BarChartImage from './bar-chart.png';
import CollageImage from './collage.jpg';
import LineGraphImage from './line-graph.png';
import styles from './page.module.scss';
import SalaryComparisonImage from './salary-comparison-bg.jpg';
import TrainingRequirementMobileImage from './training-requirement-bg-mobile.jpg';
import TrainingRequirementImage from './training-requirement-bg.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { GetStartedSection } from '@/components/getStartedSection';
import PaletteIcon from '@/components/icons/palette.svg';
import ScreenshotIcon from '@/components/icons/screenshot.svg';
import { Overlay } from '@/components/overlay';
import { getData } from '@/lib/getData';
import { getDesignRestricted } from '@/lib/restrictions';

export const metadata: Metadata = {
  title: 'Interior Decorating vs. Interior Design',
  description: 'Learn the differences between interior decorating and interior design, and find out which might be right for you.',
  alternates: { canonical: '/interior-decorating-vs-interior-design' },
};

const iconSize = 40;
const bigIconSize = 50;

const HowItWorksPage: PageComponent = () => {
  const { countryCode, provinceCode } = getData();

  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  return (
    <div>
      <section>
        <div className="container">
          <div className="row justify-content-center g-s align-items-center">
            <div className="col-12 col-lg-7">
              <h1 className="h2 mb-4">Interior Decorating vs. Interior Design</h1>
              <p>Are you passionate about transforming spaces and expressing creativity through color, furniture, and style? If so, a <strong>career in interior decorating or interior design</strong> could be the perfect fit for you!</p>
              <p className="mb-0">While many people use these terms interchangeably, <strong>interior decorating</strong> and <strong>interior design</strong> are two distinct career paths—each offering exciting opportunities, unique training requirements, and fulfilling day-to-day work. <strong>Interior designers</strong> are trained to work on the <strong>structural and functional aspects</strong> of a space, in addition to visual elements. They may be involved in renovations, blueprint drafting, and space planning. <strong>Interior decorators</strong> focus on the <strong>visual and stylistic elements</strong> of a space, such as color palettes, furniture, textiles, and overall ambiance. Both professions require creativity and an eye for design, but the scope, training, and job responsibilities may differ.</p>
            </div>
            <div className="col-12 col-lg-5">
              <Image src={CollageImage} alt="" className={`${styles.collage} img-fluid`} />
            </div>
          </div>
        </div>
      </section>
      <section className="text-white text-shadow">
        <BackgroundImage src={TrainingRequirementImage} mobile={{ src: TrainingRequirementMobileImage, breakpoint: 'lg', objectPosition: '50% 100%' }} />
        <Overlay backgroundColor="rgba(0, 0, 0, 0.5)" />
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6" />
            <div className="col-12 col-lg-6">
              <h2 className="mb-3">Education and Training Requirements</h2>
              {designRestricted
                ? (
                  <>
                    <p>There are no specific educational requirements to become an interior decorator. Online certification courses offer comprehensive training at a fraction of the cost of university or college programs. QC Design School's <Link className="text-white" href="/online-courses">design certification courses</Link> can be completed in less than a year and provide you with career-ready training so you can either start your own business or begin working for an existing company.</p>
                    <p className="mb-0">However, if you want to become an interior designer, you'll need to study more advanced mathematical topics and software programs at a college or university level. Generally, you need a few years of both educational and professional experience in order to become a licensed interior designer. To be eligible to work, you may also need to take an exam that is regulated by an industry authority such as the NCIDQ in the United States and Canada.</p>
                  </>
                )
                : (
                  <p className="mb-0">There are no specific educational requirements to become an interior decorator or an interior designer. Online certification courses can prepare you for either profession and offer comprehensive training at a fraction of the cost of university or college programs. QC Design School's <Link className="text-white" href="/online-courses">design certification courses</Link> can be completed in less than a year and provide you with career-ready training so you can either start your own business or begin working for an existing company.</p>
                )}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              {designRestricted
                ? (
                  <>
                    <PaletteIcon width={iconSize} className="mb-4" />
                    <h2 className="h5 mb-3">Why Choose Interior Decorating?</h2>
                    <p>Interior decorating is ideal for creative individuals who want to launch a lucrative career <strong>quickly and affordably</strong>. You'll work with clients to:</p>
                    <ul>
                      <li>Style rooms based on their tastes and needs</li>
                      <li>Select finishes, furniture, and accessories</li>
                      <li>Create mood boards and present cohesive design plans</li>
                      <li>Transform ordinary spaces into extraordinary ones</li>
                      <li>Unlike interior design, there's no need for expensive licensing exams. You can be <strong>career-ready in under a year</strong> with the right certification.</li>
                    </ul>
                    <ScreenshotIcon width={iconSize} className="my-4" />
                    <h3 className="h5 mb-3">How Does Interior Design Compare?</h3>
                    <p>Interior designers work on large-scale projects and renovations, requiring a degree and often licensing. While design offers a more technical career path, it comes with higher costs and a longer time to employment.</p>
                    <p className="mb-0">Interior decorators, on the other hand, <strong>enjoy quicker job access, lower startup costs, and the ability to freelance or start a business faster</strong>.</p>
                  </>
                )
                : (
                  <>
                    <ScreenshotIcon width={iconSize} className="mb-4" />
                    <h2 className="h5 mb-3">Why Choose Interior Design?</h2>
                    <p>Interior design allows you to work on large-scale projects—from full renovations to commercial spaces—where <strong>form meets function</strong>. You'll gain the technical and creative skills to:</p>
                    <ul>
                      <li>Redesign layouts</li>
                      <li>Plan lighting and materials</li>
                      <li>Ensure safety and accessibility</li>
                      <li>Create mood boards and present cohesive design plans</li>
                      <li>Collaborate with architects and engineers</li>
                      <li>Transform ordinary spaces into extraordinary ones</li>
                    </ul>
                    <p>If you're driven to create spaces that are not only beautiful but <strong>purposeful and impactful</strong>, interior design offers long-term career growth and versatility.</p>
                    <PaletteIcon width={iconSize} className="my-4" />
                    <h3 className="h5 mb-3">How Does Interior Decorating Compare?</h3>
                    <p className="mb-0">Interior decorating is a great option for those who want to focus on <em>styling</em> without structural changes. However, it doesn't allow for modifying layouts, structural elements, or working on larger construction-based projects.</p>
                  </>
                )}
            </div>
          </div>
        </div>
      </section>
      <section className="text-white">
        <BackgroundImage src={SalaryComparisonImage} />
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12 col-md-9 col-xl-8 col-xxl-7">
              <h2 className="mb-0">Interior {designRestricted ? 'Decorating' : 'Design'} Salary</h2>
              <div className={`${styles.salary} mt-2`}>$68,530</div>
              <h3 className="h5 mb-3">Average Interior {designRestricted ? 'Decorator' : 'Designer'}'s Salary</h3>
              <p>The average interior {designRestricted ? 'decorator' : 'designer'}'s salary in the United States is around $68,530 per year*, with experienced professionals earning even more. If you choose to start your own business, you have the freedom to create service packages, set your own rates and take on higher-paying clients. This flexibility opens the door to <strong>greater earning potential</strong>, long-term contracts, and the ability to scale your income as your skills and reputation grow.</p>
              <p className="small mb-0">*Occupational Outlook Handbook. U.S. Bureau of Labor Statistics. April 2025. <Link href="https://www.bls.gov/ooh/arts-and-design/interior-designers.htm" className="text-white" target="_blank" rel="noreferrer">https://www.bls.gov/ooh/arts-and-design/interior-designers.htm</Link></p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center g-5">
            <div className="col-12 col-lg-7">
              <h2 className="mb-3">Education Costs</h2>
              <p className="mb-0">The education costs to become an interior {designRestricted ? 'decorator' : 'designer'} vary greatly depending on the path you choose. Taking an <strong>online certification course</strong> is a fast and affordable option, with most programs costing between <strong>$1,500 and $3,000</strong> and taking under a year to complete. In contrast, the tuition for a <strong>2- to 4-year {countryCode === 'US' ? 'college' : 'university'} degree</strong> will range from <strong>$30,000 to $80,000 or more</strong>, depending on the school and location. While both paths can lead to rewarding careers, online courses offer a budget-friendly, flexible route for those eager to start working sooner.</p>
            </div>
            <div className="col-12 col-lg-5 text-center">
              <Image src={BarChartImage} alt="bar chart showing the difference in education costs versus expected income" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-center g-5">
            <div className="col-12 col-lg-5 text-center">
              <Image src={LineGraphImage} alt="line graph showing employment growth up to the year 2028" />
            </div>
            <div className="col-12 col-lg-7">
              <h2 className="mb-3">Career Outlook</h2>
              <p>Regardless of which path you choose, it's important to know how much the industry is expected to grow over the next few years. The interior design industry is steadily growing, driven by urban development, changing lifestyles, and more investment in both homes and businesses.</p>
              {countryCode !== 'CA' && <p className="mb-0">In terms of employment, creative design professionals in the United States are projected to see a 4% growth in employment by 2028. This is the expected growth across all occupations, and is great news if you're looking to get started in the industry!</p>}
            </div>
          </div>
        </div>
      </section>
      <GetStartedSection
        title="Enroll Online Today"
        text={`Take the first step towards a rewarding career as an interior ${designRestricted ? 'decorator' : 'designer'}! Enroll with QC Design School today and earn your certification in three to six months.`}
      />
    </div>
  );
};

export default HowItWorksPage;
