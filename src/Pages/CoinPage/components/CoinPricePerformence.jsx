import { formatCurrency, formatPercentage } from "../../../utils/formatters";

function CoinPricePerformence({ coin }) {
	if (!coin?.market_data) return null;
	const md = coin.market_data;

	const formatDate = (dateString) => new Date(dateString).toLocaleDateString();

	return (
		<div className="bg-surface border border-white/5 rounded-xl p-6 mt-6">
			<h3 className="text-xl font-bold mb-4">Performance</h3>

			<div className="space-y-6">
				{/* ATH */}
				<div className="relative pl-4 border-l-2 border-green-500">
					<div className="flex justify-between items-start">
						<div>
							<span className="text-xs text-gray-400 uppercase tracking-wider">All Time High</span>
							<div className="text-xl font-bold text-white mt-1">{formatCurrency(md.ath.usd) || "-"}</div>
						</div>
						<div className="text-right">
							<span className="text-red-400 text-sm font-medium">{formatPercentage(md.ath_change_percentage.usd) || "-"}</span>
						</div>
					</div>
					<div className="text-xs text-gray-500 mt-1">{formatDate(md.ath_date.usd) || "-"}</div>
				</div>

				{/* ATL */}
				<div className="relative pl-4 border-l-2 border-red-500">
					<div className="flex justify-between items-start">
						<div>
							<span className="text-xs text-gray-400 uppercase tracking-wider">All Time Low</span>
							<div className="text-xl font-bold text-white mt-1">{formatCurrency(md.atl.usd) || "-"}</div>
						</div>
						<div className="text-right">
							<span className="text-green-400 text-sm font-medium">+{formatPercentage(md.atl_change_percentage.usd) || "-"}</span>
						</div>
					</div>
					<div className="text-xs text-gray-500 mt-1">{formatDate(md.atl_date.usd) || "-"}</div>
				</div>
			</div>
		</div>
	);
}

export default CoinPricePerformence;
