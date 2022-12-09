import DesktopNavMain from "./DesktopNavMain";
import MobileNavMain from "./MobileNavMain";
import MainNavWrapper from "./MainNavWrapper";
import { ChakraProps } from "@chakra-ui/react";

export type MainNavProps = {
  navStyles: ChakraProps;
  isHome: boolean;
};

export const navigateTo = (href: string) => {
  const id = href.split("#")[1];
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

export { DesktopNavMain, MobileNavMain, MainNavWrapper };
