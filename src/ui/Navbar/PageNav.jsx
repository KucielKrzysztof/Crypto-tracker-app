import { NavLink } from "react-router";

function PageNav({ to, children }) {
	return (
		<NavLink to={to} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md lg:text-base font-medium">
			{children}
		</NavLink>
	);
}

export default PageNav;
