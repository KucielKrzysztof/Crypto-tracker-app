import { useQuery } from "@tanstack/react-query";
import { getGlobalData } from "../../../services/apiCrypto";

export const useGlobalData = () => {
	const { isPending, data, error } = useQuery({
		queryKey: ["globalData"],
		queryFn: getGlobalData,
		staleTime: 1000 * 60 * 15,
		gcTime: 1000 * 60 * 30,
		refetchOnWindowFocus: false,
		retry: (failureCount, error) => {
			if (error?.response?.status === 429) return false;
			return failureCount < 2;
		},
	});
	return { isPending, data, error };
};
