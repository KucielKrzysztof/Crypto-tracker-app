export async function getCryptoData() {
	const res = await fetch(
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=24h"
	);
	if (!res.ok) {
		throw new Error("Error while fetching data");
	}
	const data = await res.json();
	return data;
}
