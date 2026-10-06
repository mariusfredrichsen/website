import { Link, Navigate, useParams } from "react-router";
import "./Projects.css";
import { contextLabel, getProjects, teamLabel, ui } from "./projects_content";
import { useLang } from "./useLang";
import ProjectsToolbar from "./components/ProjectsToolbar";
import SectionHead from "./components/SectionHead";

type Fact = { label: string; value: React.ReactNode };

function Paragraphs({ text }: { text: string }) {
	return (
		<>
			{text.split("\n\n").map((para, i) => (
				<p key={i} className="pj-body">{para}</p>
			))}
		</>
	)
}

function ProjectDetail() {
	const { slug } = useParams();
	const [lang, toggleLang] = useLang();

	const t = ui[lang];
	const projects = getProjects(lang);
	const index = projects.findIndex((p) => p.slug === slug);

	if (index === -1) return <Navigate to="/projects" replace />;

	const p = projects[index];
	const { meta } = p;
	const prev = projects[index - 1];
	const next = projects[index + 1];
	const num = String(index + 1).padStart(2, "0");
	const total = String(projects.length).padStart(2, "0");
	const tags = [...p.tech, ...(meta.extraTags ?? [])];

	const labels = [contextLabel(t, meta)];
	if (meta.context !== "team" && (meta.team ?? 0) > 1) labels.push(t.contexts.team);

	// Only fields that are set are listed.
	const facts: Fact[] = [
		{ label: t.type, value: t.kinds[meta.kind] },
		{ label: t.context, value: contextLabel(t, meta) },
	];
	if (meta.team !== undefined) facts.push({ label: t.team, value: teamLabel(t, meta.team) });
	if (meta.role) facts.push({ label: t.role, value: meta.role[lang] });
	if (meta.period) facts.push({ label: t.period, value: meta.period[lang] });
	facts.push({ label: t.status, value: t.statuses[meta.status] });
	if (meta.ai) facts.push({ label: t.aiUseLabel, value: t.aiUse[meta.ai] });
	if (meta.links && meta.links.length > 0) {
		facts.push({
			label: t.links,
			value: (
				<span className="pj-links">
					{meta.links.map((l) => (
						<a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">{l.label[lang]} →</a>
					))}
				</span>
			),
		});
	}

	// Numbered sections, in the order they appear.
	const sections: { title: string; body: React.ReactNode }[] = [
		{ title: t.overview, body: <Paragraphs text={p.details} /> },
	];
	if (meta.images && meta.images.length > 0) {
		sections.push({
			title: t.screens,
			body: (
				<div className="pj-images">
					{meta.images.map((src, i) => (
						<img key={src} src={src} alt={t.screenshot(p.name, i + 1)} loading="lazy" className="pj-image" />
					))}
				</div>
			),
		});
	}
	for (const s of meta.sections ?? []) {
		sections.push({ title: s.title[lang], body: <Paragraphs text={s.body[lang]} /> });
	}
	if (meta.aiNote) {
		sections.push({ title: t.howAi, body: <div className="pj-ai-note"><Paragraphs text={meta.aiNote[lang]} /></div> });
	}

	return (
		<div className="projects-page">
			<ProjectsToolbar
				t={t}
				back={{ to: "/projects", label: t.allProjects }}
				onToggleLang={toggleLang}
				extra={<span className="pj-counter pj-mono">{num} / {total}</span>}
			/>

			<main className="pj-doc">

				<section className="pj-header">
					<div className="pj-card-top pj-mono">
						<span className="pj-card-num">{num}</span>
						<span className="pj-card-kind">{t.kinds[meta.kind]}</span>
						<span className="pj-dim">·</span>
						<span className={meta.status === "finished" ? "pj-status" : "pj-status-live"}>{t.statuses[meta.status]}</span>
					</div>
					<div className="pj-name-row">
						<span className="pj-accent-bar"></span>
						<h1 className="pj-name">{p.name}</h1>
					</div>
					<p className="pj-intro pj-intro-lg">{p.desc}</p>
					<div className="pj-tag-row pj-mono">
						{meta.ai === "assisted" || meta.ai === "generated" ? (
							<span className="pj-ai-badge">{t.aiBadge[meta.ai]}</span>
						) : null}
						{labels.map((label) => (
							<span key={label} className="pj-label">{label}</span>
						))}
					</div>
				</section>

				<div className="pj-detail-body">

					<aside className="pj-aside">
						<h2 className="pj-side-label pj-mono">{t.facts}</h2>
						<dl className="pj-facts pj-mono">
							{facts.map((f) => (
								<div key={f.label} className="pj-fact">
									<dt>{f.label}</dt>
									<dd>{f.value}</dd>
								</div>
							))}
						</dl>
						<div className="pj-aside-rule"></div>
						<h2 className="pj-side-label pj-mono">{t.tech}</h2>
						<div className="pj-tag-row pj-mono">
							{tags.map((tag) => (
								<span key={tag} className="pj-tech pj-tech-on-band">#{tag}</span>
							))}
						</div>
					</aside>

					<article className="pj-article">
						{sections.map((s, i) => (
							<section key={s.title} className="pj-section">
								<SectionHead number={String(i + 1).padStart(2, "0")} title={s.title} />
								{s.body}
							</section>
						))}

						{(prev || next) && (
							<nav className="pj-prevnext pj-mono" aria-label={t.prevNext}>
								{prev && <Link to={`/projects/${prev.slug}`} className="pj-prev">← {prev.name}</Link>}
								<span className="pj-spacer"></span>
								{next && <Link to={`/projects/${next.slug}`}>{next.name} →</Link>}
							</nav>
						)}
					</article>
				</div>
			</main>
		</div>
	)
}

export default ProjectDetail;
