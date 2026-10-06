import type { Project } from "../cv_content";
type ProjectsProps = {
    projects: Project[];
    readMore: string;
    readLess: string;
    fullPage: string;
    expandedProject: string | null;
    onExpandedChange: (projectName: string | null, cardOffset?: number, centerOffset?: number) => void;
};
declare function Projects({ projects, readMore, readLess, fullPage, expandedProject, onExpandedChange }: ProjectsProps): import("react/jsx-runtime").JSX.Element;
export default Projects;
