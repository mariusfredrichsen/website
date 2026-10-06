type SectionHeadProps = {
	number: string;
	title: string;
	note?: string;
}

function SectionHead({ number, title, note }: SectionHeadProps) {
	return (
		<div className="pj-section-head">
			<span className="pj-section-num pj-mono">{number}</span>
			<h2 className="pj-section-title pj-mono">{title}</h2>
			<span className="pj-rule"></span>
			{note && <span className="pj-section-note pj-mono">{note}</span>}
		</div>
	)
}

export default SectionHead;
