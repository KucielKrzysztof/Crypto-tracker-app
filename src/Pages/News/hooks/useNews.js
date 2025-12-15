import { useQuery } from "@tanstack/react-query";
import { getCryptoNews } from "../../../services/apiNews";

export function useNews() {
	return useQuery({
		queryKey: ["news"],
		queryFn: getCryptoNews,
		staleTime: 1000 * 60 * 15,
		retry: 1,
	});
}
