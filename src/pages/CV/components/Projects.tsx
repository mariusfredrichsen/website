import { Link } from "react-router";
import type { Project } from "../cv_content";

type ProjectsProps = {
	projects: Project[];
	readMore: string;
	readLess: string;
	fullPage: string;
	expandedProject: string | null;
	onExpandedChange: (projectName: string | null, cardOffset?: number, centerOffset?: number) => void;
}

function Projects({ projects, readMore, readLess, fullPage, expandedProject, onExpandedChange }: ProjectsProps) {
	const toggleProject = (projectName: string, card: HTMLElement) => {
		const nextProject = expandedProject === projectName ? null : projectName;
		const { left, width } = card.getBoundingClientRect();
		const centerOffset = window.innerWidth / 2 - (left + width / 2);
		const separation = Math.min(Math.max(window.innerWidth * 0.04, 32), 72);
		onExpandedChange(nextProject, width + separation, centerOffset);
	};

	return (
		<div className="cv-projects">
			{projects.map((p) => (
				<article
					key={p.name}
					className={`cv-project${expandedProject === p.name ? " cv-project-expanded" : ""}`}
					role="button"
					tabIndex={0}
					aria-expanded={expandedProject === p.name}
					onClick={(event) => {
						const card = event.currentTarget;
						toggleProject(p.name, card);
						window.requestAnimationFrame(() => card.scrollIntoView({ behavior: "smooth", block: "center" }));
					}}
					onKeyDown={(event) => {
						if (event.key === "Enter" || event.key === " ") {
							event.preventDefault();
							const card = event.currentTarget;
							toggleProject(p.name, card);
							window.requestAnimationFrame(() => card.scrollIntoView({ behavior: "smooth", block: "center" }));
						}
					}}
				>
					<div className="cv-project-name">{p.name}</div>
					<div className="cv-chip-row">
						{p.tech.map((t, i) => (
							<span key={i} className="cv-tech cv-mono">{t}</span>
						))}
					</div>
					<p className="cv-project-desc">{p.desc}</p>
					<div className="cv-project-details">
						<p className="cv-project-extra">{p.details}</p>
						{/* Keep link clicks and Enter from toggling the card. */}
						<div
							className="cv-project-links cv-mono"
							onClick={(event) => event.stopPropagation()}
							onKeyDown={(event) => event.stopPropagation()}
						>
							{p.url && (
								<a href={p.url} target="_blank" rel="noopener noreferrer">{p.url.replace(/^https?:\/\//, "")} ↗</a>
							)}
							{p.slug && <Link to={`/projects/${p.slug}`}>{fullPage} →</Link>}
						</div>
					</div>
					<span className="cv-project-read-more cv-mono">
						{expandedProject === p.name ? readLess : readMore}
					</span>
				</article>
			))}
		</div>
	)
}

export default Projects;
