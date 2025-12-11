function SocialIcon({ href, icon }) {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
			{icon}
		</a>
	);
}

export default SocialIcon;
