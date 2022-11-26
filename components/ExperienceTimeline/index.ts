import ExperienceTimeline from "./ExperienceTimeline";
import TimelineItem from "./TimelineItem";
import ExperienceDescription from "./ExperienceDescription";
import { ReactNode } from "react";

export interface IExperienceProps {
  title: string;
  company: {
    name: string;
    url: string;
    image: {
      id: string;
      format?: string;
    };
  };
  dates: {
    start: string;
    end: string;
  };
  achievements: ReactNode[];
  techs: string[];
  logo: string;
  angle: number;
}

export { ExperienceTimeline, TimelineItem, ExperienceDescription };
