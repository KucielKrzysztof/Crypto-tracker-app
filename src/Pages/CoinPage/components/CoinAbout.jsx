import { useState } from "react";
import Button from "../../../ui/Button";

function CoinAbout({ coin }) {
	const [isExpanded, setIsExpanded] = useState(false);
	const { name, description } = coin;
	const isLongText = description.en.length > 400;

	if (!description) return null;

	return (
		<div className="bg-surface border border-white/5 rounded-xl p-6">
			<h3 className="text-xl font-bold mb-4">About {name}</h3>

			<div className="relative">
				<div
					className={`text-gray-400 leading-relaxed text-sm ${!isExpanded ? "line-clamp-4 relative" : ""}`}
					dangerouslySetInnerHTML={{ __html: description?.en || "No description available." }}
				/>

				{isLongText && (
					<Button onClick={() => setIsExpanded((prev) => !prev)} variant="secondary" className="mt-2 text-primary text-sm font-semibold  px-4 py-2">
						{isExpanded ? "Show less" : "Show More"}
					</Button>
				)}
			</div>
		</div>
	);
}

export default CoinAbout;
