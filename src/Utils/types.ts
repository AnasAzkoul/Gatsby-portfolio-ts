export enum Sections {
  HOME = `home`,
  ABOUTME = `aboutme`,
  PROJECTS = `projects`,
  CONTACT = `contact`,
}

export type ProjectTypes = {
  id: number;
  name: string;
  title: string;
  description: string;
  stack: readonly (string | null)[];
  links: {
    github: string;
    live: string;
  };
};
