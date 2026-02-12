import type { Period } from '.';

export class PeriodSet {
  constructor(public readonly ranges: readonly Period[]) { }

  public contains = (d: number): boolean => this.ranges.some(r => r.contains(d));
}
