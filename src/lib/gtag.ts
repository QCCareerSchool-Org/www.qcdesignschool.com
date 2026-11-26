/* eslint-disable custom/no-window-outside-effects */
import { Big } from 'big.js';

import type { CourseCode } from '@/domain/courseCode';
import type { CurrencyCode } from '@/domain/currencyCode';
import type { Enrollment } from '@/domain/enrollment';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export interface GAUserData {
  email: string;
  /**
   * Must be in E.164 format.
   * Omit when the telephone country code cannot be reliably determined.
   */
  phone_number?: string;
  /**
   * Address-based matching requires first_name, last_name,
   * postal_code, and country. Other address fields are optional.
   */
  address?: {
    first_name?: string;
    last_name?: string;
    street?: string;
    city?: string;
    region?: string;
    /**
     * Use five-digit ZIP codes for US addresses.
     * Omit when no postal code is available.
     */
    postal_code?: string;
    country?: string;
  };
}

export interface GAItem {
  item_id: string;
  item_name: string;
  affiliation?: string;
  price: number;
  discount?: number;
  quantity?: number;
}

interface GoogleAdsItem {
  google_business_vertical: string;
}

interface GoogleAdsEducationItem extends GoogleAdsItem {
  /** Must match the Program ID in the Google Ads education data feed */
  id: string;
  google_business_vertical: 'education';
}

/** Dispatch an event through the Google tag */
export const gaEvent = (action: string, params?: unknown): void => {
  window.gtag?.('event', action, params);
};

export const gaViewItem = (currency: CurrencyCode, value: number, items: GAItem[]): void => {
  // GA4 item view event
  gaEvent('view_item', {
    send_to: process.env.GOOGLE_ANALYTICS_ID, // eslint-disable-line camelcase
    currency,
    value,
    items,
  });

  if (process.env.GOOGLE_ADS_ID) {
    // Google Ads dynamic remarketing event
    gaEvent('view_item', {
      send_to: process.env.GOOGLE_ADS_ID, // eslint-disable-line camelcase
      value,
      items: items.map((item): GoogleAdsEducationItem => ({
        id: item.item_id,
        google_business_vertical: 'education', // eslint-disable-line camelcase
      })),
    });
  }
};

export const gaLead = (leadId: string, userData: GAUserData, courseCode?: CourseCode, googleAdsConversionLabel?: string): void => {
  // GA4 lead event
  gaEvent('generate_lead', {
    send_to: process.env.GOOGLE_ANALYTICS_ID, // eslint-disable-line camelcase
    lead_id: leadId, // eslint-disable-line camelcase
    ...(courseCode ? { course_code: courseCode } : undefined), // eslint-disable-line camelcase
  });

  if (process.env.GOOGLE_ADS_ID) {
    // Provide customer data for Google Ads Enhanced Conversions
    window.gtag?.('set', 'user_data', userData);

    // Google Ads lead conversion event
    gaEvent('conversion', {
      send_to: `${process.env.GOOGLE_ADS_ID}/${googleAdsConversionLabel ?? '5nunCL-7PhC_24v_Aw'}`, // eslint-disable-line camelcase
      transaction_id: leadId, // eslint-disable-line camelcase
    });
  }
};

export const gaDownloadBrochure = (filename?: string): void => {
  // GA4 brochure download event
  gaEvent('brochure_download', {
    send_to: process.env.GOOGLE_ANALYTICS_ID, // eslint-disable-line camelcase
    ...(filename ? { file_name: filename } : undefined), // eslint-disable-line camelcase
  });
};

export const gaSale = (enrollment: Enrollment, googleAdsConversionLabel?: string): void => {
  // GA4 e-commerce purchase event
  gaEvent('purchase', {
    send_to: process.env.GOOGLE_ANALYTICS_ID, // eslint-disable-line camelcase
    transaction_id: enrollment.id.toString(), // eslint-disable-line camelcase
    value: enrollment.cost,
    currency: enrollment.currencyCode,
    tax: 0,
    shipping: 0,
    items: enrollment.courses.map((c): GAItem => {
      const discount = Big(c.planDiscount).plus(c.discount);
      return {
        item_id: c.code, // eslint-disable-line camelcase
        item_name: c.name, // eslint-disable-line camelcase
        affiliation: enrollment.school,
        price: parseFloat(Big(c.baseCost).minus(discount).toFixed(2)),
        discount: parseFloat(discount.toFixed(2)),
        quantity: 1,
      };
    }),
  });

  if (process.env.GOOGLE_ADS_ID) {
    const postalCode = enrollment.postalCode === null
      ? undefined
      : enrollment.countryCode === 'US'
        ? enrollment.postalCode.substring(0, 5)
        : enrollment.postalCode;

    const userData: GAUserData = {
      email: enrollment.emailAddress.toLowerCase(),
      address: {
        first_name: enrollment.firstName.toLowerCase(), // eslint-disable-line camelcase
        last_name: enrollment.lastName.toLowerCase(), // eslint-disable-line camelcase
        street: enrollment.address1.toLowerCase(),
        city: enrollment.city.toLowerCase(),
        ...(postalCode ? { postal_code: postalCode.toLowerCase() } : undefined), // eslint-disable-line camelcase
        ...(enrollment.provinceCode ? { region: enrollment.provinceCode.toLowerCase() } : undefined),
        country: enrollment.countryCode.toLowerCase(),
      },
    };

    // Google Ads dynamic remarketing purchase event
    gaEvent('purchase', {
      send_to: process.env.GOOGLE_ADS_ID, // eslint-disable-line camelcase
      value: enrollment.cost,
      items: enrollment.courses.map((c): GoogleAdsEducationItem => {
        return {
          id: c.code,
          google_business_vertical: 'education', // eslint-disable-line camelcase
        };
      }),
    });

    // Adjust the Google Ads conversion value to reflect expected collectible revenue
    // based on historical collection rates for installment payment plans.
    // Rates calculated on 2023-11-14 using enrollments from 24–30 months prior.
    const priceModifier = enrollment.paymentPlan === 'full'
      ? 1
      : enrollment.countryCode === 'US' ? 0.5722 : enrollment.countryCode === 'CA' ? 0.6614 : 0.5320;

    // Provide customer data for Google Ads Enhanced Conversions
    window.gtag?.('set', 'user_data', userData);

    // Google Ads sale conversion event
    gaEvent('conversion', {
      send_to: `${process.env.GOOGLE_ADS_ID}/${googleAdsConversionLabel ?? 'dnxcCMKIuVkQv9uL_wM'}`, // eslint-disable-line camelcase
      value: parseFloat(Big(enrollment.cost).times(priceModifier).toFixed(2)),
      currency: enrollment.currencyCode,
      transaction_id: enrollment.id.toString(), // eslint-disable-line camelcase
    });
  }
};
