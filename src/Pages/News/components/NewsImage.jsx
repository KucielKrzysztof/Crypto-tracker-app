function NewsImage({ src, title, news_site }) {
	return (
		<div className="h-48 overflow-hidden relative">
			<img src={src} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
			<div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white border border-white/10">
				{news_site || "Source"}
			</div>
		</div>
	);
}

export default NewsImage;
