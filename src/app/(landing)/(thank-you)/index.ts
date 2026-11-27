import type { Lead } from '@/domain/lead';
import type { UserValues } from '@/domain/userValues';
import { fbPostLead } from '@/lib/facebookConversionAPI';
import { fetchLead } from '@/lib/fetchLead';
import type { getServerData } from '@/lib/getServerData';
import { createJwt } from '@/lib/jwt';
import { pinterestPostLead } from '@/lib/pinterestConversionAPI';
import { toE164 } from '@/lib/toE164';
import { isUUID } from '@/lib/uuid';

interface ThankyouPageData {
  emailAddress?: string;
  countryCode: string;
  lead?: Lead;
  jwt: string | null;
  recent: boolean;
  date: number;
}

export const getThankyouData = async (data: Awaited<ReturnType<typeof getServerData>>): Promise<ThankyouPageData> => {
  const date = data.date;
  const lead = isUUID(data.leadId) ? await fetchLead(data.leadId) : undefined;
  let jwt: string | null = null;

  if (lead?.success && lead.value.telephoneNumber) {
    // normalize to E.164 when possible, keeping the original value otherwise
    lead.value.telephoneNumber = toE164(lead.value.telephoneNumber, lead.value.countryCode) ?? lead.value.telephoneNumber;
  }

  let recent = false;

  if (lead?.success) {
    recent = lead.value.created > date - 604_800_000; // 7 days
    if (recent) {
      try {
        const response = await fbPostLead(lead.value.leadId, new Date(lead.value.created), lead.value.emailAddress, lead.value.firstName, lead.value.lastName, lead.value.countryCode, data.url, lead.value.ip ?? data.clientIp, data.userAgent, data.fbc, data.fbp);
        console.log('response', response);
      } catch (err) {
        console.error(err);
      }
      try {
        await pinterestPostLead(lead.value, data.url, lead.value.ip ?? data.clientIp, data.userAgent, data.epik);
      } catch (err) {
        console.error(err);
      }
    }
    // only keep the existing cookie's values if they belong to the same person
    const samePerson = data.userValues?.emailAddress?.toLowerCase() === lead.value.emailAddress.toLowerCase();
    const userValues: UserValues = {
      ...(samePerson ? data.userValues : undefined),
      emailAddress: lead.value.emailAddress,
    };
    if (lead.value.telephoneNumber) {
      userValues.telephoneNumber = lead.value.telephoneNumber;
    }
    if (lead.value.firstName) {
      userValues.firstName = lead.value.firstName;
    }
    if (lead.value.lastName) {
      userValues.lastName = lead.value.lastName;
    }
    if (lead.value.city) {
      userValues.city = lead.value.city;
    }
    if (lead.value.provinceCode) {
      userValues.provinceCode = lead.value.provinceCode;
    }
    if (lead.value.countryCode) {
      userValues.countryCode = lead.value.countryCode;
    }
    jwt = await createJwt(userValues);
  }

  const countryCode = lead?.success ? lead.value.countryCode ?? 'US' : 'US';
  const emailAddress = lead?.success ? lead.value.emailAddress : undefined;

  return { emailAddress, countryCode, lead: lead?.success ? lead.value : undefined, jwt, recent, date };
};
