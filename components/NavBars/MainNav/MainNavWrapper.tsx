import { useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { MobileNavMain, DesktopNavMain } from ".";
import useNavStyles from "./useNavStyles";

const MainNavWrapper = () => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  const navStyles = useNavStyles();
  const router = useRouter();
  const isHome = useMemo(() => router.pathname === "/", [router]);

  return (
    <>
      {isMobile ? (
        <MobileNavMain navStyles={navStyles} isHome={isHome} />
      ) : (
        <DesktopNavMain navStyles={navStyles} isHome={isHome} />
      )}
    </>
  );
};

export default MainNavWrapper;
