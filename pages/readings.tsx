import { Box, Text } from "@chakra-ui/react";
import { fadeUp } from "components/Animation";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { generateImgurUrl } from "components/Image";
import { SectionLayout, SectionContent } from "components/Layouts";
import { MainNavWrapper } from "components/NavBars/MainNav";
import { ProjectViewer } from "components/Projects";
import { Readings, ReadingViewer } from "components/Readings";
import { m } from "framer-motion";

export default function Project() {
  return (
    <Box as="div" bg="brand.1000">
      <Header
        title="Project Archives"
        description="A collection of my past projects"
        image={generateImgurUrl({
          size: "large thumbnail",
          imgurId: "nPrJjja",
        })}
      />
      <MainNavWrapper />
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
              A list of books I&apos;ve read since January 2022
            </Text>
            <Readings />
          </SectionContent>
        </SectionLayout>
      </Box>
      <Footer />
    </Box>
  );
}
