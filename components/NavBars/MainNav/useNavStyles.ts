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
  const { scrollAfter150, goingDown } = useMemo(() => {
    return {
      scrollAfter150: cur > 150,
      goingDown: cur > prev,
    };
  }, [prev, cur]);

  const scrollAffectedStyles = useMemo(() => {
    return {
      backdropFilter: `blur(${scrollAfter150 ? 8 : 0}px)`,
      transform: `translateY(${goingDown && scrollAfter150 ? "-100%" : "0"})`,
      bg: scrollAfter150 ? "rgba(23, 9, 47, 0.8)" : "transparent",
      py: scrollAfter150 ? 0 : 2,
      shadow: scrollAfter150 ? "md" : "none",
    };
  }, [scrollAfter150, goingDown]);

  return {
    ...scrollAffectedStyles,
    pos: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "9999",
    transition: "all ease-in 200ms",
  };
};
export default useNavStyles;
