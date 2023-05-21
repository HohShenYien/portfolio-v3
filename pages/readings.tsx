import { Box, Text, VStack } from "@chakra-ui/react";
import { fadeUp } from "components/Animation";
import { Header } from "components/Header";
import { generateImgurUrl } from "components/Image";
import { SectionLayout, SectionContent } from "components/Layouts";
import { Readings, ReadingsPast, ReadingViewer } from "components/Readings";
import { m } from "framer-motion";

export default function ReadingPage() {
  return (
    <Box as="div" bg="brand.1000">
      <Header
        title="Reading Lists"
        description="Some books that I've read in the past."
        image={generateImgurUrl({
          size: "large thumbnail",
          imgurId: "xQtQJHt",
        })}
      />
      <ReadingViewer />
      <Box as="main" minH="100vh" pt={12}>
        <SectionLayout id="projects">
          <SectionContent>
            <Text
              fontSize={{ md: "5xl", base: "3xl" }}
              fontWeight="semibold"
              color="whiteAlpha.800"
              textAlign="center"
              as={m.h1}
              {...fadeUp}
            >
              Readings
            </Text>
            <Text
              color="brand.300"
              fontFamily="mono"
              fontSize={{ md: "xl", base: "lg" }}
              textAlign="center"
              mb={8}
              as={m.p}
              {...fadeUp}
            >
              Some books that I&apos;ve read in the past.
            </Text>
            <VStack spacing="8">
              <Readings />
              <ReadingsPast />
            </VStack>
          </SectionContent>
        </SectionLayout>
      </Box>
    </Box>
  );
}
