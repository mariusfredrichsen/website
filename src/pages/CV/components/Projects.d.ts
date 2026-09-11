import type { Project } from "../cv_content";
type ProjectsProps = {
    projects: Project[];
    expandedProject: string | null;
    onExpandedChange: (projectName: string | null, cardOffset?: number, centerOffset?: number) => void;
};
declare function Projects({ projects, expandedProject, onExpandedChange }: ProjectsProps): import("react/jsx-runtime").JSX.Element;
export default Projects;
