import { useNavigate } from "react-router";

function Logo() {
	const navigate = useNavigate();

	return (
		<div className="shrink-0 cursor-pointer flex items-center gap-2" onClick={() => navigate("/")}>
			<div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center">
				<span className="font-bold text-white text-lg">C</span>
			</div>
			<span className="text-sl font-bold text-white tracking-tight">
				Crypto
				<span className="text-transparent bg-clip-text bg-brand-gradient ml-1">Tracker</span>
			</span>
		</div>
	);
}

export default Logo;
