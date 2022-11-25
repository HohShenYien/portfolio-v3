import { Grid } from "@chakra-ui/react";
import { useRef } from "react";
import { useScrollSeqAnimation } from "../../hooks";
import skillContent from "../Content/Home/skillContent";
import SkillCard from "./SkillCard";
import { m } from "framer-motion";

const SkillGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const fadeUpControls = useScrollSeqAnimation({
    ref: gridRef,
    animation: (i) => ({
      opacity: 1,
      translateY: 0,
      transition: { delay: i * 0.2, duration: 0.2, ease: "easeOut" },
    }),
  });

  return (
    <Grid
      templateColumns={{ md: "repeat(3, 1fr)", base: "1fr" }}
      gap={4}
      ref={gridRef}
    >
      {skillContent.map((content, index) => (
        <m.div
          key={index}
          initial={{ opacity: 0, translateY: 30 }}
          animate={fadeUpControls}
          custom={index}
        >
          <SkillCard {...content} delay={(index + 1) * 0.2} gridRef={gridRef} />
        </m.div>
      ))}
    </Grid>
  );
};

export default SkillGrid;
