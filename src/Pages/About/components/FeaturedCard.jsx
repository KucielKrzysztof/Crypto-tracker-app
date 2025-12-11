function FeatureCard({ icon, title, description }) {
	return (
		<div className="bg-surface border border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group">
			<div className="mb-4 p-3 bg-white/5 rounded-xl w-fit group-hover:bg-white/10 transition-colors">{icon}</div>
			<h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
			<p className="text-gray-400 leading-relaxed">{description}</p>
		</div>
	);
}
export default FeatureCard;
