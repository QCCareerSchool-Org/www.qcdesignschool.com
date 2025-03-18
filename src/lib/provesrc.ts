import type { Enrollment } from '@/domain/enrollment';

if (typeof process.env.PROVE_SRC_SALE_I2_ENDPONT === 'undefined') {
  throw Error('PROVE_SRC_SALE_I2_ENDPONT environment variable is undefined');
}

if (typeof process.env.PROVE_SRC_SALE_ST_ENDPONT === 'undefined') {
  throw Error('PROVE_SRC_SALE_ST_ENDPONT environment variable is undefined');
}

if (typeof process.env.PROVE_SRC_SALE_PO_ENDPONT === 'undefined') {
  throw Error('PROVE_SRC_SALE_PO_ENDPONT environment variable is undefined');
}

if (typeof process.env.PROVE_SRC_SALE_FS_ENDPONT === 'undefined') {
  throw Error('PROVE_SRC_SALE_FS_ENDPONT environment variable is undefined');
}

if (typeof process.env.PROVE_SRC_SALE_LD_ENDPONT === 'undefined') {
  throw Error('PROVE_SRC_SALE_LD_ENDPONT environment variable is undefined');
}

if (typeof process.env.PROVE_SRC_SALE_ENDPONT === 'undefined') {
  throw Error('PROVE_SRC_SALE_ENDPONT environment variable is undefined');
}

const saleEndpoints: Record<string, string> = {
  i2: process.env.PROVE_SRC_SALE_I2_ENDPONT,
  st: process.env.PROVE_SRC_SALE_ST_ENDPONT,
  po: process.env.PROVE_SRC_SALE_PO_ENDPONT,
  fs: process.env.PROVE_SRC_SALE_FS_ENDPONT,
  ld: process.env.PROVE_SRC_SALE_LD_ENDPONT,
  default: process.env.PROVE_SRC_SALE_ENDPONT,
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

export const proveSrcEnrollment = async (enrollment: Enrollment, ipAddress: string | null): Promise<void> => {
  const payload: Payload = {
    firstName: enrollment.firstName,
    emailAddress: enrollment.emailAddress,
    postalCode: enrollment.postalCode,
    ipAddress,
  };

  const url = getUrl(enrollment);

  await proveSrcRequest(payload, url);
};

type Payload = {
  firstName: string | null;
  emailAddress: string | null;
  postalCode: string | null;
  ipAddress: string | null;
};

const proveSrcRequest = async (payload: Payload, url: string): Promise<void> => {
  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw Error(response.statusText);
  }

  await response.json();
};
