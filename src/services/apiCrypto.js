import axios from "axios";

export async function getCryptoData() {
	try {
		const res = await axios.get(
			"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=24h"
		);
		return res.data;
	} catch (error) {
		if (error.response) {
			throw new Error(error.response.data?.status?.error_message || ` API Error: ${error.response.status}`);
		}
		throw new Error("Connection error");
	}
}
