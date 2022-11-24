import { IProject } from "../../Projects";

interface ProjectContentContent {
  featured: IProject[];
}

const projectContent: ProjectContentContent = {
  featured: [
    {
      name: "Kommunity",
      type: "Hackathon Projects",
      description: <>This is a project from my hackathon</>,
      tags: ["Django", "React Native"],
      img: "hhAAMKM",
      github: "https://github.com/HohShenYien/OdysseyHackFest_Kommunity",
      link: "https://google.com",
    },
    {
      name: "Kommunity",
      type: "Hackathon Projects",
      description: <></>,
      tags: ["Django", "React Native"],
      img: "hhAAMKM",
      github: "https://github.com/HohShenYien/OdysseyHackFest_Kommunity",
      link: "https://google.com",
    },
    {
      name: "Kommunity",
      type: "Hackathon Projects",
      description: <></>,
      tags: ["Django", "React Native"],
      img: "hhAAMKM",
    },
    {
      name: "Kommunity",
      type: "Hackathon Projects",
      description: <></>,
      tags: ["Django", "React Native"],
      img: "hhAAMKM",
    },
  ],
};
export default projectContent;
