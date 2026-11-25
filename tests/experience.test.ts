import { describe, expect, it } from "vitest";
import { exposurePercent, formatDuration, FULL_BAR_MONTHS } from "@/lib/experience";

describe("formatDuration", () => {
  it.each([
    [1, "1 month"],
    [3, "3 months"],
    [11, "11 months"],
    [12, "1 year"],
    [18, "1.5 years"],
    [24, "2 years"],
    [36, "3 years"],
  ])("%i months -> %s", (months, label) => {
    expect(formatDuration(months)).toBe(label);
  });

  it("rejects nonsense input instead of rendering it", () => {
    expect(() => formatDuration(0)).toThrow();
    expect(() => formatDuration(-2)).toThrow();
    expect(() => formatDuration(2.5)).toThrow();
  });
});

describe("exposurePercent", () => {
  it("is 100% at the full-bar threshold and caps beyond it", () => {
    expect(exposurePercent(FULL_BAR_MONTHS)).toBe(100);
    expect(exposurePercent(FULL_BAR_MONTHS * 2)).toBe(100);
  });

  it("scales linearly below the threshold", () => {
    expect(exposurePercent(18)).toBe(50);
  });

  it("never renders an invisible bar for short experience", () => {
    expect(exposurePercent(1)).toBeGreaterThanOrEqual(8);
  });

  it("is monotonic: more months never means a shorter bar", () => {
    for (let m = 1; m < 48; m++) {
      expect(exposurePercent(m + 1)).toBeGreaterThanOrEqual(exposurePercent(m));
    }
  });
});
