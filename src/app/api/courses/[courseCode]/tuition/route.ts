import { NextResponse } from 'next/server';

import { isCourseCode } from '@/domain/courseCode';
import type { Price } from '@/domain/price';
import { fetchPrice } from '@/lib/fetchPrice';
import type { RouteHandler } from '@/serverComponent';

const countryPattern = /^[A-Z]{2}$/u;
const provincePattern = /^[A-Z0-9]{1,3}$/u;

export const GET: RouteHandler<Promise<{ courseCode: string }>> = async (request, { params }) => {
  const { courseCode } = await params;

  if (!isCourseCode(courseCode)) {
    return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  }

  const searchParams = request.nextUrl.searchParams;
  const countryParam = searchParams.get('country')?.toUpperCase();
  const provinceParam = searchParams.get('province')?.toUpperCase() ?? null;

  // fall back to the requester's location when no country is given
  const countryCode = countryParam ?? request.headers.get('X-Vercel-IP-Country') ?? 'US';
  const provinceCode = countryParam ? provinceParam : request.headers.get('X-Vercel-IP-Country-Region');

  if (!countryPattern.test(countryCode)) {
    return NextResponse.json({ error: 'Invalid country code' }, { status: 400 });
  }

  if (provinceCode !== null && !provincePattern.test(provinceCode)) {
    return NextResponse.json({ error: 'Invalid province code' }, { status: 400 });
  }

  const priceResult = await fetchPrice([ courseCode ], countryCode, provinceCode, undefined, request.signal);
  if (!priceResult.success) {
    return NextResponse.json({ error: 'Tuition is temporarily unavailable' }, { status: 502 });
  }

  return NextResponse.json(getTuitionResource(courseCode, priceResult.value));
};

const getTuitionResource = (courseCode: string, price: Price): Record<string, unknown> => ({
  courseCode,
  countryCode: price.countryCode,
  provinceCode: price.provinceCode ?? null,
  currency: { code: price.currency.code, symbol: price.currency.symbol, name: price.currency.name },
  cost: price.cost,
  promoDiscount: price.promoDiscount,
  plans: {
    full: getPlanResource(price.plans.full),
    part: getPlanResource(price.plans.part),
  },
  disclaimers: price.disclaimers,
  notes: price.notes,
});

const getPlanResource = (plan: Price['plans']['full']): Record<string, number> => ({
  discount: plan.discount,
  deposit: plan.deposit,
  installments: plan.installments,
  installmentSize: plan.installmentSize,
  total: plan.total,
});
