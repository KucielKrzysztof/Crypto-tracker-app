import image from "../assets/underconstruct.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function PageUnderConstruction({ name = "Page" }) {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col items-center justify-center min-h-[82vh] text-center animate-in fade-in zoom-in duration-500 px-4">
			<div className="relative mb-8">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
				<img src={image} alt="Under Construction" className="relative z-10 w-64 md:w-80 h-auto object-contain drop-shadow-xl" />
			</div>

			<h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
				{name} is
				<span className="ml-2 text-transparent bg-clip-text bg-brand-gradient">Under Construction</span>
			</h1>

			<p className="text-gray-400 max-w-md text-lg mb-8 leading-relaxed">👷🛠️🚀</p>

			<Button onClick={() => navigate("/")} variant="secondary">
				Home
			</Button>
		</div>
	);
}

export default PageUnderConstruction;
