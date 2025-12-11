import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

function AppLayout() {
	return (
		<div className="min-h-screen font-sans text-white selection:bg-primary selection:text-white">
			<Navbar />

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 ">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default AppLayout;
