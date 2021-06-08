const buildUrl = (endpoint, query) => {
  const urlWithQuery = query ? `${endpoint}?${query}` : endpoint;
  return `${process.env.REACT_APP_API_URL}${urlWithQuery}`;
};

const requester = async (url, requestType, data) => {
  const options = {
    method: requestType,
    headers: {
      'Content-Type': 'application/json',
    },
    ...(data && { body: JSON.stringify(data) }),
  } ;

  try {
    const response = await fetch(url, options);

    if (!response.ok || response.errorCode) {
      throw new Error(`requestService requester failed, HTTP status ${response.status}, feedUrl: ${url}`);
    }

    return response.json();
  } catch (e) {
    throw new Error(`Request failed, message: ${e}, feed url: ${url}`);
  }
};

export const getData = async (endpoint, query) => {
  const url = buildUrl(endpoint, query);
  return requester(url, 'GET');
};

export const sendData = async (endpoint, data, query) => {
  const url = buildUrl(endpoint, query);
  return requester(url, 'POST', data);
};
