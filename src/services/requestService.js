const buildUrl = (endpoint, query) => {
  const urlWithQuery = query ? `${endpoint}?${query}` : endpoint;
  return `${process.env.REACT_APP_API_URL}${urlWithQuery}`;
};

const requester = async (url, requestType) => {
  const options = {
    method: requestType,
    headers: {
      'Content-Type': 'application/json',
    },
  } ;

  try {
    const response = await fetch(url, options);

    return response.json();
  } catch (e) {
    throw new Error(`Request failed, message: ${e}, feed url: ${url}`);
  }
};

export const getData = async (endpoint, query) => {
  const url = buildUrl(endpoint, query);
  return requester(url, 'GET');
};
