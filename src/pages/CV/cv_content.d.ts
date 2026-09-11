export type Lang = "en" | "no";
export type Variant = "concise" | "full";
export type ContactItem = {
    label: string;
    value: string;
};
export type SkillGroup = {
    label: string;
    items: string[];
};
export type Language = {
    name: string;
    level: string;
};
export type Headings = {
    contact: string;
    skills: string;
    languages: string;
    general: string;
    experience: string;
    education: string;
    projects: string;
    volunteer: string;
};
export type Experience = {
    role: string;
    org: string;
    period: string;
    desc: string;
    courses: string[];
    core?: boolean;
};
export type Project = {
    name: string;
    tech: string[];
    desc: string;
    details: string;
    core?: boolean;
};
export type TimelineItem = {
    role: string;
    org: string;
    period: string;
    core?: boolean;
};
export type CVContent = {
    name: string;
    title: string;
    summary: string;
    references: string;
    projectsNote: string;
    h: Headings;
    contact: ContactItem[];
    skills: SkillGroup[];
    languages: Language[];
    general: string[];
    experience: Experience[];
    projects: Project[];
    education: TimelineItem[];
    volunteer: TimelineItem[];
};
export declare const content: Record<Lang, CVContent>;
export declare function filterByVariant<T extends {
    core?: boolean;
}>(items: T[], variant: Variant): T[];
