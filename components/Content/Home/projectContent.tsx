import { Text } from "@chakra-ui/react";
import { NiceLink } from "../../Links";
import { IProject } from "../../Projects";
import { Highlighter } from "../../Texts";

interface ProjectContentContent {
  featured: IProject[];
  others: IProject[];
}

const projectContent: ProjectContentContent = {
  featured: [
    {
      name: "Loopfoods",
      type: "Web Application",
      descriptions: [
        <Text key={0}>
          This is an e-commerce website built from scratch for a{" "}
          <Highlighter>delivery service startup</Highlighter>.
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
      type: "Hackathon Projects",
      descriptions: [
        <Text key={0}>
          This is our project from{" "}
          <NiceLink href="https://odysseyhackfest.com/">
            Odyssey Hackfest
          </NiceLink>
          . It is a one-stop community management mobile application with a
          focus on residents&apos; personal safety.
        </Text>,
        <Text key={1}>
          It consists of <Highlighter>Prototype Design</Highlighter>,{" "}
          <Highlighter>Business Proposal</Highlighter>, and a{" "}
          <Highlighter>Working Prototype</Highlighter>. In the end, we managed
          to come out as champion of the hackathon🏆.
        </Text>,
      ],
      tags: ["Django", "React Native"],
      img: "hhAAMKM",
      github: "https://github.com/HohShenYien/OdysseyHackFest_Kommunity",
      slug: "kommunity",
    },
    {
      name: "Vendor Registration Form",
      type: "Web Application",
      descriptions: [
        <Text key={0}>
          A <Highlighter>digital solution</Highlighter> in replacing traditional
          pen & paper forms for large companies in collecting & registering
          their vendors information.
        </Text>,
        <Text key={1}>
          This module features a <Highlighter>fully customizable</Highlighter>{" "}
          form like Google Form, but more! It{" "}
          <Highlighter>prefills</Highlighter> data collected into new entities
          while remaining fully fluid and dynamic.
        </Text>,
      ],
      tags: ["Vue", "Laravel", "Tailwind"],
      img: "5p5XBWz",
      slug: "vendor-registration-form",
    },
    {
      name: "Website Editor",
      type: "Web Application",
      descriptions: [
        <Text key={0}>
          Started off as an E-Album builder, developed into a{" "}
          <Highlighter>wix-like</Highlighter> template based website editor.
        </Text>,
        <Text key={1}>
          It features a dynamic, online{" "}
          <Highlighter>personal webpage editor</Highlighter> with a straight
          forward user interface to allow users customizing their own event
          website easily.
        </Text>,
      ],
      tags: ["Vue", "Laravel", "Vuetify"],
      img: "NBYYp7q",
      link: "https://oye.events/",
      slug: "website-editor",
    },
  ],
  others: [
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
      name: "Pomodo App",
      type: "Desktop Application",
      descriptions: [
        <Text key={0}>
          An attempt to practise <Highlighter>Rust</Highlighter> and{" "}
          <Highlighter>Angular</Highlighter> by building a simple Pomodoro
          desktop app.
        </Text>,
      ],
      tags: ["Angular", "Tauri", "Rust"],
      img: "R6tOWEc",
      github: "https://github.com/HohShenYien/pomodo",
      slug: "pomodo-app",
    },
    {
      name: "APAC Mailer",
      type: "Desktop Application",
      descriptions: [
        <Text key={0}>
          A utility app that helps my club in{" "}
          <Highlighter>bulk sending emails</Highlighter> and certificates to
          event participants.
        </Text>,
      ],
      tags: ["Vue", "Electron", "Vuetify", "Flask"],
      img: "bPSwnPS",
      github: "https://github.com/HohShenYien/pomodo",
      slug: "apac-mailer",
    },
    {
      name: "v2 Website",
      type: "Website",
      descriptions: [
        <Text key={0}>
          My second attempt in rebuilding my website after learning about Vue.
          Tried to design uniquely but ended up rather superflous.
        </Text>,
        <Text key={1}>
          However, it was an amazing learning experience that boosted up my
          skills.
        </Text>,
      ],
      tags: ["Vue", "Nuxt", "Vuetify"],
      img: "0wuU2uX",
      github: "https://github.com/HohShenYien/portfolio-v2",
      link: "https://v2.shenyien.cyou",
      slug: "v2-website",
    },
    {
      name: "Nutribot",
      type: "Desktop Application",
      descriptions: [
        <Text key={0}>
          A chatbot that recommends on{" "}
          <Highlighter>users&apos; diet</Highlighter> based on disease names and
          symptoms.
        </Text>,
        <Text key={1}>
          Made for my universiy assignment with own chatbot implementation.
        </Text>,
      ],
      tags: ["Python", "PyQT", "Tensorflow", "NLTK"],
      img: "Act0oub",
      github:
        "https://github.com/HohShenYien/university_assignments/tree/main/year%201/sem%202/IAI",
      slug: "nutribot",
    },
    {
      name: "Pomodoro Focus",
      type: "Mobile Application",
      descriptions: [
        <Text key={0}>
          A Pomodoro Timer application. It was the final assignment for{" "}
          <NiceLink href="https://cs50.harvard.edu/x/2020/">CS50 2020</NiceLink>
        </Text>,
      ],
      tags: ["Java", "Android"],
      img: "kUUpawE",
      github: "https://github.com/HohShenYien/Pomodoro_Focus",
      slug: "pomodoro-focus",
    },
  ],
};
export default projectContent;
