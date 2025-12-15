import { useState } from "react";
import MarketTable from "../../Features/Market/MarketTable";
import CryptoFilters from "./components/CryptoFilters";
import CryptoGlobalStats from "./components/CryptoGlobalStats";
import CryptoHeader from "./components/CryptoHeader";
import CryptoPageList from "./components/CryptoPageList";
import { useCryptoData } from "../../Features/Market/hooks/useCryptoData";
import { useWatchlistData } from "../../Features/Market/hooks/useWatchlistData";

function Cryptocurrencies() {
	const [page, setPage] = useState(1);
	const [category, setCategory] = useState("all");

	const isFavoriteMode = category === "favorites";

	/* if standard/filtered data */
	const {
		data: marketCoins,
		isPending: isMarketLoading,
		error: errorMarket,
		isPlaceholderData,
	} = useCryptoData(page, category, { enabled: !isFavoriteMode });

	/* if showFavorites */
	const { data: favCoins, isPending: isLoadingFav, error: errorFav, watchlistCount } = useWatchlistData({ enabled: isFavoriteMode });

	const dataToDisplay = isFavoriteMode ? favCoins : marketCoins;
	const isLoading = isFavoriteMode ? isLoadingFav : isMarketLoading;
	const error = isFavoriteMode ? errorFav : errorMarket;

	/* reset page number when change category */
	function handleCategoryChange(newCategory) {
		setCategory(newCategory);
		setPage(1);
	}

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
			<CryptoFilters activeCategory={category} setCategory={handleCategoryChange} watchlistCount={watchlistCount} />
			<MarketTable
				limit={isFavoriteMode ? watchlistCount : 50}
				title={isFavoriteMode ? "Your Favourites" : `${category === "all" ? "All Coins" : category}`}
				showButton={false}
				externalData={dataToDisplay}
				externalIsLoading={isLoading}
				externalError={error}
			/>
			{!isFavoriteMode && <CryptoPageList handleNext={handleNext} handlePrev={handlePrev} page={page} isPlaceholderData={isPlaceholderData} />}
		</div>
	);
}

export default Cryptocurrencies;
