import { useState } from "react";
import type { CSSProperties } from "react";
import { Link } from "react-router";
import "./CV.css";
import { content, filterByVariant } from "./cv_content";
import type { Lang, Variant } from "./cv_content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SectionHeading from "./components/SectionHeading";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";

type Mode = "dark" | "light";
type ExpandedProject = { name: string; cardOffset: number; documentOffset: number };

const ui = {
	no: { length: "Lengde", concise: "Kort", full: "Full", light: "Lys", dark: "Mørk", home: "Til hovedsiden", other: "English" },
	en: { length: "Length", concise: "Concise", full: "Full", light: "Light", dark: "Dark", home: "Back to main site", other: "Norsk" },
} as const;

function CV() {
	const [lang, setLang] = useState<Lang>("en");
	const [variant, setVariant] = useState<Variant>("full");
	const [mode, setMode] = useState<Mode>("dark");
	const [expandedProject, setExpandedProject] = useState<ExpandedProject | null>(null);

	const c = content[lang];
	const t = ui[lang];

	const experience = filterByVariant(c.experience, variant);
	const projects = filterByVariant(c.projects, variant);
	const education = filterByVariant(c.education, variant);
	const volunteer = filterByVariant(c.volunteer, variant);

	return (
		<div
			className={`cv-page${mode === "light" ? " cv-light" : ""}${expandedProject ? " cv-project-open" : ""}`}
			style={expandedProject ? {
				"--project-slide": `${expandedProject.cardOffset}px`,
				"--project-document-offset": `${expandedProject.documentOffset}px`,
			} as CSSProperties : undefined}
		>

			<div className="cv-toolbar">
				<Link to="/" className="cv-btn cv-btn-link">← {t.home}</Link>

				<span className="cv-toolbar-divider" />

				<span className="cv-toolbar-label">{t.length}</span>
				<div className="cv-toolbar-group">
					<button
						className={`cv-btn${variant === "concise" ? " cv-btn-active" : ""}`}
						onClick={() => setVariant("concise")}
					>
						{t.concise}
					</button>
					<button
						className={`cv-btn${variant === "full" ? " cv-btn-active" : ""}`}
						onClick={() => setVariant("full")}
					>
						{t.full}
					</button>
				</div>

				<span className="cv-toolbar-spacer" />

				{expandedProject && (
					<button className="cv-btn" onClick={() => setExpandedProject(null)}>
						← Back
					</button>
				)}

				<button
					className="cv-btn"
					onClick={() => setLang((l) => (l === "en" ? "no" : "en"))}
				>
					{t.other}
				</button>
				<button
					className="cv-btn"
					onClick={() => setMode((m) => (m === "dark" ? "light" : "dark"))}
				>
					{mode === "dark" ? `${t.light}` : `${t.dark}`}
				</button>
			</div>

			<main className="cv-doc">

				<Header name={c.name} title={c.title} summary={c.summary} />

				<div className="cv-body">

					<Sidebar c={c} />

					<div className="cv-main">

						<section className="cv-section">
							<SectionHeading number="01" title={c.h.experience} />
							<Timeline items={experience} />
						</section>

						<section className="cv-section">
							<SectionHeading number="02" title={c.h.projects} note={c.projectsNote} />
							<Projects
								projects={projects}
								expandedProject={expandedProject?.name ?? null}
								onExpandedChange={(name, cardOffset, centerOffset) => setExpandedProject((current) => {
									if (!name || !cardOffset || centerOffset === undefined) return null;
									return {
										name,
										cardOffset,
										documentOffset: (current?.documentOffset ?? 0) + centerOffset - cardOffset,
									};
								})}
							/>
						</section>

						<section className="cv-section">
							<SectionHeading number="03" title={c.h.education} />
							<Timeline items={education} />
						</section>

						<section className="cv-section">
							<SectionHeading number="04" title={c.h.volunteer} />
							<Timeline items={volunteer} />
						</section>

					</div>
				</div>
			</main>
		</div>
	)
}

export default CV;
