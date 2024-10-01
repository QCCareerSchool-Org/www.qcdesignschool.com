import type { Metadata } from 'next';

import Background from './background.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { ChatLink } from '@/components/chatLink';
import { TelephoneLink } from '@/components/telephoneLink';
import { getData } from '@/lib/getData';

export const metadata: Metadata = {
  title: 'Offer Expired - QC Design School',
};

const OfferExpiredPage: PageComponent = () => {
  const { countryCode } = getData();
  return (
    <section>
      <BackgroundImage priority src={Background} />
      <div className="container py-5 text-white text-center">
        <div className="row justify-content-center ">
          <div className="col-12 col-md-10 col-lg-8 col-xxl-6">
            <h1 className="mb-4">Oops! Your Offer Has Expired!</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xxl-6">
            <p className="lead mb-4">But there may be something else we can do for you. Talk to one of our Student Advisors to learn about all of QC's special offers and discounts.</p>
            <TelephoneLink countryCode={countryCode} className="btn btn-outline-light m-2" linkText="Call Us Now" />
            <ChatLink className="btn btn-primary m-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferExpiredPage;
