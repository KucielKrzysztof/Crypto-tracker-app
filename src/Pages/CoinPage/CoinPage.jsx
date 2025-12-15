import { useParams } from "react-router-dom";
import { useCoinDetails } from "../../Features/Market/hooks/useCoinDetails";
import Spinner from "../../ui/Spinner";
import CoinHeader from "./components/CoinHeader";
import CoinAbout from "./components/CoinAbout";
import CoinMarketStats from "./components/CoinMarketStats";
import CoinChart from "./components/CoinChart";
import ButtonBack from "../../ui/ButtonBack";
import CoinConverter from "../../Features/Converter/CoinConverter";
import CoinPricePerformence from "./components/CoinPricePerformence";

function CoinPage() {
	const { id } = useParams();
	const { data: coin, isPending, error } = useCoinDetails(id);

	if (isPending)
		return (
			<div className="flex justify-center py-20">
				<Spinner size={48} />
			</div>
		);
	if (error) return <div className="text-center text-down py-20">Error: {error.message}</div>;
	if (!coin) return null;

	const isPositive = coin.market_data?.price_change_percentage_24h >= 0;
	const chartColor = isPositive ? "var(--color-up)" : "var(--color-down)";

	return (
		<div className="animate-in fade-in duration-500 pb-20">
			<div className="mb-6">
				<ButtonBack />
			</div>
			<CoinHeader coin={coin} key={coin.id} />

			{/* Content Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				<div className="lg:col-span-2 space-y-6">
					<div className="bg-surface border border-white/5 rounded-xl p-6">
						<h3 className="text-xl font-bold mb-4">Price Chart (7 Days)</h3>
						<CoinChart prices={coin.market_data?.sparkline_7d?.price} color={chartColor} />
					</div>
					<CoinConverter coin={coin} />
					<CoinAbout coin={coin} />
				</div>
				<div className="lg:col-span-1">
					<CoinMarketStats coin={coin} />
					<CoinPricePerformence coin={coin} />
				</div>
			</div>
		</div>
	);
}

export default CoinPage;
