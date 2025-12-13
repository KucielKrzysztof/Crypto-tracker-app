function CoinHeader({ coin }) {
	const { image, name, symbol, market_cap_rank, market_data } = coin;

	return (
		<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-white/10 pb-6">
			<div className="flex items-center gap-4">
				<img src={image?.large} alt={name} className="w-16 h-16 rounded-full bg-white/5 p-1" />
				<div>
					<h1 className="text-3xl font-bold text-white">
						{name} <span className="text-gray-500 text-xl uppercase">({symbol})</span>
					</h1>
					<div className="flex items-center gap-2 mt-1">
						<span className="bg-white/10 text-xs px-2 py-0.5 rounded text-gray-300">Rank #{market_cap_rank}</span>
					</div>
				</div>
			</div>

			<div className="text-left md:text-right">
				<div className="text-3xl font-mono font-bold text-white">${market_data?.current_price?.usd.toLocaleString()}</div>
				<div className={`text-sm font-medium ${market_data?.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}`}>
					{market_data?.price_change_percentage_24h?.toFixed(2)}% (24h)
				</div>
			</div>
		</div>
	);
}

export default CoinHeader;
