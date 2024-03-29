import { Box, Grid, Text, VStack } from "@chakra-ui/react";
import { projectContent } from "../Content";
import { SectionContent, SectionLayout } from "../Layouts";
import headers from "../NavBars/MainNav/headers";
import { FeaturedProject } from "../Projects";
import { OtherProjects } from "../Projects/OtherProjects";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <SectionLayout title="WHAT I BUILT" id={headers[2].id}>
      <SectionContent>
        <VStack spacing={{ md: 16, base: 12 }}>
          {projectContent.featured.map((proj, index) => (
            <FeaturedProject {...proj} key={index} inverted={index % 2 == 0} />
          ))}
        </VStack>
        <Box mt={20} textAlign="center" mb={8}>
          <Text
            color="whiteAlpha.800"
            fontWeight="semibold"
            as="h4"
            fontSize="xl"
          >
            Some Other Interesting Projects
          </Text>
          <Link href="/projects">Project Archives</Link>
        </Box>
        <OtherProjects projects={projectContent.others} />
      </SectionContent>
    </SectionLayout>
  );
};

export default ProjectSection;
