import routes from "./router";

import { BrowserRouter, useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ScrollToTop from "./ui/ScrollToTop";
import { WatchlistProvider } from "./context/WatchlistContext";
import { ApiRateLimitProvider } from "./context/ApiRateLimitProvider";

function AppRoutes() {
	return useRoutes(routes);
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000,
			retry: (failureCount, error) => {
				if (error?.response?.status === 429) return false;
				return failureCount < 2;
			},
		},
	},
});

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				{/* <ReactQueryDevtools initialIsOpen={false} /> */}
				<WatchlistProvider>
					<ApiRateLimitProvider>
						<BrowserRouter>
							<ScrollToTop />
							<AppRoutes />
						</BrowserRouter>
					</ApiRateLimitProvider>
				</WatchlistProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;
