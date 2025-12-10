import { Children } from "react";
import { Navigate } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Homepage from "./Pages/Homepage/Homepage";
import PageNotFound from "./Pages/PageNotFound";

const routes = [
	{
		element: <AppLayout />,
		children: [
			{ index: true, element: <Navigate replace to="home" /> },
			{ path: "home", element: <Homepage /> },
		],
	},
	{ path: "*", element: <PageNotFound /> },
];

export default routes;
