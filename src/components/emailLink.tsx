'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';

export const EmailLink: FC = () => {
  const [ emailAddress, setEmailAddress ] = useState('');

  useEffect(() => {
    setEmailAddress('info@qcdesignschool.com');
  }, []);

  return <a href={`mailto:${emailAddress}`}>{emailAddress}</a>;
};
