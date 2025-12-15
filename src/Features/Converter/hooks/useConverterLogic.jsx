import { useState, useMemo } from "react";
import { PRIORITY_CURRENCIES, getCurrencySymbol, getFormattedFiat } from "../helpers/converterHelpser";

export function useConverterLogic(coin) {
	const prices = useMemo(() => {
		return coin?.market_data?.current_price || {};
	}, [coin]);

	const availableCurrencies = useMemo(() => {
		const keys = Object.keys(prices);
		if (keys.length === 0) return [];
		return keys.sort((a, b) => {
			const isAPriority = PRIORITY_CURRENCIES.includes(a);
			const isBPriority = PRIORITY_CURRENCIES.includes(b);
			if (isAPriority && !isBPriority) return -1;
			if (!isAPriority && isBPriority) return 1;
			return a.localeCompare(b);
		});
	}, [prices]);

	const [currency, setCurrency] = useState("usd");
	const [cryptoAmount, setCryptoAmount] = useState(1);
	const [fiatAmount, setFiatAmount] = useState(prices.usd || 0);

	const currentRate = prices[currency] || 0;

	const handleCryptoChange = (val) => {
		if (parseFloat(val) < 0) return;

		setCryptoAmount(val);
		if (val === "" || isNaN(val)) {
			setFiatAmount("");
		} else {
			setFiatAmount(parseFloat((parseFloat(val) * currentRate).toFixed(6)));
		}
	};

	const handleFiatChange = (val) => {
		if (parseFloat(val) < 0) return;
		setFiatAmount(val);
		if (val === "" || isNaN(val)) {
			setCryptoAmount("");
		} else {
			setCryptoAmount(parseFloat((parseFloat(val) / currentRate).toFixed(8)));
		}
	};

	const handleCurrencyChange = (newCurrency) => {
		setCurrency(newCurrency);
		const newRate = prices[newCurrency];
		if (cryptoAmount && !isNaN(cryptoAmount)) {
			setFiatAmount(parseFloat((cryptoAmount * newRate).toFixed(6)));
		}
	};

	return {
		hasData: !!coin?.market_data?.current_price && availableCurrencies.length > 0,
		currency,
		cryptoAmount,
		fiatAmount,
		currentRate,
		availableCurrencies,
		currencySymbol: getCurrencySymbol(currency),
		formattedRate: getFormattedFiat(currentRate, currency),
		actions: { handleCryptoChange, handleFiatChange, handleCurrencyChange },
	};
}
