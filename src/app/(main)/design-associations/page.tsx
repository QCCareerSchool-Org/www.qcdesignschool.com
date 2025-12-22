import type { Metadata } from 'next';
import Image from 'next/image';

import { HighlightedPartnersSection } from './_highlightedPartnersSection';
import { preferredPartners, professionalAssociations } from './data';
import styles from './page.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { GetStartedSection } from '@/components/getStartedSection';
import { getServerData } from '@/lib/getServerData';

export const metadata: Metadata = {
  title: 'Design Associations',
  description: 'Join QC Design School to enhance your skills and network through exclusive design associations available to students and graduates.',
  alternates: { canonical: '/design-associations' },
};

const AssociationsPage: PageComponent = async () => {
  const { countryCode } = await getServerData();

  return (
    <>
      <HighlightedPartnersSection countryCode={countryCode} />
      <section className="pt-0" id="associations">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10 text-center">
              <h2 className="mb-3">Professional Associations</h2>
              <p className="lead mb-0">QC Design School partners with prestigious associations worldwide to help students and graduates stay up to date with design trends, access exclusive perks, and build meaningful connections that support long-term success.</p>
            </div>
          </div>
          {professionalAssociations.map((association, index) => (
            <div className="row justify-content-center mb-5" key={index}>
              <div className="col-lg-10 col-xl-8">
                <Image src={association.image} alt={association.alt ?? ''} className={`${styles.logo} img-fluid mb-3`} style={association.maxHeight ? { maxHeight: association.maxHeight } : {}} />
                <h6>{association.name}</h6>
                <p>{association.description}</p>
              </div>
            </div>
          ))}
          <div className="row justify-content-center">
            <div className="col-xl-10 text-center mb-5">
              <h2>Preferred Partners</h2>
              <p>QC Design School has partnered with the following companies to offer exclusive discounts to students and graduates. Use your discounts to further your career in the industry.</p>
            </div>
          </div>
          {preferredPartners.map((partner, index) => (
            <div className="row justify-content-center mb-5" key={index}>
              <div className="col-lg-10 col-xl-8">
                <Image src={partner.image} alt={partner.alt ?? ''} className={`${styles.logo} img-fluid mb-3`} style={partner.maxHeight ? { maxHeight: partner.maxHeight } : {}} />
                <h6>{partner.name}</h6>
                <p>{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <GetStartedSection
        title="Ready to Enroll?"
        text="You can get started with QC Design School whenever you like! When you enroll, you'll receive a login to the Online Student Center where you can access your course online."
      />
    </>
  );
};

export default AssociationsPage;
