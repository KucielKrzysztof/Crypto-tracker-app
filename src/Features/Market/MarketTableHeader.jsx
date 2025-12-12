function MarketTableHeader({ title }) {
	return (
		<div className="px-6 py-4 border-b border-white/5 flex justify-start items-center bg-surface/50 backdrop-blur-sm gap-4">
			<h2 className="text-xl font-bold text-white">Crypto Market</h2>
			<div className="text-sm text-gray-400">{title}</div>
		</div>
	);
}

export default MarketTableHeader;
