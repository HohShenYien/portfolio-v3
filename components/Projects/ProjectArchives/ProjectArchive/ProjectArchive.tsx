import {
  Flex,
  HStack,
  Icon,
  VStack,
  Box,
  Text,
  Image,
  Tooltip,
} from "@chakra-ui/react";
import { generateImgurUrl } from "components/Image";
import { IProjectArchive } from "../..";
import { getProjectIcon } from "../../OtherProjects/utils";
import ProjectLinks from "../../ProjectLinks";
import style from "./ProjectArchive.module.scss";

const ProjectArchive = ({
  name,
  type,
  descriptions,
  tags,
  img,
  github,
  link,
}: IProjectArchive) => {
  return (
    <Box
      bgColor="brand.950"
      pos="relative"
      h="100%"
      transition={"all ease-out 100ms"}
      _hover={{
        transform: "translateY(-8px)",
        bgColor: "brand.900",
      }}
      className={style.container}
    >
      <Box
        overflow="hidden"
        _after={{
          content: '""',
          pos: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgColor: "brand.950",
          opacity: "0.8",
          transition: "all ease-out 100ms",
        }}
        pos="relative"
        className={style.imageContainer}
      >
        <Image
          src={generateImgurUrl({ size: "large thumbnail", imgurId: img })}
          alt={name}
          className={style.image}
        />
      </Box>
      <Box px={6} py={3}>
        <HStack mb={2}>
          <Tooltip label={type} placement="top">
            <Icon as={getProjectIcon(type)} color="brand.400" boxSize={12} />
          </Tooltip>
          <Box flex="1" />
          <ProjectLinks github={github} link={link} />
        </HStack>
        <Text color="gray.200" fontSize="xl" fontWeight="semibold" as="h3">
          {name}
        </Text>
        {/* <VStack alignItems="flex-start" color={colors.text}>
          {descriptions.map((description, idx) => (
            <Text key={idx}>{description}</Text>
          ))}
        </VStack> */}
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
      </Box>
    </Box>
  );
};

export default ProjectArchive;
