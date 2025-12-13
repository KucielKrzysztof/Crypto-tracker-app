import { useParams } from "react-router-dom";
import { useCoinDetails } from "../../Features/Market/hooks/useCoinDetails";
import Spinner from "../../ui/Spinner";
import CoinHeader from "./components/CoinHeader";
import CoinAbout from "./components/CoinAbout";
import CoinMarketStats from "./components/CoinMarketStats";

function CoinPage() {
	const { id } = useParams();
	const { data: coin, isPending, error } = useCoinDetails(id);

	if (isPending)
		return (
			<div className="flex justify-center py-20">
				<Spinner size={48} />
			</div>
		);
	if (error) return <div className="text-center text-red-500 py-20">Error: {error.message}</div>;
	if (!coin) return null;

	return (
		<div className="animate-in fade-in duration-500 pb-20">
			<CoinHeader coin={coin} />

			{/* #todo - coin detailed chart */}

			{/* Content Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				<CoinAbout coin={coin} />
				<CoinMarketStats coin={coin} />
			</div>
		</div>
	);
}

export default CoinPage;
