import { Box, Text } from "@chakra-ui/react";
import { fadeUp } from "components/Animation";
import { projectArchives } from "components/Content";
import { Header } from "components/Header";
import { generateImgurUrl } from "components/Image";
import { SectionLayout, SectionContent } from "components/Layouts";
import { ProjectArchives } from "components/Projects";
import { ProjectViewer } from "components/Projects";
import { m } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useViewerStore } from "store";

export default function Project() {
  const { setData } = useViewerStore();
  const router = useRouter();

  useEffect(() => {
    if (router.isReady && router.query.project) {
      for (let year in projectArchives) {
        for (let i = 0; i < projectArchives[year].length; i++) {
          if (projectArchives[year][i].slug === router.query.project) {
            setData?.({ key: year, index: i });
            break;
          }
        }
      }
    }
  }, [router.isReady]);
  return (
    <Box as="div" bg="brand.1000">
      <Header
        title="Project Archives"
        description="A collection of my past projects."
        image={generateImgurUrl({
          size: "large thumbnail",
          imgurId: "xQtQJHt",
        })}
      />
      <ProjectViewer />
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
              Project Archives
            </Text>
            <Text
              color="brand.300"
              fontFamily="mono"
              fontSize={{ md: "xl", base: "lg" }}
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
    </Box>
  );
}
