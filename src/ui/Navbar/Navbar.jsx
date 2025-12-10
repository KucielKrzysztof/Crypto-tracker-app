import { useState } from "react";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import HamburgerMenuButton from "./HamburgerMenuButton";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 ">
					<Logo />
					<DesktopMenu /> {/* will be hidden on mobile screens */}
					<HamburgerMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
				</div>
			</div>
			{isOpen && <MobileMenu />}
		</nav>
	);
}

export default Navbar;
