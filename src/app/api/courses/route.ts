import { NextResponse } from 'next/server';

import { getCourseResource } from './course';
import { courseCodes } from '@/domain/courseCode';
import type { RouteHandler } from '@/serverComponent';

export const GET: RouteHandler = () => {
  return NextResponse.json({ courses: courseCodes.map(getCourseResource) });
};
