import axios from "axios";
import { MOCK_NEWS } from "./MOCK_NEWS";

export async function getCryptoNews() {
	try {
		const response = await axios.get(`https://api.coingecko.com/api/v3/news`, {
			params: {
				depth: 1,
				filter: "general",
				per_page: 12,
				page: 1,
			},
		});
		if (!response.data || !response.data.data || response.data.data.length === 0) {
			console.warn("API not working");
			return MOCK_NEWS;
		}
		return response.data.data;
	} catch (error) {
		if (error.response) {
			throw new Error(error.response.data?.status?.error_message || ` API Error: ${error.response.status}`);
		}
		throw new Error("Connection error");
	}
}
