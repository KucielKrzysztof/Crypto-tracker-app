import { Navigate } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Homepage from "./Pages/Homepage/Homepage";
import PageNotFound from "./Pages/PageNotFound";
import Cryptocurrencies from "./Pages/Cryptocurrencies/Cryptocurrencies";
import About from "./Pages/About/About";
import News from "./Pages/News/News";
import CoinPage from "./Pages/CoinPage/CoinPage";

const routes = [
	{
		element: <AppLayout />,
		children: [
			{ index: true, element: <Navigate replace to="home" /> },
			{ path: "home", element: <Homepage /> },
			{ path: "cryptocurrencies", element: <Cryptocurrencies /> },
			{ path: "about", element: <About /> },
			{ path: "news", element: <News /> },
			{ path: "coin/:id", element: <CoinPage /> },
		],
	},
	{ path: "*", element: <PageNotFound /> },
];

export default routes;
