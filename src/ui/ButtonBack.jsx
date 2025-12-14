import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { ArrowLeft } from "lucide-react";

function ButtonBack({ children }) {
	const navigate = useNavigate();
	const where = children ? `to ${children}` : "";
	return (
		<Button
			onClick={() => navigate(-1)}
			className="flex items-center gap-2 text-gray-400 hover:text-white hover:-translate-x-1  mb-6 transition-all group"
		>
			<ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
			Back {where}
		</Button>
	);
}

export default ButtonBack;
