import { ChakraProps } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const useNavStyles = (): ChakraProps => {
  const [{ prev, cur }, setScrollPos] = useState({
    prev: 0,
    cur: 0,
  });

  useScrollPosition(
    ({ prevPos, currPos }) => {
      setScrollPos({
        prev: prevPos.y,
        cur: currPos.y,
      });
    },
    [],
    undefined,
    true
  );
  const { scrollAfter100, goingDown } = useMemo(() => {
    return {
      scrollAfter100: cur > 100,
      goingDown: cur > prev,
    };
  }, [prev, cur]);

  const scrollAffectedStyles = useMemo(() => {
    return {
      backdropFilter: `blur(${scrollAfter100 ? 8 : 0}px)`,
      transform: `translateY(${goingDown && scrollAfter100 ? "-100%" : "0"})`,
      bg: scrollAfter100 ? "rgba(23, 9, 47, 0.8)" : "transparent",
      py: scrollAfter100 ? 0 : 2,
      shadow: scrollAfter100 ? "md" : "none",
    };
  }, [scrollAfter100, goingDown]);

  return {
    ...scrollAffectedStyles,
    pos: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "99",
    transition: "all ease-in 200ms",
  };
};
export default useNavStyles;
