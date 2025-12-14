import { useGlobalData } from "../../../Features/Market/hooks/useGlobalData";
import CryptoGlobalSkeleton from "./CryptoGlobalSkeleton";
import { prepareStatsData } from "../../../helpers/prepareStatsData";

function CryptoGlobalStats() {
	const { data, isPending, error } = useGlobalData();

	/* if isPending load "Skeleton" */
	if (isPending) {
		return <CryptoGlobalSkeleton />;
	}

	/* if error hide component */
	if (error || !data) return null;

	const stats = prepareStatsData(data);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
			{stats.map((stat, index) => (
				<StatCard
					key={index}
					icon={stat.icon}
					label={stat.label}
					value={stat.value}
					change={stat.change}
					isPositive={stat.isPositive}
					subValue={stat.subValue}
				/>
			))}
		</div>
	);
}
function StatCard({ icon, label, value, change, isPositive, subValue }) {
	return (
		<div className="bg-surface border border-white/5 p-4 rounded-xl hover:border-white/10 transition-colors">
			<div className="flex items-center gap-3 mb-2">
				<div className="p-2 bg-white/5 rounded-lg">{icon}</div>
				<span className="text-gray-400 text-sm font-medium">{label}</span>
			</div>
			<div>
				<div className="flex items-end gap-2">
					<span className="text-xl font-bold text-white">{value}</span>
				</div>
				{change && <p className={`text-xs font-medium mb-1 ${isPositive ? "text-up" : "text-down"}`}>{change}</p>}
				{subValue && <p className="text-xs text-gray-500 mb-1">{subValue}</p>}
			</div>
		</div>
	);
}
export default CryptoGlobalStats;
