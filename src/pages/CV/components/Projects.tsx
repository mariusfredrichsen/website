import type { Project } from "../cv_content";

type ProjectsProps = {
	projects: Project[];
	expandedProject: string | null;
	onExpandedChange: (projectName: string | null, cardOffset?: number, centerOffset?: number) => void;
}

function Projects({ projects, expandedProject, onExpandedChange }: ProjectsProps) {
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
					</div>
					<span className="cv-project-read-more">
						{expandedProject === p.name ? "Read less" : "Read more"}
					</span>
				</article>
			))}
		</div>
	)
}

export default Projects;
