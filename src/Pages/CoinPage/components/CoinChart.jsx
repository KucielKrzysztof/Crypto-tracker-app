import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function CoinChart({ prices, color = "#8884d8" }) {
	if (!prices || prices.length === 0) return <div className="text-gray-500 h-64 flex items-center justify-center">No chart data</div>;

	//change prices to objects for Rechart needs
	const data = prices.map((price, index) => ({
		index,
		price,
	}));

	return (
		<div className="h-[300px] w-full">
			<ResponsiveContainer>
				<AreaChart data={data}>
					<defs>
						<linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor={color} stopOpacity={0.3} />
							<stop offset="95%" stopColor={color} stopOpacity={0} />
						</linearGradient>
					</defs>
					<CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />

					<XAxis dataKey="index" hide />
					<YAxis
						domain={["auto", "auto"]}
						orientation="right"
						tick={{ fill: "#6b7280", fontSize: 12 }}
						axisLine={false}
						tickLine={false}
						tickFormatter={(val) => `$${val.toLocaleString()}`}
					/>
					<Tooltip
						contentStyle={{ backgroundColor: "#18181b", borderColor: "#27272a", color: "#fff" }}
						itemStyle={{ color: "#fff" }}
						formatter={(value) => [`$${value.toLocaleString()}`, "Price"]}
						labelStyle={{ display: "none" }}
					/>

					<Area type="monotone" dataKey="price" stroke={color} fillOpacity={1} fill="url(#chartColor)" strokeWidth={2} />
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}

export default CoinChart;
