import { Grid, Box, Text, Flex } from "@chakra-ui/react";
import { BackgroundWatermark, SectionTitle } from "components/Texts";
import { IProjectArchives, ProjectArchive, ProjectArchiveGrid } from "..";
import { m } from "framer-motion";
import { fadeInRight } from "components/Animation";

interface IProjectArchivesProps {
  projects: IProjectArchives;
}

const ProjectArchives = ({ projects }: IProjectArchivesProps) => {
  return (
    <>
      {Object.keys(projects)
        .sort((a, b) => +b - +a)
        .map((year) => (
          <Box key={year} mt={12} pos="relative">
            <Text
              color="brand.500"
              fontWeight="medium"
              fontSize="2xl"
              fontFamily={"mono"}
              as={m.h2}
              {...fadeInRight}
              transitionDelay={"100ms"}
            >
              Year {year}
            </Text>
            <ProjectArchiveGrid year={year} projects={projects[year]} />
          </Box>
        ))}
    </>
  );
};

export default ProjectArchives;
