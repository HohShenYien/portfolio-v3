import { ChakraProps, Text, Link } from "@chakra-ui/react";
import React from "react";
import styles from "./NiceLink.module.scss";

interface INiceLinkProp extends ChakraProps {
  children?: React.ReactNode;
  href: string;
  blank?: boolean;
  isHome?: boolean;
}

const navigateTo = (href: string) => {
  const id = href.split("#")[1];
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

const NiceLink = ({
  children,
  href,
  blank = false,
  isHome,
  ...chakraProps
}: INiceLinkProp) => {
  return (
    <Link
      href={isHome ? undefined : href}
      className={styles["nice-link"]}
      target={blank ? "_blank" : "_self"}
      onClick={() => isHome && navigateTo(href)}
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
