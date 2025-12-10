import PageNav from "./PageNav";

function DesktopMenu() {
	return (
		/* hide on mobile screens */
		<div className="hidden md:block">
			<div className="ml-10 flex items-baseline space-x-8">
				<PageNav href="#"> Cryptocurrencies</PageNav>
				<PageNav href="#"> About</PageNav>
				<PageNav href="#"> News</PageNav>
			</div>
		</div>
	);
}

export default DesktopMenu;
