import { Box, ChakraProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { SectionTitle } from "../Texts";

interface ISectionLayoutProp extends ChakraProps {
  children: ReactNode;
  title?: string;
}
const SectionLayout = ({
  children,
  title,
  ...chakraProps
}: ISectionLayoutProp) => {
  return (
    <Box
      {...chakraProps}
      as="section"
      minH="60vh"
      maxW="full"
      overflow={"hidden"}
      py={12}
    >
      {title && <SectionTitle text={title} />}
      {children}
    </Box>
  );
};

export default SectionLayout;
