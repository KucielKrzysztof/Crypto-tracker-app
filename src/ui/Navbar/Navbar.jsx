import { useState } from "react";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import HamburgerMenuButton from "./HamburgerMenuButton";
import SearchBar from "../SearchBar";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
			<div className=" mx-auto px-4 sm:px-6 lg:px-8">
				<div className=" relative flex items-center justify-between h-16 ">
					<div id="logo-wrapper" className="shrink-0 flex items-center ">
						<Logo />
					</div>
					<div id="searchbar-wrapper" className="hidden md:block absolute left-1/2 transform -translate-x-1/2  w-50 lg:w-full max-w-xs ">
						<SearchBar />
					</div>
					<div id="menu-wrapper" className="flex items-center justify-end  min-w-[150px] gap-4 z-10 ">
						<DesktopMenu /> {/* will be hidden on mobile screens */}
						<HamburgerMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
					</div>
				</div>
			</div>
			{isOpen && <MobileMenu />}
		</nav>
	);
}

export default Navbar;
