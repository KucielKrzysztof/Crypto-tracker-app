function StatusMessage({ icon, title, children }) {
	return (
		<section className="flex flex-col justify-center items-center gap-4 mb-10 mt-10 animate-in fade-in zoom-in duration-300">
			<div className="w-full bg-surface border border-white/5 rounded-xl p-12 text-center flex flex-col items-center justify-center gap-4">
				<div className="bg-white/5 p-4 rounded-full text-gray-500">{icon}</div>
				<h3 className="text-xl font-bold text-white">{title}</h3>
				<div className="text-gray-400 max-w-md text-sm leading-relaxed">{children}</div>
			</div>
		</section>
	);
}

export default StatusMessage;
