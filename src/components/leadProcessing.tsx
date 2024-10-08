'use client';

import type { FC } from 'react';
import { useEffect, useRef } from 'react';

import { brevoIdentifyLead } from '@/lib/brevo';
import { fbqLead } from '@/lib/fbq';
import { gaEvent, gaUserData } from '@/lib/gtag';
import { trustPulseLead } from '@/lib/trustpulse';

type Props = {
  emailAddress?: string;
  countryCode?: string;
  provinceCode?: string;
  firstName?: string;
  lastName?: string;
  ipAddress?: string;
  leadId?: string;
  conversionId: string;
};

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
    gaUserData({ email: props.emailAddress });
    fbqLead(props.leadId);
    // eslint-disable-next-line camelcase
    gaEvent('conversion', { send_to: props.conversionId });
    void trustPulseLead({
      emailAddress: props.emailAddress ?? null,
      firstName: props.firstName ?? null,
      postalCode: null,
      ipAddress: props.ipAddress ?? null,
    });
    brevoIdentifyLead(props.emailAddress, props.countryCode, props.provinceCode, props.firstName, props.lastName);
  }, [ props.emailAddress, props.countryCode, props.provinceCode, props.firstName, props.lastName, props.ipAddress, props.leadId, props.conversionId ]);

  return null;
};
