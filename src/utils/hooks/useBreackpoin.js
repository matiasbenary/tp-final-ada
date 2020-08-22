import { useResponsive } from "./useResponsive";

export const BREACKPOINTS = [
  { width: 400, cant: 1 },
  { width: 650, cant: 2 },
  { width: 1000, cant: 3 },
  { width: 1200, cant: 4 },
];
/*
350

610

1205

*/
export const useBreackpoint = () => {
  const width = useResponsive();

  for (const breackpoint of BREACKPOINTS) {
    if (width <= breackpoint.width) {
      return breackpoint.cant;
    }
  }
  return 5;
};
