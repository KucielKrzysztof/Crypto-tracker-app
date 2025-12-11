import { Search, X } from "lucide-react";
import { useState } from "react";
import SearchDropdown from "./SearchDropdown";

const MOCK_RESULTS = [
	{ id: "bitcoin", name: "Bitcoin", symbol: "BTC", price: "95,243.20" },
	{ id: "ethereum", name: "Ethereum", symbol: "ETH", price: "3,450.10" },
	{ id: "solana", name: "Solana", symbol: "SOL", price: "145.50" },
];

function SearchBar({ showPriceAlways = "true" }) {
	const [query, setQuery] = useState("");

	const showDropdown = query.length > 0;

	return (
		/* Search wrapper */
		<div className="relative w-full max-w-xs group z-50">
			<div
				className={` relative flex items-center justify-center w-full max-w-xs bg-surface border border-white/10 rounded-2xl px-4 py-2 transition-all duration-300 
				 ${showDropdown ? "rounded-b-none border-primary/50" : "border-white/10 rounded-2xl"}
				focus-within:border-primary/50
			focus-within:ring-2 focus-within:ring-primary/20 hover:border-white/20
			`}
			>
				<Search size={18} className="text-gray-500 group-focus-within:text-primary transition-colors duration-300" />
				<input
					type="text"
					placeholder="Search currency (eg. BTC)..."
					className="bg-transparent border-none outline-none text-white text-sm w-full ml-3 placeholder-gray-500 font-medium"
					onChange={(e) => setQuery(e.target.value)}
				/>
				{query.length > 0 && (
					<button onClick={() => setQuery("")} className="text-gray-500 hover:text-white text-xs">
						<X size={18} />
					</button>
				)}
			</div>
			{/* DROPDOWN */}
			{showDropdown && <SearchDropdown results={MOCK_RESULTS} showPriceAlways={showPriceAlways} />}
		</div>
	);
}

export default SearchBar;
