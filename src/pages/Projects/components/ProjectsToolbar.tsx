import type { ReactNode } from "react";
import { Link } from "react-router";
import type { Ui } from "../projects_content";

type ProjectsToolbarProps = {
	t: Ui;
	back: { to: string; label: string };
	onToggleLang: () => void;
	showNav?: boolean;
	extra?: ReactNode;
}

// `> CV <` that loses its spaces on hover, like the home page links.
function NavLink({ to, label, current }: { to: string; label: string; current?: boolean }) {
	return (
		<Link to={to} className="pj-navlink" aria-current={current ? "page" : undefined}>
			<span aria-hidden="true">&gt;<span className="pj-sp"> </span></span>
			{label}
			<span aria-hidden="true"><span className="pj-sp"> </span>&lt;</span>
		</Link>
	)
}

function ProjectsToolbar({ t, back, onToggleLang, showNav, extra }: ProjectsToolbarProps) {
	return (
		<header className="pj-toolbar">
			<Link to={back.to} className="pj-backlink pj-mono">{back.label}</Link>
			<span className="pj-spacer"></span>
			{showNav && (
				<nav className="pj-nav pj-mono" aria-label="Site">
					<NavLink to="/cv" label={t.navCv} />
					<NavLink to="/run" label={t.navRun} />
					<NavLink to="/projects" label={t.navProjects} current />
				</nav>
			)}
			{extra}
			<button type="button" className="pj-btn" onClick={onToggleLang}>{t.other}</button>
		</header>
	)
}

export default ProjectsToolbar;
