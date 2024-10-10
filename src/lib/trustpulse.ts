import type { Enrollment } from '@/domain/enrollment';

const enrollmentUrls = {
  i2: 'https://hooks.zapier.com/hooks/catch/1909320/35zgnyc',
  st: 'https://hooks.zapier.com/hooks/catch/1909320/35zqydn',
  po: 'https://hooks.zapier.com/hooks/catch/1909320/35zq3iv',
  fs: 'https://hooks.zapier.com/hooks/catch/1909320/35zqug1',
  ld: 'https://hooks.zapier.com/hooks/catch/1909320/35zqh1b',
  default: 'https://hooks.zapier.com/hooks/catch/1909320/35zgw4g',
};

const getUrl = (enrollment: Enrollment): string => {
  return enrollment.courses.some(c => c.code.toUpperCase() === 'I2')
    ? enrollmentUrls.i2
    : enrollment.courses.some(c => c.code.toUpperCase() === 'ST')
      ? enrollmentUrls.st
      : enrollment.courses.some(c => c.code.toUpperCase() === 'PO')
        ? enrollmentUrls.po
        : enrollment.courses.some(c => c.code.toUpperCase() === 'FS')
          ? enrollmentUrls.fs
          : enrollment.courses.some(c => c.code.toUpperCase() === 'LD')
            ? enrollmentUrls.ld
            : enrollmentUrls.default;
};

export const trustPulseLead = async (payload: Payload): Promise<void> => {
  await trustPulse(payload, 'https://hooks.zapier.com/hooks/catch/1909320/35z5cnc');
};

export const trustPulseEnrollment = async (enrollment: Enrollment, ipAddress: string | null): Promise<void> => {
  const payload: Payload = {
    firstName: enrollment.firstName,
    emailAddress: enrollment.emailAddress,
    postalCode: enrollment.postalCode,
    ipAddress,
  };

  const url = getUrl(enrollment);

  await trustPulse(payload, url);
};

type Payload = {
  firstName: string | null;
  emailAddress: string | null;
  postalCode: string | null;
  ipAddress: string | null;
};

const trustPulse = async (payload: Payload, url: string): Promise<void> => {
  const response = await fetch(url, {
    method: 'post',
    // headers: { 'Content-Type': 'application/json' }, // CORS doesn't allow Content-Type header
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw Error(response.statusText);
  }

  await response.json();
};
