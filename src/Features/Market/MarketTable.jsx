import { TrendingUp, TrendingDown, Star } from "lucide-react";
import Button from "../../ui/Button";
import { useCryptoData } from "./hooks/useCryptoData";
import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";

function MarketTable() {
	const { data, isPending, error } = useCryptoData();
	const navigate = useNavigate();

	if (isPending) {
		return (
			<div className="flex flex-col items-center justify-center py-20 gpa-4">
				<Spinner size={48} />
				<p className="text-gray-400 font-mono text-sm animate-pulse">Loading data...</p>
			</div>
		);
	}

	if (error) {
		return <div className="text-center py-20 text-red-400">An ERROR occurred: {error}.</div>;
	}

	/* for false positive request ok status */
	const safeData = Array.isArray(data) ? data : [];

	return (
		<section id="marketTable" className="flex flex-col justify-center items-center gap-4 mb-10">
			<div className="w-full bg-surface border border-white/5 rounded-xl overflow-hidden shadow-xl mt-10 ">
				{/* Header*/}
				<div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-surface/50 backdrop-blur-sm">
					<h2 className="text-xl font-bold text-white">Crypto Market</h2>
					<div className="text-sm text-gray-400">Top 5 Coins</div>
				</div>

				{/* Table container, scroll horizontal for mobile devices */}
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
							{safeData.slice(0, 5).map((coin) => (
								<tr key={coin.id} className="group hover:bg-surface-hover transition-colors duration-200">
									{/* Number */}
									<td className="px-6 py-4 text-gray-500 font-mono text-sm">{coin.market_cap_rank}</td>

									{/* Name and SYmbol */}
									<td className="px-6 py-4">
										<div className="flex items-center gap-3">
											{/* Placeholder icon */}
											<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-xs font-bold text-white border border-white/10">
												{coin.symbol[0]}
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
									<td className={`px-6 py-4 text-right font-medium ${coin.change >= 0 ? "text-color-up" : "text-color-down"}`}>
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
			</div>
			<Button onClick={() => navigate("/cryptocurrencies")} variant="secondary">
				See More Coins
			</Button>
		</section>
	);
}

export default MarketTable;
