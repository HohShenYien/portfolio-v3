import { Box } from "@chakra-ui/react";

interface IDotProps {
  size?: string | number;
  color?: string;
  space?: number;
}

const Dot = ({ size = 1, color = "gray.400", space }: IDotProps) => {
  return <Box bg={color} w={size} h={size} rounded="full" mx={space} />;
};

export default Dot;
