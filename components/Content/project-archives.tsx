import { NiceLink } from "components/Links";
import { IProjectArchives } from "components/Projects";
import { Highlighter } from "components/Texts";

const projectArchives: IProjectArchives = {
  "2022": [
    {
      name: "Kommunity",
      type: "Hackathon Projects",
      descriptions: [
        <>
          This is our project from{" "}
          <NiceLink blank href="https://odysseyhackfest.com/">
            Odyssey Hackfest
          </NiceLink>
          . It is a one-stop community management mobile application with a
          focus on residents&apos; personal safety.
        </>,
        <>
          It consists of <Highlighter text="Prototype Design" />,{" "}
          <Highlighter text="Business Proposal" />, and a{" "}
          <Highlighter text="Working Prototype" />. In the end, we managed to
          come out as champion of the hackathon🏆.
        </>,
        <>
          This is our project from{" "}
          <NiceLink blank href="https://odysseyhackfest.com/">
            Odyssey Hackfest
          </NiceLink>
          . It is a one-stop community management mobile application with a
          focus on residents&apos; personal safety.
        </>,
        <>
          It consists of <Highlighter text="Prototype Design" />,{" "}
          <Highlighter text="Business Proposal" />, and a{" "}
          <Highlighter text="Working Prototype" />. In the end, we managed to
          come out as champion of the hackathon🏆.
        </>,
        <>
          This is our project from{" "}
          <NiceLink blank href="https://odysseyhackfest.com/">
            Odyssey Hackfest
          </NiceLink>
          . It is a one-stop community management mobile application with a
          focus on residents&apos; personal safety.
        </>,
        <>
          It consists of <Highlighter text="Prototype Design" />,{" "}
          <Highlighter text="Business Proposal" />, and a{" "}
          <Highlighter text="Working Prototype" />. In the end, we managed to
          come out as champion of the hackathon🏆.
        </>,
      ],
      tags: ["Django", "React Native"],
      img: "hhAAMKM",
      github: "https://github.com/HohShenYien/OdysseyHackFest_Kommunity",
      location: "Asia Pacific University",
    },
    {
      name: "Vendor Registration Form",
      type: "Web Application",
      descriptions: [
        <>
          A <Highlighter text="digital solution" /> in replacing traditional pen
          & paper forms for large companies in collecting & registering their
          vendors information.
        </>,
        <>
          This module features a <Highlighter text="fully customizable" /> form
          like Google Form, but more! It <Highlighter text="prefills" /> data
          collected into new entities while remaining fully fluid and dynamic.
        </>,
      ],
      tags: ["Vue", "Laravel", "Tailwind"],
      img: "5p5XBWz",
      location: "SupplyCart Technology",
    },
    {
      name: "Pomodo App",
      type: "Desktop Application",
      descriptions: [
        <>
          An attempt to practise <Highlighter text="Rust" /> and{" "}
          <Highlighter text="Angular" /> by building a simple Pomodoro desktop
          app.
        </>,
      ],
      tags: ["Angular", "Tauri", "Rust"],
      img: "R6tOWEc",
      github: "https://github.com/HohShenYien/pomodo",
      location: "Personal Project",
    },
  ],
  2021: [
    {
      name: "Website Editor",
      type: "Web Application",
      descriptions: [
        <>
          Started off as an E-Album builder, developed into a{" "}
          <Highlighter text="wix-like" /> template based website editor.
        </>,
        <>
          It features a dynamic, online{" "}
          <Highlighter text="personal webpage editor" /> with a straight forward
          user interface to allow users customizing their own event website
          easily.
        </>,
      ],
      tags: ["Vue", "Laravel", "Vuetify"],
      img: "NBYYp7q",
      link: "https://oye.events/",
      location: "Own Your Events",
    },
    {
      name: "Starbucks - Coffee At Home",
      type: "Web Application",
      descriptions: [
        <>
          Coffee At Home is an experimental journey in Malaysia held by none
          other than <Highlighter text="Starbucks" />. As of 2023, more than 14k
          Malaysians have participated in the event using this application.
        </>,
        <>
          It features a user-friendly event interface in guiding the users from
          all age range to complete their coffee journeys.
        </>,
        <>
          Beyond users, this application includes a real-time analysis dashboard
          and management system for the admins, as well as a station master
          system.
        </>,
      ],
      tags: ["Vue", "Vuetify", "Laravel"],
      img: "B5yPtCS",
      link: "https://coffeeathome.quintagen.com/",
      location: "Quintagen",
    },
    {
      name: "APAC Mailer",
      type: "Desktop Application",
      descriptions: [
        <>
          A utility app that helps my club in{" "}
          <Highlighter text="bulk sending emails" /> and certificates to event
          participants.
        </>,
      ],
      tags: ["Vue", "Electron", "Vuetify", "Flask"],
      img: "bPSwnPS",
      github: "https://github.com/HohShenYien/pomodo",
      location: "Asia Pacific Analytics Club",
    },
    {
      name: "APAC Website",
      type: "Website",
      descriptions: [
        <>
          A SPA website built for my university club to display various
          information.
        </>,
      ],
      tags: ["React", "Next.js", "Chakra-ui"],
      img: "CFDBiPs",
      github: "apu-apac.netlify.app/",
      link: "https://apu-apac.netlify.app/",
      location: "Asia Pacific Analytics Club",
    },
    {
      name: "v2 Website",
      type: "Website",
      descriptions: [
        <>
          My second attempt in rebuilding my website after learning about Vue.
          Tried to design uniquely but ended up rather superflous.
        </>,
        <>
          However, it was an amazing learning experience that boosted up my
          skills.
        </>,
      ],
      tags: ["Vue", "Nuxt", "Vuetify"],
      img: "0wuU2uX",
      github: "https://github.com/HohShenYien/personal-blog",
      link: "https://v2.shenyien.cyou",
      location: "Personal Project",
    },
    {
      name: "Nutribot",
      type: "Desktop Application",
      descriptions: [
        <>
          A chatbot that recommends on <Highlighter text="users' diet" /> based
          on disease names and symptoms.
        </>,
        <>Made for my universiy assignment with own chatbot implementation.</>,
      ],
      tags: ["Python", "PyQT", "Tensorflow", "NLTK"],
      img: "Act0oub",
      github:
        "https://github.com/HohShenYien/university_assignments/tree/main/year%201/sem%202/IAI",
      location: "Asia Pacific University",
    },
  ],
  2020: [
    {
      name: "Pomodoro Focus",
      type: "Mobile Application",
      descriptions: [
        <>
          A Pomodoro Timer application. It was the final assignment for{" "}
          <NiceLink href="https://cs50.harvard.edu/x/2020/">CS50 2020</NiceLink>
        </>,
      ],
      tags: ["Java", "Android"],
      img: "kUUpawE",
      github: "https://github.com/HohShenYien/Pomodoro_Focus",
      location: "CS50",
    },
    {
      name: "Pokedex",
      type: "Mobile Application",
      descriptions: [
        <>
          A simple Pokedex Android application which was my first attempt in
          building Android app.
        </>,
      ],
      tags: ["Java", "Android"],
      img: "x4DuDJk",
      github: "https://github.com/HohShenYien/Pokedex",
      location: "CS50",
    },
  ],
};

export default projectArchives;
