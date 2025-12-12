import MarketTable from "../../Features/Market/MarketTable";
import CryptoFilters from "./components/CryptoFilters";
import CryptoGlobalStats from "./components/CryptoGlobalStats";
import CryptoHeader from "./components/CryptoHeader";

/* todo more data, pagination */

function Cryptocurrencies() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
			<CryptoHeader />
			<CryptoGlobalStats />
			<CryptoFilters />
			<MarketTable limit={100} title="" showButton={false} />
		</div>
	);
}

export default Cryptocurrencies;
