import { Box, HStack } from "@chakra-ui/react";
import { footerContent } from "../Content";
import { Dot } from "../Extra";
import { NiceLink } from "../Links";

const FooterLinks = () => {
  return (
    <HStack alignItems="center" justifyContent="flex-start">
      {footerContent.links.map((link, idx) => (
        <HStack key={idx}>
          <NiceLink href={link.url} color="gray.200" fontSize="sm">
            {link.name}
          </NiceLink>
          {idx < footerContent.links.length - 1 ? (
            <Dot color="gray.200" />
          ) : null}
        </HStack>
      ))}
    </HStack>
  );
};

export default FooterLinks;
