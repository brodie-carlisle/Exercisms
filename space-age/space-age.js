const earthOrbitalSecs = 31557600;
const orbitalPeriodMap = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};
export const age = (planet, seconds) => {
  const ageCalc = seconds / orbitalPeriodMap[planet] / earthOrbitalSecs;
  const roundAge = Number(ageCalc.toFixed(2));
  return roundAge;
};
