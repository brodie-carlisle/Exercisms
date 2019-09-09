const letterValuesMap ={
  A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4,
  I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3,
  Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8,
  Y: 4, Z: 10
}

export const score = word => {
  const splitStr = word
    .toUpperCase()
    .split("")
    .join();
  const toNumbers = splitStr
    .replace(/[A-Z]/g, ltr => letterValuesMap[ltr])
    .split(",");
  const toIntegers = toNumbers.map(Number);
  const addScore = toIntegers.reduce((a, b) => a + b, 0);
  return addScore;
};

// [i]
// array[i]