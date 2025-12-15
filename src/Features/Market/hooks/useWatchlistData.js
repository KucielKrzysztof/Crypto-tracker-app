import { useQuery } from "@tanstack/react-query";
import { useWatchlist } from "../../../context/WatchlistContext";
import { getCoinsByIds } from "../../../services/apiCrypto";

export const useWatchlistData = (options = {}) => {
	const { watchlist } = useWatchlist();
	const { enabled = true } = options;
	const isWatchlistEmpty = watchlist.length === 0;

	const { isPending, data, error } = useQuery({
		queryKey: ["watchlistCoinsData", watchlist],
		queryFn: () => getCoinsByIds(watchlist),
		enabled: enabled && !isWatchlistEmpty,
		staleTime: 1000 * 60 * 2,
		refetchOnWindowFocus: false,
	});

	if (isWatchlistEmpty) {
		return {
			isPending: false,
			data: [],
			error: null,
			watchlistCount: 0,
		};
	}

	return { isPending, data, error, watchlistCount: watchlist.length };
};
