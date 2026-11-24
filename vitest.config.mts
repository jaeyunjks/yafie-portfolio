import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    // Lets tests import with the same "@/..." alias the app uses (tsconfig paths).
    tsconfigPaths: true,
  },
  test: {
    // These are logic/content tests, not component tests, so plain Node is
    // enough. Switch to "jsdom" (and add React Testing Library) only when we
    // start rendering components.
    environment: "node",
    include: ["tests/**/*.test.ts"],
  },
});
