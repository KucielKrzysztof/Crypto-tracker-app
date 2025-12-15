import { useContext, useState, useEffect, useRef, createContext } from "react";
import ApiAlert from "../ui/ApiAlert";
import axios from "axios";

const ApiRateLimitContext = createContext();

export function ApiRateLimitProvider({ children }) {
	const [isRateLimited, setIsRateLimited] = useState(false);
	const timerRef = useRef(null);
	useEffect(() => {
		const interceptor = axios.interceptors.response.use(
			(response) => response,
			(error) => {
				const isExplicit429 = error.response && error.response.status === 429;
				const isNetworkError = error.code === "ERR_NETWORK" && !error.response;
				if (isExplicit429 || isNetworkError) {
					setIsRateLimited(true);
					if (timerRef.current) clearTimeout(timerRef.current);
					timerRef.current = setTimeout(() => setIsRateLimited(false), 65000);
				}
				return Promise.reject(error);
			}
		);

		return () => {
			axios.interceptors.response.eject(interceptor);
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, []);

	return (
		<ApiRateLimitContext.Provider value={{ isRateLimited }}>
			{children}

			{isRateLimited && <ApiAlert setIsRateLimited={setIsRateLimited} />}
		</ApiRateLimitContext.Provider>
	);
}
export function useApiRateLimit() {
	const context = useContext(ApiRateLimitContext);
	if (!context) throw new Error("Alert context used outside its Provider");
	return context;
}
