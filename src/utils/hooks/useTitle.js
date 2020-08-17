import { MEDIA, CATEGORY } from "../../constants/i18n";

export const useTitle = (media, search) => {
  if (media === "multi") {
    return `Resultados de: ${search}`;
  }
  const parsedTitle = `${MEDIA[media]} ${CATEGORY[search]}`;

  return parsedTitle;
};
