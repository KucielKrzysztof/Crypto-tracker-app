import { ArrowDown, ArrowRightLeft } from "lucide-react";

function ConverterIcon() {
	return (
		<div className="text-gray-500 bg-white/5 p-2 rounded-full shrink-0">
			<ArrowDown className="block sm:hidden" size={20} />
			<ArrowRightLeft className="hidden sm:block" size={20} />
		</div>
	);
}

export default ConverterIcon;
