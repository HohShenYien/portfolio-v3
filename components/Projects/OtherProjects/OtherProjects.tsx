import { Grid } from "@chakra-ui/react";
import { IProject } from "..";
import { m, useAnimationControls } from "framer-motion";
import OtherProject from "./OtherProject";
import useOnScreen from "../../../hooks/useOnScreen";
import { useEffect, useRef } from "react";

interface IOtherProjectsProps {
  projects: IProject[];
}

const OtherProjects = ({ projects }: IOtherProjectsProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const fadeUpControls = useAnimationControls();
  const isOnScreen = useOnScreen(gridRef);

  useEffect(() => {
    isOnScreen &&
      fadeUpControls.start((i) => ({
        opacity: 1,
        translateY: 0,
        transition: { delay: i * 0.2, duration: 0.2, ease: "easeOut" },
      }));
  }, [fadeUpControls, isOnScreen]);

  return (
    <Grid
      templateColumns={{ md: "repeat(3, 1fr)", base: "1fr" }}
      gap={{ md: 4, base: 6 }}
      ref={gridRef}
    >
      {projects.map((project, index) => (
        <m.div
          key={index}
          initial={{ opacity: 0, translateY: 30 }}
          animate={fadeUpControls}
          custom={index}
        >
          <OtherProject {...project} />
        </m.div>
      ))}
    </Grid>
  );
};

export default OtherProjects;
