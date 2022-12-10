import { Box, Text } from "@chakra-ui/react";
import { fadeUp } from "components/Animation";
import { projectArchives } from "components/Content";
import { ExperienceTimeline } from "components/ExperienceTimeline";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { generateImgurUrl } from "components/Image";
import { SectionLayout, SectionContent } from "components/Layouts";
import { MainNavWrapper } from "components/NavBars/MainNav";
import { ProjectArchives } from "components/Projects";
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
      <Box as="main" minH="100vh" pt={12}>
        <SectionLayout id="projects">
          <SectionContent>
            <Text
              fontSize="5xl"
              fontWeight="semibold"
              color="whiteAlpha.800"
              textAlign="center"
              as={m.h1}
              {...fadeUp}
            >
              Project Archives
            </Text>
            <Text
              color="brand.300"
              fontFamily="mono"
              fontSize="xl"
              textAlign="center"
              mb={2}
              as={m.p}
              {...fadeUp}
            >
              An archive of almost everything I&apos;ve worked on before
            </Text>
            <ProjectArchives projects={projectArchives} />
          </SectionContent>
        </SectionLayout>
      </Box>
      <Footer />
    </Box>
  );
}
