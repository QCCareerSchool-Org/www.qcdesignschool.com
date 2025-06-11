import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import { getPartners } from './data';
import { PartnerText } from './partnerText';

type Props = {
  countryCode: string;
};

export const HighlightedPartnersSection: FC<Props> = ({ countryCode }) => {
  const partners = getPartners(countryCode);

  return (
    <section>
      <div className="container text-center">
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-8 text-center">
            <h1 className="mb-3">Accelerate Your Career with Our Featured Associations</h1>
            <p className="lead mb-0"><PartnerText countryCode={countryCode} /> <Link href="#associations">Explore all associations below</Link>.</p>
          </div>
        </div>
        <div className="row align-items-center text-center g-s">
          {partners.map((partner, i) => (
            <div key={i} className="col-md-4">
              <Image src={partner.src} alt={partner.alt} className="img-fluid" style={partner.maxHeight ? { maxHeight: partner.maxHeight, width: 'auto' } : undefined} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
