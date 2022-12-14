import { Highlight } from "@chakra-ui/react";
import { NiceLink } from "../../Links";
import { Highlighter } from "../../Texts";

const aboutContent = {
  descriptions: [
    <>
      Hello! My name is <Highlighter>Shen Yien</Highlighter> and I&apos;m a
      Malaysian fullstack developer with a knack in logical problem solving. My
      journey began with solving problems from{" "}
      <NiceLink href="https://projecteuler.net/">The Euler Project</NiceLink>{" "}
      using Python back in 2018. It&apos;s still impressive to me how I could
      make my computer solve problems that seem impossible easily.
    </>,
    <>
      Fast forward to today, I&apos;ve had the privilege to work with a{" "}
      <NiceLink href="https://www.quintagen.com/">software house</NiceLink>, a{" "}
      <NiceLink href="https://www.mindworks.xyz/">technology agency</NiceLink>,
      and a <NiceLink href="https://adam-procure.com/">SaaS start-up</NiceLink>.
      Currently, I focus on developing exceptional{" "}
      <Highlighter>Web Applications</Highlighter> that solve users&apos; pain
      points and make world a better place to live in!
    </>,
    <>
      I also maintain a{" "}
      <NiceLink href="https://v2.shenyien.cyou/csdiary">blog</NiceLink> about my
      journey as a fullstack developer including some lessons and knowledge that
      I learned along the journey.
    </>,
  ],
};

export default aboutContent;
