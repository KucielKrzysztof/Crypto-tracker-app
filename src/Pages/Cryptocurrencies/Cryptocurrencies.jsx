import { useState } from "react";
import MarketTable from "../../Features/Market/MarketTable";
import CryptoFilters from "./components/CryptoFilters";
import CryptoGlobalStats from "./components/CryptoGlobalStats";
import CryptoHeader from "./components/CryptoHeader";
import CryptoPageList from "./components/CryptoPageList";
import { useCryptoData } from "../../Features/Market/hooks/useCryptoData";

function Cryptocurrencies() {
	const [page, setPage] = useState(1);
	const { data, isPending, error, isPlaceholderData } = useCryptoData(page);

	function handlePrev() {
		if (page <= 1) return;
		setPage((prev) => prev - 1);
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
	function handleNext() {
		setPage((prev) => prev + 1);
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
			<CryptoHeader />
			<CryptoGlobalStats />
			<CryptoFilters />
			<MarketTable limit={50} title="" showButton={false} externalData={data} externalIsLoading={isPending} externalError={error} />
			<CryptoPageList handleNext={handleNext} handlePrev={handlePrev} page={page} isPlaceholderData={isPlaceholderData} />
		</div>
	);
}

export default Cryptocurrencies;
