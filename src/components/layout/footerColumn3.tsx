import type { FC } from 'react';

import ChatIcon from './icons/chat.svg';
import EmailIcon from './icons/email.svg';
import PhoneIcon from './icons/phone.svg';
import { ChatLink } from '@/components/chatLink';
import { EmailLink } from '@/components/emailLink';
import { TelephoneLink } from '@/components/telephoneLink';
import { getData } from '@/lib/getData';

export const FooterColumn3: FC = async () => {
  const { countryCode } = await getData();

  return (
    <>
      <li><ChatIcon className="me-2" /><ChatLink>Live Chat</ChatLink></li>
      <li><EmailIcon className="me-2" /><EmailLink /></li>
      <li><PhoneIcon className="me-2" /><TelephoneLink countryCode={countryCode} /></li>
    </>
  );
};
