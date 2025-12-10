import { Search } from "lucide-react";

function SearchBar() {
	return (
		<>
			<div
				className="group relative flex items-center justify-center w-full max-w-xs bg-surface border border-white/10 rounded-2xl px-4 py-2 transition-all duration-300 focus-within:border-primary/50
			focus-within:ring-2 focus-within:ring-primary/20 hover:border-white/20
			"
			>
				<Search size={18} className="text-gray-500 group-focus-within:text-primary transition-colors duration-300" />
				<input
					type="text"
					placeholder="Search currency (eg. BTC)..."
					className="bg-transparent border-none outline-none text-white text-sm w-full ml-3 placeholder-gray-500 font-medium"
				></input>
			</div>
		</>
	);
}

export default SearchBar;
