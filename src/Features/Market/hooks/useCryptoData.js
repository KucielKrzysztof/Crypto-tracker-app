import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getCryptoData } from "../../../services/apiCrypto";

export const useCryptoData = (page = 1, category = "all", options = {}) => {
	const { enabled = true } = options;
	const { isPending, data, error, isPlaceholderData } = useQuery({
		// Unique key for caching: depends on page and category
		queryKey: ["cryptomarket", page, category],
		queryFn: () => getCryptoData(page, category),
		// UX: Keep showing previous page data while fetching new data
		// (prevents UI flashing/loading spinners during pagination)
		placeholderData: keepPreviousData,
		// CACHING STRATEGY (Optimization for API Limits):
		// 1. How long data is considered "fresh" (2 minutes).
		// If you switch tabs/pages and come back within 2 mins,
		// RQ will use cached data and WON'T fire a new API request.
		staleTime: 1000 * 60 * 2,
		// 2. How long unused data stays in memory (10 minutes).
		// If you leave this view, data persists for 10 mins before garbage collection.
		gcTime: 1000 * 60 * 10,
		// 3. Background updates (5 minutes).
		// Even if the user is idle, force a refresh every 5 mins to keep prices relatively current.
		refetchInterval: 60 * 1000 * 5,
		// Prevent refetching every time the user clicks the window (saves API calls)
		refetchOnWindowFocus: false,
		// ERROR HANDLING (Anti-Ban System):
		// If we get a 429 (Too Many Requests) error, STOP retrying immediately.
		// For other errors (e.g., network), retry up to 2 times.
		retry: (failureCount, error) => {
			if (error?.response?.status === 429) return false;
			return failureCount < 2;
		},

		enabled: enabled,
	});

	return { data, isPending, error, isPlaceholderData };
};
