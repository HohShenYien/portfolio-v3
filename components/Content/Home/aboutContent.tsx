import { Highlighter } from "components/Texts";
import { NiceLink } from "../../Links";

const aboutContent = {
  descriptions: [
    <>
      Hi there! I{"'"}m <Highlighter>Shen Yien</Highlighter>, a Malaysian
      fullstack developer with a knack in logical problem solving. My journey
      began with tackling complex problems on{" "}
      <NiceLink href="https://projecteuler.net/">The Euler Project</NiceLink>{" "}
      using Python back in 2018, and I{"'"}ve been hooked ever since.
    </>,
    <>
      Since then, I{"'"}ve had the opportunity to work with a{" "}
      <NiceLink href="https://www.quintagen.com/">software house</NiceLink>, a{" "}
      <NiceLink href="https://www.mindworks.xyz/">technology agency</NiceLink>,
      and a <NiceLink href="https://adam-procure.com/">SaaS start-up</NiceLink>.
      Today, I{"'"}m dedicated to developing exceptional web applications that
      tackle user pain points and contribute to making the world a better place
      to live in.
    </>,
    <>
      In addition to my work, I also write{" "}
      <NiceLink href="https://blogs.shenyien.cyou">blogs</NiceLink> where I
      share my journey as a fullstack developer and the lessons I learned along
      the journey.
    </>,
  ],
};

export default aboutContent;
