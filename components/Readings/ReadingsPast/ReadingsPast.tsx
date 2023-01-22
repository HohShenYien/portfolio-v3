import { VStack, Button, Box, Text, SimpleGrid } from "@chakra-ui/react";
import { fadeIn } from "components/Animation";
import { readings } from "components/Content";
import { m } from "framer-motion";
import { useScrollSeqAnimation } from "hooks";
import { useState, useRef } from "react";
import { useViewerStore } from "store";
import Reading from "../Reading";
import ReadingPast from "./ReadingPast";

const maxNum = 9;

const ReadingsPast = () => {
  const [showMore, setShowMore] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const fadeUpControls = useScrollSeqAnimation({
    ref: containerRef,
    animation: (i) => {
      const delayingIndex = i > maxNum - 1 ? i - maxNum : i;
      return {
        opacity: 1,
        translateY: 0,
        transition: {
          delay: delayingIndex * 0.2 + 0.2,
          duration: 0.2,
          ease: "easeOut",
        },
      };
    },
  });

  const setViewer = useViewerStore((state) => state.setData);

  const onOpen = () => {
    setShowMore(true);
    setTimeout(fadeUpControls.startNow, 50);
  };

  return (
    <Box
      //   bgColor={"brand.950"}
      py={6}
      rounded="sm"
      ref={containerRef}
      w="full"
    >
      <Text
        as="h2"
        color="brand.400"
        fontWeight="medium"
        fontSize="2xl"
        fontFamily="mono"
        mb="2"
      >
        Other Books From the Past Years.
      </Text>
      <SimpleGrid
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gap="3"
      >
        {readings.past
          .slice(0, showMore ? undefined : maxNum)
          .map((book, index) => (
            <m.div
              key={index}
              custom={index}
              animate={fadeUpControls}
              initial={{ opacity: 0, translateY: 30 }}
              onClick={() => setViewer?.({ index, meta: "past" })}
            >
              <ReadingPast {...book} />
            </m.div>
          ))}
      </SimpleGrid>
      {!showMore && (
        <Box
          as={m.div}
          {...fadeIn}
          transitionDelay={`${maxNum * 100 + 50}ms`}
          textAlign="center"
        >
          <Button
            colorScheme="brand"
            size="sm"
            rounded="sm"
            variant="outline"
            borderColor="brand.400"
            color="brand.400"
            mt="6"
            onClick={onOpen}
          >
            Show More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ReadingsPast;
