import { LineChart, Line, YAxis } from "recharts";

function Sparkline({ data, change }) {
	if (!data || data.length === 0) return null;
	const isPositive = change >= 0;
	const color = isPositive ? "var(--color-up)" : "var(--color-down)";

	//map numbers to objects, Recharts needs that structure
	const chartData = data.map((val) => ({ val }));

	return (
		<div className="flex items-center justify-center" style={{ width: 100, height: 40 }}>
			<LineChart width={100} height={40} data={chartData}>
				<YAxis domain={["dataMin", "dataMax"]} hide />

				<Line type="monotone" dataKey="val" stroke={color} strokeWidth={2} dot={false} isAnimationActive={false} />
			</LineChart>
		</div>
	);
}

export default Sparkline;
