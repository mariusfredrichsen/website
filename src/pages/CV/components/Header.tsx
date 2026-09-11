import type { CVContent } from "../cv_content";

type HeaderProps = Pick<CVContent, "name" | "title" | "summary">;


function Header({ name, title, summary }: HeaderProps) {
	return (
		<header className="cv-header">
			<div className="cv-header-id">
				<div className="cv-name-row">
					<span className="cv-accent-bar"></span>
					<h1 className="cv-name">{name}</h1>
				</div>
				<div className="cv-title-chip cv-mono">{title}</div>
			</div>
			<img className="cv-photo" src="/bildeavmeg.png" alt="Portrait" />
			<p className="cv-summary">{summary}</p>
		</header>
	)
}

export default Header;
