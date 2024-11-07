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

export const metadata: Metadata = {
  title: 'Interior Decorating vs. Interior Design',
  description: 'Learn the differences between interior decorating and interior design, and find out which might be right for you.',
  alternates: { canonical: '/interior-decorating-vs-interior-design' },
};

const iconSize = 40;
const bigIconSize = 50;

const HowItWorksPage: PageComponent = () => {
  const { countryCode } = getData();

  return (
    <div>
      <section>
        <div className="container">
          <div className="row justify-content-center g-s align-items-center">
            <div className="col-12 col-lg-7">
              <h1 className="h2 mb-4">Interior Decorating vs. Interior Design</h1>
              <p>If you're a creative person who enjoys working with color, developing inspiration boards, and bringing your ideas to life, then a career in decorating & design could be for you! To get started in this exciting industry, you need to know which role best suits your interests and career goals.</p>
              <p>Contrary to what most people think, &quot;interior design&quot; and &quot;interior decorating&quot; are two very different roles. In very simple terms, an interior designer can modify the actual structure or architecture of a space. A decorator, on the other hand, focuses on just that: decorating an existing space.</p>
              <p className="mb-0">Follow along to learn about the differences between interior decorating and interior design, from education, to salary, to what the job entails!</p>
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
              <p>Interior decorating and interior design require different training and qualifications to work professionally. This could mean the difference between years of study and thousands of dollars for a university degree versus months of professional training to become certified, either in-class or online.</p>
              <p>There are no specific educational requirements to become an interior decorator. Interior decorating certification courses prepare you for the profession and offer comprehensive training at a fraction of the cost of university or college programs. Most design certification courses can be completed in less than a year and provide you with career-ready training so you either start your own business, or begin working for an existing company.</p>
              <p className="mb-0">However, if you want to become an interior designer, you'll need to study more advanced mathematical topics and software programs at a college or university level. Generally, you need a few years of both educational and professional experience in order to become a licensed interior designer. To be eligible to work, you may also need to take an exam that is regulated by an industry authority such as the NCIDQ in United States and Canada.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center g-5">
            <div className="col-12 col-md-6">
              <PaletteIcon width={iconSize} className="mb-4" />
              <h2 className="h5 mb-3">The Focus of an Interior <i>Decorating</i> Program</h2>
              <ul className="mb-0">
                <li>Floor, space, and furniture planning</li>
                <li>Working with private and public clients</li>
                <li>Color theory and color schemes</li>
                <li>Types of design materials</li>
                <li>Historical and contemporary design styles</li>
                <li>Wall and window treatments</li>
                <li>Types of lighting and flooring</li>
                <li>How to start a decorating business</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 mb-5">
              <ScreenshotIcon width={iconSize} className="mb-4" />
              <h2 className="h5 mb-3">The Focus of an Interior <i>Design</i> Program</h2>
              <ul className="mb-0">
                <li>Construction and drafting</li>
                <li>Human behavior and sociology</li>
                <li>Professional ethics</li>
                <li>Commercial, hospitality, and healthcare design</li>
                <li>Environmental science</li>
                <li>Building codes and regulations</li>
                <li>Usually includes a work term or internship</li>
                <li>Qualifying exam</li>
              </ul>
            </div>
            <div className="col-12 col-lg-10 col-xl-8">
              <p className="lead">Not all <Link href="/online-courses">interior decorating programs</Link> will teach the same topics, and the same is true for interior design programs.</p>
              <p>Generally, the key differences between these two programs is the application of your knowledge. Interior decorators focus on the aesthetic changes that can be made to a space, whereas interior designers focus on how spaces can be built or modified from its original structure (e.g., renovations, home expansions). Interior designers also have a strong focus on the environmental factors of design, as well as the human behavioural patterns that affect design concepts.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white">
        <BackgroundImage src={SalaryComparisonImage} />
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12 col-md-9 col-xl-8 col-xxl-7">
              <h2 className="mb-0">Interior Decorating Salary vs. Interior Design Salary</h2>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-12 col-lg-6">
              <PaletteIcon width={bigIconSize} />
              <div className={`${styles.salary} mt-2`}>$45,000</div>
              <h3 className="h5 mb-3">Average Interior Decorator's Salary</h3>
              <p className="mb-0">The average interior decorator's salary in the United States is around $45,000 per year. If you choose to start your own business, you can create service packages based on your design skills to earn more per client and sign contracts for larger projects. Decorators with a higher level of experience can earn well over $50,000 per year.</p>
            </div>
            <div className="col-12 col-lg-6">
              <ScreenshotIcon width={bigIconSize} />
              <div className={`${styles.salary} mt-2`}>$53,000</div>
              <h3 className="h5 mb-3">Average Interior Designer's Salary</h3>
              <p className="mb-0">An interior designer's salary does not vary too much from that of an interior decorator. According to the <a className="text-white" href="https://www.bls.gov/ooh/arts-and-design/interior-designers.htm#tab-5" target="_blank" rel="noreferrer">Bureau of Labor Statistics</a>, interior designers in the United States earn an average salary of $53,000 per year. The highest-paid interior designers have a specialization in architecture and engineering and earn an average of $60,000 per year. Of course, this wage does increase with the level of experience, years in the workforce, and additional qualifications.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center g-5">
            <div className="col-12 col-lg-7">
              <h2 className="mb-3">Education Costs</h2>
              <p className="mb-0">The average interior decorator's salary in the United States is around $45,000 per year. If you choose to start your own business, you can create service packages based on your design skills to earn more per client and sign contracts for larger projects. Decorators with a higher level of experience can earn well over $50,000 per year.</p>
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
              <p>Regardless of which path you choose, it's important to know how much the industry is expected to grow over the next few years.</p>
              <p className={countryCode === 'CA' ? undefined : 'mb-0'}>In terms of employment, creative design professionals in the United States are projected to see a <a href="https://www.bls.gov/ooh/Arts-and-Design/Interior-designers.htm#tab-6" className="text-decoration-none" target="_blank" rel="noreferrer">4% growth in employment</a> by 2028. This is the expected growth across all occupations, and is great news if you're looking to get started in the industry!</p>
              {countryCode === 'CA' && <p className="mb-0">In Canada, the outlook for both interior designers and interior decorators is very good. According to the <a href="https://www.jobbank.gc.ca/marketreport/outlook-occupation/5759/22437" className="text-decoration-none" target="_blank" rel="noreferrer">Government of Canada</a>, only a small amount of workers in this field are unemployed. There is also an expected labour shortage over the next ten years, which means this is the perfect time to begin your training.</p>}
            </div>
          </div>
        </div>
      </section>
      <GetStartedSection
        title="Enroll Online Today"
        text="Take the first step towards a rewarding career as an interior decorator! Enroll with QC Design School today and earn your certification in three to six months."
      />
    </div>
  );
};

export default HowItWorksPage;
