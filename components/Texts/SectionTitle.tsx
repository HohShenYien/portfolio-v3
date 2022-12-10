import { Box, Flex, Text } from "@chakra-ui/react";

interface ISectionTitleProp {
  text: string;
}

const SectionTitle = ({ text }: ISectionTitleProp) => {
  return (
    <Flex pos="relative" alignItems="center">
      <Box bg="whiteAlpha.800" h="2px" w="16" />
      <Text
        as="h2"
        color="whiteAlpha.800"
        fontSize={{ md: "4xl", base: "xl" }}
        letterSpacing={{ md: "6px", base: "4px" }}
        fontWeight="medium"
        display="inline-block"
        mx={4}
      >
        {text}
      </Text>
    </Flex>
  );
};

export default SectionTitle;
