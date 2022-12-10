import { Grid } from "@chakra-ui/react";
import { useScrollSeqAnimation } from "hooks";
import { useRef } from "react";
import { IProjectArchive } from "..";
import { ProjectArchive } from "./ProjectArchive";
import { m } from "framer-motion";

interface IProjectArchiveGridProps {
  year: string;
  projects: IProjectArchive[];
}

const ProjectArchiveGrid = ({ projects, year }: IProjectArchiveGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const fadeUpControls = useScrollSeqAnimation({
    ref: gridRef,
    animation: (i) => ({
      opacity: 1,
      translateY: 0,
      transition: { delay: i * 0.2 + 0.4, duration: 0.2, ease: "easeOut" },
    }),
  });

  return (
    <Grid templateColumns={"repeat(4, 1fr)"} gap={4} mt={3} ref={gridRef}>
      {projects.map((project, idx) => (
        <m.div
          key={idx}
          animate={fadeUpControls}
          custom={idx}
          initial={{ opacity: 0, translateY: 30 }}
        >
          <ProjectArchive {...project} key={idx} />
        </m.div>
      ))}
    </Grid>
  );
};

export default ProjectArchiveGrid;
