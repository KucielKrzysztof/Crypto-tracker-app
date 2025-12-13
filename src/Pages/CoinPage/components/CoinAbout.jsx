function CoinAbout({ coin }) {
	const { name, description } = coin;
	return (
		<div className="lg:col-span-2 space-y-6">
			<div className="bg-surface border border-white/5 rounded-xl p-6">
				<h3 className="text-xl font-bold mb-4">About {name}</h3>

				<div
					className="text-gray-400 leading-relaxed text-sm [&>a]:text-primary [&>a]:underline"
					dangerouslySetInnerHTML={{ __html: description?.en || "No description available." }}
				/>
			</div>
		</div>
	);
}

export default CoinAbout;
