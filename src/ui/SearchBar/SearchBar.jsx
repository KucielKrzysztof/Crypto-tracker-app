import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SearchDropdown from "./SearchDropdown";
import { useDebounce } from "../../hooks/useDebounce";
import { useSearchCoins } from "../../Features/Market/hooks/useSearchCoins";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useNavigate } from "react-router-dom";

function SearchBar({ showPriceAlways = "true", zIndex = "50" }) {
	const [query, setQuery] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const wrapperRef = useRef(null);
	const navigate = useNavigate();

	const debouncedQuery = useDebounce(query, 500);
	const { isPending, data: results, error } = useSearchCoins(debouncedQuery);

	useClickOutside(wrapperRef, () => {
		setIsOpen(false);
		setQuery("");
	});

	useEffect(() => {
		if (debouncedQuery.length >= 3) setIsOpen(true);
	}, [debouncedQuery]);

	const handleSelect = (coinId) => {
		navigate(`/coin/${coinId}`);
		setQuery("");
		setIsOpen(false);
	};

	return (
		/* Search wrapper */
		<div ref={wrapperRef} className={`relative w-full max-w-xs group z-${zIndex}`}>
			<div
				className={` relative flex items-center justify-center w-full max-w-xs bg-surface border border-white/10 rounded-2xl px-4 py-2 transition-all duration-300 
				 ${isOpen ? "rounded-b-none border-primary/50" : "border-white/10 rounded-2xl"}
				focus-within:border-primary/50
			focus-within:ring-2 focus-within:ring-primary/20 hover:border-white/20
			`}
			>
				<Search size={18} className="text-gray-500 group-focus-within:text-primary transition-colors duration-300" />
				<input
					type="text"
					value={query}
					placeholder="Search currency (eg. BTC)..."
					className="bg-transparent border-none outline-none text-white text-sm w-full ml-3 placeholder-gray-500 font-medium"
					onChange={(e) => setQuery(e.target.value)}
					onFocus={() => {
						if (query.length >= 3) setIsOpen(true);
					}}
				/>
				{query.length > 0 && (
					<button
						onClick={() => {
							setQuery("");
							setIsOpen(false);
						}}
						className="text-gray-500 hover:text-white text-xs"
					>
						<X size={18} />
					</button>
				)}
			</div>
			{/* DROPDOWN */}
			{isOpen && query.length >= 3 && (
				<SearchDropdown results={results} isPending={isPending} error={error} showPriceAlways={showPriceAlways} onSelect={handleSelect} />
			)}
		</div>
	);
}

export default SearchBar;
