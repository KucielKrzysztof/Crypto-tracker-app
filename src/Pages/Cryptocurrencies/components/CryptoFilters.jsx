import { Filter } from "lucide-react";

/* just ui now */

function CryptoFilters() {
	return (
		<div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
			<div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
				<CategoryTab active>All</CategoryTab>
				<CategoryTab>DeFi</CategoryTab>
				<CategoryTab>Gaming</CategoryTab>
				<CategoryTab>Metaverse</CategoryTab>
				<CategoryTab>Solana Ecosystem</CategoryTab>
			</div>

			<div className="flex gap-2 w-full md:w-auto justify-end">
				<button className="flex items-center gap-2 px-3 py-1.5 bg-surface border border-white/10 rounded-lg hover:bg-white/5 transition-colors text-gray-400 hover:text-white cursor-pointer text-sm font-medium">
					<Filter size={16} />
					<span>Filters</span>
				</button>
			</div>
		</div>
	);
}

function CategoryTab({ children, active }) {
	return (
		<button
			className={`
                px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 cursor-pointer
                ${
									active
										? "bg-primary/10 text-primary border border-primary/20"
										: "bg-surface border border-white/5 text-gray-400 hover:text-white hover:bg-white/5"
								}
            `}
		>
			{children}
		</button>
	);
}

export default CryptoFilters;
