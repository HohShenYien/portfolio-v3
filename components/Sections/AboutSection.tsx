import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { SectionContent, SectionLayout } from "../Layouts";
import Lottie from "react-lottie-player";
import { aboutContent } from "../Content";
import { colors } from "../../styles/variables";
import { m } from "framer-motion";
import { fadeInRight, fadeUp } from "../Animation";

const AboutSection = () => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <SectionLayout pos="relative" title="WHO I AM">
      <SectionContent full>
        <SimpleGrid columns={{ base: 1, md: 2 }} mt={{ base: -8, md: -16 }}>
          <Box as={m.div} {...fadeInRight}>
            <Lottie
              loop
              path="/LottieFiles/coding.json"
              play
              rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
              style={{ width: "100%" }}
            />
          </Box>

          <VStack color={colors.text} spacing={4} justifyContent="center">
            {aboutContent.descriptions.map((content, index) => (
              <Text
                key={index}
                lineHeight={1.6}
                fontSize={{ md: "lg", base: "md" }}
                as={m.p}
                {...(isMobile ? fadeInRight : fadeUp)}
              >
                {content}
              </Text>
            ))}
          </VStack>
        </SimpleGrid>
      </SectionContent>
    </SectionLayout>
  );
};

export default AboutSection;
