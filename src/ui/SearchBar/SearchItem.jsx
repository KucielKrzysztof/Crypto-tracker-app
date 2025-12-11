import { TrendingUp } from "lucide-react";

const SearchItem = ({ coin, showPriceAlways }) => {
	return (
		<div className="flex items-center justify-between px-4 py-3 hover:bg-white/5 cursor-pointer transition-colors border-b border-white/5 last:border-0">
			<div className="flex items-center gap-3">
				{/* Placeholder logo */}
				<div className="w-8 h-8 rounded-full bg-surface-hover flex items-center justify-center text-xs font-bold text-white border border-white/10">
					{coin.symbol[0]}
				</div>
				<div>
					<p className="text-sm font-medium text-white leading-none">{coin.name}</p>
					<p className="text-xs text-gray-500 mt-1">{coin.symbol}</p>
				</div>
			</div>

			<div className={`${showPriceAlways ? "block" : "hidden lg:block"} text-right`}>
				<p className="text-sm font-mono text-white">${coin.price}</p>
				{/* placeholder trending*/}
				<div className="flex items-center justify-end gap-1 text-[10px] text-green-500">
					<TrendingUp size={10} /> 2.4%
				</div>
			</div>
		</div>
	);
};

export default SearchItem;
