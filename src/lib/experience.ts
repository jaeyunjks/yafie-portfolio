/**
 * Helpers for the About-page tech stack. Each skill stores one number
 * (months of hands-on use); the label and the bar width are derived from it,
 * so they can never disagree with each other.
 */

/** Months of experience that fill the whole bar. */
export const FULL_BAR_MONTHS = 36;

/** Smallest bar width, so short experience is still visible. */
const MIN_BAR_PERCENT = 8;

function assertValidMonths(months: number) {
  if (!Number.isInteger(months) || months < 1) {
    throw new Error(`months must be a positive integer, got ${months}`);
  }
}

/** 3 -> "3 months", 12 -> "1 year", 18 -> "1.5 years". */
export function formatDuration(months: number): string {
  assertValidMonths(months);
  if (months < 12) return months === 1 ? "1 month" : `${months} months`;

  const years = Math.round((months / 12) * 10) / 10;
  return years === 1 ? "1 year" : `${years} years`;
}

/** Bar width in percent: linear up to FULL_BAR_MONTHS, never below the minimum. */
export function exposurePercent(months: number): number {
  assertValidMonths(months);
  const percent = Math.round((months / FULL_BAR_MONTHS) * 100);
  return Math.min(100, Math.max(MIN_BAR_PERCENT, percent));
}
