import type { CVContent } from "../cv_content";

type HeaderProps = Pick<CVContent, "name" | "title" | "summary">;

declare function Header({
	name,
	title,
	summary,
}: HeaderProps): import("react/jsx-runtime").JSX.Element;

export default Header;
