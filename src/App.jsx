import Navbar from "./Features/Navbar/Navbar";
import Hero from "./Features/Homepage/Hero";
import MarketTable from "./Features/Homepage/MarketTable";

function App() {
	return (
		<div className="min-h-screen font-sans text-white selection:bg-primary selection:text-white">
			<Navbar />

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 ">
				<Hero />
				<MarketTable />
			</main>
		</div>
	);
}

export default App;
