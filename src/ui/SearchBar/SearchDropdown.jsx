import SearchItem from "./SearchItem";

function SearchDropdown({ results, showPriceAlways }) {
	return (
		<div className="absolute top-full left-0 w-full bg-surface border-x border-b border-white/10 rounded-b-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
			<div className="px-4 py-2 bg-white/5 text-[10px] uppercase text-gray-400 font-bold tracking-wider">Suggested: </div>

			{results.map((coin) => (
				<SearchItem key={coin.id} coin={coin} showPriceAlways={showPriceAlways} />
			))}
		</div>
	);
}

export default SearchDropdown;
