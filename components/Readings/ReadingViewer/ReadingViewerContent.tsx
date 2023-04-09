import { Box, Text, VStack } from "@chakra-ui/react";
import { colors } from "styles/variables";
import { IReading } from "..";

const ReadingViewerContent = ({ title, author, description }: IReading) => {
  return (
    <Box px={{ lg: 4, base: 4 }} py={2} w={{ md: "md", base: "100%" }}>
      <Text
        as="h3"
        fontSize="2xl"
        fontWeight="semibold"
        color="gray.300"
        lineHeight="1.25"
      >
        {title}
      </Text>
      <Text color="brand.300">{author}</Text>
      <VStack color={colors.text} mt={4} alignItems="flex-start">
        {description != undefined ? (
          description.map((description, index) => (
            <Text key={index}>{description}</Text>
          ))
        ) : (
          <>Nothing here yet...</>
        )}
      </VStack>
    </Box>
  );
};

export default ReadingViewerContent;
