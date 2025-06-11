import type { FC } from 'react';

type Props = {
  countryCode: string;
};

export const PartnerText: FC<Props> = ({ countryCode }) => {
  if (countryCode === 'CA') {
    return 'We\'ve built strong connections with Canada\'s top design associations to support your growth and success. QC Design School is approved by the Decorators and Designers Association of Canada as a recognized institution and students are also eligible to join the Real Estate and Staging Association, the Canadian Association of Home Renovators and Home Services and the Colour Research Society of Canada.';
  }
  if (countryCode === 'US') {
    return 'We\'ve built strong connections with the top design associations in the US and worldwide to support your growth and success. QC\'s Interior Design program is approved by the Designer Society of America. Students are also eligible to join the Real Estate and Staging Association and the Inter-Society Color Council.';
  }
  return 'We\'ve built strong connections with the top design associations worldwide to support your growth and success. QC\'s Interior Design program is approved by the Designer Society of America, an international recognized association. Students are also eligible to join the International Furnishings and Design Association and the International Association of Home Staging.';
};
