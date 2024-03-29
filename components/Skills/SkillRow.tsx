import {
  Box,
  HStack,
  Image,
  Text,
  Tooltip,
  VStack,
  useOutsideClick,
} from "@chakra-ui/react";
import { Skill } from ".";
import { AnimationControls, m } from "framer-motion";
import { useRef, useState } from "react";

interface SkillRowProps extends Skill {
  expandRightControl: AnimationControls;
}

const nameToImage = (name: string) =>
  name.toLowerCase().replace(".", "").split(" ")[0];

const SkillRow = ({
  name,
  progress,
  description,
  expandRightControl,
  emoji,
}: SkillRowProps) => {
  const [isLabelOpen, setIsLabelOpen] = useState(false);
  const ref = useRef(null);
  useOutsideClick({
    ref: ref,
    handler: () => setIsLabelOpen(false),
  });

  return (
    <HStack justifyContent="stretch" alignItems="stretch" spacing={4}>
      <Image
        src={`/images/languages/${nameToImage(name)}.svg`}
        alt={name}
        w={12}
        h={12}
      />
      <VStack
        flex={1}
        alignItems="stretch"
        justifyContent={"flex-start"}
        spacing={1}
      >
        <HStack>
          <Text
            flex={1}
            fontFamily="mono"
            color="gray.200"
            fontSize="lg"
            fontWeight="normal"
          >
            {name}
          </Text>
          <Tooltip
            label={description}
            hasArrow
            placement="top"
            bg="brand.950"
            isOpen={isLabelOpen}
          >
            <Image
              src={`/images/emojis/${emoji}.png`}
              alt={description}
              w={8}
              onMouseEnter={() => setIsLabelOpen(true)}
              onMouseLeave={() => setIsLabelOpen(false)}
              onClick={() => setIsLabelOpen(true)}
              ref={ref}
            />
          </Tooltip>
        </HStack>
        <Box h={3} w="100%" rounded="full" bg="brand.950">
          <Box w={`${progress}%`} h="100%">
            <Box
              as={m.div}
              bgColor={"brand.600"}
              h={"100%"}
              rounded={"full"}
              initial={{ width: 0 }}
              animate={expandRightControl}
            />
          </Box>
        </Box>
      </VStack>
    </HStack>
  );
};

export default SkillRow;
