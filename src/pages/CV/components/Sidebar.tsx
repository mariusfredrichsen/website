import type { CVContent } from "../cv_content";
import BulletItem from "./BulletItem";

type SidebarProps = {
	c: CVContent;
}

type SideSectionProps = {
	label: string;
	className?: string;
	children: React.ReactNode;
}

const SideSection = ({ label, className, children }: SideSectionProps) => {
	return (
		<section className={className}>
			<div className="cv-side-head">
				<span className="cv-side-label cv-mono">{label}</span>
				<span className="cv-rule"></span>
			</div>
			{children}
		</section>
	)
}

function Sidebar({ c }: SidebarProps) {
	const { h, contact, skills, languages, general, references } = c;
	return (
		<aside className="cv-aside">

			<SideSection label={h.contact} className="cv-side-contact">
				<div className="cv-contact-list">
					{contact.map((ct, index) => (
						<div key={index} className="cv-contact-item">
							<span className="cv-contact-label cv-mono">{ct.label}</span>
							<span className="cv-contact-value">{ct.value}</span>
						</div>
					))}
				</div>
			</SideSection>

			<SideSection label={h.skills} className="cv-side-skills">
				<div className="cv-skill-groups">
					{skills.map((group, index) => (
						<div key={index}>
							<div className="cv-skill-group-label cv-mono">{group.label}</div>
							<div className="cv-chip-row">
								{group.items.map((skill, i) => (
									<span key={i} className="cv-chip cv-mono">{skill}</span>
								))}
							</div>
						</div>
					))}
				</div>
			</SideSection>

			<SideSection label={h.languages} className="cv-side-languages">
				<div className="cv-lang-list">
					{languages.map((lg, index) => (
						<div key={index} className="cv-lang-item">
							<span className="cv-lang-name">{lg.name}</span>
							<span className="cv-lang-level cv-mono">{lg.level}</span>
						</div>
					))}
				</div>
			</SideSection>

			<SideSection label={h.general} className="cv-side-general">
				<div className="cv-general-list">
					{general.map((gn, index) => (
						<BulletItem key={index} className="cv-general-item">{gn}</BulletItem>
					))}
				</div>
			</SideSection>

			<div className="cv-references">{references}</div>

		</aside>
	)
}

export default Sidebar;
