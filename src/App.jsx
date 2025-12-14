import routes from "./router";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ScrollToTop from "./ui/ScrollToTop";

function AppRoutes() {
	return useRoutes(routes);
}

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 60 * 1000 } } });

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<BrowserRouter>
					<ScrollToTop />
					<AppRoutes />
				</BrowserRouter>
			</QueryClientProvider>
		</>
	);
}

export default App;
