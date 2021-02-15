export const deepCopy = (x: any) => {
  const out = Array.isArray(x) ? ([] as { key: string }[]) : {};

  // eslint-disable-next-line no-restricted-syntax
  for (const key in x) {
    // eslint-disable-next-line no-prototype-builtins
    if (x.hasOwnProperty(key)) {
      const temp = x[key];
      if (temp === null) {
        out[key] = null;
      } else {
        out[key] = typeof temp === "object" ? deepCopy(temp) : temp;
      }
    }
  }

  return out;
};
