import { TrendingUp, TrendingDown, Star } from "lucide-react";
import Button from "../../ui/Button";

function MarketTableBody({ data }) {
	return (
		<div className="overflow-x-auto">
			<table className="w-full text-left border-collapse">
				<thead>
					<tr className="text-gray-400 text-xs uppercase tracking-wider border-b border-white/5 bg-[#1f1f25]">
						<th className="px-6 py-4 font-medium">#</th>
						<th className="px-6 py-4 font-medium">Name</th>
						<th className="px-6 py-4 font-medium text-right">Price</th>
						<th className="px-6 py-4 font-medium text-right">24h %</th>
						<th className="px-6 py-4 font-medium text-right hidden md:table-cell">Market Cap</th>
						<th className="px-6 py-4 font-medium text-center">Action</th>
					</tr>
				</thead>

				<tbody className="divide-y divide-white/5">
					{/* only first 5 crypto coins */}
					{data.slice(0, 5).map((coin) => (
						<tr key={coin.id} className="group hover:bg-surface-hover transition-colors duration-200">
							{/* Number */}
							<td className="px-6 py-4 text-gray-500 font-mono text-sm">{coin.market_cap_rank}</td>

							{/* Name and SYmbol */}
							<td className="px-6 py-4">
								<div className="flex items-center gap-3">
									{/* Placeholder icon */}
									<div className="w-8 h-8 rounded-full  from-gray-700 to-gray-800 flex items-center justify-center text-xs font-bold text-white border border-white/10">
										<img src={coin.image} />
									</div>
									<div>
										<span className="block text-white font-semibold">{coin.name}</span>
										<span className="block text-gray-500 text-xs">{coin.symbol}</span>
									</div>
								</div>
							</td>

							{/* Price */}
							<td className="px-6 py-4 text-right font-medium text-white font-mono">
								${coin.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
							</td>

							{/* Change in 24h*/}
							<td className={`px-6 py-4 text-right font-medium ${coin.price_change_percentage_24h >= 0 ? "text-up" : "text-down"}`}>
								<div className="flex items-center justify-end gap-1">
									{coin.price_change_percentage_24h >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
									{coin.price_change_percentage_24h.toFixed(2)}%
								</div>
							</td>

							{/* Market Cap (hidden on mobile) */}
							<td className="px-6 py-4 text-right text-gray-400 text-sm hidden md:table-cell">${coin.market_cap.toLocaleString()}</td>

							{/* Favourite  */}
							<td className="px-6 py-4 text-center">
								<Button className="text-gray-500 hover:text-yellow-400 transition-colors p-2 rounded-full hover:bg-white/5">
									<Star size={18} />
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default MarketTableBody;
