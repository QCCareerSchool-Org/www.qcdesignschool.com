import type { Enrollment } from '@/domain/enrollment';

if (typeof process.env.TRUST_PULSE_SALE_I2_ENDPONT === 'undefined') {
  throw Error('TRUST_PULSE_SALE_I2_ENDPONT environment variable is undefined');
}

if (typeof process.env.TRUST_PULSE_SALE_ST_ENDPONT === 'undefined') {
  throw Error('TRUST_PULSE_SALE_ST_ENDPONT environment variable is undefined');
}

if (typeof process.env.TRUST_PULSE_SALE_PO_ENDPONT === 'undefined') {
  throw Error('TRUST_PULSE_SALE_PO_ENDPONT environment variable is undefined');
}

if (typeof process.env.TRUST_PULSE_SALE_FS_ENDPONT === 'undefined') {
  throw Error('TRUST_PULSE_SALE_FS_ENDPONT environment variable is undefined');
}

if (typeof process.env.TRUST_PULSE_SALE_LD_ENDPONT === 'undefined') {
  throw Error('TRUST_PULSE_SALE_LD_ENDPONT environment variable is undefined');
}

if (typeof process.env.TRUST_PULSE_SALE_ENDPONT === 'undefined') {
  throw Error('TRUST_PULSE_SALE_ENDPONT environment variable is undefined');
}

const saleEndpoints: Record<string, string> = {
  i2: process.env.TRUST_PULSE_SALE_I2_ENDPONT,
  st: process.env.TRUST_PULSE_SALE_ST_ENDPONT,
  po: process.env.TRUST_PULSE_SALE_PO_ENDPONT,
  fs: process.env.TRUST_PULSE_SALE_FS_ENDPONT,
  ld: process.env.TRUST_PULSE_SALE_LD_ENDPONT,
  default: process.env.TRUST_PULSE_SALE_ENDPONT,
};

const getUrl = (enrollment: Enrollment): string => {
  return enrollment.courses.some(c => c.code.toUpperCase() === 'I2')
    ? saleEndpoints.i2
    : enrollment.courses.some(c => c.code.toUpperCase() === 'ST')
      ? saleEndpoints.st
      : enrollment.courses.some(c => c.code.toUpperCase() === 'PO')
        ? saleEndpoints.po
        : enrollment.courses.some(c => c.code.toUpperCase() === 'FS')
          ? saleEndpoints.fs
          : enrollment.courses.some(c => c.code.toUpperCase() === 'LD')
            ? saleEndpoints.ld
            : saleEndpoints.default;
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
