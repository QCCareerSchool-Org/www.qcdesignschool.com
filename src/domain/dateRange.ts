interface DateRange { start: number; end: number };

const newYearsSupportWindow: DateRange = {
  start: Date.UTC(2025, 11, 26, 8),
  end: Date.UTC(2026, 0, 3, 8),
} as const;

export const isNewYearsWindow = (d: number): boolean => d >= newYearsSupportWindow.start && d < newYearsSupportWindow.end;
