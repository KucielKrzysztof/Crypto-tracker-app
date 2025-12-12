function CryptoHeader() {
	/* JUST UI right now */
	return (
		<div>
			<div className="mb-10">
				<h1 className="text-3xl md:text-4xl font-bold mb-3">
					Today's Cryptocurrency Prices by
					<span className="ml-2 text-transparent bg-clip-text bg-brand-gradient">Market Cap</span>
				</h1>
				<p className="text-gray-400 max-w-2xl text-lg">
					The global crypto market cap is <span className="text-white font-medium">$2.4T</span>, representing a{" "}
					<span className="text-green-500">+1.2%</span> over the last 24 hours.
				</p>
			</div>
		</div>
	);
}

export default CryptoHeader;
