import { sum } from "./../functions/sum";
import { formattedSum } from "./../functions/formattedSum";

//*
// Real life integration test
test("Intefration Test No 1", () => {
  expect(formattedSum(5.3, 2)).toBe(7);
});
//*/

/*
// Mock Function
jest.mock("./../functions/sum", () => ({ sum: jest.fn(() => 7.3) }));

test("Test With mocked Function", () => {
  expect(formattedSum(5.3, 2)).toBe(7);
});
//*/
