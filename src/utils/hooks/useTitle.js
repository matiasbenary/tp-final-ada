import { MEDIA, CATEGORY } from "../../constants/i18n";

export const useTitle = (media, search) => {
  if (media === "multi") {
    return `Resultados de: ${search}`;
  }

  if (Object.keys(MEDIA).includes(media) && !CATEGORY[search]) {
    return `Genero: ${search}`;
  }

  const parsedTitle = `${MEDIA[media]} ${CATEGORY[search]}`;

  return parsedTitle;
};
