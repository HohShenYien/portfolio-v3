import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { AnimationProps, useAnimationControls } from "framer-motion";
import { RefObject, useMemo, useRef } from "react";
import { SkillGroup } from ".";
import { useScrollSeqAnimation } from "../../hooks";
import SkillRow from "./SkillRow";

interface ISkillCardProp extends SkillGroup {
  delay: number;
  gridRef: RefObject<HTMLElement>;
}

const SkillCard = ({ name, skills, delay, gridRef }: ISkillCardProp) => {
  const animation = useMemo(() => {
    return (_: number) => ({
      width: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        delay,
      },
    });
  }, [delay]);

  const expandRightControl = useScrollSeqAnimation({
    ref: gridRef,
    animation,
  });

  return (
    <Box
      h="100%"
      bg="brand.900"
      px={6}
      py={3}
      _hover={{
        transform: "translateY(-8px)",
        bgColor: "brand.800",
      }}
      transition="all ease 100ms"
    >
      <HStack justifyContent="center" mb={4}>
        <Text fontSize="xl" fontWeight="semibold" color="brand.200" as="h3">
          {name}
        </Text>
        <Box bg="brand.200" h="1px" flex={1} />
      </HStack>
      <VStack alignItems="stretch" spacing={6} mb={4}>
        {skills.map((skill, index) => (
          <SkillRow
            key={index}
            {...skill}
            expandRightControl={expandRightControl}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default SkillCard;
