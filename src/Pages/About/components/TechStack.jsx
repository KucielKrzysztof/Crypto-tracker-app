import { Code, Database, Globe, Layout, Zap, Router, Share2 } from "lucide-react";
import TechBadge from "./TechBadge";

function TechStack() {
	return (
		<div className="bg-surface border border-white/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
			<div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

			<div className="relative z-10 text-center">
				<h2 className="text-2xl font-bold mb-8">Built with Modern Technologies</h2>

				<div className="flex flex-wrap justify-center gap-4 md:gap-8 ">
					<TechBadge icon={<Code size={18} />} name="React 19" />
					<TechBadge icon={<Layout size={18} />} name="Tailwind CSS v4" />
					<TechBadge icon={<Zap size={18} />} name="Vite" />
					<TechBadge icon={<Database size={18} />} name="TanStack Query" />
					<TechBadge icon={<Router size={18} />} name="React Router" />
					<TechBadge icon={<Share2 size={18} />} name="React Context API" />
					<TechBadge icon={<Globe size={18} />} name="CoinGecko API" />
				</div>
			</div>
		</div>
	);
}

export default TechStack;
