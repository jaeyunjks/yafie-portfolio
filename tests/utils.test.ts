import { describe, expect, it } from "vitest";
import { cn } from "@/lib/utils";

describe("cn", () => {
  it("joins class names", () => {
    expect(cn("px-2", "text-sm")).toBe("px-2 text-sm");
  });

  it("drops falsy values so conditional classes are easy", () => {
    const isActive = false;
    expect(cn("base", isActive && "active", undefined, null)).toBe("base");
  });

  it("lets a later Tailwind class override a conflicting earlier one", () => {
    // This is why we use tailwind-merge and not plain clsx: a component's
    // default padding can be overridden by a className passed in by a parent.
    expect(cn("px-2", "px-4")).toBe("px-4");
  });
});
