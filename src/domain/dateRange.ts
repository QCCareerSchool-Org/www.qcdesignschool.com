interface DateRange { start: number; end: number };

const endOfYearPromotionWindow: DateRange = {
  start: Date.UTC(2025, 11, 26, 8),
  end: Date.UTC(2026, 0, 3, 8),
} as const;

const newYearPromotionWindow: DateRange = {
  start: Date.UTC(2026, 0, 7, 8),
  end: Date.UTC(2026, 0, 17, 8),
} as const;

const inWindow = (d: number, r: DateRange): boolean => d >= r.start && d < r.end;

export const isDec26PromotionWindow = (d: number): boolean => inWindow(d, newYearPromotionWindow);

export const isJan7PromotionWindow = (d: number): boolean => inWindow(d, newYearPromotionWindow);

export const isEndOfYearPromotionWindow = (d: number): boolean => isDec26PromotionWindow(d) || isJan7PromotionWindow(d);
