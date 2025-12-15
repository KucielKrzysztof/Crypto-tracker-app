import { useNews } from "./hooks/useNews";
import Spinner from "../../ui/Spinner";
import NewsCard from "./components/NewsCard";

function News() {
	const { data: newsList, isPending, error } = useNews();

	if (isPending)
		return (
			<div className="flex justify-center py-20">
				<Spinner size={48} />
			</div>
		);
	if (error) return <div className="text-center text-red-500 py-20">Error loading news</div>;

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div className="mb-8">
				<h1 className="text-3xl font-bold text-white mb-2">Crypto News</h1>
				<p className="text-gray-400">Latest updates from the blockchain world</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{newsList?.map((item, index) => (
					// Czasem API nie daje ID, więc używamy index jako fallback (bezpieczniej url)
					<NewsCard key={item.url || index} news={item} />
				))}
			</div>

			{newsList?.length === 0 && <div className="text-center text-gray-500 py-20">No news available at the moment.</div>}
		</div>
	);
}

export default News;
