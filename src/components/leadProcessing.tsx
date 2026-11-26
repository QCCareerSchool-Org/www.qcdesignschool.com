'use client';

import type { FC } from 'react';
import { useEffect, useRef } from 'react';

import type { CourseCode } from '@/domain/courseCode';
import { fbqLead } from '@/lib/fbq';
import { gaLead } from '@/lib/gtag';
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
    gaLead(props.leadId, { email: props.emailAddress }, props.courseCode);
    oaiqLead();
  }, [ props.emailAddress, props.courseCode, props.telephoneNumber, props.city, props.countryCode, props.provinceCode, props.firstName, props.lastName, props.leadId ]);

  return null;
};
