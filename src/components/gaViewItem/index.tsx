import type { FC } from 'react';

import { ViewItemEvent } from './viewItemEvent';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { getServerData } from '@/lib/getServerData';
import type { GAItem } from '@/lib/gtag';
import { withSuspense } from '@/withSuspense';

interface Props {
  courseCodes: CourseCode[];
}

const GAViewItemBase: FC<Props> = async ({ courseCodes }) => {
  const { countryCode, provinceCode } = await getServerData();
  const priceResult = await fetchPrice(courseCodes, countryCode, provinceCode);
  if (!priceResult.success) {
    return null;
  }

  const price = priceResult.value;
  const items: GAItem[] = price.courses.map(c => ({
    item_id: c.code, // eslint-disable-line camelcase
    item_name: c.name, // eslint-disable-line camelcase
    price: c.discountedCost,
    quantity: 1,
  }));

  return <ViewItemEvent currency={price.currency.code} value={price.discountedCost} items={items} />;
};

export const GAViewItem = withSuspense(GAViewItemBase);
