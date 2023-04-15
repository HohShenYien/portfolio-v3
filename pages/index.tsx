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
  return (
    <Box as="div" bg="brand.1000">
      <Header
        description={
          "Shen Yien is a passionate software engineer who brings ideas to life with seamless functionality and specializes in crafting innovative solutions."
        }
        image={generateImgurUrl({
          size: "large thumbnail",
          imgurId: "xQtQJHt",
        })}
      />
      <ImageViewer />
      <MainNavWrapper />
      <Box as="main" minH="100vh" pt={12}>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
        <SkillSection />
      </Box>
      <Footer />
    </Box>
  );
}
