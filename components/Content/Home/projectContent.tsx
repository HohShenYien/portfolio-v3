import { Text } from "@chakra-ui/react";
import { IProject } from "../../Projects";
import { Highlighter } from "../../Texts";
import Link from "next/link";

interface ProjectContentContent {
  featured: IProject[];
  others: IProject[];
}

const projectContent: ProjectContentContent = {
  featured: [
    {
      name: "InstaNext",
      type: "Web Application",
      descriptions: [
        <Text key={0}>
          This is a project for my blog series{" "}
          <Link
            target="_blank"
            href="https://blogs.shenyien.cyou/series/insta-next"
          >
            Fullstack Instagram Clone with Next.js
          </Link>
        </Text>,
        <Text key={1}>
          While Next.js is a popular framework for frontend, the number of
          fullstack Next.js projects are still relatively few, so I created this
          series to introduce Next.js to more people.
        </Text>,
        <Text key={2}>
          Unlike other tutorials that only cover a few concepts, this series
          features complete <Highlighter>step-by-step tutorials</Highlighter>{" "}
          covering concepts like Database, REST APIs, Authentication and
          frontend.
        </Text>,
      ],
      tags: ["React", "Next.js", "Prisma", "Mantine", "Tailwind"],
      img: "huqnhVb",
      imgFormat: "jpg",
      github: "https://github.com/HohShenYien/insta-next",
      link: "https://insta-next-alpha.vercel.app/",
      slug: "instanext",
    },
    {
      name: "BizFlow",
      type: "Hackathon",
      descriptions: [
        <Text key={0}>
          BizFlow is an AI-Powered (using ChatGPT API){" "}
          <Highlighter>data intelligence system</Highlighter>
          submitted for{" "}
          <Link href="https://jomhack.com/impacthack/" target="_blank">
            ImpactHack 2023
          </Link>{" "}
          Hackathon that we won as <Highlighter>champion</Highlighter>.
        </Text>,
        <Text key={1}>
          Its goal was to empower SMEs by allowing them to integrate their data
          sources from various platforms for the AI to learn from. Using the
          knowledge, FlowAI will be able to provide advice and recommendations
          to the business owners, acting as a{" "}
          <Highlighter>personal assistant</Highlighter>.
        </Text>,
        <Text key={2}>
          We even integrated <Highlighter>Stable Diffusion</Highlighter> and
          Video Generation into the system
        </Text>,
        <Text key={3}>
          It was even featured on the{" "}
          <Link
            href="https://www.thestar.com.my/news/education/2023/07/30/winning-solution-for-smes"
            target="_blank"
          >
            local news
          </Link>
          .
        </Text>,
      ],
      tags: ["Next.js", "Flask", "AI", "ChatGPT"],
      img: "Kmau3Y1",
      imgFormat: "jpg",
      github: "https://github.com/DoBetter-Malaysia/bizflow-impacthack",
      slug: "bizflow",
    },
    {
      name: "Loopfoods",
      type: "Web Application",
      descriptions: [
        <Text key={0}>
          This is an e-commerce website built from scratch for a{" "}
          <Link target="_blank" href="https://www.linkedin.com/company/eatloop">
            delivery service startup
          </Link>
          .
        </Text>,
        <Text key={1}>
          It is a very comprehensive application, consisting of modules related
          to delivery, food information, admin panel, payment and nutritions.
        </Text>,
        <Text key={2}>
          Due to the startup nature, I had to participate in basically{" "}
          <Highlighter>every part of it</Highlighter>, from backend, frontend to
          deployment. There were times when I as a part-timer had to take lead
          for the project itself. Thus, this was quite a great experience for
          me.
        </Text>,
        <Text key={3}>
          Nevertheless, as the startup ran out of budget, the operation is
          closed down.
        </Text>,
        <Text key={4}>
          By the way, tRPC as backend is a really interesting idea.
        </Text>,
      ],
      tags: ["React", "Next.js", "tRPC", "Mantine", "Docker"],
      img: "IJn6EuH",
      slug: "loopfoods",
    },
    {
      name: "Kommunity",
      type: "Mobile Application",
      descriptions: [
        <Text key={0}>
          This is our project from{" "}
          <Link target="_blank" href="https://odysseyhackfest.com/">
            Odyssey Hackfest
          </Link>
          . It is a one-stop community management mobile application with a
          focus on residents&apos; personal safety.
        </Text>,
        <Text key={1}>
          The app has features like Event Management, Resident Management, Help
          Button, Shake to SOS and more.
        </Text>,
        <Text key={2}>
          The project itself consists of Prototype Design, Business Proposal,
          and a Working Prototype. In the end, we managed to come out as{" "}
          <Highlighter>champion</Highlighter> of the hackathon.
        </Text>,
      ],
      tags: ["Django", "React Native"],
      img: "jxxysqw",
      imgFormat: "jpg",
      github: "https://github.com/HohShenYien/OdysseyHackFest_Kommunity",
      slug: "kommunity",
    },
  ],
  others: [
    {
      name: "Next Power Starter",
      type: "Web Project",
      descriptions: [
        <Text key={0}>
          Next Power Starter is an optionated Next.js starter template with
          <Highlighter>flexibility</Highlighter> &{" "}
          <Highlighter>ease of use</Highlighter> in mind.
        </Text>,
      ],
      tags: ["React", "Next.js", "Mantine", "Tailwind"],
      img: "OODaChW",
      github: "https://github.com/HohShenYien/next-power-starter",
      slug: "next-power-starter",
    },
    {
      name: "Velocap",
      type: "Hackathon",
      descriptions: [
        <Text key={0}>
          Velocap is an AI-driven{" "}
          <Highlighter>venture capital management software</Highlighter>{" "}
          designed to automate and optimize investments through data-driven
          decision-making.
        </Text>,
      ],
      tags: ["Next.js", "Flask", "AI", "SQL", "BingAI"],
      img: "RhvTpbU",
      imgFormat: "jpg",
      github: "https://github.com/DoBetter-Malaysia/velocap-web-umhack",
      slug: "velocap",
    },
    {
      name: "Caringly",
      type: "Web Application",
      descriptions: [
        <Text key={0}>
          It is a web application that enables users to{" "}
          <Highlighter>monitor</Highlighter> posts of their closed {"one's"}{" "}
          social media accounts. If any depression or suicidal signs are found
          in their posts, the users will be notified via an email.
        </Text>,
      ],
      tags: ["Next.js", "Flask", "AI", "Deep Learning"],
      img: "VdTdB7h",
      imgFormat: "jpg",
      github: "https://github.com/HohShenYien/caringly",
      slug: "caringly",
    },
    {
      name: "Vendor Registration Form",
      type: "Web Application",
      descriptions: [
        <Text key={1}>
          A <Highlighter>fully customizable</Highlighter> form like Google Form,
          but more! It <Highlighter>prefills</Highlighter> data collected into
          new entities while remaining fully fluid and dynamic.
        </Text>,
      ],
      tags: ["Vue", "Laravel", "Tailwind"],
      img: "5p5XBWz",
      slug: "vendor-registration-form",
    },
    {
      name: "Starbucks - Coffee At Home",
      type: "Web Application",
      descriptions: [
        <Text key={0}>
          This is an event web application that is used by Starbucks in Malaysia
          to aid the customers throughout the event flow.
        </Text>,
      ],
      tags: ["Vue", "Vuetify", "Laravel"],
      img: "B5yPtCS",
      link: "https://coffeeathome.quintagen.com/",
      slug: "starbuck-coffee-at-home",
    },
    {
      name: "Website Editor",
      type: "Web Application",
      descriptions: [
        <Text key={1}>
          A dynamic, online <Highlighter>personal webpage editor</Highlighter>{" "}
          with a straight forward user interface to allow users customizing
          their own event website easily.
        </Text>,
      ],
      tags: ["Vue", "Laravel", "Vuetify"],
      img: "NBYYp7q",
      link: "https://oye.events/",
      slug: "website-editor",
    },
  ],
};
export default projectContent;
