import MarketTableRow from "./MarketTableRow";

function MarketTableBody({ data }) {
	return (
		<div className="overflow-x-auto">
			<table className="w-full text-left border-collapse">
				<thead>
					<tr className="text-gray-400 text-xs uppercase tracking-wider border-b border-white/5 bg-[#1f1f25]">
						<th className="px-6 py-4 font-medium">#</th>
						<th className="px-6 py-4 font-medium">Name</th>
						<th className="px-6 py-4 font-medium text-right">Price</th>
						<th className="px-6 py-4 font-medium text-right">24h %</th>
						<th className="px-6 py-4 font-medium text-center hidden lg:table-cell">Last 7 Days</th>
						<th className="px-6 py-4 font-medium text-right hidden md:table-cell">Market Cap</th>
						<th className="px-6 py-4 font-medium text-center">Action</th>
					</tr>
				</thead>

				<tbody className="divide-y divide-white/5">
					{data.map((coin) => (
						<MarketTableRow key={coin.id} coin={coin} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default MarketTableBody;
