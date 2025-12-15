/* FALLBACK if api dont respond */
export const MOCK_NEWS = [
	{
		title: "Bitcoin breaks resistance levels as market sentiment improves",
		description: "The cryptocurrency market is seeing a surge in volume as Bitcoin crosses key technical indicators...",
		url: "https://coingecko.com",
		thumb_2x: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=500&q=80",
		updated_at: Math.floor(Date.now() / 1000),
		news_site: "CryptoDaily",
	},
	{
		title: "Ethereum layer 2 solutions see record transaction volume",
		description: "Scaling solutions on Ethereum are handling more transactions than the mainnet, signalling mass adoption...",
		url: "https://coingecko.com",
		thumb_2x: "https://images.unsplash.com/photo-1622790698141-94e30457ef12?auto=format&fit=crop&w=500&q=80",
		updated_at: Math.floor(Date.now() / 1000) - 3600,
		news_site: "BlockchainNews",
	},
	{
		title: "DeFi TVL reaches new monthly high despite market volatility",
		description: "Decentralized Finance protocols are attracting capital as investors seek yields in stablecoins...",
		url: "https://coingecko.com",
		thumb_2x: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=500&q=80",
		updated_at: Math.floor(Date.now() / 1000) - 7200,
		news_site: "DeFiPulse",
	},
];
