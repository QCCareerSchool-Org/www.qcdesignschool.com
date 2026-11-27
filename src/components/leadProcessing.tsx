'use client';

import type { FC } from 'react';
import { useEffect, useRef } from 'react';

import type { CourseCode } from '@/domain/courseCode';
import { fbqLead } from '@/lib/fbq';
import type { GAUserData } from '@/lib/gtag';
import { gaLead, isE164 } from '@/lib/gtag';
import { oaiqLead } from '@/lib/oaiq';
import { pintrkLead } from '@/lib/pintrk';
import { uetUserData } from '@/lib/uet';

interface Props {
  emailAddress: string;
  courseCode?: CourseCode;
  telephoneNumber: string | null;
  city: string | null;
  provinceCode: string | null;
  countryCode: string | null;
  firstName: string | null;
  lastName: string | null;
  leadId: string;
}

export const LeadProcessing: FC<Props> = props => {
  const effectCalled = useRef(false);

  useEffect(() => {
    if (!props.emailAddress) {
      return;
    }
    if (effectCalled.current) {
      return;
    }
    effectCalled.current = true;
    uetUserData(props.emailAddress, props.telephoneNumber);
    fbqLead(props.leadId, { emailAddress: props.emailAddress, telephoneNumber: props.telephoneNumber, city: props.city, province: props.provinceCode, country: props.countryCode, firstName: props.firstName, lastName: props.lastName });
    pintrkLead(props.leadId, { emailAddress: props.emailAddress, telephoneNumber: props.telephoneNumber, city: props.city, provinceCode: props.provinceCode, countryCode: props.countryCode, firstName: props.firstName, lastName: props.lastName });
    gaLead(props.leadId, getGAUserData({ emailAddress: props.emailAddress, telephoneNumber: props.telephoneNumber, city: props.city, provinceCode: props.provinceCode, countryCode: props.countryCode, firstName: props.firstName, lastName: props.lastName }), props.courseCode);
    oaiqLead();
  }, [ props.emailAddress, props.courseCode, props.telephoneNumber, props.city, props.countryCode, props.provinceCode, props.firstName, props.lastName, props.leadId ]);

  return null;
};

const getGAUserData = (props: Omit<Props, 'courseCode' | 'leadId'>): GAUserData => {
  const address: NonNullable<GAUserData['address']> = {
    ...(props.firstName ? { first_name: props.firstName.toLowerCase() } : undefined), // eslint-disable-line camelcase
    ...(props.lastName ? { last_name: props.lastName.toLowerCase() } : undefined), // eslint-disable-line camelcase
    ...(props.city ? { city: props.city.toLowerCase() } : undefined),
    ...(props.provinceCode ? { region: props.provinceCode.toLowerCase() } : undefined),
    ...(props.countryCode ? { country: props.countryCode.toLowerCase() } : undefined),
  };

  return {
    email: props.emailAddress.toLowerCase(),
    ...(props.telephoneNumber && isE164(props.telephoneNumber) ? { phone_number: props.telephoneNumber } : undefined), // eslint-disable-line camelcase
    ...(Object.keys(address).length ? { address } : undefined),
  };
};
