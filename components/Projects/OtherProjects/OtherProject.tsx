import { Box, Flex, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { colors } from "styles/variables";
import { generateImgurUrl } from "../../Image";
import { useImageStore } from "store";
import { IProject } from "..";
import { getProjectIcon } from "./utils";
import ProjectLinks from "../ProjectLinks";

const OtherProject = ({
  name,
  type,
  descriptions,
  tags,
  img,
  github,
  link,
}: IProject) => {
  const imageStore = useImageStore();
  return (
    <Box
      bgImage={`url(${generateImgurUrl({
        size: "medium thumbnail",
        imgurId: img,
      })})`}
      pos="relative"
      h="100%"
      px={6}
      py={3}
      bgSize="cover"
      transition={"all ease-out 100ms"}
      cursor="pointer"
      onClick={() =>
        imageStore?.setSrc?.(generateImgurUrl({ size: "full", imgurId: img }))
      }
      _before={{
        content: '""',
        pos: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bgColor: "brand.950",
        opacity: "0.95",
        zIndex: "0",
        transition: "all ease-out 100ms",
      }}
      _hover={{
        transform: "translateY(-8px)",
        _before: { bgColor: "brand.900" },
      }}
    >
      <Flex
        pos="relative"
        zIndex="2"
        alignItems="stretch"
        height="100%"
        flexDir="column"
      >
        <HStack mb={2}>
          <Icon as={getProjectIcon(type)} color="brand.400" boxSize={12} />
          <Box flex="1" />
          <ProjectLinks github={github} link={link} />
        </HStack>
        <Text color="gray.200" fontSize="xl" fontWeight="semibold">
          {name}
        </Text>
        <VStack alignItems="flex-start" color={colors.text}>
          {descriptions}
        </VStack>
        <Box flex="1" />
        <HStack flexWrap="wrap" mt={8} spacing={2}>
          {tags.map((tag, index) => (
            <Text
              key={index}
              color="gray.500"
              mr={2}
              fontSize="sm"
              fontFamily="mono"
            >
              {tag}
            </Text>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default OtherProject;
