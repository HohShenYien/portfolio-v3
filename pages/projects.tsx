import { Box } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { generateImgurUrl } from "../components/Image";
import { MainNavWrapper } from "../components/NavBars/MainNav";

export default function Project() {
  return (
    <Box as="div" bg="brand.1000">
      <Header
        title="Project Archives"
        description="A collection of my past projects"
        image={generateImgurUrl({
          size: "medium thumbnail",
          imgurId: "nPrJjja",
        })}
      />
      <MainNavWrapper />
      <Box as="main" minH="100vh" pt={12}></Box>
      <Footer />
    </Box>
  );
}
