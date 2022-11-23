import { ReactNode } from "react";
import { Project } from "./Project";

interface IProject {
  name: string;
  subtitle: string;
  description: ReactNode;
  tags: string[];
  img: string;
}

export { Project };
