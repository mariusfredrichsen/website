import type { ReactNode } from "react";
import type { Ui } from "../projects_content";
type ProjectsToolbarProps = {
    t: Ui;
    back: {
        to: string;
        label: string;
    };
    onToggleLang: () => void;
    showNav?: boolean;
    extra?: ReactNode;
};
declare function ProjectsToolbar({ t, back, onToggleLang, showNav, extra }: ProjectsToolbarProps): import("react/jsx-runtime").JSX.Element;
export default ProjectsToolbar;
