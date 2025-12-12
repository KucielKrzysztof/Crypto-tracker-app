import MarketTable from "../../Features/Market/MarketTable";
import About from "../About/About";
import Hero from "./components/Hero";

function Homepage() {
	return (
		<div>
			<Hero />
			<MarketTable title="Top 5 coins" limit={5} />
			<About />
		</div>
	);
}

export default Homepage;
