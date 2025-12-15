import { AlertTriangle, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import MarketTableHeader from "./MarketTableHeader";
import MarketTableBody from "./MarketTableBody";
import StatusMessage from "../../ui/StatusMessage";
import { useCryptoData } from "./hooks/useCryptoData";

function MarketTable({ limit = 20, title = "", showButton = true, page = 1, externalData = null, externalIsLoading = null, externalError = null }) {
	const navigate = useNavigate();
	const isControlled = externalData !== null;

	// if no external data fetch!
	const { data: internalData, isPending: internalIsLoading, error: internalError } = useCryptoData(page, "all", { enabled: !isControlled });

	// setting values depending on source of info(external, internal)
	const data = isControlled ? externalData : internalData;
	const isLoading = isControlled ? externalIsLoading : internalIsLoading;
	const error = isControlled ? externalError : internalError;

	/* LOADING */
	if (isLoading) {
		return (
			<div className="flex flex-col items-center justify-center py-20 gap-4">
				<Spinner size={48} />
				<p className="text-gray-400 font-mono text-sm animate-pulse">Loading data...</p>
			</div>
		);
	}

	/* ERROR */
	if (error) {
		return (
			<StatusMessage icon={<AlertTriangle size={32} className="text-red-400" />} title="Data Fetch Error">
				We couldn't load the market data. <br />
				<span className="text-red-400 font-mono text-xs">{error.message}</span>
			</StatusMessage>
		);
	}

	/* for false positive request ok status */
	const safeData = Array.isArray(data) ? data : [];

	/* FOR EMPTY STATE  */
	if (safeData.length === 0) {
		return (
			<StatusMessage icon={<Star size={32} />} title="Your watchlist is empty">
				Start building your portfolio by clicking the star icon
				<Star size={14} className="inline text-yellow-400 mx-1" fill="currentColor" />
				next to any cryptocurrency.
			</StatusMessage>
		);
	}

	/* ALL GOOD */
	return (
		<section id="marketTable" className="flex flex-col justify-center items-center gap-4 mb-10">
			<div className="w-full bg-surface border border-white/5 rounded-xl overflow-hidden shadow-xl mt-10 ">
				<MarketTableHeader title={title} />
				<MarketTableBody data={safeData.slice(0, limit)} />
			</div>
			{showButton && (
				<Button onClick={() => navigate("/cryptocurrencies")} variant="secondary">
					See more
				</Button>
			)}
		</section>
	);
}

export default MarketTable;
