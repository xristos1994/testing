import { sum } from "./sum";

export const formattedSum = (...a) => {
  return Math.floor(sum(...a));
};
