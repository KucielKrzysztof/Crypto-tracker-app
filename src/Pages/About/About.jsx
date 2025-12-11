import AboutHero from "./components/AboutHero";
import FeaturedGrid from "./components/FeaturedGrid";
import TechStack from "./components/TechStack";

function About() {
	return (
		<section id="about" className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20 ">
			<AboutHero />
			<FeaturedGrid />
			<TechStack />
		</section>
	);
}

export default About;
