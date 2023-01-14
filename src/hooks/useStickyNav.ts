import { useEffect, useState } from 'react';

export const useStickyNav = () => {
	const [isSticky, setSticky] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 20) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return { isSticky };
};