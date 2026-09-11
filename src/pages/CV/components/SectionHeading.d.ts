type SectionHeadingProps = {
	number: string;
	title: string;
	note?: string;
};

declare function SectionHeading({
	number,
	title,
	note,
}: SectionHeadingProps): import("react/jsx-runtime").JSX.Element;

export default SectionHeading;
