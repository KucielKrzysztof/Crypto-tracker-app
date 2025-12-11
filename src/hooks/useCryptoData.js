import { useState, useEffect } from "react";

export const useCryptoData = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				setIsLoading(true);
				const res = await fetch(
					"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=24h"
				);
				if (!res.ok) {
					throw new Error("Error while fetching data");
				}
				const data = await res.json();
				setData(data);
				setError(null);
			} catch (err) {
				setError(err.message);
				console.error("Api error:", err);
			} finally {
				setIsLoading(false);
			}
		}
		fetchData();
	}, []);

	return { data, isLoading, error };
};
