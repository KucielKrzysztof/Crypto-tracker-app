import { AlertCircle } from "lucide-react";
import SearchItem from "./SearchItem";
import Spinner from "../Spinner";

function SearchDropdown({ results, isPending, error, showPriceAlways, onSelect }) {
	//  LOADING STATE
	if (isPending) {
		return (
			<Container>
				<div className="p-6 flex flex-col items-center justify-center text-gray-500 gap-2">
					<Spinner />
					<span className="text-xs font-medium">Searching...</span>
				</div>
			</Container>
		);
	}
	// ERROR STATE
	if (error) {
		return (
			<Container>
				<div className="p-4 flex items-center justify-center gap-2 text-red-400">
					<AlertCircle size={18} />
					<p className="text-xs">Something went wrong.</p>
				</div>
			</Container>
		);
	}

	//  EMPTY STATE
	if (!results || results.length === 0) {
		return (
			<Container>
				<div className="p-4 text-center text-gray-500 text-sm">No coins found.</div>
			</Container>
		);
	}

	// SUCCESS STATE
	const limitedResults = results.slice(0, 15);

	return (
		<Container>
			<div className="px-4 py-2 bg-white/5 text-[10px] uppercase text-gray-400 font-bold tracking-wider">Suggested: </div>
			<div className="max-h-64 overflow-y-auto custom-scrollbar">
				{limitedResults.map((coin) => (
					<SearchItem key={coin.id} coin={coin} showPriceAlways={showPriceAlways} onClick={() => onSelect(coin.id)} />
				))}
			</div>
			{results.length > 15 && (
				<div className="text-[10px] text-center py-1 text-gray-600 border-t border-white/5 bg-white/[0.02]">Keep typing...</div>
			)}
		</Container>
	);
}

/* HELPER CONTAINER TO REDUCE CSS */
const Container = ({ children }) => (
	<div className="absolute top-full left-0 w-full bg-surface border-x border-b border-white/10 rounded-b-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
		{children}
	</div>
);

export default SearchDropdown;
