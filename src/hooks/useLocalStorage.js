import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
	// set up state property
	// capture the values
	// if no data in localStorage, use initial data
	// if there is data in localStorage, use that
	// update localStorage when needed
	// Don't forget to parse data from localStorage, and stringify new data getting stored
	const [storedValue, setStoredValue] = useState(() => {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : initialValue;
	});

	//setter function
	const setValue = value => {
		setStoredValue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	};

	return [storedValue];
};
