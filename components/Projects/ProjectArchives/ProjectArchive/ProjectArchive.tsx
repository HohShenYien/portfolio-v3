import {
  Flex,
  HStack,
  Icon,
  VStack,
  Box,
  Text,
  Image,
  Tooltip,
  AspectRatio,
} from "@chakra-ui/react";
import { generateImgurUrl, ImgurImage } from "components/Image";
import { IProjectArchive } from "../..";
import { getProjectIcon } from "../../OtherProjects/utils";
import ProjectLinks from "../../ProjectLinks";
import style from "./ProjectArchive.module.scss";

const ProjectArchive = ({
  name,
  type,
  tags,
  img,
  github,
  link,
}: IProjectArchive) => {
  return (
    <Flex
      flexDir="column"
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
        <ImgurImage
          imgurId={img}
          alt={name}
          className={style.image}
          size="large thumbnail"
          aspectRatio={4 / 3}
        />
      </Box>
      <Flex px={6} py={3} flex={1} flexDir="column">
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
        <Box flex="1" />
        <Flex flexWrap="wrap" mt={8}>
          {tags.map((tag, index) => (
            <Text
              key={index}
              color="gray.500"
              mr={4}
              fontSize="sm"
              fontFamily="mono"
            >
              {tag}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectArchive;
