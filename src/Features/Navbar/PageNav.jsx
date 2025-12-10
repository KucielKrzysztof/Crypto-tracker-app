function PageNav({ href, children }) {
	return (
		<a href={href} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
			{children}
		</a>
	);
}

export default PageNav;
