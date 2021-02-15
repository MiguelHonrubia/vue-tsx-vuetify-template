export const getFormValueByType = (data: any, key: any) => {
  let value;
  if (data) {
    const typeOfValue = typeof data[key];
    if (undefined !== data[key] && null !== data[key]) {
      if (Array.isArray(data[key])) {
        value = data[key];
      } else {
        switch (typeOfValue) {
          case "string":
          case "number":
          case "boolean":
            value = data[key];
            break;
          case "object":
            value = data[key]["value"];
            break;
          default:
            break;
        }
      }
    }
  }
  return value;
};
