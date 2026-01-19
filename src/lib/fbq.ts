import type { Enrollment } from '@/domain/enrollment';

interface FBQ {
  (action: 'track', type: 'PageView' | 'Lead', extra?: { eventID?: string; page_url?: string }): void;
  (action: 'track', type: 'Purchase', params: { value: number; currency: string }, extra: { eventID: string }): void;
  (action: 'trackCustom', type: 'VirtualPageView', params: { url: string }): void;
}

declare global {
  interface Window {
    fbq?: FBQ;
  }
}

const paramsToRemove = [ 'firstName', 'lastName', 'telephoneNumber' ];

// log the page view with a specific URL
export const fbqPageview = (url?: string): void => {
  if (typeof url !== 'undefined') {
    try {
      const urlObj = new URL(url);
      paramsToRemove.forEach(param => urlObj.searchParams.delete(param));
      const cleanUrl = urlObj.toString();
      // window.fbq?.('trackCustom', 'VirtualPageView', { url: cleanUrl });
      window.fbq?.('track', 'PageView', { page_url: cleanUrl }); // eslint-disable-line camelcase
      return;
    } catch {
      console.error('Invalid url', url);
    }
  }
  window.fbq?.('track', 'PageView');
};

// log the conversion
export const fbqLead = (eventId?: string): void => {
  if (typeof eventId !== 'undefined') {
    window.fbq?.('track', 'Lead', { eventID: eventId });
  } else {
    window.fbq?.('track', 'Lead');
  }
};

// log a sale
export const fbqSale = (enrollment: Enrollment): void => {
  window.fbq?.('track', 'Purchase', { value: enrollment.cost, currency: enrollment.currencyCode }, { eventID: enrollment.id.toString() });
};
