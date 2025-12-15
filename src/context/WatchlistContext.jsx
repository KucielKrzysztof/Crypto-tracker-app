import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const WatchlistContext = createContext();

export function WatchlistProvider({ children }) {
	const [watchlist, setWatchlist] = useLocalStorage("crypto-watchlist", []);

	function toggleCoinWatchlist(id) {
		setWatchlist((prev) => {
			if (prev.includes(id)) {
				return prev.filter((coinId) => coinId !== id);
			} else {
				return [...prev, id];
			}
		});
	}

	function isInWatchlist(id) {
		return watchlist.includes(id);
	}

	return <WatchlistContext.Provider value={{ watchlist, toggleCoinWatchlist, isInWatchlist }}>{children}</WatchlistContext.Provider>;
}

export const useWatchlist = () => {
	const context = useContext(WatchlistContext);
	if (!context) throw new Error("WatchlistContext used outside WatchlistProvider");
	return context;
};
