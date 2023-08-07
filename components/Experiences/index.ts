import { ReactNode } from "react";
import Experiences from "./Experiences";

export interface IExperienceProps {
  title: string;
  company: {
    name: string;
    url: string;
  };
  dates: {
    start: string;
    end: string;
  };
  achievements: ReactNode[];
  techs: string[];
  logo: string;
  type: "Part-Time" | "Internship" | "Full-Time";
}

export { Experiences };
