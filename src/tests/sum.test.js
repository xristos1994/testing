import { sum } from "./../functions/sum";

test("My first test", () => {
  expect(null).toBeNull();
});

test("My first unit test", () => {
  expect(sum(5, 5)).toBe(10);
});
