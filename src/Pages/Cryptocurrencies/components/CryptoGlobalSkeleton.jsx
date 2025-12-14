function CryptoGlobalSkeleton() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
			{[1, 2, 3, 4].map((i) => (
				<div key={i} className="h-24 bg-surface/50 border border-white/5 rounded-xl animate-pulse" />
			))}
		</div>
	);
}

export default CryptoGlobalSkeleton;
