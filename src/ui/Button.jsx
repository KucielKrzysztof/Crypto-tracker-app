import { twMerge } from "tailwind-merge";

function Button({ onClick, variant = "", className = "", children }) {
	const variants = {
		primary: "bg-brand-gradient text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity cursor-pointer",
		secondary:
			"bg-surface border border-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-surface-hover transition-colors cursor-pointer",
		/* danger: "bg-red-600 text-white hover:bg-red-700 px-6 py-3", */
	};

	const variantClasses = variants[variant] || "";

	return (
		<button onClick={onClick} className={twMerge(variantClasses, className)}>
			{children}
		</button>
	);
}

export default Button;
