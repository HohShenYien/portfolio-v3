import { ReactNode } from "react";
import { FeaturedProject } from "./FeaturedProject";
import { OtherProjects } from "./OtherProjects";

export interface IProject {
  name: string;
  type: string;
  description: ReactNode;
  tags: string[];
  img: string;
  github?: string;
  link?: string;
}

export { FeaturedProject, OtherProjects };
