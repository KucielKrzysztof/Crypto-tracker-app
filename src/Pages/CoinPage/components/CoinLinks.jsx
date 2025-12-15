import { Globe, Box, ExternalLink } from "lucide-react";

// eslint-disable-next-line no-unused-vars
function LinkItem({ url, label, Icon, iconTheme }) {
	if (!url) return null;
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
		>
			<div className="flex items-center gap-3">
				<div className={`p-2 rounded-lg ${iconTheme}`}>
					<Icon size={20} />
				</div>
				<span className="font-medium text-gray-200 group-hover:text-white">{label}</span>
			</div>
			<ExternalLink size={16} className="text-gray-500 group-hover:text-primary transition-colors" />
		</a>
	);
}

function CoinLinks({ coin }) {
	if (!coin?.links) return null;

	const website = coin.links.homepage?.find((link) => link.length > 0);
	const explorer = coin.links.blockchain_site?.find((link) => link.length > 0);

	if (!website && !explorer) return null;

	return (
		<div className="bg-surface border border-white/5 rounded-xl p-6 mt-6">
			<h3 className="text-xl font-bold mb-4">Official Links</h3>

			<div className="space-y-3">
				<LinkItem url={website} label="Website" Icon={Globe} iconTheme="bg-blue-500/20 text-blue-400" />
				<LinkItem url={explorer} label="Explorer" Icon={Box} iconTheme="bg-purple-500/20 text-purple-400" />
			</div>
		</div>
	);
}

export default CoinLinks;
