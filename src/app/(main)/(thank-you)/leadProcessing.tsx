import { headers } from 'next/headers';
import type { FC } from 'react';
import { LeadProcessing } from '@/components/leadProcessing';
import { getData } from '@/lib/getData';
import { getParam } from '@/lib/getParam';

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const LeadProcessingComponent: FC<Props> = ({ searchParams }) => {
  const { countryCode, provinceCode } = getData();
  const headerList = headers();
  const firstName = getParam(searchParams.firstName);
  const lastName = getParam(searchParams.firstName);
  const emailAddress = getParam(searchParams.emailAddress);
  const ipAddress = headerList.get('x-real-ip') ?? undefined;
  const leadId = getParam(searchParams.leadId);

  return (
    <LeadProcessing
      emailAddress={emailAddress}
      countryCode={countryCode}
      provinceCode={provinceCode}
      firstName={firstName}
      lastName={lastName}
      ipAddress={ipAddress}
      leadId={leadId}
      conversionId="AW-1071836607/5nunCL-7PhC_24v_Aw"
    />
  );
};
