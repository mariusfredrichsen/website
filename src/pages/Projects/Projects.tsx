import { useState } from "react";
import { Link } from "react-router";
import "./Projects.css";
import { content } from "../CV/cv_content";
import { contextLabel, getProjects, isTeam, teamLabel, ui, usesAi } from "./projects_content";
import type { Kind, MergedProject, Ui } from "./projects_content";
import { useLang } from "./useLang";
import ProjectsToolbar from "./components/ProjectsToolbar";
import SectionHead from "./components/SectionHead";

type KindFilter = Kind | "all";
type ToggleId = "ai" | "course" | "team" | "personal";

const KINDS: Kind[] = ["web", "mobile", "bot", "hardware"];

function toggleLabel(t: Ui, id: ToggleId): string {
	switch (id) {
		case "ai": return t.toggleAi;
		case "course": return t.toggleCourse;
		case "team": return t.toggleTeam;
		case "personal": return t.togglePersonal;
	}
}

function cardLabels(t: Ui, p: MergedProject): string[] {
	const labels = [contextLabel(t, p.meta)];
	// A course project done in a team shows both.
	if (p.meta.context !== "team" && (p.meta.team ?? 0) > 1) labels.push(t.contexts.team);
	return labels;
}

function Projects() {
	const [lang, toggleLang] = useLang();
	const [kind, setKind] = useState<KindFilter>("all");
	const [on, setOn] = useState<Record<ToggleId, boolean>>({ ai: false, course: false, team: false, personal: false });

	const t = ui[lang];
	const projects = getProjects(lang);

	// "Made with AI" narrows; the context toggles widen among themselves.
	const contextOn = (["course", "team", "personal"] as const).filter((id) => on[id]);
	const shown = projects.filter((p) =>
		(kind === "all" || p.meta.kind === kind) &&
		(!on.ai || usesAi(p.meta)) &&
		(contextOn.length === 0 || contextOn.some((id) => id === "team" ? isTeam(p.meta) : p.meta.context === id))
	);

	const courseCount = projects.filter((p) => p.meta.context === "course").length;
	const aiCount = projects.filter((p) => usesAi(p.meta)).length;

	return (
		<div className="projects-page">
			<ProjectsToolbar
				t={t}
				back={{ to: "/", label: t.backToSite }}
				onToggleLang={toggleLang}
				showNav
			/>

			<main className="pj-doc">

				<section className="pj-header">
					<div className="pj-name-row">
						<span className="pj-accent-bar"></span>
						<h1 className="pj-name">{t.title}</h1>
					</div>
					<p className="pj-intro">{t.intro}</p>
					<div className="pj-counts pj-mono">
						<span>{projects.length} {t.projectsCount}</span>
						<span>{courseCount} {t.fromCourses}</span>
						<span>{aiCount} {t.madeWithAi}</span>
						<a href="https://github.com/mariusfredrichsen" target="_blank" rel="noopener noreferrer" className="pj-plain-link">
							{content[lang].projectsNote}
						</a>
					</div>
				</section>

				<section className="pj-section">
					<SectionHead number="01" title={t.filter} note={`${t.showing} ${shown.length}`} />
					<div className="pj-filters">
						<div role="group" aria-label={t.projectType} className="pj-seg-group">
							{(["all", ...KINDS] as KindFilter[]).map((k) => (
								<button
									key={k}
									type="button"
									className={`pj-btn pj-seg${kind === k ? " pj-btn-active" : ""}`}
									aria-pressed={kind === k}
									onClick={() => setKind(k)}
								>
									{k === "all" ? t.all : t.kinds[k]}
								</button>
							))}
						</div>
						<span className="pj-divider"></span>
						{(["ai", "course", "team", "personal"] as ToggleId[]).map((id) => (
							<button
								key={id}
								type="button"
								className={`pj-btn pj-toggle${on[id] ? " pj-toggle-on" : ""}`}
								aria-pressed={on[id]}
								onClick={() => setOn((prev) => ({ ...prev, [id]: !prev[id] }))}
							>
								{toggleLabel(t, id)}
							</button>
						))}
					</div>
				</section>

				<section className="pj-section">
					<SectionHead number="02" title={t.allHeading} />

					{shown.length === 0 && <p className="pj-empty pj-mono" role="status">{t.empty}</p>}

					<div className="pj-grid">
						{shown.map((p) => {
							const num = String(projects.indexOf(p) + 1).padStart(2, "0");
							const tags = [...p.tech, ...(p.meta.extraTags ?? [])];
							const footer = [
								p.meta.team !== undefined ? teamLabel(t, p.meta.team) : undefined,
								p.meta.period?.[lang],
							].filter(Boolean).join(" · ");
							const live = p.meta.status !== "finished";

							return (
								<article key={p.slug} className="pj-card">
									<div className="pj-card-top pj-mono">
										<span className="pj-card-num">{num}</span>
										<span className="pj-card-kind">{t.kinds[p.meta.kind]}</span>
										<span className="pj-spacer"></span>
										<span className={live ? "pj-status-live" : "pj-status"}>{t.statuses[p.meta.status]}</span>
									</div>
									<h3 className="pj-card-name">{p.name}</h3>
									<div className="pj-tag-row pj-mono">
										{p.meta.ai === "assisted" || p.meta.ai === "generated" ? (
											<span className="pj-ai-badge">{t.aiBadge[p.meta.ai]}</span>
										) : null}
										{cardLabels(t, p).map((label) => (
											<span key={label} className="pj-label">{label}</span>
										))}
									</div>
									<p className="pj-card-desc">{p.desc}</p>
									<div className="pj-tag-row pj-mono">
										{tags.map((tag) => (
											<span key={tag} className="pj-tech">#{tag}</span>
										))}
									</div>
									<div className="pj-card-foot pj-mono">
										<span>{footer}</span>
										<span className="pj-spacer"></span>
										<Link
											to={`/projects/${p.slug}`}
											className="pj-card-link"
											aria-label={t.readMoreAria(p.name)}
										>
											{t.readMore}
										</Link>
									</div>
								</article>
							)
						})}
					</div>
				</section>

			</main>
		</div>
	)
}

export default Projects;
