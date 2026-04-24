/* eslint-disable custom/no-window-outside-effects */
interface Properties {
  FIRSTNAME?: string;
  LASTNAME?: string;
  COUNTRY_CODE?: string;
  PROVINCE_CODE?: string;
  STATUS_DESIGN_LEAD?: true;
  STATUS_DESIGN_STUDENT?: true;
}

declare global {
  interface Window {
    sendinblue?: {
      page: (...args: unknown[]) => void;
      identify: (emailAddress: string, properties: Properties) => void;
    };
  }
}

// log the page view with a specific URL
export const brevoPageview = (title: string, url: string, path: string): void => {
  window.sendinblue?.page(title, {
    ma_title: title, // eslint-disable-line camelcase
    ma_url: url, // eslint-disable-line camelcase
    ma_path: path, // eslint-disable-line camelcase
  });
};

export const brevoIdentifyLead = (emailAddress: string, countryCode: string | null, provinceCode: string | null, firstName: string | null, lastName: string | null): void => {
  window.sendinblue?.identify(emailAddress, {
    STATUS_DESIGN_LEAD: true,
    ...(firstName && { FIRSTNAME: firstName }),
    ...(lastName && { COUNTRLASTNAMEY_CODE: lastName }),
    ...(countryCode && { COUNTRY_CODE: countryCode }),
    ...(provinceCode && { PROVINCE_CODE: provinceCode }),
  });
};

export const brevoIdentifyStudent = (emailAddress: string, countryCode?: string, provinceCode?: string, firstName?: string, lastName?: string): void => {
  window.sendinblue?.identify(emailAddress, {
    STATUS_DESIGN_STUDENT: true,
    FIRSTNAME: firstName,
    LASTNAME: lastName,
    ...(countryCode && { COUNTRY_CODE: countryCode }),
    ...(provinceCode && { PROVINCE_CODE: provinceCode }),
  });
};
