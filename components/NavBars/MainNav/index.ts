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
  window.scrollTo({
    top: (document.getElementById(id)?.offsetTop ?? 0) - 30,
    behavior: "smooth",
  });
  // document.getElementById(id)?.scrollIntoView({
  //   behavior: "smooth",
  // });
};

export { DesktopNavMain, MobileNavMain, MainNavWrapper };
