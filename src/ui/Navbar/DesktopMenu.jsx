import PageNav from "./PageNav";

function DesktopMenu() {
	return (
		/* hide on mobile screens */
		<div className="hidden md:block">
			<div className="ml-10 flex items-baseline text-sm lg:text-base">
				<PageNav to="/cryptocurrencies"> Cryptocurrencies</PageNav>
				<PageNav to="/about"> About</PageNav>
				<PageNav to="/news"> News</PageNav>
			</div>
		</div>
	);
}

export default DesktopMenu;
