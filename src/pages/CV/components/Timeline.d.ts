import type { TimelineItem } from "../cv_content";

type TimelineEntry = TimelineItem & {
	desc?: string;
	courses?: string[];
};

type TimelineProps = {
	items: TimelineEntry[];
};

declare function Timeline({
	items,
}: TimelineProps): import("react/jsx-runtime").JSX.Element;

export default Timeline;
