import { BarChart3, Globe, Activity } from "lucide-react";

function CryptoGlobalStats() {
	/* just ui now */
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
			<StatCard icon={<Globe size={20} className="text-blue-400" />} label="Market Cap" value="$2.42T" change="+1.2%" isPositive={true} />
			<StatCard icon={<Activity size={20} className="text-orange-400" />} label="24h Volume" value="$84.2B" change="-5.4%" isPositive={false} />
			<StatCard icon={<BarChart3 size={20} className="text-purple-400" />} label="BTC Dominance" value="52.4%" subValue="ETH: 17.1%" />
			<StatCard icon={<Globe size={20} className="text-green-400" />} label="Active Coins" value="12,402" subValue="Exchanges: 402" />
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
			<div className="flex items-end gap-2">
				<span className="text-xl font-bold text-white">{value}</span>
				{change && <span className={`text-xs font-medium mb-1 ${isPositive ? "text-green-500" : "text-red-500"}`}>{change}</span>}
				{subValue && <span className="text-xs text-gray-500 mb-1">{subValue}</span>}
			</div>
		</div>
	);
}
export default CryptoGlobalStats;
