import { expect, vi } from "vitest";

const fn = vi.fn();

fn("hello", 2);

expect(vi.isMockFunction(fn)).toBe(true);
expect(fn.mock.calls[0]).toEqual(["hello", 1]);
