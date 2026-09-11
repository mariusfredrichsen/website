type BulletItemProps = {
	className?: string;
	children: React.ReactNode;
}

function BulletItem({ className, children }: BulletItemProps) {
	return (
		<div className={className}>
			<span className="cv-dot-accent">·</span>
			<span>{children}</span>
		</div>
	)
}

export default BulletItem;
