type SectionHeadingProps = {
	number: string;
	title: string;
	note?: string;
}

function SectionHeading({ number, title, note }: SectionHeadingProps) {
	return (
		<div className="cv-section-head">
			<span className="cv-section-num cv-mono">{number}</span>
			<span className="cv-section-title cv-mono">{title}</span>
			<span className="cv-rule"></span>
			{note && <span className="cv-section-note cv-mono">{note}</span>}
		</div>
	)
}

export default SectionHeading;
