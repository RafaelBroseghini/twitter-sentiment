const range = (min, max) =>
  Array.from({ length: max - min + 1 }, (_, i) => min + i);

const utils = {
  range,
};

export default utils;
