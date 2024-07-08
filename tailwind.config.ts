import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			'sans': ['"Urbanist-Italic"', 'ui-sans-serif', 'system-ui'],
			'serif': ['"Urbanist-LightItalic"', 'ui-serif'],
			'mono': ['ui-monospace', 'SFMono-Regular'],
			'display': ['Oswald'],
			'body': ['"Urbanist Sans"'],
		},
		extend: {}
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
