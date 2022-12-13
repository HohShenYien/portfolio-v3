import { Grid } from "@chakra-ui/react";
import ReadingBlock from "./ReadingBlock";

const readingByBlock: {
  title: string;
  key: "new" | "reading" | "completed";
}[] = [
  {
    title: "To Read",
    key: "new",
  },
  {
    title: "Reading in Progress",
    key: "reading",
  },
  {
    title: "Completed",
    key: "completed",
  },
];

const Readings = () => {
  return (
    <Grid
      gridTemplateColumns={{ lg: "repeat(3, 1fr)", base: "1fr" }}
      gap={8}
      justifyItems="center"
      maxW={{ base: "md", lg: "none" }}
      mx="auto"
    >
      {readingByBlock.map((block) => (
        <ReadingBlock key={block.key} value={block.key} title={block.title} />
      ))}
    </Grid>
  );
};

export default Readings;
