import axios from "axios";

export const callApi = async (apiConfig) => {
  const { method, params, body, url } = apiConfig;

  const requestHeaders = {
    "X-Master-Key": process.env.REACT_APP_JSON_BIN_MASTER_KEY,
  };
  const config = {
    method,
    params,
    headers: requestHeaders,
    data: body,
    url: process.env.REACT_APP_SERVER_URL + url,
  };

  return axios
    .request(config)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
