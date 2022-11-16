import { Box, ChakraProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ISectionContentProp extends ChakraProps {
  children: ReactNode;
  full?: boolean;
}
const SectionContent = ({
  children,
  full,
  ...chakraProps
}: ISectionContentProp) => {
  return (
    <Box
      {...chakraProps}
      maxW="7xl"
      mx="auto"
      px={{ base: 4, md: 6, "2xl": 0 }}
      py={full ? 0 : { base: 4, md: 16 }}
    >
      {children}
    </Box>
  );
};

export default SectionContent;
