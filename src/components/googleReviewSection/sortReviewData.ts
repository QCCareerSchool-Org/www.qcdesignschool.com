import { Priority } from './reviewData';
import type { ReviewData } from './reviewData';
import type { CourseCode } from '@/domain/courseCode';

// this will prioritize based on course code, and then priority
export const sortReviewData = (data: ReviewData[], course?: CourseCode): ReviewData[] => {

  const highestPossiblePriority = Priority.HIGH;
  const addPriorityScore = (baseScore: number, priority: Priority | undefined): number => {
    if (!priority) { priority = Priority.NORMAL; }
    return baseScore + priority;
  };

  // score both the courses, then return the difference
  data.sort((a, b) => {

    const scoreA = course && a.courseCodes?.includes(course)
      ? addPriorityScore(highestPossiblePriority + 1, a.priority)
      : addPriorityScore(0, a.priority);

    const scoreB = course && b.courseCodes?.includes(course)
      ? addPriorityScore(highestPossiblePriority + 1, b.priority)
      : addPriorityScore(0, b.priority);

    return scoreB - scoreA;
  });
  return data;
};
