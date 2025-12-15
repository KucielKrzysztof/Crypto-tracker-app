import { TrendingUp, TrendingDown, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Sparkline from "../../ui/Sparkline";
import { useWatchlist } from "../../context/WatchlistContext";
import { formatCurrency, formatPercentage } from "../../utils/formatters";

function MarketTableRow({ coin }) {
	const navigate = useNavigate();
	const { isInWatchlist, toggleCoinWatchlist } = useWatchlist();

	const isFavorite = isInWatchlist(coin.id);
	const change = coin.price_change_percentage_24h;

	// Logika koloru
	let changeColor = "text-gray-400";
	if (change > 0) changeColor = "text-green-400";
	if (change < 0) changeColor = "text-red-400";

	function handleRowClick() {
		navigate(`/coin/${coin.id}`);
	}

	function handleFavoriteClick(e) {
		e.stopPropagation();
		toggleCoinWatchlist(coin.id);
	}

	return (
		<tr onClick={handleRowClick} className="group hover:bg-surface-hover transition-colors duration-200 border-b border-white/5 last:border-0">
			{/* Rank */}
			<td className="px-6 py-4 text-gray-500 font-mono text-sm">{coin.market_cap_rank}</td>

			{/* Name & Symbol */}
			<td className="px-6 py-4">
				<div className="flex items-center gap-3">
					<div className="w-8 h-8 rounded-full flex items-center justify-center border border-white/10 overflow-hidden">
						<img src={coin.image} alt={coin.name} className="w-full h-full object-cover" />
					</div>
					<div>
						<span className="block text-white font-semibold">{coin.name}</span>
						<span className="block text-gray-500 text-xs uppercase">{coin.symbol}</span>
					</div>
				</div>
			</td>

			{/* Price */}
			<td className="px-6 py-4 text-right font-medium text-white font-mono">
				{coin.current_price ? `$${coin.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 8 })}` : "-"}
			</td>

			{/* 24h Change */}
			<td className={`px-6 py-4 text-right font-medium ${changeColor}`}>
				<div className="flex items-center justify-end gap-1">
					{change !== null && change !== undefined && (change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />)}
					{formatPercentage(change) || "-"}
				</div>
			</td>

			{/* Sparkline (Last 7 Days) */}
			<td className="px-6 py-4 hidden lg:table-cell">
				{coin.sparkline_in_7d?.price && <Sparkline data={coin.sparkline_in_7d?.price} change={change} />}
			</td>

			{/* Market Cap */}
			<td className="px-6 py-4 text-right text-gray-400 text-sm hidden md:table-cell">{formatCurrency(coin.market_cap) || "-"}</td>

			{/* Action (Favorite) */}
			<td className="px-6 py-4 text-center">
				<Button onClick={handleFavoriteClick} className="text-gray-500 hover:text-yellow-400 transition-colors p-2 rounded-full hover:bg-white/5">
					<Star size={18} fill={isFavorite ? "currentColor" : "none"} />
				</Button>
			</td>
		</tr>
	);
}

export default MarketTableRow;
