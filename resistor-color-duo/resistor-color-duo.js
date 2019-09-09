const bandColors = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];
export const value = inputColors =>
  Number(inputColors.map(color => bandColors.indexOf(color)).join(""));
