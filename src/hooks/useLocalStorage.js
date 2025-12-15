import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
	// GET ITEM
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.error("Error loading localstorage key:", key, error);
			return initialValue;
		}
	});

	// SYNC AFTER EVERY CHANGE
	useEffect(() => {
		try {
			window.localStorage.setItem(key, JSON.stringify(storedValue));
		} catch (error) {
			console.error("Error setting localStorage key:", key, error);
		}
	}, [key, storedValue]);

	return [storedValue, setStoredValue];
};
