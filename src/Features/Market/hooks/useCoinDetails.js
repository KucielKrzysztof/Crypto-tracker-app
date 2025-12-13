import { useQuery } from "@tanstack/react-query";
import { getCoinDetails } from "../../../services/apiCrypto";

export const useCoinDetails = (id) => {
	const { isPending, data, error } = useQuery({
		// id is the key if it changes refetch!
		queryKey: ["coinDetails", id],
		queryFn: () => getCoinDetails(id),
		// if !(id) don't fetch!
		enabled: !!id,
		// 10 min cache!
		staleTime: 1000 * 60 * 10,
	});
	return { isPending, data, error };
};
