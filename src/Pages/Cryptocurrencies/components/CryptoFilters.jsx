import { Star } from "lucide-react";

function CryptoFilters({ activeCategory, setCategory, watchlistCount }) {
	const categories = [
		{ id: "all", label: "All Coins" },
		{ id: "decentralized-finance-defi", label: "DeFi" },
		{ id: "gaming", label: "Gaming" },
		{ id: "metaverse", label: "Metaverse" },
		{ id: "solana-ecosystem", label: "Solana Eco" },
		{ id: "artificial-intelligence", label: "AI" },
	];

	return (
		<div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
			<div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
				{categories.map((cat) => (
					<CategoryTab key={cat.id} active={activeCategory === cat.id} onClick={() => setCategory(cat.id)}>
						{cat.label}
					</CategoryTab>
				))}

				<CategoryTab active={activeCategory === "favorites"} onClick={() => setCategory("favorites")}>
					<div className="flex items-center gap-2">
						<Star size={14} fill={activeCategory === "favorites" ? "currentColor" : "none"} />
						<span>Favorites</span>
						{watchlistCount > 0 && <span className="bg-white/10 text-xs px-1.5 py-0.5 rounded-full ml-1">{watchlistCount}</span>}
					</div>
				</CategoryTab>
			</div>
		</div>
	);
}

function CategoryTab({ children, active, onClick }) {
	return (
		<button
			onClick={onClick}
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
