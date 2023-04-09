import { Box } from "@chakra-ui/react";
import { MouseEventHandler, useState } from "react";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { generateImgurUrl, ImageViewer } from "components/Image";
import { MainNavWrapper } from "components/NavBars/MainNav";
import {
  AboutSection,
  ExperienceSection,
  HeroSection,
  ProjectSection,
  SkillSection,
} from "components/Sections";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const onMouseMove: MouseEventHandler = (mouseEvent) => {
    const { pageX, pageY } = mouseEvent;
    setMousePos({ x: pageX, y: pageY });
  };

  return (
    <Box as="div" bg="brand.1000" onMouseMove={onMouseMove}>
      <Header
        description={
          "Shen Yien is a passionate software engineer who brings ideas to life with seamless functionality and specializes in crafting innovative solutions."
        }
        image={generateImgurUrl({
          size: "large thumbnail",
          imgurId: "nPrJjja",
        })}
      />
      <ImageViewer />
      <MainNavWrapper />
      <Box as="main" minH="100vh" pt={12}>
        <HeroSection mousePos={mousePos} />
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
        <SkillSection />
      </Box>
      <Footer />
    </Box>
  );
}
