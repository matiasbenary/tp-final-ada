const { useGet } = require("./useGet");
const { URL_BASE } = require("../../constants/api");
// movies/15515115?api_key
// movies/15515115/videos?api_key
export const useDetail = (media, id, subresource = "", language = "en-US") => {
  const endpoint = `${media}/${id}${subresource ? `/${subresource}` : ""}`;
  return useGet(
    `${URL_BASE}/${endpoint}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`
  );
};
