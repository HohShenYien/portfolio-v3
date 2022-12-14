import { Text, Mark } from "@chakra-ui/react";
import { ReactNode } from "react";
import { colors } from "styles/variables";

interface IHighlighterProp {
  color?: string;
  children?: ReactNode;
}

const Highlighter = ({ color = colors.text, children }: IHighlighterProp) => {
  return (
    <Mark
      color={color}
      _after={{
        content: '""',
        pos: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 3,
        bg: "brand.700",
        zIndex: 0,
        opacity: 0.7,
        transition: "height ease-in 200ms",
      }}
      _hover={{
        _after: {
          height: "100%",
        },
        color: "gray.200",
      }}
      pos="relative"
      fontWeight="semibold"
      px={"2px"}
      transition="color ease-in 100ms"
      cursor={"default"}
    >
      <Text as="span" pos="relative" display="inline" zIndex={1}>
        {children}
      </Text>
    </Mark>
  );
};

export default Highlighter;
