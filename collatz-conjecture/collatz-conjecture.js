export const steps = n => {
  if (n <= 0) {
    throw new Error("Only positive numbers are allowed");
  }
  let counter = 0;
  while (n > 1) {
    if (n % 2 === 0) {
      counter++;
      n /= 2;
    } else {
      counter++;
      n = n * 3 + 1;
    }
  }
  return counter;
};
