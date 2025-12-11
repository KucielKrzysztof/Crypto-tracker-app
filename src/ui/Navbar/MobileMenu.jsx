import SearchBar from "../SearchBar/SearchBar";
import PageNav from "./PageNav";

function MobileMenu() {
	return (
		<div className="md:hidden bg-background border-b border-white/10">
			<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				<SearchBar />
				<PageNav to="/cryptocurrencies"> Cryptocurrencies</PageNav>
				<PageNav to="/about"> About</PageNav>
				<PageNav to="/news"> News</PageNav>
			</div>
		</div>
	);
}

export default MobileMenu;
