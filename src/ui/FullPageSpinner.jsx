import Spinner from "./Spinner";

function FullPageSpinner() {
	return (
		<div className="fixed inset-0 bg-background/80 backdrop:blur-sm flex flex-col items-center justify-center z-100">
			<Spinner size={64} />
			<div className="text-gray-400 font-mono text-sm animate-pulse">Loading...</div>
		</div>
	);
}

export default FullPageSpinner;
