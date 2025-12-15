import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Navbar from "../ui/Navbar/Navbar";

function PageNotFound() {
	const navigate = useNavigate();

	return (
		<>
			<Navbar />
			<section id="pageNotFound" className="min-h-screen font-sans text-white  mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
				<div className="text-center mt-10 max-w-7xl  mx-auto pt-24 flex flex-col items-center">
					<h1 className=" text-6xl sm:text-9xl mt-7 px-5 py-10 font-bold ">
						<span className="bg-brand-gradient text-transparent bg-clip-text animate-pulse">Oops!</span>
					</h1>
					<div className="font-semibold text-xl">404 - page not found</div>
					<div className="text-gray-300 mt-2">We're sorry, the page you're trying to access doesn't exist!</div>
					<Button onClick={() => navigate("/")} variant="primary" className="uppercase w-36 mt-12">
						Go Home
					</Button>
				</div>
			</section>
		</>
	);
}

export default PageNotFound;
