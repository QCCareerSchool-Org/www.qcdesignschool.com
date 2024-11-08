import type { FC } from 'react';

import ChatIcon from './icons/chat.svg';
import EmailIcon from './icons/email.svg';
import PhoneIcon from './icons/phone.svg';
import { EmailLink } from '@/components/emailLink';
import { LivechatLink } from '@/components/livechatLink';
import { TelephoneLink } from '@/components/telephoneLink';
import { getData } from '@/lib/getData';

export const FooterColumn3: FC = () => {
  const { countryCode } = getData();

  return (
    <>
      <li><ChatIcon className="me-2" /><LivechatLink /></li>
      <li><EmailIcon className="me-2" /><EmailLink /></li>
      <li><PhoneIcon className="me-2" /><TelephoneLink countryCode={countryCode} /></li>
    </>
  );
};
