import {
  VStack,
  HStack,
  Tooltip,
  Icon,
  Flex,
  Box,
  Text,
  Grid,
  IconButton,
} from "@chakra-ui/react";
import { Dot } from "components/Extra";
import { ImgurImage } from "components/Image";
import { IProjectArchive } from "components/Projects";
import { getProjectIcon } from "components/Projects/OtherProjects/utils";
import ProjectLinks from "components/Projects/ProjectLinks";
import { colors } from "styles/variables";

const ProjectViewerContent = ({
  name,
  descriptions,
  link,
  location,
  type,
  github,
  tags,
  year,
}: IProjectArchive & { year: string }) => {
  return (
    <Flex
      flexDir="column"
      bg="brand.950"
      px={4}
      py={2}
      justifyContent={"space-between"}
      alignItems="stretch"
      maxH={{ lg: "90vh", base: "none" }}
      overflowY="auto"
    >
      <Box>
        <HStack mb={2}>
          <Tooltip label={type} placement="top">
            <Icon as={getProjectIcon(type)} color="brand.400" boxSize={12} />
          </Tooltip>
          <Box flex="1" />
          <ProjectLinks github={github} link={link} />
        </HStack>
        <Flex alignItems="center" color="brand.200" fontSize="sm">
          {location} <Dot color="brand.200" space={2} /> {year}
        </Flex>
        <Text color="gray.400" fontSize="2xl" fontWeight="semibold" mt={-1}>
          {name}
        </Text>
        <VStack mt={4} alignItems="flex-start">
          {descriptions.map((description, index) => (
            <Text color={colors.text} key={index}>
              {description}
            </Text>
          ))}
        </VStack>
      </Box>
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
  );
};

export default ProjectViewerContent;
