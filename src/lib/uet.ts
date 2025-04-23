import type { Enrollment } from '@/domain/enrollment';

declare global {
  interface Window {
    uetq?: unknown[];
  }
}

// log the page view with a specific URL
export const uetPageview = (url: string): void => {
  window.uetq = window.uetq ?? [];
  window.uetq.push('event', 'page_view', { page_path: url }); // eslint-disable-line camelcase
};

export type UETUserData = {
  em?: string;
  ph?: string;
};

export const uetUserData = (data: UETUserData): void => {
  window.uetq = window.uetq ?? [];
  window.uetq.push('set', { pid: data });
};

export const uetSale = (enrollment: Enrollment): void => {
  uetUserData({ em: enrollment.emailAddress, ph: enrollment.telephoneNumber });
  window.uetq?.push('event', '', {
    revenue_value: enrollment.cost, // eslint-disable-line camelcase
    currency: enrollment.currencyCode,
  });
};
