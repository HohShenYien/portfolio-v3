import SkillGrid from "./SkillGrid";

export interface Skill {
  name: string;
  progress: number;
  description: string;
  emoji?: string;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

export { SkillGrid };
