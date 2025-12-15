import ConverterIcon from "./ConverterIcon";
import CryptoInput from "./CryptoInput";
import FiatInput from "./FiatInput";
import { useConverterLogic } from "./hooks/useConverterLogic";

function CoinConverter({ coin }) {
	const { hasData, currency, cryptoAmount, fiatAmount, availableCurrencies, currencySymbol, formattedRate, actions } = useConverterLogic(coin);

	if (!hasData) return null;

	return (
		<div className="bg-surface border border-white/5 rounded-xl p-4 sm:p-6 mb-6">
			<h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
				Calculator
				<span className="hidden sm:inline-block text-xs font-normal text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">
					Real-time
				</span>
			</h3>

			<div className="flex flex-col sm:flex-row items-center gap-4 bg-background p-4 rounded-lg border border-white/5">
				<CryptoInput coin={coin} amount={cryptoAmount} onChange={actions.handleCryptoChange} />

				<ConverterIcon />

				<FiatInput
					amount={fiatAmount}
					currency={currency}
					currencies={availableCurrencies}
					symbol={currencySymbol}
					onAmountChange={actions.handleFiatChange}
					onCurrencyChange={actions.handleCurrencyChange}
				/>
			</div>

			<p className="text-xs text-gray-500 mt-3 text-center sm:text-right font-mono border-t border-white/5 pt-3">
				1 {coin.symbol.toUpperCase()} = {formattedRate}
			</p>
		</div>
	);
}

export default CoinConverter;
