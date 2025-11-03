import type { PriceQuery } from './fetch';
import { fetchPrice } from './fetch';
import { isCurrencyCode } from '@/domain/currencyCode';

interface PriceInfo {
  price: number;
  priceCurrency: string;
}

export async function getPriceSchema(courseCode: string): Promise<PriceInfo | null> {
  const query: PriceQuery = {
    courses: [ courseCode ],
    countryCode: 'US',
    provinceCode: 'NA',
    options: {},
  };

  try {
    const priceResult = await fetchPrice(query);

    if (priceResult && typeof priceResult.cost === 'number' && priceResult.currency && isCurrencyCode(priceResult.currency.code)) {
      return {
        price: priceResult.cost,
        priceCurrency: priceResult.currency.code,
      };
    }
    return null;

  } catch (error) {
    console.error(`Error fetching course prices for course code: ${courseCode}`, error);
    return null;
  }
}
