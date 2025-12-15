import { AlertTriangle, X } from "lucide-react";

function ApiAlert({ setIsRateLimited }) {
	return (
		<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-lg animate-in slide-in-from-bottom-5 duration-300">
			<div className="bg-red-500/90 backdrop-blur-md text-white px-6 py-4 rounded-xl shadow-2xl border border-red-400 flex items-start gap-4">
				<div className="bg-white/20 p-2 rounded-full shrink-0">
					<AlertTriangle size={24} className="text-white" />
				</div>

				<div className="flex-1">
					<h3 className="font-bold text-lg">API Rate Limit Exceeded</h3>
					<p className="text-sm text-white/90 leading-relaxed mt-1">
						You are making too many requests. CoinGecko's public API is temporarily blocking access.
						<br />
						<span className="font-semibold underline mt-1 block">Please wait 1 minute before trying again.</span>
					</p>
				</div>

				<button onClick={() => setIsRateLimited(false)} className="text-white/70 hover:text-white hover:bg-white/10 p-1 rounded transition-colors">
					<X size={20} />
				</button>
			</div>
		</div>
	);
}

export default ApiAlert;
