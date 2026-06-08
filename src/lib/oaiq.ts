/* eslint-disable custom/no-window-outside-effects */
import type { CurrencyCode } from '@/domain/currencyCode';
import type { Enrollment } from '@/domain/enrollment';

interface Options {
  type: string;
  amount?: number;
  currency?: CurrencyCode;
}

declare global {
  interface Window {
    oaiq?: (type: string, name: string, options: Options) => void;
  }
}

export const oaiqLead = (): void => {
  window.oaiq?.('measure', 'lead', { type: 'customer_action' });
};

export const oaiqSale = (enrollment: Enrollment): void => {
  window.oaiq?.('measure', 'sale', {
    type: 'customer_action',
    amount: enrollment.cost,
    currency: enrollment.currencyCode,
  });
};
