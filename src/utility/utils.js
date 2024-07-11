// should return query string with given filter object
export const renderQueryKey = (queryKeys) => {
  const newQueryKeys = queryKeys;

  queryKeys.forEach((item, i) => {
    if (
      !item ||
      item === "" ||
      (typeof item === "object" && Object.keys(item).length === 0)
    ) {
      newQueryKeys.splice(i, 1);
    }
  });

  return newQueryKeys;
};
