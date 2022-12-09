import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { MouseEventHandler, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { generateImgurUrl } from "../components/Image";
import { MainNavWrapper } from "../components/NavBars/MainNav";
import {
  AboutSection,
  ExperienceSection,
  HeroSection,
  ProjectSection,
  SkillSection,
} from "../components/Sections";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const onMouseMove: MouseEventHandler = (mouseEvent) => {
    const { pageX, pageY } = mouseEvent;
    setMousePos({ x: pageX, y: pageY });
  };

  return (
    <Box as="div" bg="brand.1000" onMouseMove={onMouseMove}>
      <Header
        description="Shen Yien is a fullstack web developer who specializes in delivering exceptional digital experiences"
        image={generateImgurUrl({
          size: "medium thumbnail",
          imgurId: "nPrJjja",
        })}
      />
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
