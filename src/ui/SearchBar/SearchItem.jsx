const SearchItem = ({ coin, showPriceAlways, onClick }) => {
	return (
		<div
			onClick={onClick}
			className="flex items-center justify-between px-4 py-3 hover:bg-white/5 cursor-pointer transition-colors border-b border-white/5 last:border-0"
		>
			<div className="flex items-center gap-3">
				{coin.thumb && coin.thumb !== "missing_large.png" ? (
					<img src={coin.thumb} alt={coin.name} className="w-8 h-8 rounded-full object-cover" />
				) : (
					<div className="w-8 h-8 rounded-full bg-surface-hover flex items-center justify-center text-xs font-bold text-white border border-white/10">
						{coin.symbol ? coin.symbol[0].toUpperCase() : "?"}
					</div>
				)}
				<div className="flex flex-col items-start">
					<p className="text-sm font-medium text-white leading-none">{coin.name}</p>
					<p className="text-xs text-gray-500 mt-1">{coin.symbol}</p>
				</div>
			</div>

			<div className={`${showPriceAlways ? "block" : "hidden lg:block"} text-right`}>
				<p className="text-sm font-mono text-white">Rank:</p>
				{coin.market_cap_rank && <div className="text-xs font-mono text-gray-600 bg-white/5 px-2 py-1 rounded">#{coin.market_cap_rank}</div>}
			</div>
		</div>
	);
};

export default SearchItem;
