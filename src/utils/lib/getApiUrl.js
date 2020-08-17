import { URL_BASE } from "../../constants/api";

export const getApiUrl = (endpoint, language = "en-US") => {
  return `${URL_BASE}/${endpoint}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`;
};
