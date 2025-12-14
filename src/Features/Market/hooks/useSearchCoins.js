import { useQuery } from "@tanstack/react-query";
import { searchCoins } from "../../../services/apiCrypto";

export const useSearchCoins = (query) => {
	const { isPending, data, error } = useQuery({
		queryKey: ["searchCoins", query],
		queryFn: () => searchCoins(query),
		enabled: !!query && query.length >= 3,
		staleTime: 1000 * 60 * 2,
		retry: false,
	});

	return { isPending, data, error };
};
