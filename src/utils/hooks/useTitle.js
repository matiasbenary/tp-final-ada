import { MEDIA, CATEGORY } from "../../constants/i18n";

export const useTitle = (media, search) => {
  if (search === "trending") {
    return `${MEDIA[media]} que son tendencias`;
  }

  if (media === "multi") {
    return `Resultados de: ${search}`;
  }
  const parsedTitle = `${MEDIA[media]} ${CATEGORY[search]}`;

  return parsedTitle;
};
