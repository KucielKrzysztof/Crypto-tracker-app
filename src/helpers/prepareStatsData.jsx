import { BarChart3, Globe, Server, Activity } from "lucide-react";
import { formatCurrency, formatPercentage } from "../utils/formatters";

export function prepareStatsData(data) {
	const { total_market_cap, total_volume, market_cap_percentage, market_cap_change_percentage_24h_usd, active_cryptocurrencies, markets } = data;

	/* Market Dominance logic */
	const sortedDominance = Object.entries(market_cap_percentage || {}).sort(([, a], [, b]) => b - a);

	const [topName, topValue] = sortedDominance[0] || ["BTC", 0];
	const [secondName, secondValue] = sortedDominance[1] || ["ETH", 0];

	const isPositive = market_cap_change_percentage_24h_usd >= 0;

	return [
		{
			icon: <Globe size={20} className="text-blue-400" />,
			label: "Market Cap",
			value: formatCurrency(total_market_cap?.usd),
			change: formatPercentage(market_cap_change_percentage_24h_usd),
			isPositive: isPositive,
			subValue: null,
		},
		{
			icon: <Activity size={20} className="text-orange-400" />,
			label: "24h Volume",
			value: formatCurrency(total_volume?.usd),
			change: null,
			isPositive: null,
			subValue: null,
		},
		{
			icon: <BarChart3 size={20} className="text-purple-400" />,
			label: `${topName.toUpperCase()} Dominance`,
			value: formatPercentage(topValue),
			change: null,
			isPositive: null,
			subValue: `${secondName.toUpperCase()}: ${formatPercentage(secondValue)}`,
		},
		{
			icon: <Server size={20} className="text-green-400" />,
			label: "Active Coins",
			value: active_cryptocurrencies?.toLocaleString(),
			change: null,
			isPositive: null,
			subValue: `Exchanges: ${markets}`,
		},
	];
}
