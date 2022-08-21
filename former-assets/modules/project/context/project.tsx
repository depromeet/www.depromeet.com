import { createContext } from 'react';

type Project = {
  id: number;
  length: number;
};

export const ProjectContext = createContext<Project>(null!);

type Props = {
  children: React.ReactNode;
  id: number;
  length: number;
};

export default function ProjectProvider({ children, ...props }: Props) {
  return <ProjectContext.Provider value={{ ...props }}>{children}</ProjectContext.Provider>;
}
