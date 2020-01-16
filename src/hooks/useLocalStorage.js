import { useState } from 'react';
// set up state property
// capture the values
// if no data in localStorage, use initial data
// if there is data in localStorage, use that
// update localStorage when needed
// Don't forget to parse data from localStorage, and stringify new data getting stored
export const useLocalStorage = (key, initialValue) => {
	if (typeof key !== 'string') {
		throw new Error('invalid');
	}

	const [storedValue, setStoredValue] = useState(() => {
		if (localStorage.getItem(key)) {
			return JSON.parse(window.localStorage.getItem(key));
		} else {
			window.localStorage.setItem(key, JSON.stringify(initialValue));
			return initialValue;
		}
	});

	//setter function
	//update storedValue state property
	//update localStorage value
	const setValue = value => {
		setStoredValue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	};

	return [storedValue, setValue];
};
