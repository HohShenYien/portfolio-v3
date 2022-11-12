import { Box, ChakraProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ISectionLayoutProp extends ChakraProps {
  children: ReactNode;
}
const SectionLayout = ({ children, ...chakraProps }: ISectionLayoutProp) => {
  return (
    <Box
      {...chakraProps}
      as="section"
      minH="60vh"
      maxW="full"
      overflow={"hidden"}
      py={8}
    >
      {children}
    </Box>
  );
};

export default SectionLayout;
