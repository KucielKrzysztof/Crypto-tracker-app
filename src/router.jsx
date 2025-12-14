import { Navigate } from "react-router-dom";
import { lazy } from "react";

import AppLayout from "./ui/AppLayout";

const Homepage = lazy(() => import("./Pages/Homepage/Homepage"));
const Cryptocurrencies = lazy(() => import("./Pages/Cryptocurrencies/Cryptocurrencies"));
const About = lazy(() => import("./Pages/About/About"));
const News = lazy(() => import("./Pages/News/News"));
const CoinPage = lazy(() => import("./Pages/CoinPage/CoinPage"));

const PageNotFound = lazy(() => import("./Pages/PageNotFound"));

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
