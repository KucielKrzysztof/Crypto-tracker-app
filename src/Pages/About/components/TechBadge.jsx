function TechBadge({ icon, name }) {
	return (
		<div className="flex items-center gap-2 px-4 py-2 bg-background/50 border border-white/10 rounded-full text-sm font-mono text-gray-300 hover:text-white hover:border-primary/50 transition-colors cursor-default">
			{icon}
			<span>{name}</span>
		</div>
	);
}

export default TechBadge;
