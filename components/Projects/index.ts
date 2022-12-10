import { ReactNode } from "react";
import { FeaturedProject } from "./FeaturedProject";
import { OtherProjects } from "./OtherProjects";

export interface IProject {
  name: string;
  type: string;
  descriptions: ReactNode[];
  tags: string[];
  img: string;
  github?: string;
  link?: string;
}

export interface IProjectArchive extends IProject {
  year: number;
  location: string;
}

export interface IProjectArchives extends Record<string, IProjectArchive[]> {}

export * from "./ProjectArchives";

export { FeaturedProject, OtherProjects };
