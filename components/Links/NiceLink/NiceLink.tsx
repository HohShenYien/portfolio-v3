import { ChakraProps, Text, Link } from "@chakra-ui/react";
import React from "react";
import styles from "./NiceLink.module.scss";

interface INiceLinkProp extends ChakraProps {
  children?: React.ReactNode;
  href: string;
  blank?: boolean;
}

const NiceLink = ({
  children,
  href,
  blank = false,
  ...chakraProps
}: INiceLinkProp) => {
  return (
    <Link
      href={href}
      className={styles["nice-link"]}
      target={blank ? "_blank" : "_self"}
    >
      <Text
        color="brand.400"
        {...chakraProps}
        className={styles["link-txt"]}
        transition="color 150ms linear"
        as="span"
        display="inline-block"
      >
        {children}
      </Text>
    </Link>
  );
};

export default NiceLink;
