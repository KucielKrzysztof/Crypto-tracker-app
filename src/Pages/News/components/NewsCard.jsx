import NewsImage from "./NewsImage";
import NewsContent from "./NewsContent";

function NewsCard({ news }) {
	const imageUrl = news.thumb_2x || "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=500&q=60";

	return (
		<a
			href={news.url}
			target="_blank"
			rel="noopener noreferrer"
			className="group bg-surface border border-white/5 rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1 flex flex-col h-full"
		>
			<NewsImage src={imageUrl} title={news?.title} news_site={news?.news_site} />

			<NewsContent title={news?.title} description={news?.description} updated_at={news?.updated_at} />
		</a>
	);
}

export default NewsCard;
