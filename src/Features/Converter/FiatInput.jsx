import { ChevronDown } from "lucide-react";

export default function FiatInput({ amount, currency, currencies, symbol, onAmountChange, onCurrencyChange }) {
	return (
		<>
			<div className="w-full sm:flex-1 relative group">
				<div className="flex justify-between mb-1">
					<label className="text-xs text-gray-500 group-focus-within:text-green-400 transition-colors">Value</label>
					<div className="relative">
						<select
							value={currency}
							onChange={(e) => onCurrencyChange(e.target.value)}
							className="appearance-none bg-transparent text-xs font-bold text-gray-300 uppercase pr-4 cursor-pointer outline-none hover:text-white transition-colors text-right"
						>
							{currencies.map((c) => (
								<option key={c} value={c} className="bg-[#2A2B35] text-white">
									{c.toUpperCase()}
								</option>
							))}
						</select>
						<ChevronDown size={10} className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
					</div>
				</div>
				<div className="flex items-center gap-2 justify-end">
					<span className="text-xl sm:text-2xl font-mono text-green-400/50">{symbol}</span>
					<input
						type="number"
						min="0"
						value={amount}
						onChange={(e) => onAmountChange(e.target.value)}
						className="w-full bg-transparent text-lg sm:text-xl font-mono text-green-400 text-right outline-none placeholder-green-400/20 min-w-0"
						placeholder="0"
					/>
				</div>
			</div>
		</>
	);
}
