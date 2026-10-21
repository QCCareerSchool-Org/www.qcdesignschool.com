import { NextResponse } from 'next/server';

import { getCourseResource } from '../course';
import { isCourseCode } from '@/domain/courseCode';
import type { RouteHandler } from '@/serverComponent';

export const GET: RouteHandler<Promise<{ courseCode: string }>> = async (_req, { params }) => {
  const { courseCode } = await params;

  if (!isCourseCode(courseCode)) {
    return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  }

  return NextResponse.json(getCourseResource(courseCode));
};
