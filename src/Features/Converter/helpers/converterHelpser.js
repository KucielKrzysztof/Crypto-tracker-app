import { formatCurrency } from "../../../utils/formatters";

export const PRIORITY_CURRENCIES = ["usd", "eur", "pln", "gbp", "jpy", "btc", "eth"];

export const getCurrencySymbol = (code) => {
	if (code === "usd") return "$";
	try {
		return new Intl.NumberFormat(undefined, { style: "currency", currency: code.toUpperCase() }).formatToParts(0).find((p) => p.type === "currency")
			?.value;
	} catch (e) {
		return code.toUpperCase();
	}
};

export const getFormattedFiat = (value, code) => {
	if (!value && value !== 0) return "";
	if (code === "usd") return formatCurrency(value);
	try {
		return new Intl.NumberFormat(undefined, {
			style: "currency",
			currency: code.toUpperCase(),
			maximumFractionDigits: 2,
		}).format(value);
	} catch (e) {
		return `${value} ${code.toUpperCase()}`;
	}
};
