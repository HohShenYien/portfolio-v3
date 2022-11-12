import { useBreakpointValue } from "@chakra-ui/react";
import { MobileNavMain, DesktopNavMain } from ".";
import useNavStyles from "./useNavStyles";

const MainNavWrapper = () => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  const navStyles = useNavStyles();

  return (
    <>
      {isMobile ? (
        <MobileNavMain navStyles={navStyles} />
      ) : (
        <DesktopNavMain navStyles={navStyles} />
      )}
    </>
  );
};

export default MainNavWrapper;
