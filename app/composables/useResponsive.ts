import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

export function useResponsive() {
  const breakpoints = useBreakpoints(breakpointsTailwind);

  // Renvoie true si l'écran est strictement inférieur à 'md' (768px)
  const isMobile = breakpoints.smaller("md");

  // Tu peux aussi ajouter d'autres alias utiles si besoin
  const isTablet = breakpoints.between("md", "lg");
  const isDesktop = breakpoints.greaterOrEqual("lg");

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}

export const useDevice = useResponsive;
