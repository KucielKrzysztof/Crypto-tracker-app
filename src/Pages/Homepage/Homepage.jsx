import MarketTable from "../../Features/Market/MarketTable";
import About from "../About/About";
import Hero from "./components/Hero";

function Homepage() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
			<Hero />
			<MarketTable title="Top 5 coins" limit={5} />
			<About />
		</div>
	);
}

export default Homepage;
