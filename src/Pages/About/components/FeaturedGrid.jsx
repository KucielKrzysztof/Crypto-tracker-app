import { Globe, Shield, Zap } from "lucide-react";
import FeatureCard from "./FeaturedCard";

function FeaturedGrid() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
			<FeatureCard
				icon={<Zap size={32} className="text-primary" />}
				title="Real-Time Data"
				description="Lightning-fast price updates powered by the CoinGecko API. Never miss a market movement."
			/>
			<FeatureCard
				icon={<Shield size={32} className="text-accent" />}
				title="Privacy First"
				description="We don't track your data. Your watchlist is stored locally on your device."
			/>
			<FeatureCard
				icon={<Globe size={32} className="text-secondary" />}
				title="Global Market"
				description="Access data for cryptocurrencies across all major global exchanges."
			/>
		</div>
	);
}

export default FeaturedGrid;
