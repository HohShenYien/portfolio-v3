import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { Flag } from "lucide-react";
import { colors } from "styles/variables";
import { IReading } from "..";

const ReadingPast = ({ title, category, author }: IReading) => {
  return (
    <VStack
      bgColor={`${colors.brand[800]}A0`}
      p={2}
      rounded="sm"
      _hover={{
        transform: "translateY(-4px)",
        bgColor: `${colors.brand[800]}FF`,
      }}
      transition="all ease 100ms"
      cursor="pointer"
      height="100%"
      align="stretch"
      justify="space-between"
    >
      <Text color="gray.300" mb={4} fontWeight="semibold">
        {title}
      </Text>
      <HStack>
        <Box bg="brand.600" p={0.5} lineHeight={0.75}>
          <Icon as={Flag} color="brand.200" w={3} h={3} />
        </Box>
        <Text color="brand.300" fontSize="sm" fontFamily="mono">
          {category}
        </Text>
        <Box flex={1} />
        <Text color={colors.text} fontSize="sm">
          {author}
        </Text>
      </HStack>
    </VStack>
  );
};

export default ReadingPast;
