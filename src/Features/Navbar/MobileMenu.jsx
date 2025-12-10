import PageNav from "./PageNav";

function MobileMenu() {
	return (
		<div className="md:hidden bg-background border-b border-white/10">
			<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				<PageNav href="#"> Cryptocurrencies</PageNav>
				<PageNav href="#"> About</PageNav>
				<PageNav href="#"> News</PageNav>
			</div>
		</div>
	);
}

export default MobileMenu;
