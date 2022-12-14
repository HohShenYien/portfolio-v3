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
    },
    {
      name: "Starbucks - Coffee At Home",
      type: "Web Application",
      descriptions: [
        <Text key={0}>
          Coffee At Home is an experimental journey in Malaysia held by none
          other than <Highlighter>Starbucks</Highlighter>. As of 2023, more than
          14k Malaysians have participated in the event using this application.
        </Text>,
        <Text key={1}>
          It features a user-friendly event interface in guiding the users from
          all age range to complete their coffee journeys.
        </Text>,
        <Text key={2}>
          Beyond users, this application includes a real-time analysis dashboard
          and management system for the admins, as well as a station master
          system.
        </Text>,
      ],
      tags: ["Vue", "Vuetify", "Laravel"],
      img: "B5yPtCS",
      link: "https://coffeeathome.quintagen.com/",
    },
  ],
  others: [
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
    },
    {
      name: "APAC Website",
      type: "Website",
      descriptions: [
        <Text key={0}>
          A SPA website built for my university club to display various
          information.
        </Text>,
      ],
      tags: ["React", "Next.js", "Chakra-ui"],
      img: "CFDBiPs",
      github: "apu-apac.netlify.app/",
      link: "https://apu-apac.netlify.app/",
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
      github: "https://github.com/HohShenYien/personal-blog",
      link: "https://v2.shenyien.cyou",
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
    },
  ],
};
export default projectContent;
