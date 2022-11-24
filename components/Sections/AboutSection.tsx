import {
  Box,
  Flex,
  Grid,
  Image,
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
import { CodingAbout, fadeInRight, fadeUp } from "../Animation";
import { CustomImage } from "../Image";

const AboutSection = () => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <SectionLayout pos="relative" title="WHO I AM">
      <SectionContent>
        <Grid templateColumns={{ md: "1fr 1fr", base: "1fr" }} gap={8}>
          <CodingAbout />
          <VStack color={colors.text} spacing={4} justifyContent="center">
            {aboutContent.descriptions.map((content, index) => (
              <Text
                key={index}
                lineHeight={1.6}
                fontSize={{ md: "lg", base: "md" }}
                as={m.p}
                {...fadeUp}
              >
                {content}
              </Text>
            ))}
          </VStack>
        </Grid>
      </SectionContent>
    </SectionLayout>
  );
};

export default AboutSection;
