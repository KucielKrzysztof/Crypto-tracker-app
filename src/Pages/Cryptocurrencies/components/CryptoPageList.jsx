import Button from "../../../ui/Button";

function CryptoPageList({ handlePrev, handleNext, page, isPlaceholderData }) {
	return (
		<div className="flex justify-center items-center gap-4 mt-8">
			<Button onClick={handlePrev} disabled={page === 1} variant="secondary" className="disabled:opacity-50 disabled:cursor-not-allowed">
				&larr; Previous
			</Button>

			<span className="text-gray-400 font-mono">
				Page <span className="text-white font-bold">{page}</span>
			</span>

			<Button onClick={handleNext} disabled={isPlaceholderData} variant="secondary" className="disabled:opacity-50 disabled:cursor-not-allowed">
				Next &rarr;
			</Button>
		</div>
	);
}

export default CryptoPageList;
