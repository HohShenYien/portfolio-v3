import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { colors } from "styles/variables";
import { fadeUp } from "components/Animation";
import { m } from "framer-motion";
import { IProject } from "..";
import FeaturedProjectImage from "./FeaturedProjectImage";
import FeaturedProjectBottom from "./FeaturedProjectBottom";

interface IProjectProps extends IProject {
  inverted?: boolean;
}

const FeaturedProject = ({
  name,
  type,
  descriptions,
  tags,
  img,
  inverted = false,
  github,
  link,
}: IProjectProps) => {
  return (
    <Flex
      as={m.div}
      {...fadeUp}
      flexDir={{ md: inverted ? "row-reverse" : "row", base: "column" }}
      bg={{ md: "transparent", base: "brand.950" }}
    >
      <FeaturedProjectImage image={img} alt={name} />

      <Flex
        flexDir="column"
        flex="5"
        justifyContent="center"
        alignItems="stretch"
        width={{ md: "110%", base: "100%" }}
        ml={{ md: inverted ? "0" : "-11%", base: 0 }}
        mr={{ md: inverted ? "-11%" : "0", base: 0 }}
        pos="relative"
        zIndex="3"
        px={{ base: 2, md: 0 }}
        py={{ base: 4, md: 0 }}
      >
        <Text
          color="brand.300"
          fontFamily="mono"
          lineHeight={1}
          fontSize={"sm"}
          mb={{ base: 1, md: 0 }}
          textAlign={{ md: inverted ? "start" : "end", base: "start" }}
        >
          {type}
        </Text>
        <Text
          color="gray.200"
          fontSize={{ md: "2xl", base: "lg" }}
          fontWeight="semibold"
          as="h4"
          textAlign={{ md: inverted ? "start" : "end", base: "start" }}
        >
          {name}
        </Text>
        <Box pos="relative" minH="50%" my={4}>
          <VStack
            color={colors.text}
            pos="relative"
            zIndex="2"
            px={{ md: 6, base: 0 }}
            py={{ md: 3, base: 0 }}
            alignItems="flex-start"
          >
            {descriptions}
          </VStack>
          <Box
            bg="brand.950"
            pos="absolute"
            right={0}
            top={0}
            height="100%"
            width="100%"
            zIndex="1"
            display={{ md: "block", base: "none" }}
          />
        </Box>
        <FeaturedProjectBottom
          tags={tags}
          link={link}
          github={github}
          inverted={inverted}
        />
      </Flex>
    </Flex>
  );
};

export default FeaturedProject;
