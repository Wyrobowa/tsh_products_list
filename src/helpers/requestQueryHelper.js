export const buildRequestQuery = params => {
  if (!params || Object.keys(params).length < 0) return '';

  return Object.keys(params).reduce((acc, val) => {
    if (params[val]) {
      return [
        ...acc,
        `${val}=${params[val].toString()}`,
      ];
    }

    return [
      ...acc,
    ];
  }, []).join('&');
};
