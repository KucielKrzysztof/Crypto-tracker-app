import { Github, Mail, Globe } from "lucide-react";
import SocialIcon from "./SocialIcon";

function Footer() {
	const date = new Date().getFullYear();

	return (
		<footer className="bg-surface border-t border-white/5 py-6 mt-auto">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-center items-center gap-4">
					<div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm">
						<span className="font-bold text-white tracking-tight flex items-center gap-1">
							Crypto
							<span className="text-transparent bg-clip-text bg-brand-gradient">Tracker</span>
						</span>

						<span className="hidden md:block text-gray-700">|</span>

						<span className="text-gray-500">
							&copy; {date} <span className="text-gray-300">Krzysztof Kuciel</span>
						</span>
					</div>
					<span className="hidden md:block text-gray-700">|</span>

					<div className="flex gap-4">
						<SocialIcon href="https://github.com/KucielKrzysztof" icon={<Github size={18} />} />
						<SocialIcon href="https://kucielkrzysztof.github.io/kucieldev-portfolio/" icon={<Globe size={18} />} />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
