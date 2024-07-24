export const log = (...args) => {
  console.log(...args);
};

export const findPropertyWithValue = (obj, value) => {
  for (const key of Object.keys(obj)) {
    if (obj[key] === value) {
      return key; // Return the key of the property that matches the value
    }
  }
  return null; // Return null if no matching property value is found
};
