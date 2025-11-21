import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

function createThemeStore() {
	// Get initial theme from localStorage or system preference
	const getInitialTheme = (): Theme => {
		if (!browser) return 'light';

		const stored = localStorage.getItem('theme') as Theme | null;
		if (stored) return stored;

		// Check system preference
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}

		return 'light';
	};

	const { subscribe, set } = writable<Theme>(getInitialTheme());

	return {
		subscribe,
		toggle: () => {
			if (!browser) return;

			const current = localStorage.getItem('theme') as Theme || 'light';
			const next: Theme = current === 'light' ? 'dark' : 'light';

			localStorage.setItem('theme', next);
			document.documentElement.setAttribute('data-theme', next);
			set(next);
		},
		init: () => {
			if (!browser) return;

			const theme = getInitialTheme();
			localStorage.setItem('theme', theme);
			document.documentElement.setAttribute('data-theme', theme);
			set(theme);
		}
	};
}

export const theme = createThemeStore();
