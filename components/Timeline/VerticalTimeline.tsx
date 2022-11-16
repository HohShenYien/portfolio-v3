import { Accordion, Box } from "@chakra-ui/react";
import { m, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { colors } from "../../styles/variables";
import TimelineAccordion from "./TimelineAccordion";

const VerticalTimeline = () => {
  const ref = useRef(null);
  const [yProgress, setYProgress] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.5", "end end"],
  });
  useEffect(() => {
    scrollYProgress.onChange((val) => {
      setYProgress(val);
    });
  }, [scrollYProgress]);
  return (
    <Box pos="relative" ref={ref}>
      <Box pos="absolute" left="0" top="0" bottom="0" width="1" bg="gray.300">
        <m.div
          style={{
            backgroundColor: colors.brand[400],
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            scaleY: yProgress,
            height: "100%",
            transformOrigin: "top center",
          }}
        ></m.div>
      </Box>
      <Box pl="10" minH={"800px"}>
        <Accordion allowMultiple allowToggle>
          <TimelineAccordion
            title="Part-time Developer"
            company={{
              name: "Mindworks Interactive",
              url: "https://google.com",
            }}
            achievements={[<>Hello</>, <>Cool</>]}
            techs={["React", "Nextjs", "Nest.js", "Django"]}
          />
        </Accordion>
      </Box>
    </Box>
  );
};

export default VerticalTimeline;
