import MarketTable from "../../Features/Market/MarketTable";
import About from "../About/About";
import Hero from "./components/Hero";

function Homepage() {
	return (
		<div>
			<Hero />
			<MarketTable />
			<About />
		</div>
	);
}

export default Homepage;
