import { getApiUrl } from "../lib/getApiUrl";

const { useGet } = require("./useGet");
const { URL_BASE } = require("../../constants/api");
//media="tv" search="on_the_air"
export const useSearch = (media, search, page = 1, searchParam = "") => {
  const endpoints = {
    trending: getApiUrl(`trending/${media}/week`),
    category: getApiUrl(`${media}/${search}`),
    search: `${getApiUrl("search/multi")}&query=${search}`,
    genre: `${getApiUrl(`discover/${media}`)}&with_genres=${searchParam}`,
  };
  /*
media, search,searchParam
[tv,movie],trending ,""
[tv,movie],$tags,""
multi,$query,"",
[tv,movie],indiferente,$idGenre

*/
  const endpoint =
    endpoints[search] ||
    (media === "multi" && endpoints.search) ||
    (searchParam && endpoints.genre) ||
    endpoints.category;

  const pagedEnpoint = `${endpoint}&page=${page}`;

  return useGet(pagedEnpoint);
};
