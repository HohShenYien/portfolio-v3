import { Box, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { footerContent } from "../Content";
import FooterLinks from "./FooterLinks";
import FooterSocialLinks from "./FooterSocialLinks";

const Footer = () => {
  return (
    <VStack
      bg="brand.950"
      pt={4}
      pb={{ lg: 6, base: 4 }}
      as="footer"
      justifyContent="center"
      spacing={4}
      px={{ xl: 0, base: 4 }}
    >
      <Box maxW="6xl" w="100%">
        <Flex
          alignItems={{ lg: "flex-end", base: "center" }}
          w="100%"
          flexDir={{ base: "column-reverse", lg: "row" }}
        >
          <Box flex={1} mt={{ base: 4, lg: 0 }}>
            {footerContent.copyright}
          </Box>
          <Flex
            alignItems="center"
            flexDir={{ base: "column-reverse", lg: "row" }}
            gap={{ lg: 0, base: 6 }}
          >
            <FooterLinks />
            <Box
              w={"1px"}
              h="24px"
              bg="gray.300"
              mx={6}
              display={{ lg: "block", base: "none" }}
            />
            <FooterSocialLinks />
          </Flex>
        </Flex>
      </Box>
    </VStack>
  );
};

export default Footer;
