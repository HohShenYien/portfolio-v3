import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SectionContent, SectionLayout } from "../Layouts";
import { AvatarMobile, fadeInRight } from "../Animation";
import Avatar from "../Animation/Avatar";
import { ArrowLink } from "../Links";
import { m } from "framer-motion";

export interface IHeroSectionProp {
  mousePos: { x: number; y: number };
}

const HeroSection = ({ mousePos }: IHeroSectionProp) => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <SectionLayout pos="relative">
      <Box pos="absolute"></Box>
      {isMobile ? <AvatarMobile /> : <Avatar mousePos={mousePos} />}
      <SectionContent zIndex="2" pos="relative">
        <Box
          maxW={{ md: "45vw", base: "100vw" }}
          minH="100vh"
          pt={{ md: 24, base: "40vw" }}
          as={m.div}
          {...fadeInRight}
          transitionDelay={{ base: "0", md: "0.6s" }}
        >
          <Text
            as={m.p}
            color="brand.400"
            mb={{ md: 4, base: 2 }}
            fontSize={{ md: "lg", base: "md" }}
            fontWeight="thin"
          >
            Hey there, I am
          </Text>
          <Text
            color="white"
            fontSize={{ md: "6xl", base: "3xl" }}
            fontWeight="bold"
            lineHeight={1}
            mb={{ base: 2, md: 4 }}
          >
            Shen Yien.
          </Text>
          <Text
            color="gray.300"
            fontSize={{ md: "6xl", base: "3xl" }}
            fontWeight="bold"
            lineHeight={1}
          >
            Full Stack Developer.
          </Text>
          <Text color="gray.400" fontSize={{ md: "xl", base: "md" }} mt={6}>
            I translate your ideas into fully functional features that add
            values to your web application.
          </Text>
          <Flex
            mt={10}
            flexDir={{ md: "row", base: "column" }}
            alignItems={{ base: "flex-start", md: "center" }}
            gap="6"
          >
            <Button colorScheme="brand" size={{ md: "lg", base: "md" }}>
              Contact Me
            </Button>
            <Button
              variant="outline"
              colorScheme="brand"
              size={{ md: "lg", base: "md" }}
            >
              <ArrowLink>Check out my Blogs</ArrowLink>
            </Button>
          </Flex>
        </Box>
      </SectionContent>
    </SectionLayout>
  );
};

export default HeroSection;
