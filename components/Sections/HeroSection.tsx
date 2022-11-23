import { Box, Button, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { SectionContent, SectionLayout } from "../Layouts";
import { AvatarMobile, fadeIn, fadeInRight } from "../Animation";
import Avatar from "../Animation/Avatar";
import { ArrowLink } from "../Links";
import { m } from "framer-motion";
import { BackgroundWatermark } from "../Texts";
import { heroContent } from "../Content";

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
      <Box pos="absolute" as={m.div} {...fadeIn} transitionDelay="1s" top="0">
        <BackgroundWatermark text={heroContent.watermarks.top} />
        <BackgroundWatermark text={heroContent.watermarks.middle} ml={24} />
        <BackgroundWatermark text={heroContent.watermarks.bottom} ml={12} />
      </Box>
      {isMobile ? <AvatarMobile /> : <Avatar mousePos={mousePos} />}
      <SectionContent zIndex="2" pos="relative" full>
        <Box
          maxW={{ md: "45vw", base: "100vw" }}
          minH={{ base: "60vh", md: "90vh" }}
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
            fontFamily="mono"
          >
            {heroContent.greeting}
          </Text>
          <Text
            color="white"
            fontSize={{ md: "6xl", base: "3xl" }}
            fontWeight="bold"
            lineHeight={1}
            mb={{ base: 2, md: 4 }}
          >
            {heroContent.name}
          </Text>
          <Text
            color="gray.300"
            fontSize={{ md: "6xl", base: "3xl" }}
            fontWeight="bold"
            lineHeight={1}
          >
            {heroContent.title}
          </Text>
          <Text color="gray.500" fontSize={{ md: "xl", base: "md" }} mt={6}>
            {heroContent.description}
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
