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
          <NiceLink blank href="https://odysseyhackfest.com/">
            Odyssey Hackfest
          </NiceLink>
          . It is a one-stop community management mobile application with a
          focus on residents&apos; personal safety.
        </Text>,
        <Text key={1}>
          It consists of <Highlighter text="Prototype Design" />,{" "}
          <Highlighter text="Business Proposal" />, and a{" "}
          <Highlighter text="Working Prototype" />. In the end, we managed to
          come out as champion of the hackathon🏆.
        </Text>,
      ],
      tags: ["Django", "React Native"],
      img: "hhAAMKM",
      github: "https://github.com/HohShenYien/OdysseyHackFest_Kommunity",
    },
    {
      name: "Vendor Registration Form",
      type: "Web Application",
      descriptions: [],
      tags: ["Vue", "Laravel", "Tailwind"],
      img: "5p5XBWz",
    },
    {
      name: "Website Editor",
      type: "Web Application",
      descriptions: [],
      tags: ["Vue", "Laravel", "Vuetify"],
      img: "ivm8EsG",
      link: "https://oye.events/",
    },
    {
      name: "Pomodo App",
      type: "Desktop Application",
      descriptions: [],
      tags: ["Angular", "Tauri", "Rust"],
      img: "R6tOWEc",
      github: "https://github.com/HohShenYien/pomodo",
    },
  ],
  others: [
    {
      name: "APAC Mailer",
      type: "Desktop Application",
      descriptions: [],
      tags: ["Vue", "Electron", "Vuetify"],
      img: "bPSwnPS",
      github: "https://github.com/HohShenYien/pomodo",
    },
    {
      name: "APAC Website",
      type: "Website",
      descriptions: [],
      tags: ["React", "Next.js", "Vuetify"],
      img: "CFDBiPs",
      github: "https://github.com/HohShenYien/pomodo",
    },
    {
      name: "v2 Website",
      type: "Website",
      descriptions: [],
      tags: ["Vue", "Nuxt", "Vuetify"],
      img: "0wuU2uX",
      github: "https://github.com/HohShenYien/pomodo",
    },
    {
      name: "Starbucks - Coffee At Home",
      type: "Web Application",
      descriptions: [],
      tags: ["Vue", "Vuetify", "Laravel"],
      img: "0wuU2uX",
      github: "https://github.com/HohShenYien/pomodo",
    },
    {
      name: "Nutribot",
      type: "Desktop Application",
      descriptions: [],
      tags: ["Python", "PyQT", "Tensorflow", "NLTK"],
      img: "bPSwnPS",
      github: "https://github.com/HohShenYien/pomodo",
    },
    {
      name: "Pomodoro Focus",
      type: "Mobile Application",
      descriptions: [],
      tags: ["Java", "Android"],
      img: "bPSwnPS",
      github: "https://github.com/HohShenYien/pomodo",
    },
    {
      name: "Pokedex",
      type: "Mobile Application",
      descriptions: [],
      tags: ["Java", "Android"],
      img: "bPSwnPS",
      github: "https://github.com/HohShenYien/pomodo",
    },
  ],
};
export default projectContent;
