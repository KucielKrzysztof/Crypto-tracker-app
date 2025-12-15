import axios from "axios";

export async function getCryptoData(page = 1, category = "all") {
	let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&sparkline=true&price_change_percentage=24h`;

	if (category !== "all" && category !== "favorites" && typeof category === "string") {
		url += `&category=${category}`;
	}

	try {
		const res = await axios.get(url);
		return res.data;
	} catch (error) {
		if (error.response) {
			throw new Error(error.response.data?.status?.error_message || ` API Error: ${error.response.status}`);
		}
		throw new Error("Connection error");
	}
}

export async function getCoinDetails(id) {
	if (!id) return null;
	try {
		const res = await axios.get(
			`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
		);
		return res.data;
	} catch (error) {
		if (error.response) {
			throw new Error(error.response.data?.status?.error_message || ` API Error: ${error.response.status}`);
		}
		throw new Error("Connection error");
	}
}

export async function getGlobalData() {
	try {
		const res = await axios.get("https://api.coingecko.com/api/v3/global");
		return res.data.data;
	} catch (error) {
		if (error.response) {
			throw new Error(error.response.data?.status?.error_message || ` API Error: ${error.response.status}`);
		}
		throw new Error("Connection error");
	}
}

export async function searchCoins(query) {
	if (!query) return [];

	try {
		const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`);
		return res.data.coins;
	} catch (error) {
		console.error("Search error:", error);
		throw error;
	}
}

export async function getCoinsByIds(idArray) {
	if (!idArray || !idArray.length === 0) return [];
	const idString = idArray.join(",");

	try {
		const res = await axios.get(
			`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${idString}&order=market_cap_desc&sparkline=true&price_change_percentage=24h`
		);
		return res.data;
	} catch (error) {
		console.error("Favourite error:", error);
		throw error;
	}
}
