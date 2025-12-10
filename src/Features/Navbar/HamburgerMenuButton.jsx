import Button from "../../ui/Button";
import { Menu, X } from "lucide-react";

function HamburgerMenuButton({ isOpen, setIsOpen }) {
	return (
		<div className="-mr-2 flex md:hidden">
			<Button
				onClick={() => setIsOpen((prev) => !prev)}
				className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
			>
				{isOpen ? <X size={24} /> : <Menu size={24} />}
			</Button>
		</div>
	);
}

export default HamburgerMenuButton;
