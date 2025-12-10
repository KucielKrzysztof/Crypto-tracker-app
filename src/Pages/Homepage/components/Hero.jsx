import Button from "../../../ui/Button";
import SearchBar from "../../../ui/SearchBar";

function Hero() {
	return (
		<section id="hero" className="text-center mt-10 flex flex-col items-center">
			<h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
				Track the market <br className="hidden md:block" />
				<span className="text-transparent bg-clip-text bg-brand-gradient animate-pulse">Crypto Tracker</span>
			</h1>

			<p className="text-gray-400 text-lg max-w-2xl mx-auto mb-2">A professional tool for real-time price analysis. Fast, clear and modern.</p>

			<SearchBar />

			<div className="mt-6 flex justify-center gap-4">
				<Button variant="primary">Get Started</Button>

				<Button variant="secondary">Learn More</Button>
			</div>
		</section>
	);
}

export default Hero;
