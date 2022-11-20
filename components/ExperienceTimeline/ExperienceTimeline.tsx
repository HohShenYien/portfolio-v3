import { Box, HStack, VStack } from "@chakra-ui/react";
import { m, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { colors } from "../../styles/variables";
import { experienceContent } from "../Content";
import TimelineItem from "./TimelineItem";
import { spaceBetween } from "./timelineVariables";

const ExperienceTimeline = () => {
  const timeline = useRef(null);
  const timelineBackground = useRef<HTMLDivElement>(null);

  const [yProgress, setYProgress] = useState(0);
  const [yProgressOnce, setYProgressOnce] = useState(0);
  const [bottom, setBottom] = useState(0);

  const { scrollYProgress } = useScroll({
    target: timeline,
    offset: ["0 0.5", "end end"],
  });

  useEffect(() => {
    scrollYProgress.onChange((val) => {
      setYProgress(val);
      setBottom(
        timelineBackground.current?.getBoundingClientRect().bottom ?? 0
      );
    });
  }, [scrollYProgress]);
  useEffect(() => {
    if (yProgressOnce === 1) return;
    if (yProgress > yProgressOnce) setYProgressOnce(yProgress);
  }, [yProgressOnce, yProgress]);

  return (
    <HStack pos="relative" ml={{ md: 0, base: 3 }}>
      <Box
        pos="absolute"
        left={{ md: "calc(30%)", base: "6px" }}
        top="0"
        bottom="0"
        width="1"
        bg="gray.300"
        alignSelf="stretch"
        ml={{ md: spaceBetween / 4, base: 0 }}
        ref={timeline}
      >
        <m.div
          ref={timelineBackground}
          style={{
            backgroundColor: colors.brand[400],
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            scaleY: yProgressOnce,
            height: "100%",
            transformOrigin: "top center",
          }}
        ></m.div>
      </Box>
      <VStack spacing={{ md: 16, base: 8 }} alignItems="stretch" width="100%">
        {experienceContent.experiences.map((experience, index) => (
          <TimelineItem key={index} {...experience} timelinePosition={bottom} />
        ))}
      </VStack>
    </HStack>
  );
};

export default ExperienceTimeline;
