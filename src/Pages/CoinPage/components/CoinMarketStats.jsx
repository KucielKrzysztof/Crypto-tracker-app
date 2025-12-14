import { formatCurrency, formatCompactNumber } from "../../../utils/formatters";

function CoinMarketStats({ coin }) {
	const { market_data } = coin;
	return (
		<div className="space-y-6">
			<div className="bg-surface border border-white/5 rounded-xl p-6">
				<h3 className="text-lg font-bold mb-4 text-gray-200">Market Stats</h3>

				<div className="space-y-4">
					<StatRow label="Market Cap" value={formatCurrency(market_data?.market_cap?.usd)} />
					<StatRow label="Trading Vol (24h)" value={formatCurrency(market_data?.total_volume?.usd)} />
					<StatRow label="Circulating Supply" value={formatCompactNumber(market_data?.circulating_supply)} />
					<StatRow label="Max Supply" value={market_data?.max_supply ? formatCompactNumber(market_data.max_supply) : "∞"} />
				</div>
			</div>
		</div>
	);
}

function StatRow({ label, value }) {
	return (
		<div className="flex justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0">
			<span className="text-gray-500 text-sm">{label}</span>
			<span className="text-white font-mono text-sm">{value}</span>
		</div>
	);
}

export default CoinMarketStats;
