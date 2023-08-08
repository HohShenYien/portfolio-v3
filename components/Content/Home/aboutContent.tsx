import { Highlighter } from "components/Texts";
import Link from "next/link";

const aboutContent = {
  descriptions: [
    <>
      Hi there! I{"'"}m <Highlighter>Shen Yien</Highlighter>, a Malaysian
      fullstack developer with a knack for logical problem solving. My journey
      began with tackling complex problems on{" "}
      <Link target="_blank" href="https://projecteuler.net/">
        The Euler Project
      </Link>{" "}
      using Python back in 2018, and I{"'"}ve been hooked ever since.
    </>,
    <>
      Since then, I{"'"}ve had the opportunity to work with a{" "}
      <Link target="_blank" href="https://www.quintagen.com/">
        software house
      </Link>
      , a{" "}
      <Link target="_blank" href="https://www.mindworks.xyz/">
        technology agency
      </Link>
      , and a{" "}
      <Link target="_blank" href="https://adam-procure.com/">
        SaaS start-up
      </Link>
      . Today, I{"'"}m dedicated to developing exceptional web applications that
      tackle user pain points and contribute to making the world a better place
      to live in.
    </>,
    <>
      In addition to my work, I also write{" "}
      <Link target="_blank" href="https://blogs.shenyien.cyou">
        blogs
      </Link>{" "}
      where I share my journey as a fullstack developer and the lessons I
      learned along the journey.
    </>,
  ],
};

export default aboutContent;
