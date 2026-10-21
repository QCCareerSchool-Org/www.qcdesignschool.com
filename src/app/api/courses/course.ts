import type { CourseCode } from '@/domain/courseCode';
import { getCourseCertification, getCourseDescription, getCourseName, getCourseSubjects, getCourseUrl, getCourseWorkload } from '@/domain/courseCode';
import { apiBaseUrl } from '@/lib/siteUrl';

export interface CourseResource {
  code: CourseCode;
  name: string;
  url: string;
  description: string | null;
  certification: string | null;
  subjects: readonly string[] | null;
  workload: string | null;
  tuitionUrl: string;
}

export const getCourseResource = (c: CourseCode): CourseResource => ({
  code: c,
  name: getCourseName(c),
  url: getCourseUrl(c),
  description: emptyToNull(getCourseDescription(c)),
  certification: emptyToNull(getCourseCertification(c)),
  subjects: getCourseSubjects(c) ?? null,
  workload: emptyToNull(getCourseWorkload(c)),
  tuitionUrl: `${apiBaseUrl}/courses/${c}/tuition`,
});

const emptyToNull = (s: string | undefined): string | null => (s === undefined || s === '' ? null : s);
