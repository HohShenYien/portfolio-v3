import { Text, Mark } from "@chakra-ui/react";
import { ReactNode } from "react";
import styles from "./Highlighter.module.scss";

interface IHighlighterProp {
  color?: string;
  children?: ReactNode;
}

const Highlighter = ({
  color = "whiteAlpha.800",
  children,
}: IHighlighterProp) => {
  return (
    <Mark
      color={color}
      _hover={{
        color: "gray.200",
      }}
      fontWeight="semibold"
      px={"2px"}
      cursor={"default"}
      display="inline"
      className={styles.highlighter}
      whiteSpace={"normal"}
    >
      <Text as="span" pos="relative" display="inline" zIndex={1}>
        {children}
      </Text>
    </Mark>
  );
};

export default Highlighter;
