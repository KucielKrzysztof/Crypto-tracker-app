export function formatCurrency(num) {
	if (!num && num !== 0) return "-";
	if (num >= 1e12) {
		return `$${(num / 1e12).toFixed(2)}T`; // Trillions
	}
	if (num >= 1e9) {
		return `$${(num / 1e9).toFixed(2)}B`; // Billions
	}
	if (num >= 1e6) {
		return `$${(num / 1e6).toFixed(2)}M`; // Millions
	}
	return `$${num.toLocaleString()}`;
}

export function formatCompactNumber(num) {
	if (!num && num !== 0) return "-";
	if (num >= 1e12) return `${(num / 1e12).toFixed(2)}T`;
	if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`;
	if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`;
	return num.toLocaleString();
}

export function formatPercentage(num) {
	if (!num && num !== 0) return "-";
	return `${num.toFixed(1)}%`;
}
