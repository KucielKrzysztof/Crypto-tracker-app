import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import FullPageSpinner from "./FullPageSpinner";

function AppLayout() {
	const location = useLocation();
	return (
		<div className="flex flex-col min-h-screen font-sans text-white selection:bg-primary selection:text-white">
			<Navbar />

			<main className=" grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 ">
				<Suspense key={location.key} fallback={<FullPageSpinner />}>
					<Outlet />
				</Suspense>
			</main>
			<Footer />
		</div>
	);
}

export default AppLayout;
