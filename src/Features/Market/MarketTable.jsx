import Button from "../../ui/Button";
import { useCryptoData } from "./hooks/useCryptoData";
import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import MarketTableHeader from "./MarketTableHeader";
import MarketTableBody from "./MarketTableBody";

function MarketTable({ limit = 20, title = "", showButton = true, page = 1, externalData = null, externalIsLoading = null, externalError = null }) {
	const navigate = useNavigate();
	const isControlled = externalData !== null;

	// if no external data fetch!
	const { data: internalData, isPending: internalIsLoading, error: internalError } = useCryptoData(page, { enabled: !isControlled });

	// setting values depending on source of info(external, internal)
	const data = isControlled ? externalData : internalData;
	const isLoading = isControlled ? externalIsLoading : internalIsLoading;
	const error = isControlled ? externalError : internalError;

	if (isLoading) {
		return (
			<div className="flex flex-col items-center justify-center py-20 gap-4">
				<Spinner size={48} />
				<p className="text-gray-400 font-mono text-sm animate-pulse">Loading data...</p>
			</div>
		);
	}

	if (error) {
		return <div className="text-center py-20 text-red-400">An ERROR occurred: {error.message}.</div>;
	}

	/* for false positive request ok status */
	const safeData = Array.isArray(data) ? data : [];

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
