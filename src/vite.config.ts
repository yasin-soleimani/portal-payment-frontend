import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    reporters: ["html"],
    browser: {
      enabled: true,
      name: "chrome",
    },
  },
});
