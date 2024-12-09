import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import BarChartIcon from './bar-chart-alt.svg';
import CertificationIcon from './certification.svg';
import HeroImage from './hero.jpg';
import InteriorDecoratingImage from './id.jpg';
import BoxIcon from './package.svg';
import ProfessionalOrganizingImage from './po.jpg';
import HomeStagingImage from './staging.png';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { GetStartedSection } from '@/components/getStartedSection';
import RightArrowIcon from '@/components/icons/right-arrow.svg';

export const metadata: Metadata = {
  title: 'Your Design Decorating Salary',
  alternates: { canonical: '/your-design-decorating-salary' },
};

const iconSize = 48;

const HomePage: PageComponent = () => (
  <div>
    <section>
      <BackgroundImage priority src={HeroImage} objectPosition="37.5% 25%" mobile={{ src: HeroImage, breakpoint: 'lg', objectPosition: '50% 87.5%' }} />
      <div className="container text-white text-shadow">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 col-xxl-5">
            <h1 className="mb-4">Your Design and Decorating Salary</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8 col-xxl-7">
            <p className="lead">
              In the United States, the average salary for designers and decorators ranges from $25,000 to over $60,000 per year depending on the type of work you do, your experience level, the size of your projects, and the clients you serve. Whether you want to pad your current income with a few odd jobs or run a lucrative business until you retire, this industry provides a wide variety of career choices to achieve your goals.
            </p>
            <p className="lead">
              Starting your own design business is a popular career path to take in the industry. Running your own business gives you control over how much you work, the size and type of projects you take on, and the amount you earn from each contract. You can work as much (or as little!) as you are comfortable with.
            </p>
            <p className="lead text-decoration-none mb-0">
              <div className="d-flex align-items-center">
                <Link href="/online-courses/interior-decorating" className="text-white">
                  Interior Decorating
                  <span style={{ color: '#0013e3', marginLeft: '10px' }}><RightArrowIcon height={16} width={16} /></span>
                </Link>
              </div>
              <div className="d-flex align-items-center">
                <Link href="/online-courses/home-staging" className="text-white">
                  Home Staging
                  <span style={{ color: '#0013e3', marginLeft: '10px' }}><RightArrowIcon height={16} width={16} /></span>
                </Link>
              </div>
              <div className="d-flex align-items-center">
                <Link href="/online-courses/professional-organizing" className="text-white">
                  Professional Organizing
                  <span style={{ color: '#0013e3', marginLeft: '10px' }}><RightArrowIcon height={16} width={16} /></span>
                </Link>
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-6">
            <h2>How Much Do Interior Decorators Make?</h2>
            <p>
              Once you are certified as an interior decorator, you can begin working with clients right away. In the United States, the average interior decorator salary is between $40,000 and $50,000 per year, with more experienced professional decorators earning more than $80,000 each year.
            </p>
            <p>
              If you decide to start your own decorating business, you have the option to earn more or less depending on how much time you have to work and how much work you're comfortable taking on. For an interior decorating consultation, you would typically charge between $100 and $300. After the consultation, your average hourly rate should be from $150-$200 per hour.
            </p>
            <p>
              Below is an example of how an interior decorator may charge for a number of services. Remember, your actual rates will vary based on your level of experience, your location, and the detail of the project.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <Image src={InteriorDecoratingImage} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-6">
            <h3 className="h5 mb-4">Sample Interior Decorating Services</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Service Provided</th>
                  <th>Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Finishing or Accessorizing</td>
                  <td>$150-400 per room</td>
                </tr>
                <tr>
                  <td>2D or 3D Planning</td>
                  <td>$200-500 per room</td>
                </tr>
                <tr>
                  <td>Full Room Design</td>
                  <td>$300-750 per room</td>
                </tr>
                <tr>
                  <td>Full House Design</td>
                  <td>$1000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="h5 mb-4">Specialty Services</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Service Provided</th>
                  <th>Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Color Consultation</td>
                  <td>$50 to $150 per hour</td>
                </tr>
                <tr>
                  <td>Feng Shui Consultation</td>
                  <td>$50 to $150 per hour</td>
                </tr>
                <tr>
                  <td>Aging In Place Consultation</td>
                  <td>$50 to $150 per hour</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="text-muted">*These rates do not include any additional expenses, such as material costs or additional contractors.</p>
            <p className="text-muted">**Rates will vary according to location and years of experience.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-6">
            <h2 className="h3 mb-4">How Much Does a Home Stager Make?</h2>
            <p>Once you are certified as a home stager, you can begin working with clients and real estate agents right away. The average home stager salary in the United States is between $35,000 and $50,000 per year.</p>
            <p>Most home stagers will <u>start their own home staging businesses</u> and decide how many projects they want to take on each year based on their financial and career goals. Your pricing will depend on the size of the house, the amount of work that needs to be completed, and the total value of the house. Most home staging jobs will bring in anywhere from $500 to $1500, on top of the initial consultation fee which is usually around $200. These projects are usually completed within 1-2 days.</p>
            <p>Here is an example of how much a home stager can make for their design services. Your actual rates will vary based on the level of experience you have and where you are located.</p>
          </div>
          <div className="col-12 col-md-6">
            <Image src={HomeStagingImage} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="h5 mb-4">Sample Home Staging Services</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Service Provided</th>
                  <th>Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Finishing or Accessorizing</td>
                  <td>$100-300 per room</td>
                </tr>
                <tr>
                  <td>Full Room Staging</td>
                  <td>$200-500 per room</td>
                </tr>
                <tr>
                  <td>Full House Staging</td>
                  <td>$800+</td>
                </tr>
                <tr>
                  <td>Exterior Staging</td>
                  <td>$350+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="text-muted">*These rates do not include any additional expenses, such as material costs or additional contractors.</p>
            <p className="text-muted">**Rates will vary according to location and years of experience.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-6">
            <h2>How Much Does a Professional Organizer Make?</h2>
            <p>
              Once you are certified as a professional organizer, you can begin working with clients right off the bat. The average professional organizer strategy in the United States falls between $40,000 and 45,000 per year.
            </p>
            <p>
              <u>Starting your own professional organizing business</u> allows you to cater to highly disorganized clients or larger businesses that require more challenging and time-consuming solutions. This gives you the ability to charge more for both the consultation and the hourly rate.
            </p>
            <p>
              Below is a sample pricing structure for a professional organizer. Remember, your actual rates will vary depending on your level of experience, your location, and the detail your client requests.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <Image src={ProfessionalOrganizingImage} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-12 mt-5">
          <h3 className="h5 mb-4">Sample Professional Organizing Services</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Service Provided</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bathroom Organization</td>
                <td>$150-350</td>
              </tr>
              <tr>
                <td>Living Room / Bedroom Organization</td>
                <td>$250-750</td>
              </tr>
              <tr>
                <td>Home Office Organization</td>
                <td>$250-750</td>
              </tr>
              <tr>
                <td>Kitchen Organization</td>
                <td>$250-750</td>
              </tr>
              <tr>
                <td>Full House Organization</td>
                <td>$1000+</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="text-muted">*These rates do not include any additional expenses, such as material costs or additional contractors.</p>
            <p className="text-muted">**Rates will vary according to location and years of experience.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-10 col-lg-7 text-center">
            <h2>How To Increase Your Salary</h2>
            <p className="mb-0">Once you are working in the field as a designer, there are a number of options available to increase your salary. Here are a few tips for boosting your income quickly</p>
          </div>
        </div>
        <div className="row justify-content-center g-4 g-lg-s">
          <div className="col-12 col-md-8 col-lg-4 text-center">
            <CertificationIcon height={iconSize} width={iconSize} className={`mb-3`} />
            <h2 className="h4">Earn a New Certification</h2>
            <p>Multiple certifications allow you to work on projects that require different skills, such as decorating and home staging. The more breadth and depth of experience you have, the higher you can charge for your services.</p>
          </div>
          <div className="col-12 col-md-8 col-lg-4 text-center">
            <BoxIcon height={iconSize} width={iconSize} className={`mb-3`} />
            <h2 className="h4">Package Your Services</h2>
            <p>One of the easiest ways to increase your salary is to offer clients packaged services. You can either create packages for a number of different rooms, or focus on different services in the design field like organizing and feng shui.</p>
          </div>
          <div className="col-12 col-md-8 col-lg-4 text-center">
            <BarChartIcon height={iconSize} width={iconSize} className={`mb-3`} />
            <h2 className="h4">Market Your Business</h2>
            <p>Social media, word-of-mouth, and print ads are easy ways to increase your brand awareness locally. Ask friends, family, and clients to share your work with others. Referrals are a powerful marketing tool, so don't be afraid to request them!</p>
          </div>
        </div>
      </div>
    </section>
    <GetStartedSection
      title="Get Started Today"
      text="Enroll with QC Design School and begin a rewarding career in design & decorating in a few short months!"
      buttonText="Enroll Today"
    />
  </div>
);

export default HomePage;
