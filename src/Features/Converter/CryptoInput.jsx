export default function CryptoInput({ coin, amount, onChange }) {
	return (
		<div className="w-full sm:flex-1 relative group">
			<label className="text-xs text-gray-500 mb-1 block group-focus-within:text-primary transition-colors">
				Amount ({coin.symbol.toUpperCase()})
			</label>
			<div className="flex items-center gap-3">
				<img src={coin.image?.small} alt={coin.symbol} className="w-8 h-8 rounded-full shadow-sm shrink-0" />
				<input
					type="number"
                    min="0"
					value={amount}
					onChange={(e) => onChange(e.target.value)}
					className="w-full bg-transparent text-lg sm:text-xl font-mono text-white outline-none placeholder-white/20 min-w-0"
					placeholder="0"
				/>
			</div>
		</div>
	);
}
