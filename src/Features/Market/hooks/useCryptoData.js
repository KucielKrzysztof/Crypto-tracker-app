import { useQuery } from "@tanstack/react-query";
import { getCryptoData } from "../../../services/apiCrypto";

export const useCryptoData = () => {
	const { isPending, data, error } = useQuery({ queryKey: ["cryptomarket"], queryFn: getCryptoData, refetchInterval: 60 * 1000 });

	return { data, isPending, error };
};
