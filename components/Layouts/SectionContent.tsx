import { Box, ChakraProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ISectionContentProp extends ChakraProps {
  children: ReactNode;
}
const SectionContent = ({ children, ...chakraProps }: ISectionContentProp) => {
  return (
    <Box {...chakraProps} maxW="7xl" mx="auto" px={{ base: 4, md: 0 }}>
      {children}
    </Box>
  );
};

export default SectionContent;
