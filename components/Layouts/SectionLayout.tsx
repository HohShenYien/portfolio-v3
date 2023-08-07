import { Box, ChakraProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { SectionTitle } from "../Texts";

interface ISectionLayoutProp extends ChakraProps {
  children: ReactNode;
  title?: string;
  id: string;
}
const SectionLayout = ({
  children,
  title,
  id,
  ...chakraProps
}: ISectionLayoutProp) => {
  return (
    <Box
      as="section"
      minH="60vh"
      maxW="full"
      overflow={"hidden"}
      py={12}
      id={id}
      {...chakraProps}
    >
      {title && <SectionTitle text={title} />}
      {children}
    </Box>
  );
};

export default SectionLayout;
