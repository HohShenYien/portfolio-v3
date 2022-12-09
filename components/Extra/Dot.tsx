import { Box } from "@chakra-ui/react";

interface IDotProps {
  size?: string | number;
  color?: string;
}

const Dot = ({ size = 1, color = "gray.400" }: IDotProps) => {
  return <Box bg={color} w={size} h={size} rounded="full" />;
};

export default Dot;
