import { ExternalLink, Clock } from "lucide-react";

function NewsContent({ title, description, updated_at }) {
	return (
		<div className="p-5 flex flex-col flex-1">
			<h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">{title || "No title provided"}</h3>

			<p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-1">{description || "No description provided"}</p>

			<div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-white/5">
				<div className="flex items-center gap-1">
					<Clock size={12} />
					<span>{updated_at ? new Date(updated_at * 1000).toLocaleDateString() : "No date provided"}</span>
				</div>
				<div className="flex items-center gap-1 text-primary">
					Read more <ExternalLink size={12} />
				</div>
			</div>
		</div>
	);
}

export default NewsContent;
