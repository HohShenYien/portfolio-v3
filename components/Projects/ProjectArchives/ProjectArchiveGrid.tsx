import { Grid } from "@chakra-ui/react";
import { useScrollSeqAnimation } from "hooks";
import { useRef } from "react";
import { IProjectArchive } from "..";
import { ProjectArchive } from "./ProjectArchive";
import { m } from "framer-motion";
import { useViewerStore } from "store";
import { useRouter } from "next/router";

interface IProjectArchiveGridProps {
  year: string;
  projects: IProjectArchive[];
}

const ProjectArchiveGrid = ({ projects, year }: IProjectArchiveGridProps) => {
  const router = useRouter();
  const gridRef = useRef<HTMLDivElement>(null);
  const fadeUpControls = useScrollSeqAnimation({
    ref: gridRef,
    animation: (i) => ({
      opacity: 1,
      translateY: 0,
      transition: { delay: i * 0.2 + 0.4, duration: 0.2, ease: "easeOut" },
    }),
  });

  const setData = useViewerStore((state) => state.setData);

  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      gap={4}
      mt={3}
      ref={gridRef}
    >
      {projects.map((project, idx) => (
        <m.div
          key={idx}
          animate={fadeUpControls}
          custom={idx}
          initial={{ opacity: 0, translateY: 30 }}
          onClick={() => {
            setData?.({ key: year, index: idx });
            router.push(
              { query: { ...router.query, project: project.slug } },
              undefined,
              { shallow: true }
            );
          }}
        >
          <ProjectArchive {...project} key={idx} />
        </m.div>
      ))}
    </Grid>
  );
};

export default ProjectArchiveGrid;
