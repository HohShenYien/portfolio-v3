import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { readings } from "components/Content";
import { useScrollSeqAnimation } from "hooks";
import { useRef, useState } from "react";
import Reading from "./Reading";
import { m } from "framer-motion";
import { fadeIn } from "components/Animation";
import { useViewerStore } from "store";

interface IReadingBlockProps {
  value: "new" | "reading" | "completed";
  title: string;
}

const maxNum = 5;

const ReadingBlock = ({ value, title }: IReadingBlockProps) => {
  const books = readings.current[value];
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
      bgColor={"brand.950"}
      px={4}
      py={6}
      rounded="sm"
      ref={containerRef}
      w="full"
    >
      <Text as="h3" color="gray.200" fontSize="lg" mb={4} fontWeight="medium">
        {title} ({books.length})
      </Text>
      <VStack alignItems="stretch">
        {books.slice(0, showMore ? undefined : maxNum).map((book, index) => (
          <m.div
            key={index}
            custom={index}
            animate={fadeUpControls}
            initial={{ opacity: 0, translateY: 30 }}
            onClick={() => setViewer?.({ key: value, index, meta: "current" })}
          >
            <Reading {...book} />
          </m.div>
        ))}
      </VStack>
      {books.length > 5 && !showMore && (
        <Box as={m.div} {...fadeIn} transitionDelay={`${maxNum * 100 + 50}ms`}>
          <Button
            colorScheme="brand"
            size="sm"
            rounded="sm"
            variant="outline"
            borderColor="brand.400"
            color="brand.400"
            mt="6"
            w="full"
            onClick={onOpen}
          >
            Show More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ReadingBlock;
