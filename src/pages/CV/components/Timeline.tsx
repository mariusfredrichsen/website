import type { TimelineItem } from "../cv_content";
import BulletItem from "./BulletItem";

type TimelineEntry = TimelineItem & {
	desc?: string;
	courses?: string[];
}

type TimelineProps = {
	items: TimelineEntry[];
}

function Timeline({ items }: TimelineProps) {
	return (
		<div className="cv-timeline">
			{items.map((it, index) => (
				<div key={index} className="cv-timeline-item">
					<span className="cv-timeline-dot"></span>
					<div className="cv-item-top">
						<div className="cv-item-role">{it.role}</div>
						<div className="cv-item-period cv-mono">{it.period}</div>
					</div>
					<div className="cv-item-org">{it.org}</div>
					{it.desc && <p className="cv-item-desc">{it.desc}</p>}
					{it.courses && it.courses.length > 0 && (
						<div className="cv-item-courses">
							{it.courses.map((course, i) => (
								<BulletItem key={i} className="cv-course">{course}</BulletItem>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	)
}

export default Timeline;
