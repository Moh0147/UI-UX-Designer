export type SkillCategory =
  | "Backend Development"
  | "Databases"
  | "Frontend Development"
  | "Development Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface SkillGroup {
  category: SkillCategory;
  skills: string[];
}
