import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getCryptoData } from "../../../services/apiCrypto";

export const useCryptoData = (page = 1, options = {}) => {
	const { enabled = true } = options;
	const { isPending, data, error, isPlaceholderData } = useQuery({
		queryKey: ["cryptomarket", page],
		queryFn: () => getCryptoData(page),
		placeholderData: keepPreviousData,
		refetchInterval: 60 * 1000 * 5,
		enabled: enabled,
	});

	return { data, isPending, error, isPlaceholderData };
};
