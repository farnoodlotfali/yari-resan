import moment from 'jalali-moment';


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

// convert Gregorian year to jalali year
export const convertGrToJa = (val) => {
  return moment(String(val), "YYYY-MM-DD").locale("fa").format("YYYY/MM/DD");
};
