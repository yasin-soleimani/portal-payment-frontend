import { expect, test, it } from "vitest";
import { sum } from "./sum";

// @vitest-environment jsdom

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

it("test value ctx", (ctx) => {
  console.log("context value:::", ctx.task.name);
});

it.concurrent("math is easy", ({ expect }) => {
  expect(2 + 3).toMatchInlineSnapshot("5");
});
